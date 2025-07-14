const ut = require("@xtalk/db/base-util")

// statsapi.list.view-super/service-all [14] 
var service_all = {
  "input":[],
  "return":"jsonb",
  "schema":"core/query-super",
  "id":"service_all",
  "flags":{"super":true},
  "view":{
    "table":"Service",
    "type":"select",
    "tag":"all",
    "access":{"query":null,"roles":{},"relation":null,"symbol":null},
    "query":null,
    "guards":[],
    "autos":[]
  }
};

// statsapi.list.view-super/infra-mq-all [14] 
var infra_mq_all = {
  "input":[],
  "return":"jsonb",
  "schema":"core/query-super",
  "id":"infra_mq_all",
  "flags":{"super":true},
  "view":{
    "table":"InfraMq",
    "type":"select",
    "tag":"all",
    "access":{"query":null,"roles":{},"relation":null,"symbol":null},
    "query":null,
    "guards":[],
    "autos":[]
  }
};

// statsapi.list.view-super/infra-mq-by-service [14] 
var infra_mq_by_service = {
  "input":[{"symbol":"i_service_id","type":"uuid"}],
  "return":"jsonb",
  "schema":"core/query-super",
  "id":"infra_mq_by_service",
  "flags":{"super":true},
  "view":{
    "table":"InfraMq",
    "type":"select",
    "tag":"by_service",
    "access":{"query":null,"roles":{},"relation":null,"symbol":null},
    "query":{"service":"{{i_service_id}}"},
    "guards":[],
    "autos":[]
  }
};

// statsapi.list.view-super/infra-exchange-all [14] 
var infra_exchange_all = {
  "input":[],
  "return":"jsonb",
  "schema":"core/query-super",
  "id":"infra_exchange_all",
  "flags":{"super":true},
  "view":{
    "table":"InfraExchange",
    "type":"select",
    "tag":"all",
    "access":{"query":null,"roles":{},"relation":null,"symbol":null},
    "query":null,
    "guards":[],
    "autos":[]
  }
};

// statsapi.list.view-super/infra-exchange-by-service [14] 
var infra_exchange_by_service = {
  "input":[{"symbol":"i_service_id","type":"uuid"}],
  "return":"jsonb",
  "schema":"core/query-super",
  "id":"infra_exchange_by_service",
  "flags":{"super":true},
  "view":{
    "table":"InfraExchange",
    "type":"select",
    "tag":"by_service",
    "access":{"query":null,"roles":{},"relation":null,"symbol":null},
    "query":{"service":"{{i_service_id}}"},
    "guards":[],
    "autos":[]
  }
};

// statsapi.list.view-super/site-var-all [14] 
var site_var_all = {
  "input":[],
  "return":"jsonb",
  "schema":"core/query-super",
  "id":"site_var_all",
  "flags":{"super":true},
  "view":{
    "table":"SiteVar",
    "type":"select",
    "tag":"all",
    "access":{"query":null,"roles":{},"relation":null,"symbol":null},
    "query":null,
    "guards":[],
    "autos":[]
  }
};

// statsapi.list.view-super/service-default [19] 
var service_default = {
  "input":[{"symbol":"i_service_id","type":"uuid"}],
  "return":"jsonb",
  "schema":"core/query-super",
  "id":"service_default",
  "flags":{},
  "view":{
    "table":"Service",
    "type":"return",
    "tag":"default",
    "access":{"query":null,"roles":{},"relation":null,"symbol":null},
    "query":["*/standard"],
    "guards":[],
    "autos":[]
  }
};

// statsapi.list.view-super/infra-mq-default [19] 
var infra_mq_default = {
  "input":[{"symbol":"infra_mq_id","type":"uuid"}],
  "return":"jsonb",
  "schema":"core/query-super",
  "id":"infra_mq_default",
  "flags":{},
  "view":{
    "table":"InfraMq",
    "type":"return",
    "tag":"default",
    "access":{"query":null,"roles":{},"relation":null,"symbol":null},
    "query":[["service",["*/data"]],"*/standard"],
    "guards":[],
    "autos":[]
  }
};

// statsapi.list.view-super/infra-exchange-default [19] 
var infra_exchange_default = {
  "input":[{"symbol":"infra_exchange_id","type":"uuid"}],
  "return":"jsonb",
  "schema":"core/query-super",
  "id":"infra_exchange_default",
  "flags":{},
  "view":{
    "table":"InfraExchange",
    "type":"return",
    "tag":"default",
    "access":{"query":null,"roles":{},"relation":null,"symbol":null},
    "query":[["service",["*/data"]],"*/standard"],
    "guards":[],
    "autos":[]
  }
};

// statsapi.list.view-super/site-var-default [19] 
var site_var_default = {
  "input":[{"symbol":"site_var_id","type":"citext"}],
  "return":"jsonb",
  "schema":"core/query-super",
  "id":"site_var_default",
  "flags":{},
  "view":{
    "table":"SiteVar",
    "type":"return",
    "tag":"default",
    "access":{"query":null,"roles":{},"relation":null,"symbol":null},
    "query":["*/standard"],
    "guards":[],
    "autos":[]
  }
};

// statsapi.list.view-super/make-views [22] 
function make_views(){
  return ut.collect_views([
    service_all,
    infra_mq_all,
    infra_mq_by_service,
    infra_exchange_all,
    infra_exchange_by_service,
    site_var_all,
    service_default,
    infra_mq_default,
    infra_exchange_default,
    site_var_default
  ]);
}

var MODULE = {
  "service_all":service_all,
  "infra_mq_all":infra_mq_all,
  "infra_mq_by_service":infra_mq_by_service,
  "infra_exchange_all":infra_exchange_all,
  "infra_exchange_by_service":infra_exchange_by_service,
  "site_var_all":site_var_all,
  "service_default":service_default,
  "infra_mq_default":infra_mq_default,
  "infra_exchange_default":infra_exchange_default,
  "site_var_default":site_var_default,
  "make_views":make_views
};

module.exports = MODULE