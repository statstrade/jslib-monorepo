const ut = require("@xtalk/db/base-util")

// statsapi.list.view-support/currency-all [18] 
var currency_all = {
  "input":[],
  "return":"jsonb",
  "schema":"core/query-support",
  "id":"currency_all",
  "flags":{"public":true},
  "view":{
    "table":"Currency",
    "type":"select",
    "tag":"all",
    "access":{"query":null,"roles":{},"relation":null,"symbol":null},
    "query":null,
    "guards":[],
    "autos":[]
  }
};

// statsapi.list.view-support/currency-all-fiat [18] 
var currency_all_fiat = {
  "input":[],
  "return":"jsonb",
  "schema":"core/query-support",
  "id":"currency_all_fiat",
  "flags":{"public":true},
  "view":{
    "table":"Currency",
    "type":"select",
    "tag":"all_fiat",
    "access":{"query":null,"roles":{},"relation":null,"symbol":null},
    "query":{"type":"fiat"},
    "guards":[],
    "autos":[]
  }
};

// statsapi.list.view-support/currency-all-crypto [18] 
var currency_all_crypto = {
  "input":[],
  "return":"jsonb",
  "schema":"core/query-support",
  "id":"currency_all_crypto",
  "flags":{"public":true},
  "view":{
    "table":"Currency",
    "type":"select",
    "tag":"all_crypto",
    "access":{"query":null,"roles":{},"relation":null,"symbol":null},
    "query":{"type":"crypto"},
    "guards":[],
    "autos":[]
  }
};

// statsapi.list.view-support/currency-by-type [18] 
var currency_by_type = {
  "input":[{"symbol":"i_type","type":"jsonb"}],
  "return":"jsonb",
  "schema":"core/query-support",
  "id":"currency_by_type",
  "flags":{"public":true},
  "view":{
    "table":"Currency",
    "type":"select",
    "tag":"by_type",
    "access":{"query":null,"roles":{},"relation":null,"symbol":null},
    "query":{
      "type":[
        "in",
        {
        "::":"sql/select",
        "args":[
          {
          "::":"sql/cast",
          "args":[
            {
            "::":"sql/fn",
            "name":"jsonb_array_elements_text",
            "args":[{"::":"sql/arg","name":"{{i_type}}"}]
          },
            {
            "::":"sql/defenum",
            "schema":"core/application",
            "name":"EnumCurrencyType"
          }
          ]
        }
        ]
      }
      ]
    },
    "guards":[],
    "autos":[]
  }
};

// statsapi.list.view-support/currency-by-country [18] 
var currency_by_country = {
  "input":[{"symbol":"i_iso","type":"citext"}],
  "return":"jsonb",
  "schema":"core/query-support",
  "id":"currency_by_country",
  "flags":{"public":true},
  "view":{
    "table":"Currency",
    "type":"select",
    "tag":"by_country",
    "access":{"query":null,"roles":{},"relation":null,"symbol":null},
    "query":{
      "id":[
        "in",
        {
        "::":"sql/select",
        "args":[
          {
          "::":"sql/fn",
          "name":"jsonb_object_keys",
          "args":[{"::":"sql/column","name":"currencies"}]
        },
          "from",
          {
          "::":"sql/deftype",
          "schema":"core/application",
          "name":"RegionCountry"
        },
          "where",
          {"id":"{{i_iso}}"}
        ]
      }
      ]
    },
    "guards":[],
    "autos":[]
  }
};

// statsapi.list.view-support/region-country-by-name [18] 
var region_country_by_name = {
  "input":[{"symbol":"i_name","type":"text"}],
  "return":"jsonb",
  "schema":"core/query-support",
  "id":"region_country_by_name",
  "flags":{"public":true},
  "view":{
    "table":"RegionCountry",
    "type":"select",
    "tag":"by_name",
    "access":{"query":null,"roles":{},"relation":null,"symbol":null},
    "query":{
      "name":[
        "ilike",
        {
        "::":"sql/fn",
        "name":"||",
        "args":[
          {"::":"sql/arg","name":"%"},
          {"::":"sql/arg","name":"{{i_name}}"},
          {"::":"sql/arg","name":"%"}
        ]
      }
      ]
    },
    "guards":[],
    "autos":[],
    "cache/constant":true
  }
};

