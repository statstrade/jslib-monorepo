const ut = require("@xtalk/db/base-util")

// statsapi.list.fn-account/get-privacy-policy [16] 
var get_privacy_policy = {
  "input":[],
  "return":"jsonb",
  "schema":"core/account-base",
  "id":"get_privacy_policy",
  "flags":{},
  "url":"api/account/get-privacy-policy"
};

// statsapi.list.fn-account/get-terms-and-conditions [16] 
var get_terms_and_conditions = {
  "input":[],
  "return":"jsonb",
  "schema":"core/account-base",
  "id":"get_terms_and_conditions",
  "flags":{},
  "url":"api/account/get-terms-and-conditions"
};

// statsapi.list.fn-account/check-nickname-exists [16] 
var check_nickname_exists = {
  "input":[{"symbol":"i_nickname","type":"citext"}],
  "return":"boolean",
  "schema":"core/account-base",
  "id":"check_nickname_exists",
  "flags":{},
  "url":"api/account/check-nickname-exists"
};

// statsapi.list.fn-account/check-nickname-available [16] 
var check_nickname_available = {
  "input":[{"symbol":"i_nickname","type":"citext"}],
  "return":"boolean",
  "schema":"core/account-base",
  "id":"check_nickname_available",
  "flags":{},
  "url":"api/account/check-nickname-available"
};

// statsapi.list.fn-account/check-email-exists [16] 
var check_email_exists = {
  "input":[{"symbol":"i_email","type":"citext"}],
  "return":"boolean",
  "schema":"core/account-base",
  "id":"check_email_exists",
  "flags":{},
  "url":"api/account/check-email-exists"
};

// statsapi.list.fn-account/check-email-available [16] 
var check_email_available = {
  "input":[{"symbol":"i_email","type":"citext"}],
  "return":"boolean",
  "schema":"core/account-base",
  "id":"check_email_available",
  "flags":{},
  "url":"api/account/check-email-available"
};

// statsapi.list.fn-account/email-registration [16] 
var email_registration = {
  "input":[
    {"symbol":"m","type":"jsonb"},
    {"symbol":"i_debug","type":"jsonb"}
  ],
  "return":"jsonb",
  "schema":"core/account-base",
  "id":"email_registration",
  "flags":{"debug":true,"mq.event":true},
  "url":"api/account/email-registration"
};

// statsapi.list.fn-account/email-registration-external [16] 
var email_registration_external = {
  "input":[
    {"symbol":"m","type":"jsonb"},
    {"symbol":"i_debug","type":"jsonb"}
  ],
  "return":"jsonb",
  "schema":"core/account-base",
  "id":"email_registration_external",
  "flags":{"debug":true,"mq.event":true},
  "url":"api/account/email-registration-external"
};

// statsapi.list.fn-account/email-verification [16] 
var email_verification = {
  "input":[{"symbol":"m","type":"jsonb"}],
  "return":"jsonb",
  "schema":"core/account-base",
  "id":"email_verification",
  "flags":{"mq.event":true},
  "url":"api/account/email-verification"
};

// statsapi.list.fn-account/email-verification-resend [16] 
var email_verification_resend = {
  "input":[
    {"symbol":"m","type":"jsonb"},
    {"symbol":"i_debug","type":"jsonb"}
  ],
  "return":"jsonb",
  "schema":"core/account-base",
  "id":"email_verification_resend",
  "flags":{"debug":true,"mq.event":true},
  "url":"api/account/email-verification-resend"
};

// statsapi.list.fn-account/create-account [16] 
var create_account = {
  "input":[
    {"symbol":"i_account_id","type":"uuid"},
    {"symbol":"m","type":"jsonb"}
  ],
  "return":"jsonb",
  "schema":"core/account-base",
  "id":"create_account",
  "flags":{"super":true},
  "url":"api/account/create-account"
};

// statsapi.list.fn-account/password-reset-request [16] 
var password_reset_request = {
  "input":[
    {"symbol":"m","type":"jsonb"},
    {"symbol":"i_debug","type":"jsonb"}
  ],
  "return":"jsonb",
  "schema":"core/account-base",
  "id":"password_reset_request",
  "flags":{"debug":true,"mq.event":true},
  "url":"api/account/password-reset-request"
};

// statsapi.list.fn-account/login-renew [16] 
var login_renew = {
  "input":[{"symbol":"i_token","type":"text"}],
  "return":"jsonb",
  "schema":"core/account-base",
  "id":"login_renew",
  "flags":{"secured":true,"mq.event":true},
  "url":"api/account/login-renew"
};

// statsapi.list.fn-account/logout [16] 
var logout = {
  "input":[{"symbol":"i_token","type":"text"}],
  "return":"jsonb",
  "schema":"core/account-base",
  "id":"logout",
  "flags":{"secured":true,"logout":true},
  "url":"api/account/logout"
};

// statsapi.list.fn-account/net-check [16] 
var net_check = {
  "input":[{"symbol":"account_id","type":"uuid"}],
  "return":"boolean",
  "schema":"core/account-base",
  "id":"net_check",
  "flags":{"token":true},
  "url":"api/account/net-check"
};

// statsapi.list.fn-account/profile-modify [35] 
var profile_modify = {
  "input":[
    {"symbol":"i_account_id","type":"uuid"},
    {"symbol":"m","type":"jsonb"}
  ],
  "return":"jsonb",
  "schema":"core/account-user",
  "id":"profile_modify",
  "flags":{"token":true,"mq.event":true},
  "url":"api/account/profile-modify"
};

