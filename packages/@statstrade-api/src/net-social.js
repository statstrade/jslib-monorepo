const ut = require("@xtalk/db/base-util")

// statsnet.interface.net-social/oauth-access-token [14] 
var oauth_access_token = {
  "input":[
    {"symbol":"tag","type":"text"},
    {"symbol":"client_id","type":"text"},
    {"symbol":"redirect_url","type":"text"},
    {"symbol":"code","type":"text"},
    {"symbol":"query","type":"jsonb"}
  ],
  "return":"jsonb",
  "id":"oauth_access_token",
  "flags":{},
  "url":"api/social/token",
  "encode":true
};

// statsnet.interface.net-social/oauth-facebook-info [14] 
var oauth_facebook_info = {
  "input":[{"symbol":"oauth_token","type":"text"}],
  "return":"jsonb",
  "id":"oauth_facebook_info",
  "flags":{},
  "url":"api/social/facebook/info",
  "encode":true
};

// statsnet.interface.net-social/oauth-facebook-login [14] 
var oauth_facebook_login = {
  "input":[{"symbol":"oauth_token","type":"text"}],
  "return":"jsonb",
  "id":"oauth_facebook_login",
  "flags":{"login":true},
  "url":"api/social/facebook/login",
  "encode":false
};

// statsnet.interface.net-social/oauth-facebook-register [14] 
var oauth_facebook_register = {
  "input":[
    {"symbol":"oauth_token","type":"text"},
    {"symbol":"m","type":"jsonb"}
  ],
  "return":"jsonb",
  "id":"oauth_facebook_register",
  "flags":{"secured":true},
  "url":"api/social/facebook/register",
  "encode":false
};

// statsnet.interface.net-social/oauth-facebook-link [14] 
var oauth_facebook_link = {
  "input":[
    {"symbol":"i_token","type":"text"},
    {"symbol":"oauth_token","type":"text"}
  ],
  "return":"jsonb",
  "id":"oauth_facebook_link",
  "flags":{},
  "url":"api/social/facebook/link",
  "encode":false
};

// statsnet.interface.net-social/oauth-facebook-is-linked [14] 
var oauth_facebook_is_linked = {
  "input":[
    {"symbol":"i_token","type":"text"},
    {"symbol":"oauth_token","type":"text"}
  ],
  "return":"jsonb",
  "id":"oauth_facebook_is_linked",
  "flags":{},
  "url":"api/social/facebook/is-linked",
  "encode":false
};

// statsnet.interface.net-social/oauth-coinbase-info [14] 
var oauth_coinbase_info = {
  "input":[{"symbol":"oauth_token","type":"text"}],
  "return":"jsonb",
  "id":"oauth_coinbase_info",
  "flags":{},
  "url":"api/social/coinbase/info",
  "encode":true
};

// statsnet.interface.net-social/oauth-coinbase-login [14] 
var oauth_coinbase_login = {
  "input":[{"symbol":"oauth_token","type":"text"}],
  "return":"jsonb",
  "id":"oauth_coinbase_login",
  "flags":{"login":true},
  "url":"api/social/coinbase/login",
  "encode":false
};

// statsnet.interface.net-social/oauth-coinbase-register [14] 
var oauth_coinbase_register = {
  "input":[
    {"symbol":"oauth_token","type":"text"},
    {"symbol":"m","type":"jsonb"}
  ],
  "return":"jsonb",
  "id":"oauth_coinbase_register",
  "flags":{"secured":true},
  "url":"api/social/coinbase/register",
  "encode":false
};

// statsnet.interface.net-social/oauth-coinbase-link [14] 
var oauth_coinbase_link = {
  "input":[
    {"symbol":"i_token","type":"text"},
    {"symbol":"oauth_token","type":"text"}
  ],
  "return":"jsonb",
  "id":"oauth_coinbase_link",
  "flags":{},
  "url":"api/social/coinbase/link",
  "encode":false
};

// statsnet.interface.net-social/oauth-coinbase-is-linked [14] 
var oauth_coinbase_is_linked = {
  "input":[
    {"symbol":"i_token","type":"text"},
    {"symbol":"oauth_token","type":"text"}
  ],
  "return":"jsonb",
  "id":"oauth_coinbase_is_linked",
  "flags":{},
  "url":"api/social/coinbase/is-linked",
  "encode":false
};

