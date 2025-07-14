const ut = require("@xtalk/db/base-util")

// statsapi.list.fn-brand/brand-create [15] 
var brand_create = {
  "input":[
    {"symbol":"i_account_id","type":"uuid"},
    {"symbol":"m","type":"jsonb"}
  ],
  "return":"jsonb",
  "schema":"core/brand-user",
  "id":"brand_create",
  "flags":{"super":true,"mq.event":true},
  "url":"api/brand/brand-create"
};

// statsapi.list.fn-brand/brand-transfer-ownership [15] 
var brand_transfer_ownership = {
  "input":[
    {"symbol":"i_account_id","type":"uuid"},
    {"symbol":"i_brand_id","type":"uuid"},
    {"symbol":"i_new_owner_id","type":"uuid"}
  ],
  "return":"jsonb",
  "schema":"core/brand-user",
  "id":"brand_transfer_ownership",
  "flags":{"token":true,"password":true},
  "url":"api/brand/brand-transfer-ownership"
};

// statsapi.list.fn-brand/brand-remove [15] 
var brand_remove = {
  "input":[
    {"symbol":"i_account_id","type":"uuid"},
    {"symbol":"i_brand_id","type":"uuid"}
  ],
  "return":"jsonb",
  "schema":"core/brand-user",
  "id":"brand_remove",
  "flags":{"token":true},
  "url":"api/brand/brand-remove"
};

// statsapi.list.fn-brand/brand-modify [15] 
var brand_modify = {
  "input":[
    {"symbol":"i_account_id","type":"uuid"},
    {"symbol":"i_brand_id","type":"uuid"},
    {"symbol":"m","type":"jsonb"}
  ],
  "return":"jsonb",
  "schema":"core/brand-user",
  "id":"brand_modify",
  "flags":{"token":true},
  "url":"api/brand/brand-modify"
};

// statsapi.list.fn-brand/brand-add-member [15] 
var brand_add_member = {
  "input":[
    {"symbol":"i_account_id","type":"uuid"},
    {"symbol":"i_brand_id","type":"uuid"},
    {"symbol":"i_new_member_id","type":"uuid"},
    {"symbol":"i_detail","type":"jsonb"}
  ],
  "return":"jsonb",
  "schema":"core/brand-user",
  "id":"brand_add_member",
  "flags":{"token":true,"mq.event":true},
  "url":"api/brand/brand-add-member"
};

// statsapi.list.fn-brand/brand-remove-member [15] 
var brand_remove_member = {
  "input":[
    {"symbol":"i_account_id","type":"uuid"},
    {"symbol":"i_brand_id","type":"uuid"},
    {"symbol":"i_member_id","type":"uuid"}
  ],
  "return":"jsonb",
  "schema":"core/brand-user",
  "id":"brand_remove_member",
  "flags":{"token":true,"mq.event":true},
  "url":"api/brand/brand-remove-member"
};

// statsapi.list.fn-brand/brand-leave-as-member [15] 
var brand_leave_as_member = {
  "input":[
    {"symbol":"i_account_id","type":"uuid"},
    {"symbol":"i_brand_id","type":"uuid"}
  ],
  "return":"jsonb",
  "schema":"core/brand-user",
  "id":"brand_leave_as_member",
  "flags":{"token":true,"mq.event":true},
  "url":"api/brand/brand-leave-as-member"
};

// statsapi.list.fn-brand/brand-add-star [15] 
var brand_add_star = {
  "input":[
    {"symbol":"i_account_id","type":"uuid"},
    {"symbol":"i_brand_id","type":"uuid"}
  ],
  "return":"jsonb",
  "schema":"core/brand-user",
  "id":"brand_add_star",
  "flags":{"token":true,"mq.event":true},
  "url":"api/brand/brand-add-star"
};

// statsapi.list.fn-brand/brand-remove-star [15] 
var brand_remove_star = {
  "input":[
    {"symbol":"i_account_id","type":"uuid"},
    {"symbol":"i_brand_id","type":"uuid"}
  ],
  "return":"jsonb",
  "schema":"core/brand-user",
  "id":"brand_remove_star",
  "flags":{"token":true,"mq.event":true},
  "url":"api/brand/brand-remove-star"
};

// statsapi.list.fn-brand/brand-post-wall [15] 
var brand_post_wall = {
  "input":[
    {"symbol":"i_account_id","type":"uuid"},
    {"symbol":"i_brand_id","type":"uuid"},
    {"symbol":"i_parent_id","type":"uuid"},
    {"symbol":"i_body","type":"text"}
  ],
  "return":"jsonb",
  "schema":"core/brand-user",
  "id":"brand_post_wall",
  "flags":{"token":true,"mq.event":true},
  "url":"api/brand/brand-post-wall"
};