// statsapi.list.view-support/region-country-all [18] 
var region_country_all = {
  "input":[],
  "return":"jsonb",
  "schema":"core/query-support",
  "id":"region_country_all",
  "flags":{"public":true},
  "view":{
    "table":"RegionCountry",
    "type":"select",
    "tag":"all",
    "access":{"query":null,"roles":{},"relation":null,"symbol":null},
    "query":null,
    "guards":[],
    "autos":[],
    "cache/constant":true
  }
};

// statsapi.list.view-support/region-state-by-country [18] 
var region_state_by_country = {
  "input":[{"symbol":"i_country_id","type":"citext"}],
  "return":"jsonb",
  "schema":"core/query-support",
  "id":"region_state_by_country",
  "flags":{"public":true},
  "view":{
    "table":"RegionState",
    "type":"select",
    "tag":"by_country",
    "access":{"query":null,"roles":{},"relation":null,"symbol":null},
    "query":{"country":"{{i_country_id}}"},
    "guards":[],
    "autos":[],
    "cache/constant":true
  }
};

// statsapi.list.view-support/region-city-by-country [18] 
var region_city_by_country = {
  "input":[{"symbol":"i_country_id","type":"citext"}],
  "return":"jsonb",
  "schema":"core/query-support",
  "id":"region_city_by_country",
  "flags":{"public":true},
  "view":{
    "table":"RegionCity",
    "type":"select",
    "tag":"by_country",
    "access":{"query":null,"roles":{},"relation":null,"symbol":null},
    "query":{"country":"{{i_country_id}}"},
    "guards":[],
    "autos":[],
    "cache/constant":true
  }
};

// statsapi.list.view-support/region-city-by-state [18] 
var region_city_by_state = {
  "input":[{"symbol":"i_state_id","type":"citext"}],
  "return":"jsonb",
  "schema":"core/query-support",
  "id":"region_city_by_state",
  "flags":{"public":true},
  "view":{
    "table":"RegionCity",
    "type":"select",
    "tag":"by_state",
    "access":{"query":null,"roles":{},"relation":null,"symbol":null},
    "query":{"state":"{{i_state_id}}"},
    "guards":[],
    "autos":[],
    "cache/constant":true
  }
};

// statsapi.list.view-support/currency-default [32] 
var currency_default = {
  "input":[{"symbol":"i_currency_id","type":"citext"}],
  "return":"jsonb",
  "schema":"core/query-support",
  "id":"currency_default",
  "flags":{"public":true},
  "view":{
    "table":"Currency",
    "type":"return",
    "tag":"default",
    "access":{"query":null,"roles":{},"relation":null,"symbol":null},
    "query":["*/data"],
    "guards":[],
    "autos":[]
  }
};

// statsapi.list.view-support/currency-info [32] 
var currency_info = {
  "input":[{"symbol":"i_currency_id","type":"citext"}],
  "return":"jsonb",
  "schema":"core/query-support",
  "id":"currency_info",
  "flags":{"public":true},
  "view":{
    "table":"Currency",
    "type":"return",
    "tag":"info",
    "access":{"query":null,"roles":{},"relation":null,"symbol":null},
    "query":["description","id"],
    "guards":[],
    "autos":[]
  }
};

// statsapi.list.view-support/region-country-default [32] 
var region_country_default = {
  "input":[{"symbol":"i_country_id","type":"citext"}],
  "return":"jsonb",
  "schema":"core/query-support",
  "id":"region_country_default",
  "flags":{"public":true},
  "view":{
    "table":"RegionCountry",
    "type":"return",
    "tag":"default",
    "access":{"query":null,"roles":{},"relation":null,"symbol":null},
    "query":["*/data"],
    "guards":[],
    "autos":[],
    "cache/constant":true
  }
};

