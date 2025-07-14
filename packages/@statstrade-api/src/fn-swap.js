const ut = require("@xtalk/db/base-util")

// statsapi.list.fn-swap/swap-start-registration [15] 
var swap_start_registration = {
  "input":[
    {"symbol":"i_account_id","type":"uuid"},
    {"symbol":"i_swap_id","type":"uuid"},
    {"symbol":"i_message","type":"text"}
  ],
  "return":"jsonb",
  "schema":"swap/control-lifecycle",
  "id":"swap_start_registration",
  "flags":{"token":true,"mq.event":true},
  "url":"api/swap/swap-start-registration"
};

// statsapi.list.fn-swap/swap-start-allocation [15] 
var swap_start_allocation = {
  "input":[
    {"symbol":"i_account_id","type":"uuid"},
    {"symbol":"i_swap_id","type":"uuid"},
    {"symbol":"i_message","type":"text"}
  ],
  "return":"jsonb",
  "schema":"swap/control-lifecycle",
  "id":"swap_start_allocation",
  "flags":{"token":true,"mq.event":true},
  "url":"api/swap/swap-start-allocation"
};

// statsapi.list.fn-swap/swap-start-trading [15] 
var swap_start_trading = {
  "input":[
    {"symbol":"i_account_id","type":"uuid"},
    {"symbol":"i_swap_id","type":"uuid"},
    {"symbol":"i_message","type":"text"}
  ],
  "return":"jsonb",
  "schema":"swap/control-lifecycle",
  "id":"swap_start_trading",
  "flags":{"token":true,"mq.event":true},
  "url":"api/swap/swap-start-trading"
};

// statsapi.list.fn-swap/swap-pause-trading [15] 
var swap_pause_trading = {
  "input":[
    {"symbol":"i_account_id","type":"uuid"},
    {"symbol":"i_swap_id","type":"uuid"},
    {"symbol":"i_message","type":"text"}
  ],
  "return":"jsonb",
  "schema":"swap/control-lifecycle",
  "id":"swap_pause_trading",
  "flags":{"token":true,"mq.event":true},
  "url":"api/swap/swap-pause-trading"
};

// statsapi.list.fn-swap/swap-stop-trading [15] 
var swap_stop_trading = {
  "input":[
    {"symbol":"i_account_id","type":"uuid"},
    {"symbol":"i_swap_id","type":"uuid"},
    {"symbol":"i_message","type":"text"}
  ],
  "return":"jsonb",
  "schema":"swap/control-lifecycle",
  "id":"swap_stop_trading",
  "flags":{"token":true,"mq.event":true},
  "url":"api/swap/swap-stop-trading"
};

// statsapi.list.fn-swap/swap-start-resolution [15] 
var swap_start_resolution = {
  "input":[
    {"symbol":"i_account_id","type":"uuid"},
    {"symbol":"i_swap_id","type":"uuid"},
    {"symbol":"i_message","type":"text"}
  ],
  "return":"jsonb",
  "schema":"swap/control-lifecycle",
  "id":"swap_start_resolution",
  "flags":{"token":true,"mq.event":true},
  "url":"api/swap/swap-start-resolution"
};

// statsapi.list.fn-swap/swap-resolve [15] 
var swap_resolve = {
  "input":[
    {"symbol":"i_account_id","type":"uuid"},
    {"symbol":"i_swap_id","type":"uuid"},
    {"symbol":"i_limit","type":"integer"}
  ],
  "return":"jsonb",
  "schema":"swap/control-lifecycle",
  "id":"swap_resolve",
  "flags":{"token":true,"mq.event":true},
  "url":"api/swap/swap-resolve"
};

// statsapi.list.fn-swap/swap-complete [15] 
var swap_complete = {
  "input":[
    {"symbol":"i_account_id","type":"uuid"},
    {"symbol":"i_swap_id","type":"uuid"},
    {"symbol":"i_message","type":"text"}
  ],
  "return":"jsonb",
  "schema":"swap/control-lifecycle",
  "id":"swap_complete",
  "flags":{"token":true,"mq.event":true},
  "url":"api/swap/swap-complete"
};

// statsapi.list.fn-swap/swap-check-available [20] 
var swap_check_available = {
  "input":[
    {"symbol":"i_account_id","type":"uuid"},
    {"symbol":"i_organisation_id","type":"uuid"},
    {"symbol":"i_swap_code","type":"text"}
  ],
  "return":"boolean",
  "schema":"swap/data-swap",
  "id":"swap_check_available",
  "flags":{"token":true},
  "url":"api/swap/swap-check-available"
};

// statsapi.list.fn-swap/swap-modify [20] 
var swap_modify = {
  "input":[
    {"symbol":"i_account_id","type":"uuid"},
    {"symbol":"i_swap_id","type":"uuid"},
    {"symbol":"m","type":"jsonb"}
  ],
  "return":"jsonb",
  "schema":"swap/data-swap",
  "id":"swap_modify",
  "flags":{"token":true},
  "url":"api/swap/swap-modify"
};

// statsapi.list.fn-swap/swap-remove [20] 
var swap_remove = {
  "input":[
    {"symbol":"i_account_id","type":"uuid"},
    {"symbol":"i_swap_id","type":"uuid"}
  ],
  "return":"jsonb",
  "schema":"swap/data-swap",
  "id":"swap_remove",
  "flags":{"token":true,"mq.event":true},
  "url":"api/swap/swap-remove"
};

