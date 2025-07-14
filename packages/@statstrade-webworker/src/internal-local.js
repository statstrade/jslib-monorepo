const common_view_cache = require("@statstrade/api/db-view-cache")

const user_common = require("./impl/user-common")

const base_sqlite = require("./impl/base-sqlite")

const common_view_sql = require("@statstrade/api/db-view-sql")

const cache_view = require("@xtalk/db/cache-view")

const internal_state = require("./internal-state")

const user_local = require("./impl/user-local")

const base_event = require("./impl/base-event")

const base_system = require("./impl/base-system")

const check = require("@xtalk/db/base-check")

const event_log = require("@xtalk/lang/event-log")

const common_global = require("@statstrade/api/db-global")

const common_view = require("@statstrade/api/db-view")

const k = require("@xtalk/lang/base-lib")

const schema_full = require("@statstrade/api/db-schema-full")

// statslink.full.internal-local/new-user [51] 
function new_user(sql_instance_fn){
  let user = user_common.new_user(k.identity);
  let new_db_fn = function (){
    return base_sqlite.db_init(base_sqlite.db_create(sql_instance_fn()));
  };
  return k.obj_assign(user,{"db":new_db_fn(),"new_db_fn":new_db_fn});
}

// statslink.full.internal-local/init-user [64] 
function init_user(sql_instance_fn,user_key){
  return internal_state.set_user(user_key,new_user(sql_instance_fn));
}

// statslink.full.internal-local/list-locals [75] 
function list_locals(){
  return k.obj_map(internal_state.LOCAL_TASKS(),function (e){
    return k.obj_omit(e,["handler"]);
  });
}

// statslink.full.internal-local/list-remotes [83] 
function list_remotes(){
  return internal_state.REMOTE_TASKS();
}

// statslink.full.internal-local/list-logs [90] 
function list_logs(){
  return k.obj_keys(internal_state.LOCAL_LOGS());
}

// statslink.full.internal-local/trace-log [97] 
function trace_log(){
  return k.trace_log();
}

// statslink.full.internal-local/trace-log-clear [103] 
function trace_log_clear(){
  return k.trace_log_clear();
}

// statslink.full.internal-local/view-query-input [114] 
function view_query_input(table,qm){
  let qe = common_view.view_query_entries(table,qm);
  let [ok,res] = common_view_sql.view_query_prep(table,qm,qe,null,"sqlite",null,true,{});
  return [ok,res];
}

// statslink.full.internal-local/view-query [128] 
function view_query(user,table,qm){
  let qe = common_view.view_query_entries(table,qm);
  let db = user_common.get_db(user);
  if(db["::"] == "db.cache"){
    let [ok,res] = common_view_cache.view_query(db,table,qm,qe);
    if(ok){
      return res;
    }
    else{
      throw res;
    }
  }
  else if(db["::"] == "db.sql"){
    let [ok,res] = common_view_sql.view_query(db["instance"],table,qm,qe,null,"sqlite",null,true,{});
    if(ok){
      let results = JSON.parse(res);
      let out = user_local.view_exec_coerce(results,{"table":table});
      return out;
    }
    else{
      throw res;
    }
  }
}

// statslink.full.internal-local/local-args-check [162] 
function local_args_check(entry,args){
  let {flags,input} = entry;
  if(!entry){
    return [false,{"status":"error","tag":"worker/call-not-found"}];
  }
  if(k.get_in(flags,["secured"])){
    input = k.arr_clone(entry.input);
    input.push({"symbol":"secured","type":"jsonb"});
  }
  let [l_ok,l_err] = check.check_args_length(args,input);
  if(!l_ok){
    return [
      false,
      k.obj_assign(l_err,{"tag":"worker/args-not-same-length"})
    ];
  }
  let [t_ok,t_err] = check.check_args_type(args,input);
  if(!t_ok){
    return [
      false,
      k.obj_assign(t_err,{"tag":"worker/arg-typecheck-failed"})
    ];
  }
  return [true];
}

// statslink.full.internal-local/local-call [186] 
function local_call(url,args,event_fn,user_key){
  let entry = (internal_state.LOCAL_TASKS())[url];
  let [c_ok,c_err] = local_args_check(entry,args);
  if(!c_ok){
    return [c_ok,c_err];
  }
  let {handler,input,notify,wrap} = entry;
  let rargs = entry["static"] ? [] : [internal_state.get_user(user_key)];
  k.arr_append(rargs,args);
  if(wrap){
    handler = wrap[0](handler,...wrap[1]);
  }
  let out = handler(...rargs);
  if(k.fnp(event_fn) && k.arrp(notify)){
    for(let topic of notify){
      event_fn({
        "op":"stream",
        "status":"ok",
        "topic":topic,
        "body":{"method":url,"args":args}
      });
    };
  }
  return [true,out];
}

