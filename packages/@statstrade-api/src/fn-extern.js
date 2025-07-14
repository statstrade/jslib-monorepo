const ut = require("@xtalk/db/base-util")

// statsapi.list.fn-extern/add-user-api-key [14] 
var add_user_api_key = {
  "input":[
    {"symbol":"i_account_id","type":"uuid"},
    {"symbol":"i_tag","type":"citext"},
    {"symbol":"i_detail","type":"jsonb"}
  ],
  "return":"jsonb",
  "schema":"core/account-extern",
  "id":"add_user_api_key",
  "flags":{"token":true,"mq.event":true},
  "url":"api/extern/add-user-api-key"
};

// statsapi.list.fn-extern/remove-user-api-key [14] 
var remove_user_api_key = {
  "input":[
    {"symbol":"i_account_id","type":"uuid"},
    {"symbol":"i_api_key_id","type":"uuid"}
  ],
  "return":"jsonb",
  "schema":"core/account-extern",
  "id":"remove_user_api_key",
  "flags":{"token":true,"mq.event":true},
  "url":"api/extern/remove-user-api-key"
};

// statsapi.list.fn-extern/refresh-user-api-key [14] 
var refresh_user_api_key = {
  "input":[
    {"symbol":"i_account_id","type":"uuid"},
    {"symbol":"i_api_key_id","type":"uuid"}
  ],
  "return":"jsonb",
  "schema":"core/account-extern",
  "id":"refresh_user_api_key",
  "flags":{"token":true,"mq.event":true},
  "url":"api/extern/refresh-user-api-key"
};

// statsapi.list.fn-extern/add-site-application [14] 
var add_site_application = {
  "input":[
    {"symbol":"i_account_id","type":"uuid"},
    {"symbol":"i_organisation_id","type":"uuid"},
    {"symbol":"m","type":"jsonb"}
  ],
  "return":"jsonb",
  "schema":"core/account-extern",
  "id":"add_site_application",
  "flags":{"token":true,"mq.event":true},
  "url":"api/extern/add-site-application"
};

// statsapi.list.fn-extern/remove-site-application [14] 
var remove_site_application = {
  "input":[
    {"symbol":"i_account_id","type":"uuid"},
    {"symbol":"i_organisation_id","type":"uuid"},
    {"symbol":"i_site_app_id","type":"uuid"}
  ],
  "return":"jsonb",
  "schema":"core/account-extern",
  "id":"remove_site_application",
  "flags":{"token":true,"mq.event":true},
  "url":"api/extern/remove-site-application"
};

// statsapi.list.fn-extern/make-routes [17] 
function make_routes(){
  return ut.collect_routes({
    "add_user_api_key":add_user_api_key,
    "remove_user_api_key":remove_user_api_key,
    "refresh_user_api_key":refresh_user_api_key,
    "add_site_application":add_site_application,
    "remove_site_application":remove_site_application
  });
}

var MODULE = {
  "add_user_api_key":add_user_api_key,
  "remove_user_api_key":remove_user_api_key,
  "refresh_user_api_key":refresh_user_api_key,
  "add_site_application":add_site_application,
  "remove_site_application":remove_site_application,
  "make_routes":make_routes
};

module.exports = MODULE