const xdb = require("@xtalk/db")

const common_view_sql = require("@statstrade/api/db-view-sql")

const base_schema = require("@xtalk/db/base-schema")

const sql_graph = require("@xtalk/db/sql-graph")

const base_util = require("@xtalk/db/base-util")

const common_global = require("@statstrade/api/db-global")

const k = require("@xtalk/lang/base-lib")

const schema_full = require("@statstrade/api/db-schema-full")

// statslink.impl.user-local/raw-exec [16] 
function raw_exec(user,raw_input){
  let {db} = user;
  return xdb.db_exec_sync(db,raw_input);
}

// statslink.impl.user-local/raw-pull-input [24] 
function raw_pull_input(query){
  let schema = common_global.get_schema();
  let opts = common_global.get_schema_opts("sqlite");
  return sql_graph.select(schema,query,opts);
}

// statslink.impl.user-local/raw-pull [33] 
function raw_pull(user,query){
  let {db} = user;
  let dbtype = db["::"];
  let [table] = query;
  let schema = common_global.get_schema();
  let output = xdb.db_pull_sync(db,schema,query);
  if(dbtype == "db.cache"){
    return output;
  }
  else{
    let {coerce} = common_global.get_schema_opts("sqlite");
    return base_schema.table_coerce(schema,table,output,coerce);
  }
}

// statslink.impl.user-local/raw-get [56] 
function raw_get(user,query,path,ensure){
  let out = (raw_pull(user,query))[0];
  if(null == out){
    if(ensure){
      throw "Not found - " + JSON.stringify(query);
    }
    else{
      return out;
    }
  }
  out = base_util.lu_map(out);
  if(path){
    return k.get_in(out,path);
  }
  else{
    return out;
  }
}

// statslink.impl.user-local/view-transform [77] 
function view_transform(view_entry){
  let {view} = view_entry;
  let tview = k.walk(view,k.identity,function (res){
    if((null != res) && k.objp(res) && (res["__deleted__"] != null)){
      delete res["__deleted__"];
    }
    return res;
  });
  return k.obj_assign(k.obj_clone(view_entry),{"view":tview});
}

// statslink.impl.user-local/view-exec-query [93] 
function view_exec_query(db,query){
  return JSON.parse(xdb.db_exec_sync(db,query) || "null");
}

// statslink.impl.user-local/view-exec-coerce [100] 
function view_exec_coerce(result,view){
  let {table} = view;
  let schema = common_global.get_schema();
  let {coerce} = common_global.get_schema_opts("sqlite");
  return base_schema.table_coerce(schema,table,result,coerce);
}

// statslink.impl.user-local/view-select [112] 
function view_select(user,sel_view,args,as_input){
  let {db} = user;
  let query = common_view_sql.view_select(view_transform(sel_view),args,null,"sqlite");
  if(as_input){
    return query;
  }
  else{
    return view_exec_coerce(view_exec_query(db,query),sel_view["view"]);
  }
}

// statslink.impl.user-local/view-return [123] 
function view_return(user,ret_view,id,args,as_input){
  let {db} = user;
  let query = common_view_sql.view_return(view_transform(ret_view),id,args,null,"sqlite");
  if(as_input){
    return query;
  }
  else{
    return view_exec_coerce(view_exec_query(db,query),ret_view["view"]);
  }
}

// statslink.impl.user-local/view-combined [135] 
function view_combined(user,sel_view,sel_args,ret_view,ret_args,ret_omit,as_input){
  let {db} = user;
  let query = common_view_sql.view_combined(
    view_transform(sel_view),
    sel_args,
    view_transform(ret_view),
    ret_args,
    ret_omit,
    null,
    "sqlite"
  );
  if(as_input){
    return query;
  }
  else{
    return view_exec_coerce(view_exec_query(db,query),sel_view["view"]);
  }
}

var MODULE = {
  "raw_exec":raw_exec,
  "raw_pull_input":raw_pull_input,
  "raw_pull":raw_pull,
  "raw_get":raw_get,
  "view_transform":view_transform,
  "view_exec_query":view_exec_query,
  "view_exec_coerce":view_exec_coerce,
  "view_select":view_select,
  "view_return":view_return,
  "view_combined":view_combined
};

module.exports = MODULE