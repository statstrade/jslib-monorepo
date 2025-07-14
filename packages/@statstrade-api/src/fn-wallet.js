const ut = require("@xtalk/db/base-util")

// statsapi.list.fn-wallet/purchase-statscoin [14] 
var purchase_statscoin = {
  "input":[
    {"symbol":"i_account_id","type":"uuid"},
    {"symbol":"i_currency_id","type":"citext"},
    {"symbol":"i_amount","type":"numeric"}
  ],
  "return":"jsonb",
  "schema":"core/account-wallet",
  "id":"purchase_statscoin",
  "flags":{"token":true,"mq.event":true},
  "url":"api/wallet/purchase-statscoin"
};

// statsapi.list.fn-wallet/tip-statscoin [14] 
var tip_statscoin = {
  "input":[
    {"symbol":"i_account_id","type":"uuid"},
    {"symbol":"i_account_tipped_id","type":"uuid"},
    {"symbol":"i_amount","type":"numeric"}
  ],
  "return":"jsonb",
  "schema":"core/account-wallet",
  "id":"tip_statscoin",
  "flags":{"token":true,"mq.event":true},
  "url":"api/wallet/tip-statscoin"
};

// statsapi.list.fn-wallet/ROUTES [17] 
var ROUTES = {
  "purchase_statscoin":purchase_statscoin,
  "tip_statscoin":tip_statscoin
};

// statsapi.list.fn-wallet/make-routes [20] 
function make_routes(){
  return ut.collect_routes_object(ROUTES);
}

var MODULE = {
  "purchase_statscoin":purchase_statscoin,
  "tip_statscoin":tip_statscoin,
  "ROUTES":ROUTES,
  "make_routes":make_routes
};

module.exports = MODULE