// statsapi.list.view-support/region-country-info [32] 
var region_country_info = {
  "input":[{"symbol":"i_country_id","type":"citext"}],
  "return":"jsonb",
  "schema":"core/query-support",
  "id":"region_country_info",
  "flags":{"public":true},
  "view":{
    "table":"RegionCountry",
    "type":"return",
    "tag":"info",
    "access":{"query":null,"roles":{},"relation":null,"symbol":null},
    "query":["*/info"],
    "guards":[],
    "autos":[],
    "cache/constant":true
  }
};

// statsapi.list.view-support/region-state-default [32] 
var region_state_default = {
  "input":[{"symbol":"i_state_id","type":"citext"}],
  "return":"jsonb",
  "schema":"core/query-support",
  "id":"region_state_default",
  "flags":{"public":true},
  "view":{
    "table":"RegionState",
    "type":"return",
    "tag":"default",
    "access":{"query":null,"roles":{},"relation":null,"symbol":null},
    "query":["country_id","*/data"],
    "guards":[],
    "autos":[],
    "cache/constant":true
  }
};

// statsapi.list.view-support/region-state-info [32] 
var region_state_info = {
  "input":[{"symbol":"i_state_id","type":"citext"}],
  "return":"jsonb",
  "schema":"core/query-support",
  "id":"region_state_info",
  "flags":{"public":true},
  "view":{
    "table":"RegionState",
    "type":"return",
    "tag":"info",
    "access":{"query":null,"roles":{},"relation":null,"symbol":null},
    "query":["*/info","country_id"],
    "guards":[],
    "autos":[],
    "cache/constant":true
  }
};

// statsapi.list.view-support/region-city-default [32] 
var region_city_default = {
  "input":[{"symbol":"i_city_id","type":"citext"}],
  "return":"jsonb",
  "schema":"core/query-support",
  "id":"region_city_default",
  "flags":{"public":true},
  "view":{
    "table":"RegionCity",
    "type":"return",
    "tag":"default",
    "access":{"query":null,"roles":{},"relation":null,"symbol":null},
    "query":["country_id","*/data","state_id"],
    "guards":[],
    "autos":[],
    "cache/constant":true
  }
};

// statsapi.list.view-support/region-city-info [32] 
var region_city_info = {
  "input":[{"symbol":"i_city_id","type":"citext"}],
  "return":"jsonb",
  "schema":"core/query-support",
  "id":"region_city_info",
  "flags":{"public":true},
  "view":{
    "table":"RegionCity",
    "type":"return",
    "tag":"info",
    "access":{"query":null,"roles":{},"relation":null,"symbol":null},
    "query":["*/info","country_id","state_id"],
    "guards":[],
    "autos":[],
    "cache/constant":true
  }
};

// statsapi.list.view-support/get-views [42] 
function get_views(){
  return [
    currency_all,
    currency_all_fiat,
    currency_all_crypto,
    currency_by_type,
    currency_by_country,
    region_country_by_name,
    region_country_all,
    region_state_by_country,
    region_city_by_country,
    region_city_by_state,
    currency_default,
    currency_info,
    region_country_default,
    region_country_info,
    region_state_default,
    region_state_info,
    region_city_default,
    region_city_info
  ];
}

// statsapi.list.view-support/make-views [48] 
function make_views(){
  return ut.collect_views(get_views());
}

var MODULE = {
  "currency_all":currency_all,
  "currency_all_fiat":currency_all_fiat,
  "currency_all_crypto":currency_all_crypto,
  "currency_by_type":currency_by_type,
  "currency_by_country":currency_by_country,
  "region_country_by_name":region_country_by_name,
  "region_country_all":region_country_all,
  "region_state_by_country":region_state_by_country,
  "region_city_by_country":region_city_by_country,
  "region_city_by_state":region_city_by_state,
  "currency_default":currency_default,
  "currency_info":currency_info,
  "region_country_default":region_country_default,
  "region_country_info":region_country_info,
  "region_state_default":region_state_default,
  "region_state_info":region_state_info,
  "region_city_default":region_city_default,
  "region_city_info":region_city_info,
  "get_views":get_views,
  "make_views":make_views
};

module.exports = MODULE