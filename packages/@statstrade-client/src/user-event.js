const k = require("@xtalk/lang")

const event_log_latest = require("@xtalk/lang/event-log-latest")

const xdb = require("@xtalk/db")

const user_common = require("./user-common")

// statslink.impl.user-event/cb-wrap [12] 
function cb_wrap(f,args,cb){
  cb = (cb || {});
  let {success} = cb;
  let success_fn = function (input){
    return f(success,input,...args);
  };
  return k.obj_assign(cb,{"success":success_fn});
}

// statslink.impl.user-event/filter-sync-latest [21] 
function filter_sync_latest(log_latest,db_sync){
  let latest_key = "time_updated";
  let out = {};
  for(let [table,entries] of Object.entries(db_sync)){
    let arr = [];
    if(!Array.isArray(entries)){
      console.log(
        " statslink.impl.user-event/filter-sync-latest",
        28,
        "\n\n",
        "NOT VALID:",
        [table,entries]
      );
      break;
    }
    for(let entry of entries){
      if(entry){
        let {id} = entry;
        let latest = entry[latest_key];
        if((null == latest) || event_log_latest.queue_latest(log_latest,table + "." + id,latest)){
          arr.push(entry);
        }
      }
    };
    if(k.not_emptyp(arr)){
      out[table] = arr;
    }
  };
  return out;
}

// statslink.impl.user-event/call-sync-event [48] 
function call_sync_event(user,event){
  let {db,log_latest} = user;
  if(db){
    let db_remove = event["db/remove"];
    if(null != db_remove){
      xdb.sync_event(db,["remove",db_remove]);
    }
    let db_sync = event["db/sync"];
    if(null != db_sync){
      xdb.sync_event(db,["add",filter_sync_latest(log_latest,db_sync)]);
    }
  }
}

// statslink.impl.user-event/call-sync [64] 
function call_sync(success_next,input,user){
  let {data,status} = input;
  if(status != "ok"){
    throw input;
  }
  if(data){
    call_sync_event(user,data);
  }
  if(success_next){
    let output = success_next(data);
    return output;
  }
  return data;
}

// statslink.impl.user-event/call-sync-wrap [78] 
function call_sync_wrap(user,cb){
  return cb_wrap(call_sync,[user],cb);
}

// statslink.impl.user-event/view-sync [88] 
function view_sync(success_next,data,user,table){
  let {db} = user;
  if(db && k.arrp(data) && (0 < (data).length)){
    xdb.sync_event(db,["add",{[table]:data}]);
  }
  if(success_next){
    return success_next(data);
  }
  return data;
}

// statslink.impl.user-event/view-sync-wrap [103] 
function view_sync_wrap(user,table,cb){
  return cb_wrap(view_sync,[user,table],cb);
}

// statslink.impl.user-event/view-bulk-sync [114] 
function view_bulk_sync(success_next,bulk,user){
  let {db} = user;
  if(db){
    let data = {};
    for(let arr of bulk){
      let [id,table_name,result] = arr;
      let sarr = data[table_name];
      if(null == sarr){
        data[table_name] = [];
        sarr = data[table_name];
      }
      k.arr_append(sarr,result);
    };
    xdb.sync_event(db,["add",data]);
  }
  if(success_next){
    return success_next(bulk);
  }
  return bulk;
}

// statslink.impl.user-event/view-bulk-sync-wrap [135] 
function view_bulk_sync_wrap(user,cb){
  return cb_wrap(view_bulk_sync,[user],cb);
}

// statslink.impl.user-event/token-sync [146] 
function token_sync(success_next,data,user){
  let {session} = data;
  let {id} = session;
  user["token"] = id;
  if(success_next){
    return success_next(data);
  }
  return data;
}

// statslink.impl.user-event/token-sync-wrap [157] 
function token_sync_wrap(user,cb){
  return cb_wrap(token_sync,[user],cb);
}

