const internal_local = require("./internal-local")

const user_common = require("./impl/user-common")

const xdb = require("@xtalk/db")

const base_fn = require("@xtalk/js/cell/base-fn")

const internal_state = require("./internal-state")

const driver_sqlite = require("./js/lib/driver-sqlite")

const base_event = require("./impl/base-event")

const view_all = require("@statstrade/api/view-all")

const base_system = require("./impl/base-system")

const base_internal = require("@xtalk/js/cell/base-internal")

const user_event = require("./impl/user-event")

const base_util = require("@xtalk/js/cell/base-util")

const event_log = require("@xtalk/lang/event-log")

const common_global = require("@statstrade/api/db-global")

const k = require("@xtalk/lang/base-lib")

const schema_full = require("@statstrade/api/db-schema-full")

const internal_remote = require("./internal-remote")

// statslink.full.worker-main/event-log-fn [26] 
function event_log_fn(input,event_fn){
  event_log.queue_entry(base_system.event_log(),input,function (){
    return Date.now();
  },k.obj_clone);
  return event_fn(input);
}

// statslink.full.worker-main/system-log-fn [36] 
function system_log_fn(input){
  let {op,route} = input;
  if(("route" == op) && ("stats/local-log" == route)){
    return input;
  }
  let t = Date.now();
  event_log.queue_entry(base_system.system_log(),input,function (){
    return t;
  },function (input){
    return k.obj_assign({"t":t},input);
  });
  return input;
}

// statslink.full.worker-main/init-core [53] 
function init_core(){
  common_global.init_schema(schema_full.get_schema(),schema_full.get_schema_lookup());
  view_all.init_views_base();
  view_all.init_views_manage();
  view_all.init_views_admin();
  internal_local.init_locals();
  internal_local.init_logs();
  internal_remote.init_remote_api();
  internal_remote.init_remote_tasks();
}

// statslink.full.worker-main/close-core [68] 
function close_core(user,event_fn){
  user_event.logout_sync(null,null,user);
  event_fn({
    "op":"stream",
    "status":"closed",
    "topic":base_event.EV_LOCAL,
    "body":true
  });
  return true;
}

// statslink.full.worker-main/raw-delete [83] 
function raw_delete(user,table_name,ids,event_fn){
  let {db} = user;
  let out = xdb.db_delete_sync(db,common_global.get_schema(),table_name,ids);
  event_fn({
    "op":"stream",
    "status":"ok",
    "topic":base_event.EV_DB_REMOVE,
    "body":{[table_name]:ids}
  });
  return out;
}

// statslink.full.worker-main/db-clear [99] 
function db_clear(user){
  let {db} = user;
  return xdb.db_clear(db);
}

// statslink.full.worker-main/connect-stream [108] 
function connect_stream(f,name,args,event_topic,event_fn,event_init,sync_fn){
  return new Promise(function (resolve,reject){
    let stream = f(...args,{
      "on_open":function (){
            event_fn({
              "op":"stream",
              "status":"connected",
              "topic":base_event.EV_LOCAL,
              "body":event_init
            });
            event_fn({
              "op":"stream",
              "status":"connected",
              "topic":event_topic,
              "body":event_init
            });
            resolve(true);
          }
    });
    let {log} = stream;
    internal_state.LOCAL_LOGS()[name] = (function (){
      return log;
    });
    event_log.add_listener(log,"default",function (id,data,t){
      event_fn(
        {"op":"stream","status":"ok","topic":event_topic,"body":data}
      );
      if(sync_fn){
        sync_fn(data);
      }
    });
  });
}

// statslink.full.worker-main/connect-ticker [136] 
function connect_ticker(user,event_fn){
  return connect_stream(
    user_common.connect_ticker,
    "ticker",
    [user],
    base_event.EV_TICKER,
    event_fn,
    {"stream":"ticker","method":"connect-ticker"},
    false
  );
}