// statsapi.list.fn-brand/brand-edit-wall [15] 
var brand_edit_wall = {
  "input":[
    {"symbol":"i_account_id","type":"uuid"},
    {"symbol":"i_brand_id","type":"uuid"},
    {"symbol":"i_communication_id","type":"uuid"},
    {"symbol":"i_new_body","type":"text"}
  ],
  "return":"jsonb",
  "schema":"core/brand-user",
  "id":"brand_edit_wall",
  "flags":{"token":true,"mq.event":true},
  "url":"api/brand/brand-edit-wall"
};

// statsapi.list.fn-brand/brand-upvote-wall [15] 
var brand_upvote_wall = {
  "input":[
    {"symbol":"i_account_id","type":"uuid"},
    {"symbol":"i_brand_id","type":"uuid"},
    {"symbol":"i_communication_id","type":"uuid"}
  ],
  "return":"jsonb",
  "schema":"core/brand-user",
  "id":"brand_upvote_wall",
  "flags":{"token":true,"mq.event":true},
  "url":"api/brand/brand-upvote-wall"
};

// statsapi.list.fn-brand/brand-downvote-wall [15] 
var brand_downvote_wall = {
  "input":[
    {"symbol":"i_account_id","type":"uuid"},
    {"symbol":"i_brand_id","type":"uuid"},
    {"symbol":"i_communication_id","type":"uuid"}
  ],
  "return":"jsonb",
  "schema":"core/brand-user",
  "id":"brand_downvote_wall",
  "flags":{"token":true,"mq.event":true},
  "url":"api/brand/brand-downvote-wall"
};

// statsapi.list.fn-brand/brand-unvote-wall [15] 
var brand_unvote_wall = {
  "input":[
    {"symbol":"i_account_id","type":"uuid"},
    {"symbol":"i_brand_id","type":"uuid"},
    {"symbol":"i_communication_id","type":"uuid"}
  ],
  "return":"jsonb",
  "schema":"core/brand-user",
  "id":"brand_unvote_wall",
  "flags":{"token":true,"mq.event":true},
  "url":"api/brand/brand-unvote-wall"
};

// statsapi.list.fn-brand/brand-affiliation-add [20] 
var brand_affiliation_add = {
  "input":[
    {"symbol":"i_account_id","type":"uuid"},
    {"symbol":"i_organisation_id","type":"uuid"},
    {"symbol":"i_brand_id","type":"uuid"}
  ],
  "return":"jsonb",
  "schema":"core/brand-request",
  "id":"brand_affiliation_add",
  "flags":{"token":true,"mq.event":true},
  "url":"api/brand/brand-affiliation-add"
};

// statsapi.list.fn-brand/brand-affiliation-remove [20] 
var brand_affiliation_remove = {
  "input":[
    {"symbol":"i_account_id","type":"uuid"},
    {"symbol":"i_organisation_id","type":"uuid"},
    {"symbol":"i_brand_id","type":"uuid"}
  ],
  "return":"jsonb",
  "schema":"core/brand-request",
  "id":"brand_affiliation_remove",
  "flags":{"token":true,"mq.event":true},
  "url":"api/brand/brand-affiliation-remove"
};

// statsapi.list.fn-brand/brand-affiliation-request [20] 
var brand_affiliation_request = {
  "input":[
    {"symbol":"i_request_account_id","type":"uuid"},
    {"symbol":"i_organisation_id","type":"uuid"},
    {"symbol":"i_brand_id","type":"uuid"}
  ],
  "return":"jsonb",
  "schema":"core/brand-request",
  "id":"brand_affiliation_request",
  "flags":{"token":true,"mq.event":true},
  "url":"api/brand/brand-affiliation-request"
};

// statsapi.list.fn-brand/brand-affiliation-accept [20] 
var brand_affiliation_accept = {
  "input":[
    {"symbol":"i_account_id","type":"uuid"},
    {"symbol":"i_organisation_id","type":"uuid"},
    {"symbol":"i_brand_id","type":"uuid"}
  ],
  "return":"jsonb",
  "schema":"core/brand-request",
  "id":"brand_affiliation_accept",
  "flags":{"token":true,"mq.event":true},
  "url":"api/brand/brand-affiliation-accept"
};

// statsapi.list.fn-brand/brand-affiliation-reject [20] 
var brand_affiliation_reject = {
  "input":[
    {"symbol":"i_account_id","type":"uuid"},
    {"symbol":"i_organisation_id","type":"uuid"},
    {"symbol":"i_brand_id","type":"uuid"}
  ],
  "return":"jsonb",
  "schema":"core/brand-request",
  "id":"brand_affiliation_reject",
  "flags":{"token":true,"mq.event":true},
  "url":"api/brand/brand-affiliation-reject"
};

// statsapi.list.fn-brand/brand-topic-sponsorship-request [20] 
var brand_topic_sponsorship_request = {
  "input":[
    {"symbol":"i_topic_account_id","type":"uuid"},
    {"symbol":"i_brand_id","type":"uuid"},
    {"symbol":"i_topic_id","type":"uuid"}
  ],
  "return":"jsonb",
  "schema":"core/brand-request",
  "id":"brand_topic_sponsorship_request",
  "flags":{"token":true,"mq.event":true},
  "url":"api/brand/brand-topic-sponsorship-request"
};

