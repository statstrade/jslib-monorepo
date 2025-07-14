const rt = require("@xtalk/lang/base-runtime")

const k = require("@xtalk/lang")

const sql_util = require("@xtalk/db/sql-util")

const base_util = require("@xtalk/db/base-util")

// statsapi.list.db-global/init-schema [13] 
function init_schema(schema,schema_lookup){
  rt.xt_item_set("statsapi.list.db-global","SCHEMA",schema);
  rt.xt_item_set("statsapi.list.db-global","SCHEMA_LU",schema_lookup);
  rt.xt_item_set("statsapi.list.db-global","SCHEMA_OPTS",{
    "postgres":k.step_set_key(
        sql_util.postgres_opts(schema_lookup),
        "update_key",
        "time_updated"
      ),
    "sqlite":k.step_set_key(sql_util.sqlite_opts(null),"update_key","time_updated")
  });
}

// statsapi.list.db-global/get-schema [32] 
function get_schema(){
  return rt.xt_item("statsapi.list.db-global","SCHEMA");
}

// statsapi.list.db-global/get-schema-lookup [39] 
function get_schema_lookup(){
  return rt.xt_item("statsapi.list.db-global","SCHEMA_LU");
}

// statsapi.list.db-global/get-schema-opts [46] 
function get_schema_opts(db_type){
  return rt.xt_item("statsapi.list.db-global","SCHEMA_OPTS")[db_type || "postgres"];
}

// statsapi.list.db-global/get-views [54] 
function get_views(){
  return rt.xt_item("statsapi.list.db-global","VIEWS",function (){
    return {};
  });
}

// statsapi.list.db-global/init-views [62] 
function init_views(views_array){
  return rt.xt_item_set(
    "statsapi.list.db-global",
    "VIEWS",
    base_util.merge_views(views_array,get_views())
  );
}

var MODULE = {
  "init_schema":init_schema,
  "get_schema":get_schema,
  "get_schema_lookup":get_schema_lookup,
  "get_schema_opts":get_schema_opts,
  "get_views":get_views,
  "init_views":init_views
};

module.exports = MODULE