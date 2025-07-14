const ut = require("@xtalk/db/base-util")

// statsapi.list.fn-super/abuse-report-create [16] 
var abuse_report_create = {
  "input":[
    {"symbol":"i_account_id","type":"uuid"},
    {"symbol":"m","type":"jsonb"}
  ],
  "return":"jsonb",
  "schema":"admin/super-abuse",
  "id":"abuse_report_create",
  "flags":{"token":true},
  "url":"api/super/abuse-report-create"
};

// statsapi.list.fn-super/abuse-report-update [16] 
var abuse_report_update = {
  "input":[
    {"symbol":"i_super_id","type":"uuid"},
    {"symbol":"i_report_id","type":"uuid"},
    {"symbol":"m","type":"jsonb"}
  ],
  "return":"jsonb",
  "schema":"admin/super-abuse",
  "id":"abuse_report_update",
  "flags":{"super":true},
  "url":"api/super/abuse-report-update"
};

// statsapi.list.fn-super/site-var-set [21] 
var site_var_set = {
  "input":[
    {"symbol":"i_super_id","type":"uuid"},
    {"symbol":"m","type":"jsonb"}
  ],
  "return":"jsonb",
  "schema":"admin/super-global",
  "id":"site_var_set",
  "flags":{"super":true},
  "url":"api/super/site-var-set"
};

// statsapi.list.fn-super/site-var-delete [21] 
var site_var_delete = {
  "input":[
    {"symbol":"i_super_id","type":"uuid"},
    {"symbol":"site_var_id","type":"citext"}
  ],
  "return":"jsonb",
  "schema":"admin/super-global",
  "id":"site_var_delete",
  "flags":{"super":true},
  "url":"api/super/site-var-delete"
};

// statsapi.list.fn-super/currency-set [21] 
var currency_set = {
  "input":[
    {"symbol":"i_super_id","type":"uuid"},
    {"symbol":"m","type":"jsonb"}
  ],
  "return":"jsonb",
  "schema":"admin/super-global",
  "id":"currency_set",
  "flags":{"super":true},
  "url":"api/super/currency-set"
};

// statsapi.list.fn-super/currency-delete [21] 
var currency_delete = {
  "input":[
    {"symbol":"i_super_id","type":"uuid"},
    {"symbol":"currency_id","type":"citext"}
  ],
  "return":"jsonb",
  "schema":"admin/super-global",
  "id":"currency_delete",
  "flags":{"super":true},
  "url":"api/super/currency-delete"
};

// statsapi.list.fn-super/region-country-set [21] 
var region_country_set = {
  "input":[
    {"symbol":"i_super_id","type":"uuid"},
    {"symbol":"m","type":"jsonb"}
  ],
  "return":"jsonb",
  "schema":"admin/super-global",
  "id":"region_country_set",
  "flags":{"super":true},
  "url":"api/super/region-country-set"
};

// statsapi.list.fn-super/region-country-delete [21] 
var region_country_delete = {
  "input":[
    {"symbol":"i_super_id","type":"uuid"},
    {"symbol":"i_region_country_id","type":"citext"}
  ],
  "return":"jsonb",
  "schema":"admin/super-global",
  "id":"region_country_delete",
  "flags":{"super":true},
  "url":"api/super/region-country-delete"
};

// statsapi.list.fn-super/region-state-set [21] 
var region_state_set = {
  "input":[
    {"symbol":"i_super_id","type":"uuid"},
    {"symbol":"m","type":"jsonb"}
  ],
  "return":"jsonb",
  "schema":"admin/super-global",
  "id":"region_state_set",
  "flags":{"super":true},
  "url":"api/super/region-state-set"
};

// statsapi.list.fn-super/region-state-delete [21] 
var region_state_delete = {
  "input":[
    {"symbol":"i_super_id","type":"uuid"},
    {"symbol":"i_region_state_id","type":"citext"}
  ],
  "return":"jsonb",
  "schema":"admin/super-global",
  "id":"region_state_delete",
  "flags":{"super":true},
  "url":"api/super/region-state-delete"
};