// statsapi.list.fn-brand/brand-topic-sponsorship-response [20] 
var brand_topic_sponsorship_response = {
  "input":[
    {"symbol":"i_brand_account_id","type":"uuid"},
    {"symbol":"i_sponsorship_id","type":"uuid"},
    {"symbol":"i_status","type":"text"}
  ],
  "return":"jsonb",
  "schema":"core/brand-request",
  "id":"brand_topic_sponsorship_response",
  "flags":{"token":true,"mq.event":true},
  "url":"api/brand/brand-topic-sponsorship-response"
};

// statsapi.list.fn-brand/brand-swap-sponsorship-request [20] 
var brand_swap_sponsorship_request = {
  "input":[
    {"symbol":"i_swap_account_id","type":"uuid"},
    {"symbol":"i_brand_id","type":"uuid"},
    {"symbol":"i_swap_id","type":"uuid"}
  ],
  "return":"jsonb",
  "schema":"core/brand-request",
  "id":"brand_swap_sponsorship_request",
  "flags":{"token":true,"mq.event":true},
  "url":"api/brand/brand-swap-sponsorship-request"
};

// statsapi.list.fn-brand/brand-swap-sponsorship-response [20] 
var brand_swap_sponsorship_response = {
  "input":[
    {"symbol":"i_brand_account_id","type":"uuid"},
    {"symbol":"i_sponsorship_id","type":"uuid"},
    {"symbol":"i_status","type":"text"}
  ],
  "return":"jsonb",
  "schema":"core/brand-request",
  "id":"brand_swap_sponsorship_response",
  "flags":{"token":true,"mq.event":true},
  "url":"api/brand/brand-swap-sponsorship-response"
};

// statsapi.list.fn-brand/ROUTES [23] 
var ROUTES = {
  "brand_affiliation_accept":brand_affiliation_accept,
  "brand_post_wall":brand_post_wall,
  "brand_topic_sponsorship_request":brand_topic_sponsorship_request,
  "brand_affiliation_request":brand_affiliation_request,
  "brand_add_star":brand_add_star,
  "brand_affiliation_reject":brand_affiliation_reject,
  "brand_remove_member":brand_remove_member,
  "brand_leave_as_member":brand_leave_as_member,
  "brand_unvote_wall":brand_unvote_wall,
  "brand_affiliation_remove":brand_affiliation_remove,
  "brand_affiliation_add":brand_affiliation_add,
  "brand_remove_star":brand_remove_star,
  "brand_topic_sponsorship_response":brand_topic_sponsorship_response,
  "brand_downvote_wall":brand_downvote_wall,
  "brand_modify":brand_modify,
  "brand_swap_sponsorship_response":brand_swap_sponsorship_response,
  "brand_swap_sponsorship_request":brand_swap_sponsorship_request,
  "brand_upvote_wall":brand_upvote_wall,
  "brand_edit_wall":brand_edit_wall,
  "brand_add_member":brand_add_member,
  "brand_transfer_ownership":brand_transfer_ownership,
  "brand_create":brand_create,
  "brand_remove":brand_remove
};

// statsapi.list.fn-brand/make-routes [26] 
function make_routes(){
  return ut.collect_routes_object(ROUTES);
}

var MODULE = {
  "brand_create":brand_create,
  "brand_transfer_ownership":brand_transfer_ownership,
  "brand_remove":brand_remove,
  "brand_modify":brand_modify,
  "brand_add_member":brand_add_member,
  "brand_remove_member":brand_remove_member,
  "brand_leave_as_member":brand_leave_as_member,
  "brand_add_star":brand_add_star,
  "brand_remove_star":brand_remove_star,
  "brand_post_wall":brand_post_wall,
  "brand_edit_wall":brand_edit_wall,
  "brand_upvote_wall":brand_upvote_wall,
  "brand_downvote_wall":brand_downvote_wall,
  "brand_unvote_wall":brand_unvote_wall,
  "brand_affiliation_add":brand_affiliation_add,
  "brand_affiliation_remove":brand_affiliation_remove,
  "brand_affiliation_request":brand_affiliation_request,
  "brand_affiliation_accept":brand_affiliation_accept,
  "brand_affiliation_reject":brand_affiliation_reject,
  "brand_topic_sponsorship_request":brand_topic_sponsorship_request,
  "brand_topic_sponsorship_response":brand_topic_sponsorship_response,
  "brand_swap_sponsorship_request":brand_swap_sponsorship_request,
  "brand_swap_sponsorship_response":brand_swap_sponsorship_response,
  "ROUTES":ROUTES,
  "make_routes":make_routes
};

module.exports = MODULE