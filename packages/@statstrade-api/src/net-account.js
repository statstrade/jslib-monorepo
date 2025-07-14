const ut = require("@xtalk/db/base-util")

// statsnet.interface.net-account/email-add-additional [12] 
var email_add_additional = {
  "input":[
    {"symbol":"i_account_id","type":"uuid"},
    {"symbol":"m","type":"jsonb"}
  ],
  "return":"jsonb",
  "id":"email_add_additional",
  "flags":{"token":true},
  "url":"api/account/email-add-additional",
  "encode":false
};

// statsnet.interface.net-account/email-verify-additional-resend [12] 
var email_verify_additional_resend = {
  "input":[
    {"symbol":"i_account_id","type":"uuid"},
    {"symbol":"i_email","type":"citext"}
  ],
  "return":"jsonb",
  "id":"email_verify_additional_resend",
  "flags":{"token":true},
  "url":"api/account/email-verify-additional-resend",
  "encode":false
};

// statsnet.interface.net-account/login [12] 
var login = {
  "input":[{"symbol":"m","type":"jsonb"}],
  "return":"jsonb",
  "id":"login",
  "flags":{"secured":true},
  "url":"api/account/login",
  "encode":false
};

// statsnet.interface.net-account/password-change [12] 
var password_change = {
  "input":[
    {"symbol":"i_account_id","type":"uuid"},
    {"symbol":"m","type":"jsonb"}
  ],
  "return":"jsonb",
  "id":"password_change",
  "flags":{"token":true,"secured":true},
  "url":"api/account/password-change",
  "encode":false
};

// statsnet.interface.net-account/password-reset [12] 
var password_reset = {
  "input":[{"symbol":"m","type":"jsonb"}],
  "return":"jsonb",
  "id":"password_reset",
  "flags":{"secured":true},
  "url":"api/account/password-reset",
  "encode":false
};

// statsnet.interface.net-account/ROUTES [19] 
var ROUTES = {
  "email_add_additional":email_add_additional,
  "email_verify_additional_resend":email_verify_additional_resend,
  "login":login,
  "password_change":password_change,
  "password_reset":password_reset
};

// statsnet.interface.net-account/make-routes [22] 
function make_routes(){
  return ut.collect_routes_object(ROUTES);
}

var MODULE = {
  "email_add_additional":email_add_additional,
  "email_verify_additional_resend":email_verify_additional_resend,
  "login":login,
  "password_change":password_change,
  "password_reset":password_reset,
  "ROUTES":ROUTES,
  "make_routes":make_routes
};

module.exports = MODULE