// statslink.full.worker-main/connect-user-sync [150] 
function connect_user_sync(user,data,event_fn){
  if(user){
    if("P" == data["type"]){
      let tdata = {"db/sync":user_event.trade_sync_data(data)};
      user_event.call_sync_event(user,tdata);
      internal_remote.remote_db_call(event_fn,tdata);
    }
    else if("R" == data["type"]){
      // ---- HACK TO GET AROUND ORDER SYNCHRONIZATION
      let {order} = data;
      if(order){
        order["time_updated"] = (1 + order["time_updated"]);
      }
      // ----
      let tdata = {"db/sync":user_event.trade_sync_data(data)};
      user_event.call_sync_event(user,tdata);
      internal_remote.remote_db_call(event_fn,tdata);
    }
    else{
      user_event.call_sync_event(user,data);
      internal_remote.remote_db_call(event_fn,data);
    }
  }
  return true;
}

// statslink.full.worker-main/connect-user [176] 
function connect_user(user,event_fn){
  return connect_stream(user_common.connect_user,"user",[user,user_common.get_account_id(user)],base_event.EV_USER,event_fn,{"stream":"user","method":"connect-user"},function (data){
    connect_user_sync(user,data,event_fn);
  });
}

// statslink.full.worker-main/connect-delta [190] 
function connect_delta(user,book,event_fn){
  return connect_stream(
    user_common.connect_delta,
    "delta/" + book,
    [user,book],
    base_event.EV_DELTA,
    event_fn,
    {"stream":"delta","book":book,"method":"connect-delta"},
    false
  );
}

// statslink.full.worker-main/connect-priority [204] 
function connect_priority(user,book,event_fn){
  return connect_stream(
    user_common.connect_priority,
    "priority/" + book,
    [user,book],
    base_event.EV_PRIORITY,
    event_fn,
    {"stream":"priority","book":book,"method":"connect-priority"},
    false
  );
}

// statslink.full.worker-main/connect-harness [218] 
function connect_harness(user,account_ids,event_fn){
  return connect_stream(user_common.connect_harness,"harness",[user,account_ids],base_event.EV_HARNESS,event_fn,{"stream":"harness","method":"connect-harness"},function (data){
    connect_user_sync(user,data,event_fn);
  });
}

// statslink.full.worker-main/stats-remote [233] 
function stats_remote(user,url,args,event_fn,user_key){
  let thunk_fn = function (){
    let [ok,res] = internal_remote.remote_call(url,args,event_fn,user_key);
    if(ok){
      return res.then(function (res){
        return res;
      });
    }
    else{
      return new Promise(function (resolve,reject){
        try{
          resolve(          (function (){
                      throw res;
                    })());
        }
        catch(e){
          reject(e);
        }
      });
    }
  };
  let {delay} = user["config"];
  if((null != delay) && (0 < delay)){
    return new Promise(function (resolve,reject){
      setTimeout(function (){
        try{
          resolve(          (function (){
                      return thunk_fn();
                    })());
        }
        catch(e){
          reject(e);
        }
      },delay);
    });
  }
  else{
    return thunk_fn();
  }
}

// statslink.full.worker-main/init-routes [254] 
function init_routes(event_fn,user_key,worker){
  event_fn = (event_fn || globalThis["postMessage"]);
  let log_fn = function (input){
    return event_log_fn(input,event_fn);
  };
  if(null == event_fn){
    throw "Event Function cannot be Nil";
  }
  return base_fn.routes_init({
    "stats/connect-harness":{
        "doc":"Connects to the harness stream",
        "async":true,
        "handler":function (account_ids){
            return connect_harness(internal_state.get_user(user_key),account_ids,log_fn);
          }
      },
    "stats/raw-delete":{
        "doc":"Connects to the ticker stream",
        "handler":function (table_name,ids){
            return raw_delete(internal_state.get_user(user_key),table_name,ids,event_fn);
          }
      },
    "stats/connect-delta":{
        "doc":"Connects to the delta stream",
        "async":true,
        "handler":function (book){
            return connect_delta(internal_state.get_user(user_key),book,log_fn);
          }
      },
    "stats/connect-ticker":{
        "doc":"Connects to the ticker stream",
        "async":true,
        "handler":function (){
            return connect_ticker(internal_state.get_user(user_key),log_fn);
          }
      },
    "stats/remote":{
        "doc":"Performs a remote call",
        "async":true,
        "handler":function (url,args){
            return stats_remote(internal_state.get_user(user_key),url,args,event_fn,user_key);
          }
      },
    "stats/local-log":{
        "doc":"Performs a local log call",
        "handler":function (log_name,method,args){
            let [ok,res] = internal_local.local_log(log_name,method,args);
            if(ok){
              return res;
            }
            else{
              throw res;
            }
          }
      },
    "stats/db-clear":{
        "doc":"Connects to the ticker stream",
        "handler":function (){
            return db_clear(internal_state.get_user(user_key));
          }
      },
    "stats/local":{
        "doc":"Performs a local call",
        "handler":function (url,args){
            let [ok,res] = internal_local.local_call(url,args,log_fn,user_key);
            if(ok){
              return res;
            }
            else{
              throw res;
            }
          }
      },
    "stats/connect-user":{
        "doc":"Connects to the user stream",
        "async":true,
        "handler":function (){
            return connect_user(internal_state.get_user(user_key),log_fn);
          }
      },
    "stats/connect-priority":{
        "doc":"Connects to the priority stream",
        "async":true,
        "handler":function (book){
            return connect_priority(internal_state.get_user(user_key),book,log_fn);
          }
      },
    "stats/close":{
        "doc":"Closes the worker",
        "handler":function (){
            return close_core(internal_state.get_user(user_key),event_fn);
          }
      }
  },worker);
}