// statsnet.interface.net-social/oauth-github-info [14] 
var oauth_github_info = {
  "input":[{"symbol":"oauth_token","type":"text"}],
  "return":"jsonb",
  "id":"oauth_github_info",
  "flags":{},
  "url":"api/social/github/info",
  "encode":true
};

// statsnet.interface.net-social/oauth-github-login [14] 
var oauth_github_login = {
  "input":[{"symbol":"oauth_token","type":"text"}],
  "return":"jsonb",
  "id":"oauth_github_login",
  "flags":{"login":true},
  "url":"api/social/github/login",
  "encode":false
};

// statsnet.interface.net-social/oauth-github-register [14] 
var oauth_github_register = {
  "input":[
    {"symbol":"oauth_token","type":"text"},
    {"symbol":"m","type":"jsonb"}
  ],
  "return":"jsonb",
  "id":"oauth_github_register",
  "flags":{"secured":true},
  "url":"api/social/github/register",
  "encode":false
};

// statsnet.interface.net-social/oauth-github-link [14] 
var oauth_github_link = {
  "input":[
    {"symbol":"i_token","type":"text"},
    {"symbol":"oauth_token","type":"text"}
  ],
  "return":"jsonb",
  "id":"oauth_github_link",
  "flags":{},
  "url":"api/social/github/link",
  "encode":false
};

// statsnet.interface.net-social/oauth-github-is-linked [14] 
var oauth_github_is_linked = {
  "input":[
    {"symbol":"i_token","type":"text"},
    {"symbol":"oauth_token","type":"text"}
  ],
  "return":"jsonb",
  "id":"oauth_github_is_linked",
  "flags":{},
  "url":"api/social/github/is-linked",
  "encode":false
};

// statsnet.interface.net-social/ROUTES [32] 
var ROUTES = {
  "oauth_github_link":oauth_github_link,
  "oauth_facebook_info":oauth_facebook_info,
  "oauth_github_login":oauth_github_login,
  "oauth_github_register":oauth_github_register,
  "oauth_coinbase_info":oauth_coinbase_info,
  "oauth_coinbase_register":oauth_coinbase_register,
  "oauth_facebook_link":oauth_facebook_link,
  "oauth_github_is_linked":oauth_github_is_linked,
  "oauth_coinbase_login":oauth_coinbase_login,
  "oauth_coinbase_link":oauth_coinbase_link,
  "oauth_facebook_is_linked":oauth_facebook_is_linked,
  "oauth_facebook_register":oauth_facebook_register,
  "oauth_access_token":oauth_access_token,
  "oauth_github_info":oauth_github_info,
  "oauth_facebook_login":oauth_facebook_login,
  "oauth_coinbase_is_linked":oauth_coinbase_is_linked
};

// statsnet.interface.net-social/make-routes [35] 
function make_routes(){
  return ut.collect_routes_object(ROUTES);
}

var MODULE = {
  "oauth_access_token":oauth_access_token,
  "oauth_facebook_info":oauth_facebook_info,
  "oauth_facebook_login":oauth_facebook_login,
  "oauth_facebook_register":oauth_facebook_register,
  "oauth_facebook_link":oauth_facebook_link,
  "oauth_facebook_is_linked":oauth_facebook_is_linked,
  "oauth_coinbase_info":oauth_coinbase_info,
  "oauth_coinbase_login":oauth_coinbase_login,
  "oauth_coinbase_register":oauth_coinbase_register,
  "oauth_coinbase_link":oauth_coinbase_link,
  "oauth_coinbase_is_linked":oauth_coinbase_is_linked,
  "oauth_github_info":oauth_github_info,
  "oauth_github_login":oauth_github_login,
  "oauth_github_register":oauth_github_register,
  "oauth_github_link":oauth_github_link,
  "oauth_github_is_linked":oauth_github_is_linked,
  "ROUTES":ROUTES,
  "make_routes":make_routes
};

module.exports = MODULE