// statslink.full.internal-local/local-log-remove-fn [209] 
function local_log_remove_fn(handler,name,sep){
  return function (user,sub_arg){
    let log_name = (null == sep) ? name : (name + sep + sub_arg);
    delete internal_state.LOCAL_LOGS()[log_name];
    handler(user,sub_arg);
  };
}

// statslink.full.internal-local/local-log [220] 
function local_log(log_name,method,args){
  let get_log = (internal_state.LOCAL_LOGS())[log_name];
  if(null == get_log){
    return [
      false,
      {
          "status":"error",
          "tag":"worker/log-getter-not-found",
          "data":{"input":log_name}
        }
    ];
  }
  let log = get_log();
  let entry = event_log.METHODS[method];
  if(null == entry){
    return [
      false,
      {
          "status":"error",
          "tag":"worker/log-method-not-found",
          "data":{"input":log_name}
        }
    ];
  }
  let [c_ok,c_err] = local_args_check(entry,args);
  if(!c_ok){
    return [c_ok,c_err];
  }
  let {handler} = entry;
  return [true,handler(log,...args)];
}

// statslink.full.internal-local/make-locals [306] 
function make_locals(){
  return {
    "get-remote":{
      "return":"jsonb",
      "input":[],
      "url":"get-remote",
      "handler":base_system.get_remote,
      "static":true
    },
    "set-remote":{
      "return":"jsonb",
      "input":[{"symbol":"m","type":"jsonb"}],
      "url":"set-remote",
      "handler":base_system.set_remote,
      "static":true,
      "notify":[base_event.EV_LOCAL]
    },
    "get-schema":{
      "return":"jsonb",
      "input":[],
      "url":"get-schema",
      "handler":common_global.get_schema,
      "static":true
    },
    "get-views":{
      "return":"jsonb",
      "input":[],
      "url":"get-views",
      "handler":common_global.get_views,
      "static":true
    },
    "view-overview":{
      "return":"jsonb",
      "input":[],
      "url":"view-overview",
      "handler":common_view.view_overview,
      "static":true
    },
    "view-tables":{
      "return":"jsonb",
      "input":[],
      "url":"view-tables",
      "handler":common_view.view_tables,
      "static":true
    },
    "view-methods":{
      "return":"jsonb",
      "input":[{"symbol":"table","type":"text"}],
      "url":"view-methods",
      "handler":common_view.view_methods,
      "static":true
    },
    "view-detail":{
      "return":"jsonb",
      "input":[
        {"symbol":"table","type":"text"},
        {"symbol":"type","type":"text"},
        {"symbol":"id","type":"text"}
      ],
      "url":"view-detail",
      "handler":common_view.view_detail,
      "static":true
    },
    "disconnect-ticker":{
      "return":"jsonb",
      "input":[],
      "url":"disconnect-ticker",
      "handler":user_common.disconnect_ticker,
      "wrap":[local_log_remove_fn,["ticker"]],
      "notify":[base_event.EV_LOCAL,base_event.EV_TICKER]
    },
    "disconnect-user":{
      "return":"jsonb",
      "input":[],
      "url":"disconnect-user",
      "handler":user_common.disconnect_user,
      "wrap":[local_log_remove_fn,["user"]],
      "notify":[base_event.EV_LOCAL,base_event.EV_USER]
    },
    "disconnect-harness":{
      "return":"jsonb",
      "input":[],
      "url":"disconnect-harness",
      "handler":user_common.disconnect_harness,
      "wrap":[local_log_remove_fn,["harness"]],
      "notify":[base_event.EV_LOCAL,base_event.EV_HARNESS]
    },
    "disconnect-delta":{
      "return":"jsonb",
      "input":[{"symbol":"book","type":"text"}],
      "url":"disconnect-delta",
      "handler":user_common.disconnect_delta,
      "wrap":[local_log_remove_fn,["delta","/"]],
      "notify":[base_event.EV_LOCAL,base_event.EV_DELTA]
    },
    "disconnect-priority":{
      "return":"jsonb",
      "input":[{"symbol":"book","type":"text"}],
      "url":"disconnect-priority",
      "handler":user_common.disconnect_priority,
      "wrap":[local_log_remove_fn,["priority","/"]],
      "notify":[base_event.EV_LOCAL,base_event.EV_PRIORITY]
    },
    "get-token":{
      "return":"jsonb",
      "input":[],
      "url":"get-token",
      "handler":user_common.get_token
    },
    "has-token":{
      "return":"jsonb",
      "input":[],
      "url":"has-token",
      "handler":user_common.has_token
    },
    "set-token":{
      "return":"jsonb",
      "input":[{"symbol":"token","type":"text"}],
      "url":"set-token",
      "handler":user_common.set_token,
      "notify":[base_event.EV_LOCAL]
    },
    "del-token":{
      "return":"jsonb",
      "input":[],
      "url":"del-token",
      "handler":user_common.del_token,
      "notify":[base_event.EV_LOCAL]
    },
    "get-account-id":{
      "return":"jsonb",
      "input":[],
      "url":"get-account-id",
      "handler":user_common.get_account_id
    },
    "get-summary":{
      "return":"jsonb",
      "input":[],
      "url":"get-summary",
      "handler":user_common.get_summary
    },
    "get-config":{
      "return":"jsonb",
      "input":[],
      "url":"get-config",
      "handler":user_common.get_config
    },
    "set-config":{
      "return":"jsonb",
      "input":[
        {"symbol":"key","type":"text"},
        {"symbol":"value","type":"any"}
      ],
      "url":"set-config",
      "handler":user_common.set_config,
      "notify":[base_event.EV_LOCAL]
    },
    "raw-exec":{
      "return":"jsonb",
      "input":[{"symbol":"raw_input","type":"text"}],
      "url":"raw-exec",
      "handler":user_local.raw_exec
    },
    "raw-pull":{
      "return":"jsonb",
      "input":[{"symbol":"query","type":"jsonb"}],
      "url":"raw-pull",
      "handler":user_local.raw_pull
    },
    "raw-pull-input":{
      "return":"jsonb",
      "input":[{"symbol":"query","type":"jsonb"}],
      "url":"raw-pull-input",
      "handler":user_local.raw_pull_input,
      "static":true
    },
    "raw-get":{
      "return":"jsonb",
      "input":[
        {"symbol":"query","type":"jsonb"},
        {"symbol":"path","type":"jsonb"},
        {"symbol":"ensure","type":"boolean"}
      ],
      "url":"raw-get",
      "handler":user_local.raw_get
    },
    "view-query-input":{
      "return":"jsonb",
      "input":[
        {"symbol":"table","type":"text"},
        {"symbol":"qm","type":"jsonb"}
      ],
      "url":"view-query-input",
      "handler":view_query_input,
      "static":true
    },
    "view-query":{
      "return":"jsonb",
      "input":[
        {"symbol":"table","type":"text"},
        {"symbol":"qm","type":"jsonb"}
      ],
      "url":"view-query",
      "handler":view_query
    },
    "list-locals":{
      "return":"jsonb",
      "input":[],
      "url":"list-locals",
      "handler":list_locals,
      "static":true
    },
    "list-remotes":{
      "return":"jsonb",
      "input":[],
      "url":"list-remotes",
      "handler":list_remotes,
      "static":true
    },
    "list-logs":{
      "return":"jsonb",
      "input":[],
      "url":"list-logs",
      "handler":list_logs,
      "static":true
    },
    "trace-log":{
      "return":"jsonb",
      "input":[],
      "url":"trace-log",
      "handler":trace_log,
      "static":true
    },
    "trace-log-clear":{
      "return":"jsonb",
      "input":[],
      "url":"trace-log-clear",
      "handler":trace_log_clear,
      "static":true
    }
  };
}

// statslink.full.internal-local/init-locals [316] 
function init_locals(m){
  return internal_state.LOCAL_TASKS_reset(m || make_locals());
}

// statslink.full.internal-local/init-logs [322] 
function init_logs(){
  return internal_state.LOCAL_LOGS_reset({
    "remote":base_system.remote_log,
    "system":base_system.system_log,
    "event":base_system.event_log
  });
}

var MODULE = {
  "new_user":new_user,
  "init_user":init_user,
  "list_locals":list_locals,
  "list_remotes":list_remotes,
  "list_logs":list_logs,
  "view_query_input":view_query_input,
  "view_query":view_query,
  "local_args_check":local_args_check,
  "local_call":local_call,
  "local_log_remove_fn":local_log_remove_fn,
  "local_log":local_log,
  "make_locals":make_locals,
  "init_locals":init_locals,
  "init_logs":init_logs
};

module.exports = MODULE