// statslink.full.worker-main/init-main-user [341] 
function init_main_user(m,completed_fn,user_key){
  let {sql_js,sql_wasm} = m;
  completed_fn = (completed_fn || k.identity);
  let set_fn = function (SQL){
    globalThis["SQL"] = SQL;
    internal_local.init_user(function (){
      return {"instance":driver_sqlite.make_instance(SQL)};
    },user_key);
    if(globalThis["importScripts"]){
      self.postMessage({
        "op":"stream",
        "status":"ok",
        "topic":"@/::INIT",
        "body":{
                "done":true,
                "user":user_common.get_summary(internal_state.get_user(user_key))
              }
      });
    }
    return completed_fn(true);
  };
  if(globalThis["SQL"]){
    return set_fn(SQL);
  }
  else if(globalThis["importScripts"]){
    try{
      importScripts(sql_js || "sql-wasm.js");
      return initSqlJs({
        "locateFile":function (){
                return sql_wasm || "sql-wasm.wasm";
              }
      }).then(set_fn);
    }
    catch(err){
      
    }
  }
  else{
    throw "Cannot init main";
  }
}

// statslink.full.worker-main/init-main [377] 
function init_main(m,completed_fn,event_fn,user_key){
  let {auth_host,auth_port,auth_scheme,port} = m;
  base_system.set_remote(m);
  init_core();
  init_routes(event_fn,user_key);
  if(globalThis["importScripts"]){
    base_internal.worker_init(self,system_log_fn);
  }
  return init_main_user(m,completed_fn,user_key);
}

// statslink.full.worker-main/init-slim-user [396] 
function init_slim_user(m,completed_fn,event_fn,user_key){
  internal_local.init_user(function (){
    return {"::":"db.cache"};
  },user_key);
  if(event_fn){
    event_fn({
      "op":"stream",
      "status":"ok",
      "topic":"@/::INIT",
      "body":{
            "done":true,
            "user":user_common.get_summary(internal_state.get_user(user_key))
          }
    });
  }
  if(completed_fn){
    completed_fn(true);
  }
}

// statslink.full.worker-main/init-main-slim [413] 
function init_main_slim(m,completed_fn,event_fn,user_key){
  let {port} = m;
  base_system.set_remote({"port":port});
  init_core();
  init_routes(event_fn,user_key);
  if(globalThis["importScripts"]){
    base_internal.worker_init(self,system_log_fn);
  }
  return init_slim_user(m,completed_fn,event_fn,user_key);
}

var MODULE = {
  "event_log_fn":event_log_fn,
  "system_log_fn":system_log_fn,
  "init_core":init_core,
  "close_core":close_core,
  "raw_delete":raw_delete,
  "db_clear":db_clear,
  "connect_stream":connect_stream,
  "connect_ticker":connect_ticker,
  "connect_user_sync":connect_user_sync,
  "connect_user":connect_user,
  "connect_delta":connect_delta,
  "connect_priority":connect_priority,
  "connect_harness":connect_harness,
  "stats_remote":stats_remote,
  "init_routes":init_routes,
  "init_main_user":init_main_user,
  "init_main":init_main,
  "init_slim_user":init_slim_user,
  "init_main_slim":init_main_slim
};

module.exports = MODULE