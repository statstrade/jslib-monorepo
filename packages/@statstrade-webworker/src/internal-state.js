const rt = require("@xtalk/lang/base-runtime")

const k = require("@xtalk/lang/base-lib")

const base_event = require("./impl/base-event")

// statslink.full.internal-state/USER [15] 
function USER(){
  return rt.xt_item_get("~","USER",function (){
    return null;
  });
}

// statslink.full.internal-state/USER-reset [15] 
function USER_reset(val){
  return rt.xt_var_set("~/USER",val);
}

// statslink.full.internal-state/USER-ANNEX [21] 
function USER_ANNEX(){
  return rt.xt_item_get("~","USER-ANNEX",function (){
    return {};
  });
}

// statslink.full.internal-state/USER-ANNEX-reset [21] 
function USER_ANNEX_reset(val){
  return rt.xt_var_set("~/USER-ANNEX",val);
}

// statslink.full.internal-state/REMOTE_API [30] 
function REMOTE_API(){
  return rt.xt_item_get("~","REMOTE_API",function (){
    return {};
  });
}

// statslink.full.internal-state/REMOTE_API-reset [30] 
function REMOTE_API_reset(val){
  return rt.xt_var_set("~/REMOTE_API",val);
}

// statslink.full.internal-state/REMOTE_TASKS [36] 
function REMOTE_TASKS(){
  return rt.xt_item_get("~","REMOTE_TASKS",function (){
    return {};
  });
}

// statslink.full.internal-state/REMOTE_TASKS-reset [36] 
function REMOTE_TASKS_reset(val){
  return rt.xt_var_set("~/REMOTE_TASKS",val);
}

// statslink.full.internal-state/LOCAL_TASKS [42] 
function LOCAL_TASKS(){
  return rt.xt_item_get("~","LOCAL_TASKS",function (){
    return {};
  });
}

// statslink.full.internal-state/LOCAL_TASKS-reset [42] 
function LOCAL_TASKS_reset(val){
  return rt.xt_var_set("~/LOCAL_TASKS",val);
}

// statslink.full.internal-state/LOCAL_LOGS [48] 
function LOCAL_LOGS(){
  return rt.xt_item_get("~","LOCAL_LOGS",function (){
    return {};
  });
}

// statslink.full.internal-state/LOCAL_LOGS-reset [48] 
function LOCAL_LOGS_reset(val){
  return rt.xt_var_set("~/LOCAL_LOGS",val);
}

// statslink.full.internal-state/get-user [54] 
function get_user(key){
  if(null == key){
    return USER();
  }
  else{
    return USER_ANNEX()[key];
  }
}

// statslink.full.internal-state/set-user [65] 
function set_user(key,val){
  if(null == key){
    return USER_reset(val);
  }
  else{
    USER_ANNEX()[key] = val;
  }
}

// statslink.full.internal-state/sync-tables [82] 
function sync_tables(tables){
  let lu = k.arr_lookup(k.arrayify(tables));
  return function (m){
    return k.arr_some(k.obj_keys(m["body"]),function (k){
      return lu[k];
    });
  };
}

// statslink.full.internal-state/sync-table-ids [91] 
function sync_table_ids(tables){
  let lu = k.obj_map(tables,function (v){
    return k.arr_lookup(k.arrayify(v));
  });
  return function (m){
    let found = false;
    let {body} = m;
    for(let [table,id_lu] of Object.entries(lu)){
      let mids = body[table];
      if(mids){
        for(let id of mids){
          if(id_lu[id]){
            return true;
          }
        };
      }
    };
    return false;
  };
}

// statslink.full.internal-state/sync-current-id [109] 
function sync_current_id(table,view,path){
  return function (m){
    let sync = m["body"][table];
    let current = k.get_in(view,["output","current"]);
    if(!current){
      return true;
    }
    if(path){
      current = k.get_in(current,path);
    }
    return k.arr_some(sync,function (id){
      return id == current;
    });
  };
}

// statslink.full.internal-state/sync-view-table-id [124] 
function sync_view_table_id(table,path){
  return function (m,ctx){
    let sync = m["body"][table];
    if(!sync){
      return false;
    }
    if(null == ctx){
      return true;
    }
    let {view} = ctx;
    let current = k.get_in(view,["output","current"]);
    if(!current){
      return true;
    }
    if(path){
      current = k.get_in(current,path);
    }
    return k.arr_some(sync,function (id){
      return id == current;
    });
  };
}

// statslink.full.internal-state/db-sync [142] 
function db_sync(tables){
  return {
    [base_event.EV_DB_SYNC]:sync_tables(tables),
    [base_event.EV_DB_REMOVE]:sync_tables(tables)
  };
}

var MODULE = {
  "USER":USER,
  "USER_reset":USER_reset,
  "USER_ANNEX":USER_ANNEX,
  "USER_ANNEX_reset":USER_ANNEX_reset,
  "REMOTE_API":REMOTE_API,
  "REMOTE_API_reset":REMOTE_API_reset,
  "REMOTE_TASKS":REMOTE_TASKS,
  "REMOTE_TASKS_reset":REMOTE_TASKS_reset,
  "LOCAL_TASKS":LOCAL_TASKS,
  "LOCAL_TASKS_reset":LOCAL_TASKS_reset,
  "LOCAL_LOGS":LOCAL_LOGS,
  "LOCAL_LOGS_reset":LOCAL_LOGS_reset,
  "get_user":get_user,
  "set_user":set_user,
  "sync_tables":sync_tables,
  "sync_table_ids":sync_table_ids,
  "sync_current_id":sync_current_id,
  "sync_view_table_id":sync_view_table_id,
  "db_sync":db_sync
};

module.exports = MODULE