// statslink.impl.user-event/logout-sync [167] 
function logout_sync(success_next,data,user){
  delete user["token"];
  user_common.disconnect_ticker(user);
  user_common.disconnect_user(user);
  for(let book of Object.keys(user["streams"]["delta"])){
    user_common.disconnect_delta(user,book);
  };
  user_common.disconnect_harness(user);
  let {new_db_fn,ref_fn} = user;
  if(new_db_fn){
    user["db"] = ref_fn(new_db_fn());
  }
  if(success_next){
    return success_next(data);
  }
  return data;
}

// statslink.impl.user-event/logout-sync-wrap [184] 
function logout_sync_wrap(user,cb){
  return cb_wrap(logout_sync,[user],cb);
}

// statslink.impl.user-event/trade-sync-data-contract [194] 
function trade_sync_data_contract(data){
  let trade_sync = {};
  for(let e of [
    ["asset","Asset"],
    ["asset_tx","TxAsset"],
    ["reconcile","TxContractOrderHold"],
    ["order","ContractOrder"],
    ["tx","TxContractOrder"],
    ["contract","Contract"],
    ["contract_tx","TxContract"]
  ]){
    let v = data[e[0]];
    if(null != v){
      trade_sync[e[1]] = [v];
    }
  };
  return trade_sync;
}

// statslink.impl.user-event/trade-sync-data-swap [211] 
function trade_sync_data_swap(data){
  let trade_sync = {};
  for(let e of [
    ["primary","Asset"],
    ["primary_tx","TxAsset"],
    ["reconcile","TxSwapOrderHold"],
    ["order","SwapOrder"],
    ["tx","TxSwapOrder"],
    ["secondary","Asset"],
    ["secondary_tx","TxAsset"]
  ]){
    let v = data[e[0]];
    if(null != v){
      if(trade_sync[e[1]] != null){
        trade_sync[e[1]].push(v);
      }
      else{
        trade_sync[e[1]] = [v];
      }
    }
  };
  return trade_sync;
}

// statslink.impl.user-event/trade-sync-data [232] 
function trade_sync_data(data){
  if(data["primary"] || data["secondary"] || k.get_in(data,["tx","primary_send_old"]) || k.get_in(data,["order","primary_ref_id"])){
    return trade_sync_data_swap(data);
  }
  else{
    return trade_sync_data_contract(data);
  }
}

// statslink.impl.user-event/trade-sync [245] 
function trade_sync(success_next,data,user){
  let {db,log_latest} = user;
  let {input,output} = data;
  let trade_all = k.obj_assign(input || {},output);
  if(db){
    let trade_sync = trade_sync_data(trade_all);
    xdb.sync_event(db,["add",filter_sync_latest(log_latest,trade_sync)]);
  }
  if(success_next){
    return success_next(data);
  }
  return data;
}

// statslink.impl.user-event/trade-sync-wrap [269] 
function trade_sync_wrap(user,cb){
  return cb_wrap(trade_sync,[user],cb);
}

var MODULE = {
  "cb_wrap":cb_wrap,
  "filter_sync_latest":filter_sync_latest,
  "call_sync_event":call_sync_event,
  "call_sync":call_sync,
  "call_sync_wrap":call_sync_wrap,
  "view_sync":view_sync,
  "view_sync_wrap":view_sync_wrap,
  "view_bulk_sync":view_bulk_sync,
  "view_bulk_sync_wrap":view_bulk_sync_wrap,
  "token_sync":token_sync,
  "token_sync_wrap":token_sync_wrap,
  "logout_sync":logout_sync,
  "logout_sync_wrap":logout_sync_wrap,
  "trade_sync_data_contract":trade_sync_data_contract,
  "trade_sync_data_swap":trade_sync_data_swap,
  "trade_sync_data":trade_sync_data,
  "trade_sync":trade_sync,
  "trade_sync_wrap":trade_sync_wrap
};

module.exports = MODULE