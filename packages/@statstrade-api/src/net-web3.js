const ut = require("@xtalk/db/base-util")

// statspay.interface.net-web3/web3-id [13] 
var web3_id = {
  "input":[{"symbol":"account_id","type":"text"}],
  "return":"text",
  "id":"web3_id",
  "flags":{"token":true},
  "url":"api/web3/id",
  "encode":true
};

// statspay.interface.net-web3/web3-ping [13] 
var web3_ping = {
  "input":[],
  "return":"text",
  "id":"web3_ping",
  "flags":{},
  "url":"api/web3/ping",
  "encode":true
};

// statspay.interface.net-web3/web3-user-address-link [17] 
var web3_user_address_link = {
  "input":[
    {"symbol":"account_id","type":"uuid"},
    {"symbol":"user_address","type":"text"}
  ],
  "return":"json",
  "id":"user_address_link",
  "flags":{"token":true},
  "url":"api/web3/user-address-link",
  "encode":false
};

// statspay.interface.net-web3/web3-user-address-verify [17] 
var web3_user_address_verify = {
  "input":[
    {"symbol":"account_id","type":"uuid"},
    {"symbol":"user_address","type":"text"},
    {"symbol":"signature","type":"text"},
    {"symbol":"tag","type":"text"}
  ],
  "return":"json",
  "id":"user_address_verify",
  "flags":{"token":true},
  "url":"api/web3/user-address-verify",
  "encode":false
};

// statspay.interface.net-web3/ROUTES [21] 
var ROUTES = {
  "web3_id":web3_id,
  "web3_ping":web3_ping,
  "web3_user_address_link":web3_user_address_link,
  "web3_user_address_verify":web3_user_address_verify
};

// statspay.interface.net-web3/make-routes [24] 
function make_routes(){
  return ut.collect_routes_object(ROUTES);
}

var MODULE = {
  "web3_id":web3_id,
  "web3_ping":web3_ping,
  "web3_user_address_link":web3_user_address_link,
  "web3_user_address_verify":web3_user_address_verify,
  "ROUTES":ROUTES,
  "make_routes":make_routes
};

module.exports = MODULE