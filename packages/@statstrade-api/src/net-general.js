const ut = require("@xtalk/db/base-util")

// statsnet.interface.net-general/helper-id [21] 
var helper_id = {
  "input":[{"symbol":"account_id","type":"text"}],
  "return":"text",
  "id":"helper_id",
  "flags":{"token":true},
  "url":"api/helper/id",
  "encode":true
};

// statsnet.interface.net-general/helper-ping [21] 
var helper_ping = {
  "input":[],
  "return":"text",
  "id":"helper_ping",
  "flags":{},
  "url":"api/helper/ping",
  "encode":true
};

// statsnet.interface.net-general/helper-all-routes [21] 
var helper_all_routes = {
  "input":[],
  "return":"jsonb",
  "id":"helper_all_routes",
  "flags":{},
  "url":"api/helper/all-routes",
  "encode":true
};

// statsnet.interface.net-general/view-query [26] 
var view_query = {
  "input":[
    {"symbol":"table","type":"text"},
    {"symbol":"qm","type":"jsonb"}
  ],
  "return":"jsonb",
  "id":"view_query",
  "flags":{},
  "url":"api/view/q",
  "encode":"wrap"
};

// statsnet.interface.net-general/view-query-nosync [26] 
var view_query_nosync = {
  "input":[
    {"symbol":"table","type":"text"},
    {"symbol":"qm","type":"jsonb"}
  ],
  "return":"jsonb",
  "id":"view_query_nosync",
  "flags":{},
  "url":"api/view/q-nosync",
  "encode":"wrap"
};

// statsnet.interface.net-general/view-bulk [26] 
var view_bulk = {
  "input":[{"symbol":"bulk","type":"jsonb"}],
  "return":"jsonb",
  "id":"view_bulk",
  "flags":{},
  "url":"api/view/bulk",
  "encode":"wrap"
};

// statsnet.interface.net-general/view-overview [31] 
var view_overview = {
  "input":[],
  "return":"jsonb",
  "id":"view_overview",
  "flags":{},
  "url":"api/view/overview",
  "encode":true
};

// statsnet.interface.net-general/view-tables [31] 
var view_tables = {
  "input":[],
  "return":"jsonb",
  "id":"view_tables",
  "flags":{},
  "url":"api/view/tables",
  "encode":true
};

// statsnet.interface.net-general/view-methods [31] 
var view_methods = {
  "input":[{"symbol":"table","type":"text"}],
  "return":"jsonb",
  "id":"view_methods",
  "flags":{},
  "url":"api/view/methods",
  "encode":true
};

// statsnet.interface.net-general/view-detail [31] 
var view_detail = {
  "input":[
    {"symbol":"table","type":"text"},
    {"symbol":"type","type":"text"},
    {"symbol":"id","type":"text"}
  ],
  "return":"jsonb",
  "id":"view_detail",
  "flags":{},
  "url":"api/view/detail",
  "encode":true
};

// statsnet.interface.net-general/ROUTES [37] 
var ROUTES = {
  "view_overview":view_overview,
  "view_query_nosync":view_query_nosync,
  "view_detail":view_detail,
  "helper_id":helper_id,
  "view_bulk":view_bulk,
  "view_methods":view_methods,
  "helper_ping":helper_ping,
  "view_tables":view_tables,
  "helper_all_routes":helper_all_routes,
  "view_query":view_query
};

// statsnet.interface.net-general/make-routes [40] 
function make_routes(){
  return ut.collect_routes_object(ROUTES);
}

var MODULE = {
  "helper_id":helper_id,
  "helper_ping":helper_ping,
  "helper_all_routes":helper_all_routes,
  "view_query":view_query,
  "view_query_nosync":view_query_nosync,
  "view_bulk":view_bulk,
  "view_overview":view_overview,
  "view_tables":view_tables,
  "view_methods":view_methods,
  "view_detail":view_detail,
  "ROUTES":ROUTES,
  "make_routes":make_routes
};

module.exports = MODULE