// statsapi.list.fn-swap/swap-add-star [20] 
var swap_add_star = {
  "input":[
    {"symbol":"i_account_id","type":"uuid"},
    {"symbol":"i_swap_id","type":"uuid"}
  ],
  "return":"jsonb",
  "schema":"swap/data-swap",
  "id":"swap_add_star",
  "flags":{"token":true},
  "url":"api/swap/swap-add-star"
};

// statsapi.list.fn-swap/swap-remove-star [20] 
var swap_remove_star = {
  "input":[
    {"symbol":"i_account_id","type":"uuid"},
    {"symbol":"i_swap_id","type":"uuid"}
  ],
  "return":"jsonb",
  "schema":"swap/data-swap",
  "id":"swap_remove_star",
  "flags":{"token":true},
  "url":"api/swap/swap-remove-star"
};

// statsapi.list.fn-swap/swap-post-comment [20] 
var swap_post_comment = {
  "input":[
    {"symbol":"i_account_id","type":"uuid"},
    {"symbol":"i_swap_id","type":"uuid"},
    {"symbol":"i_parent_id","type":"uuid"},
    {"symbol":"i_body","type":"text"}
  ],
  "return":"jsonb",
  "schema":"swap/data-swap",
  "id":"swap_post_comment",
  "flags":{"token":true},
  "url":"api/swap/swap-post-comment"
};

// statsapi.list.fn-swap/swap-edit-comment [20] 
var swap_edit_comment = {
  "input":[
    {"symbol":"i_account_id","type":"uuid"},
    {"symbol":"i_swap_id","type":"uuid"},
    {"symbol":"i_communication_id","type":"uuid"},
    {"symbol":"i_new_body","type":"text"}
  ],
  "return":"jsonb",
  "schema":"swap/data-swap",
  "id":"swap_edit_comment",
  "flags":{"token":true},
  "url":"api/swap/swap-edit-comment"
};

// statsapi.list.fn-swap/swap-upvote-comment [20] 
var swap_upvote_comment = {
  "input":[
    {"symbol":"i_account_id","type":"uuid"},
    {"symbol":"i_swap_id","type":"uuid"},
    {"symbol":"i_communication_id","type":"uuid"}
  ],
  "return":"jsonb",
  "schema":"swap/data-swap",
  "id":"swap_upvote_comment",
  "flags":{"token":true},
  "url":"api/swap/swap-upvote-comment"
};

// statsapi.list.fn-swap/swap-downvote-comment [20] 
var swap_downvote_comment = {
  "input":[
    {"symbol":"i_account_id","type":"uuid"},
    {"symbol":"i_swap_id","type":"uuid"},
    {"symbol":"i_communication_id","type":"uuid"}
  ],
  "return":"jsonb",
  "schema":"swap/data-swap",
  "id":"swap_downvote_comment",
  "flags":{"token":true},
  "url":"api/swap/swap-downvote-comment"
};

// statsapi.list.fn-swap/swap-unvote-comment [20] 
var swap_unvote_comment = {
  "input":[
    {"symbol":"i_account_id","type":"uuid"},
    {"symbol":"i_swap_id","type":"uuid"},
    {"symbol":"i_communication_id","type":"uuid"}
  ],
  "return":"jsonb",
  "schema":"swap/data-swap",
  "id":"swap_unvote_comment",
  "flags":{"token":true},
  "url":"api/swap/swap-unvote-comment"
};

// statsapi.list.fn-swap/ROUTES [23] 
var ROUTES = {
  "swap_start_allocation":swap_start_allocation,
  "swap_edit_comment":swap_edit_comment,
  "swap_start_trading":swap_start_trading,
  "swap_upvote_comment":swap_upvote_comment,
  "swap_add_star":swap_add_star,
  "swap_stop_trading":swap_stop_trading,
  "swap_unvote_comment":swap_unvote_comment,
  "swap_start_registration":swap_start_registration,
  "swap_remove":swap_remove,
  "swap_modify":swap_modify,
  "swap_post_comment":swap_post_comment,
  "swap_check_available":swap_check_available,
  "swap_downvote_comment":swap_downvote_comment,
  "swap_pause_trading":swap_pause_trading,
  "swap_start_resolution":swap_start_resolution,
  "swap_resolve":swap_resolve,
  "swap_complete":swap_complete,
  "swap_remove_star":swap_remove_star
};

// statsapi.list.fn-swap/make-routes [26] 
function make_routes(){
  return ut.collect_routes_object(ROUTES);
}

var MODULE = {
  "swap_start_registration":swap_start_registration,
  "swap_start_allocation":swap_start_allocation,
  "swap_start_trading":swap_start_trading,
  "swap_pause_trading":swap_pause_trading,
  "swap_stop_trading":swap_stop_trading,
  "swap_start_resolution":swap_start_resolution,
  "swap_resolve":swap_resolve,
  "swap_complete":swap_complete,
  "swap_check_available":swap_check_available,
  "swap_modify":swap_modify,
  "swap_remove":swap_remove,
  "swap_add_star":swap_add_star,
  "swap_remove_star":swap_remove_star,
  "swap_post_comment":swap_post_comment,
  "swap_edit_comment":swap_edit_comment,
  "swap_upvote_comment":swap_upvote_comment,
  "swap_downvote_comment":swap_downvote_comment,
  "swap_unvote_comment":swap_unvote_comment,
  "ROUTES":ROUTES,
  "make_routes":make_routes
};

module.exports = MODULE