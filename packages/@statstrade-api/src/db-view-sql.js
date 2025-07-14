const base_scope = require("@xtalk/db/base-scope")

const sql_view = require("@xtalk/db/sql-view")

const sql_graph = require("@xtalk/db/sql-graph")

const check = require("@xtalk/db/base-check")

const common_global = require("./db-global")

const common_view = require("./db-view")

const k = require("@xtalk/lang")

const conn_dbsql = require("@xtalk/sys/conn-dbsql")

const sql_call = require("@xtalk/db/sql-call")

const base_view = require("@xtalk/db/base-view")

// statsapi.list.db-view-sql/free-query-tree [25] 
function free_query_tree(query,db_type){
  return sql_graph.select_tree(
    common_global.get_schema(),
    query,
    common_global.get_schema_opts(db_type)
  );
}

// statsapi.list.db-view-sql/free-query-input [33] 
function free_query_input(query,db_type){
  return sql_graph.select(
    common_global.get_schema(),
    query,
    common_global.get_schema_opts(db_type)
  );
}

// statsapi.list.db-view-sql/free-query [39] 
function free_query(conn,query,db_type,cb){
  let q = sql_graph.select(
    common_global.get_schema(),
    query,
    common_global.get_schema_opts(db_type)
  );
  return conn_dbsql.query(conn,q,cb);
}

// statsapi.list.db-view-sql/view-select [50] 
function view_select(view_entry,args,account_id,db_type,as_tree){
  return sql_view.query_select(common_global.get_schema(),view_entry,args,k.obj_assign(
    {"access_id":account_id},
    common_global.get_schema_opts(db_type)
  ),as_tree);
}

// statsapi.list.db-view-sql/view-count [61] 
function view_count(view_entry,args,account_id,db_type,as_tree){
  return sql_view.query_count(common_global.get_schema(),view_entry,args,k.obj_assign(
    {"access_id":account_id},
    common_global.get_schema_opts(db_type)
  ),as_tree);
}

// statsapi.list.db-view-sql/view-return [72] 
function view_return(view_entry,id,args,account_id,db_type,as_tree){
  return sql_view.query_return(common_global.get_schema(),view_entry,id,args,k.obj_assign(
    {"access_id":account_id},
    common_global.get_schema_opts(db_type)
  ),as_tree);
}

// statsapi.list.db-view-sql/view-return-bulk [84] 
function view_return_bulk(view_entry,ids,args,account_id,db_type,as_tree){
  return sql_view.query_return_bulk(common_global.get_schema(),view_entry,ids,args,k.obj_assign(
    {"access_id":account_id},
    common_global.get_schema_opts(db_type)
  ),as_tree);
}

// statsapi.list.db-view-sql/view-combined [96] 
function view_combined(sel_entry,sel_args,ret_entry,ret_args,ret_omit,account_id,db_type,as_tree){
  let clause_fn = null;
  return sql_view.query_combined(common_global.get_schema(),sel_entry,sel_args,ret_entry,ret_args,ret_omit,k.obj_assign(
    {"access_id":account_id},
    common_global.get_schema_opts(db_type)
  ),as_tree);
}

// statsapi.list.db-view-sql/view-guard-query [111] 
function view_guard_query(guard,account_id,input_args,input_spec){
  let args = common_view.view_guard_args(guard,account_id,input_args,input_spec);
  let spec = guard["function"];
  return sql_call.call_format_query(spec,args);
}

// statsapi.list.db-view-sql/view-query-prep [119] 
function view_query_prep(table,qm,qe,token,db_type,auth_fn,is_local){
  let {return_args,return_bulk,return_count,return_id,return_method,return_omit,select_args,select_control,select_method} = qm;
  let {return_entry,select_entry} = qe;
  select_args = (select_args || []);
  return_args = (return_args || []);
  let account_id = null;
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
  if(is_local){
    select_entry = common_view.view_local_transform(select_entry);
    return_entry = common_view.view_local_transform(return_entry);
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
    if(k.fnp(auth_fn)){
      account_id = auth_fn(token,select_entry,select_args,return_entry,return_args);
    }
    return [
      true,
      view_combined(
          k.obj_assign({"control":select_control},select_entry),
          select_args,
          return_entry,
          return_args,
          return_omit,
          account_id,
          db_type
        )
    ];
  }
  else if(null != select_entry){
    let [s_ok,s_err] = common_view.view_query_check(select_entry,select_args);
    if(!s_ok){
      return [s_ok,s_err];
    }
    if(k.fnp(auth_fn)){
      account_id = auth_fn(token,select_entry,select_args,null,null);
    }
    let f = return_count ? view_count : view_select;
    return [
      true,
      f(
          k.obj_assign({"control":select_control},select_entry),
          select_args,
          account_id,
          db_type
        )
    ];
  }
  else if(null != return_id){
    let r_args = [return_id,...return_args];
    let [r_ok,r_err] = common_view.view_query_check(return_entry,r_args);
    if(!r_ok){
      return [r_ok,r_err];
    }
    if(k.fnp(auth_fn)){
      account_id = auth_fn(token,null,null,return_entry,r_args);
    }
    return [
      true,
      view_return(return_entry,return_id,return_args,account_id,db_type)
    ];
  }
  else if(null != return_bulk){
    let [r_ok,r_err] = common_view.view_query_check(return_entry,return_args,true);
    if(!r_ok){
      return [r_ok,r_err];
    }
    if(k.fnp(auth_fn)){
      account_id = auth_fn(token,null,null,return_entry,return_args);
    }
    return [
      true,
      view_return_bulk(return_entry,return_bulk,return_args,account_id,db_type)
    ];
  }
  else{
    return [true,null];
  }
}

// statsapi.list.db-view-sql/view-query [208] 
function view_query(conn,table,qm,qe,token,db_type,auth_fn,is_local,cb){
  let [ok,result] = view_query_prep(table,qm,qe,token,db_type,auth_fn,is_local);
  if(!ok){
    return [ok,result];
  }
  if(!result){
    return [ok,"null"];
  }
  return [ok,conn_dbsql.query(conn,result,cb) || "null"];
}

var MODULE = {
  "free_query_tree":free_query_tree,
  "free_query_input":free_query_input,
  "free_query":free_query,
  "view_select":view_select,
  "view_count":view_count,
  "view_return":view_return,
  "view_return_bulk":view_return_bulk,
  "view_combined":view_combined,
  "view_guard_query":view_guard_query,
  "view_query_prep":view_query_prep,
  "view_query":view_query
};

module.exports = MODULE