// statsapi.list.fn-account/notification-modify [35] 
var notification_modify = {
  "input":[
    {"symbol":"i_account_id","type":"uuid"},
    {"symbol":"m","type":"jsonb"}
  ],
  "return":"jsonb",
  "schema":"core/account-user",
  "id":"notification_modify",
  "flags":{"token":true,"mq.event":true},
  "url":"api/account/notification-modify"
};

// statsapi.list.fn-account/email-get-all [35] 
var email_get_all = {
  "input":[{"symbol":"i_account_id","type":"uuid"}],
  "return":"jsonb",
  "schema":"core/account-user",
  "id":"email_get_all",
  "flags":{"token":true},
  "url":"api/account/email-get-all"
};

// statsapi.list.fn-account/email-get-primary [35] 
var email_get_primary = {
  "input":[{"symbol":"i_account_id","type":"uuid"}],
  "return":"jsonb",
  "schema":"core/account-user",
  "id":"email_get_primary",
  "flags":{"token":true},
  "url":"api/account/email-get-primary"
};

// statsapi.list.fn-account/email-remove-additional [35] 
var email_remove_additional = {
  "input":[
    {"symbol":"i_account_id","type":"uuid"},
    {"symbol":"i_email","type":"citext"}
  ],
  "return":"jsonb",
  "schema":"core/account-user",
  "id":"email_remove_additional",
  "flags":{"token":true,"mq.event":true},
  "url":"api/account/email-remove-additional"
};

// statsapi.list.fn-account/email-verify-additional [35] 
var email_verify_additional = {
  "input":[
    {"symbol":"i_account_id","type":"uuid"},
    {"symbol":"i_email","type":"citext"},
    {"symbol":"i_code","type":"citext"}
  ],
  "return":"jsonb",
  "schema":"core/account-user",
  "id":"email_verify_additional",
  "flags":{"token":true,"mq.event":true},
  "url":"api/account/email-verify-additional"
};

// statsapi.list.fn-account/email-set-primary [35] 
var email_set_primary = {
  "input":[
    {"symbol":"i_account_id","type":"uuid"},
    {"symbol":"i_email","type":"citext"}
  ],
  "return":"jsonb",
  "schema":"core/account-user",
  "id":"email_set_primary",
  "flags":{"token":true,"mq.event":true},
  "url":"api/account/email-set-primary"
};

// statsapi.list.fn-account/delete-account-check [35] 
var delete_account_check = {
  "input":[{"symbol":"i_account_id","type":"uuid"}],
  "return":"jsonb",
  "schema":"core/account-user",
  "id":"delete_account_check",
  "flags":{"token":true},
  "url":"api/account/delete-account-check"
};

// statsapi.list.fn-account/delete-account [35] 
var delete_account = {
  "input":[{"symbol":"i_account_id","type":"uuid"}],
  "return":"jsonb",
  "schema":"core/account-user",
  "id":"delete_account",
  "flags":{"token":true,"password":true},
  "url":"api/account/delete-account"
};

// statsapi.list.fn-account/oauth-unlink [40] 
var oauth_unlink = {
  "input":[
    {"symbol":"i_account_id","type":"uuid"},
    {"symbol":"i_identity","type":"jsonb"}
  ],
  "return":"jsonb",
  "schema":"core/account-social",
  "id":"oauth_unlink",
  "flags":{"token":true,"mq.event":true},
  "url":"api/account/oauth-unlink"
};

// statsapi.list.fn-account/ROUTES [43] 
var ROUTES = {
  "create_account":create_account,
  "password_reset_request":password_reset_request,
  "profile_modify":profile_modify,
  "email_registration":email_registration,
  "notification_modify":notification_modify,
  "check_email_exists":check_email_exists,
  "email_verification":email_verification,
  "email_verify_additional":email_verify_additional,
  "email_registration_external":email_registration_external,
  "delete_account":delete_account,
  "get_privacy_policy":get_privacy_policy,
  "check_nickname_available":check_nickname_available,
  "delete_account_check":delete_account_check,
  "login_renew":login_renew,
  "net_check":net_check,
  "email_get_primary":email_get_primary,
  "email_remove_additional":email_remove_additional,
  "check_nickname_exists":check_nickname_exists,
  "oauth_unlink":oauth_unlink,
  "check_email_available":check_email_available,
  "email_get_all":email_get_all,
  "get_terms_and_conditions":get_terms_and_conditions,
  "logout":logout,
  "email_set_primary":email_set_primary,
  "email_verification_resend":email_verification_resend
};

// statsapi.list.fn-account/make-routes [46] 
function make_routes(){
  return ut.collect_routes_object(ROUTES);
}

var MODULE = {
  "get_privacy_policy":get_privacy_policy,
  "get_terms_and_conditions":get_terms_and_conditions,
  "check_nickname_exists":check_nickname_exists,
  "check_nickname_available":check_nickname_available,
  "check_email_exists":check_email_exists,
  "check_email_available":check_email_available,
  "email_registration":email_registration,
  "email_registration_external":email_registration_external,
  "email_verification":email_verification,
  "email_verification_resend":email_verification_resend,
  "create_account":create_account,
  "password_reset_request":password_reset_request,
  "login_renew":login_renew,
  "logout":logout,
  "net_check":net_check,
  "profile_modify":profile_modify,
  "notification_modify":notification_modify,
  "email_get_all":email_get_all,
  "email_get_primary":email_get_primary,
  "email_remove_additional":email_remove_additional,
  "email_verify_additional":email_verify_additional,
  "email_set_primary":email_set_primary,
  "delete_account_check":delete_account_check,
  "delete_account":delete_account,
  "oauth_unlink":oauth_unlink,
  "ROUTES":ROUTES,
  "make_routes":make_routes
};

module.exports = MODULE