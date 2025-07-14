const worker_main = require("./worker-main")

const k = require("@xtalk/lang/base-lib")

// statslink.full.worker-full/__main__ [18] 
worker_main.init_main({
  "sql_js":k.get_in(custom,["URL_SQL_JS"]) || "https://cdnjs.cloudflare.com/ajax/libs/sql.js/1.13.0/sql-wasm.js",
  "sql_wasm":k.get_in(custom,["URL_SQL_WASM"]) || "https://cdnjs.cloudflare.com/ajax/libs/sql.js/1.13.0/sql-wasm.wasm"
});

var MODULE = {};

module.exports = MODULE