// statsapi.list.fn-super/region-city-set [21] 
var region_city_set = {
  "input":[
    {"symbol":"i_super_id","type":"uuid"},
    {"symbol":"m","type":"jsonb"}
  ],
  "return":"jsonb",
  "schema":"admin/super-global",
  "id":"region_city_set",
  "flags":{"super":true},
  "url":"api/super/region-city-set"
};

// statsapi.list.fn-super/region-city-delete [21] 
var region_city_delete = {
  "input":[
    {"symbol":"i_super_id","type":"uuid"},
    {"symbol":"i_region_city_id","type":"citext"}
  ],
  "return":"jsonb",
  "schema":"admin/super-global",
  "id":"region_city_delete",
  "flags":{"super":true},
  "url":"api/super/region-city-delete"
};

// statsapi.list.fn-super/service-set [21] 
var service_set = {
  "input":[
    {"symbol":"i_super_id","type":"uuid"},
    {"symbol":"m","type":"jsonb"}
  ],
  "return":"jsonb",
  "schema":"admin/super-global",
  "id":"service_set",
  "flags":{"super":true},
  "url":"api/super/service-set"
};

// statsapi.list.fn-super/service-delete [21] 
var service_delete = {
  "input":[
    {"symbol":"i_super_id","type":"uuid"},
    {"symbol":"i_service_id","type":"uuid"}
  ],
  "return":"jsonb",
  "schema":"admin/super-global",
  "id":"service_delete",
  "flags":{"super":true},
  "url":"api/super/service-delete"
};

// statsapi.list.fn-super/infra-mq-set [21] 
var infra_mq_set = {
  "input":[
    {"symbol":"i_super_id","type":"uuid"},
    {"symbol":"m","type":"jsonb"}
  ],
  "return":"jsonb",
  "schema":"admin/super-global",
  "id":"infra_mq_set",
  "flags":{"super":true},
  "url":"api/super/infra-mq-set"
};

// statsapi.list.fn-super/infra-mq-delete [21] 
var infra_mq_delete = {
  "input":[
    {"symbol":"i_super_id","type":"uuid"},
    {"symbol":"i_infra_mq_id","type":"text"}
  ],
  "return":"jsonb",
  "schema":"admin/super-global",
  "id":"infra_mq_delete",
  "flags":{"super":true},
  "url":"api/super/infra-mq-delete"
};

// statsapi.list.fn-super/infra-exchange-set [21] 
var infra_exchange_set = {
  "input":[
    {"symbol":"i_super_id","type":"uuid"},
    {"symbol":"m","type":"jsonb"}
  ],
  "return":"jsonb",
  "schema":"admin/super-global",
  "id":"infra_exchange_set",
  "flags":{"super":true},
  "url":"api/super/infra-exchange-set"
};

// statsapi.list.fn-super/infra-exchange-delete [21] 
var infra_exchange_delete = {
  "input":[
    {"symbol":"i_super_id","type":"uuid"},
    {"symbol":"i_infra_exchange_id","type":"uuid"}
  ],
  "return":"jsonb",
  "schema":"admin/super-global",
  "id":"infra_exchange_delete",
  "flags":{"super":true},
  "url":"api/super/infra-exchange-delete"
};

// statsapi.list.fn-super/set-account-super [26] 
var set_account_super = {
  "input":[
    {"symbol":"i_super_id","type":"uuid"},
    {"symbol":"i_account_id","type":"uuid"},
    {"symbol":"i_status","type":"boolean"}
  ],
  "return":"jsonb",
  "schema":"admin/super-manage",
  "id":"set_account_super",
  "flags":{"super":true},
  "url":"api/super/set-account-super"
};

