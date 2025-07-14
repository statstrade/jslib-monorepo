const k = require("@xtalk/lang/base-lib")

const xdb = require("@xtalk/db")

const sql_util = require("@xtalk/db/sql-util")

const sql_manage = require("@xtalk/db/sql-manage")

const common_global = require("@statstrade/api/db-global")

const schema_full = require("@statstrade/api/db-schema-full")

const base_system = require("./base-system")

// statslink.impl.base-sqlite/db-tables [15] 
function db_tables(db){
  return k.arr_sort(JSON.parse(xdb.db_exec_sync(
    db,
    "SELECT json_group_array(name) FROM sqlite_schema where type='table'",
    null
  )),k.identity,function (a,b){
    return a < b;
  });
}

// statslink.impl.base-sqlite/db-schema [27] 
function db_schema(db,table){
  return xdb.db_exec_sync(db,"pragma table_info('" + table + "')",null);
}

// statslink.impl.base-sqlite/db-create [36] 
function db_create(m){
  let opts = sql_util.sqlite_opts();
  let schema = common_global.get_schema();
  let lookup = common_global.get_schema_lookup();
  if(null == schema){
    throw "ERR - Schema not initalised.";
  }
  return xdb.db_create(
    m || {"type":"sqlite","file":base_system.LOCAL_DB},
    schema,
    lookup,
    opts
  );
}

// statslink.impl.base-sqlite/db-init [53] 
function db_init(db){
  let schema = common_global.get_schema();
  let lookup = common_global.get_schema_lookup();
  let {opts} = db;
  xdb.db_exec_sync(
    db,
    sql_manage.table_create_all(schema,lookup,opts).join("\n"),
    null
  );
  return db;
}

var MODULE = {
  "db_tables":db_tables,
  "db_schema":db_schema,
  "db_create":db_create,
  "db_init":db_init
};

module.exports = MODULE