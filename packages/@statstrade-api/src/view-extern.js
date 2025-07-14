const ut = require("@xtalk/db/base-util")

// statsapi.list.view-extern/extern-user-api-key-by-account [14] 
var extern_user_api_key_by_account = {
  "input":[{"symbol":"i_account_id","type":"uuid"}],
  "return":"jsonb",
  "schema":"core/query-extern",
  "id":"extern_user_api_key_by_account",
  "flags":{"personal":true},
  "view":{
    "table":"ExternUserApiKey",
    "type":"select",
    "tag":"by_account",
    "access":{"query":null,"roles":{},"relation":null,"symbol":null},
    "query":{"account":"{{i_account_id}}"},
    "guards":[],
    "autos":[]
  }
};

// statsapi.list.view-extern/extern-site-application-by-organisation [14] 
var extern_site_application_by_organisation = {
  "input":[{"symbol":"i_organisation_id","type":"uuid"}],
  "return":"jsonb",
  "schema":"core/query-extern",
  "id":"extern_site_application_by_organisation",
  "flags":{},
  "view":{
    "table":"ExternSiteApplication",
    "type":"select",
    "tag":"by_organisation",
    "access":{"query":null,"roles":{},"relation":null,"symbol":null},
    "query":{"organisation":"{{i_organisation_id}}"},
    "guards":[
      {
      "function":{
        "input":[
          {"symbol":"i_account_id","type":"uuid"},
          {"symbol":"i_organisation_id","type":"uuid"}
        ],
        "return":"boolean",
        "schema":"core/account-organisation",
        "id":"assert_is_member",
        "flags":{}
      },
      "args":["{{<%>}}","{{i_organisation_id}}"]
    }
    ],
    "autos":[]
  }
};

// statsapi.list.view-extern/extern-user-api-key-default [19] 
var extern_user_api_key_default = {
  "input":[{"symbol":"i_id","type":"uuid"}],
  "return":"jsonb",
  "schema":"core/query-extern",
  "id":"extern_user_api_key_default",
  "flags":{"personal":true},
  "view":{
    "table":"ExternUserApiKey",
    "type":"return",
    "tag":"default",
    "access":{"query":null,"roles":{},"relation":null,"symbol":null},
    "query":["*/standard"],
    "guards":[],
    "autos":[]
  }
};

// statsapi.list.view-extern/extern-site-application-default [19] 
var extern_site_application_default = {
  "input":[{"symbol":"i_id","type":"uuid"}],
  "return":"jsonb",
  "schema":"core/query-extern",
  "id":"extern_site_application_default",
  "flags":{},
  "view":{
    "table":"ExternSiteApplication",
    "type":"return",
    "tag":"default",
    "access":{"query":null,"roles":{},"relation":null,"symbol":null},
    "query":["*/standard"],
    "guards":[],
    "autos":[]
  }
};

// statsapi.list.view-extern/make-views [22] 
function make_views(){
  return ut.collect_views([
    extern_user_api_key_by_account,
    extern_site_application_by_organisation,
    extern_user_api_key_default,
    extern_site_application_default
  ]);
}

var MODULE = {
  "extern_user_api_key_by_account":extern_user_api_key_by_account,
  "extern_site_application_by_organisation":extern_site_application_by_organisation,
  "extern_user_api_key_default":extern_user_api_key_default,
  "extern_site_application_default":extern_site_application_default,
  "make_views":make_views
};

module.exports = MODULE