// statsapi.list.fn-super/set-account-lock [26] 
var set_account_lock = {
  "input":[
    {"symbol":"i_super_id","type":"uuid"},
    {"symbol":"i_account_id","type":"uuid"},
    {"symbol":"i_status","type":"boolean"},
    {"symbol":"i_reason","type":"text"},
    {"symbol":"i_detail","type":"jsonb"}
  ],
  "return":"jsonb",
  "schema":"admin/super-manage",
  "id":"set_account_lock",
  "flags":{"super":true},
  "url":"api/super/set-account-lock"
};

// statsapi.list.fn-super/set-organisation-lock [26] 
var set_organisation_lock = {
  "input":[
    {"symbol":"i_super_id","type":"uuid"},
    {"symbol":"i_organisation_id","type":"uuid"},
    {"symbol":"i_status","type":"boolean"},
    {"symbol":"i_reason","type":"text"},
    {"symbol":"i_detail","type":"jsonb"}
  ],
  "return":"jsonb",
  "schema":"admin/super-manage",
  "id":"set_organisation_lock",
  "flags":{"super":true},
  "url":"api/super/set-organisation-lock"
};

// statsapi.list.fn-super/set-organisation-tier [26] 
var set_organisation_tier = {
  "input":[
    {"symbol":"i_super_id","type":"uuid"},
    {"symbol":"i_organisation_id","type":"uuid"},
    {"symbol":"i_tier","type":"text"}
  ],
  "return":"jsonb",
  "schema":"admin/super-manage",
  "id":"set_organisation_tier",
  "flags":{"super":true},
  "url":"api/super/set-organisation-tier"
};

// statsapi.list.fn-super/set-room-lock [26] 
var set_room_lock = {
  "input":[
    {"symbol":"i_super_id","type":"uuid"},
    {"symbol":"i_room_id","type":"uuid"},
    {"symbol":"i_status","type":"boolean"},
    {"symbol":"i_reason","type":"text"},
    {"symbol":"i_detail","type":"jsonb"}
  ],
  "return":"jsonb",
  "schema":"admin/super-manage",
  "id":"set_room_lock",
  "flags":{"super":true},
  "url":"api/super/set-room-lock"
};

// statsapi.list.fn-super/set-topic-lock [26] 
var set_topic_lock = {
  "input":[
    {"symbol":"i_super_id","type":"uuid"},
    {"symbol":"i_topic_id","type":"uuid"},
    {"symbol":"i_status","type":"boolean"},
    {"symbol":"i_reason","type":"text"},
    {"symbol":"i_detail","type":"jsonb"}
  ],
  "return":"jsonb",
  "schema":"admin/super-manage",
  "id":"set_topic_lock",
  "flags":{"super":true},
  "url":"api/super/set-topic-lock"
};

// statsapi.list.fn-super/user-privilege-add [26] 
var user_privilege_add = {
  "input":[
    {"symbol":"i_super_id","type":"uuid"},
    {"symbol":"i_account_id","type":"uuid"},
    {"symbol":"m","type":"jsonb"}
  ],
  "return":"jsonb",
  "schema":"admin/super-manage",
  "id":"user_privilege_add",
  "flags":{"super":true},
  "url":"api/super/user-privilege-add"
};

// statsapi.list.fn-super/user-privilege-remove [26] 
var user_privilege_remove = {
  "input":[
    {"symbol":"i_super_id","type":"uuid"},
    {"symbol":"i_account_id","type":"uuid"},
    {"symbol":"i_type","type":"citext"}
  ],
  "return":"jsonb",
  "schema":"admin/super-manage",
  "id":"user_privilege_remove",
  "flags":{"super":true},
  "url":"api/super/user-privilege-remove"
};

// statsapi.list.fn-super/account-token-secret-add [26] 
var account_token_secret_add = {
  "input":[
    {"symbol":"i_super_id","type":"uuid"},
    {"symbol":"m","type":"jsonb"}
  ],
  "return":"jsonb",
  "schema":"admin/super-manage",
  "id":"account_token_secret_add",
  "flags":{"super":true},
  "url":"api/super/account-token-secret-add"
};

