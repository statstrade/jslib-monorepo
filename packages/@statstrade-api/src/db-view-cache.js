const base_scope = require("@xtalk/db/base-scope")

const xdb = require("@xtalk/db")

const cache_view = require("@xtalk/db/cache-view")

const check = require("@xtalk/db/base-check")

const common_global = require("./db-global")

const common_view = require("./db-view")

const k = require("@xtalk/lang")

const cache_pull = require("@xtalk/db/cache-pull")

const base_view = require("@xtalk/db/base-view")

// statsapi.list.db-view-cache/view-query-prep [19] 
function view_query_prep(table,qm,qe){
  let {return_args,return_bulk,return_id,return_method,return_omit,select_args,select_control,select_method} = qm;
  let {return_entry,select_entry} = qe;
  select_args = (select_args || []);
  return_args = (return_args || []);
  select_entry = common_view.view_local_transform(select_entry);
  return_entry = common_view.view_local_transform(return_entry);
  if(select_method && !select_entry){
    return [
      false,
      {
          "status":"error",
          "tag":"net/select-method-not-found",
          "data":{"input":select_method}
        }
    ];
  }
  if(return_method && !return_entry){
    return [
      false,
      {
          "status":"error",
          "tag":"net/return-method-not-found",
          "data":{"input":return_method}
        }
    ];
  }
  if((null != select_entry) && (null != return_entry)){
    let [s_ok,s_err] = common_view.view_query_check(select_entry,select_args);
    if(!s_ok){
      return [s_ok,s_err];
    }
    let [r_ok,r_err] = common_view.view_query_check(return_entry,return_args,true);
    if(!r_ok){
      return [r_ok,r_err];
    }
    return [
      true,
      cache_view.query_combined(
          common_global.get_schema(),
          select_entry,
          select_args,
          return_entry,
          return_args,
          return_omit
        )
    ];
  }
  else if(null != select_entry){
    let [s_ok,s_err] = common_view.view_query_check(select_entry,select_args);
    if(!s_ok){
      return [s_ok,s_err];
    }
    return [
      true,
      cache_view.query_select(common_global.get_schema(),select_entry,select_args)
    ];
  }
  else if(null != return_id){
    let r_args = [return_id,...return_args];
    let [r_ok,r_err] = common_view.view_query_check(return_entry,r_args);
    if(!r_ok){
      return [r_ok,r_err];
    }
    return [
      true,
      cache_view.query_return(common_global.get_schema(),return_entry,return_id,return_args)
    ];
  }
  else if(null != return_bulk){
    let [r_ok,r_err] = common_view.view_query_check(return_entry,return_args,true);
    if(!r_ok){
      return [r_ok,r_err];
    }
    return [
      true,
      cache_view.query_return_bulk(
          common_global.get_schema(),
          return_entry,
          return_bulk,
          return_args
        )
    ];
  }
  else{
    return [true,null];
  }
}

// statsapi.list.db-view-cache/view-query [91] 
function view_query(db,table,qm,qe){
  let [ok,result] = view_query_prep(table,qm,qe);
  if(!ok){
    return [ok,result];
  }
  if(!result){
    return [ok,null];
  }
  return [ok,xdb.db_pull_sync(db,common_global.get_schema(),result)];
}

var MODULE = {"view_query_prep":view_query_prep,"view_query":view_query};

module.exports = MODULE