// statsapi.list.fn-super/account-token-secret-remove [26] 
var account_token_secret_remove = {
  "input":[
    {"symbol":"i_super_id","type":"uuid"},
    {"symbol":"i_prime","type":"citext"}
  ],
  "return":"jsonb",
  "schema":"admin/super-manage",
  "id":"account_token_secret_remove",
  "flags":{"super":true},
  "url":"api/super/account-token-secret-remove"
};

// statsapi.list.fn-super/account-token-secret-update [26] 
var account_token_secret_update = {
  "input":[
    {"symbol":"i_super_id","type":"uuid"},
    {"symbol":"i_prime","type":"citext"},
    {"symbol":"i_secret","type":"text"}
  ],
  "return":"jsonb",
  "schema":"admin/super-manage",
  "id":"account_token_secret_update",
  "flags":{"super":true},
  "url":"api/super/account-token-secret-update"
};

// statsapi.list.fn-super/ROUTES [29] 
var ROUTES = {
  "account_token_secret_remove":account_token_secret_remove,
  "user_privilege_add":user_privilege_add,
  "abuse_report_update":abuse_report_update,
  "infra_mq_set":infra_mq_set,
  "region_city_set":region_city_set,
  "infra_exchange_set":infra_exchange_set,
  "abuse_report_create":abuse_report_create,
  "account_token_secret_add":account_token_secret_add,
  "user_privilege_remove":user_privilege_remove,
  "region_country_delete":region_country_delete,
  "currency_set":currency_set,
  "currency_delete":currency_delete,
  "set_topic_lock":set_topic_lock,
  "set_account_lock":set_account_lock,
  "region_city_delete":region_city_delete,
  "region_state_delete":region_state_delete,
  "infra_mq_delete":infra_mq_delete,
  "site_var_delete":site_var_delete,
  "set_organisation_lock":set_organisation_lock,
  "region_country_set":region_country_set,
  "set_room_lock":set_room_lock,
  "set_account_super":set_account_super,
  "infra_exchange_delete":infra_exchange_delete,
  "service_delete":service_delete,
  "account_token_secret_update":account_token_secret_update,
  "set_organisation_tier":set_organisation_tier,
  "site_var_set":site_var_set,
  "region_state_set":region_state_set,
  "service_set":service_set
};

// statsapi.list.fn-super/make-routes [32] 
function make_routes(){
  return ut.collect_routes_object(ROUTES);
}

var MODULE = {
  "abuse_report_create":abuse_report_create,
  "abuse_report_update":abuse_report_update,
  "site_var_set":site_var_set,
  "site_var_delete":site_var_delete,
  "currency_set":currency_set,
  "currency_delete":currency_delete,
  "region_country_set":region_country_set,
  "region_country_delete":region_country_delete,
  "region_state_set":region_state_set,
  "region_state_delete":region_state_delete,
  "region_city_set":region_city_set,
  "region_city_delete":region_city_delete,
  "service_set":service_set,
  "service_delete":service_delete,
  "infra_mq_set":infra_mq_set,
  "infra_mq_delete":infra_mq_delete,
  "infra_exchange_set":infra_exchange_set,
  "infra_exchange_delete":infra_exchange_delete,
  "set_account_super":set_account_super,
  "set_account_lock":set_account_lock,
  "set_organisation_lock":set_organisation_lock,
  "set_organisation_tier":set_organisation_tier,
  "set_room_lock":set_room_lock,
  "set_topic_lock":set_topic_lock,
  "user_privilege_add":user_privilege_add,
  "user_privilege_remove":user_privilege_remove,
  "account_token_secret_add":account_token_secret_add,
  "account_token_secret_remove":account_token_secret_remove,
  "account_token_secret_update":account_token_secret_update,
  "ROUTES":ROUTES,
  "make_routes":make_routes
};

module.exports = MODULE