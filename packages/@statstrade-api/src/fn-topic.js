const ut = require("@xtalk/db/base-util")

// statsapi.list.fn-topic/topic-check-available [16] 
var topic_check_available = {
  "input":[
    {"symbol":"i_account_id","type":"uuid"},
    {"symbol":"i_organisation_id","type":"uuid"},
    {"symbol":"i_topic_code","type":"text"}
  ],
  "return":"boolean",
  "schema":"prediction/data-topic",
  "id":"topic_check_available",
  "flags":{"token":true},
  "url":"api/topic/topic-check-available"
};

// statsapi.list.fn-topic/topic-modify [16] 
var topic_modify = {
  "input":[
    {"symbol":"i_account_id","type":"uuid"},
    {"symbol":"i_topic_id","type":"uuid"},
    {"symbol":"m","type":"jsonb"}
  ],
  "return":"jsonb",
  "schema":"prediction/data-topic",
  "id":"topic_modify",
  "flags":{"token":true},
  "url":"api/topic/topic-modify"
};

// statsapi.list.fn-topic/topic-remove [16] 
var topic_remove = {
  "input":[
    {"symbol":"i_account_id","type":"uuid"},
    {"symbol":"i_topic_id","type":"uuid"}
  ],
  "return":"jsonb",
  "schema":"prediction/data-topic",
  "id":"topic_remove",
  "flags":{"token":true,"mq.event":true},
  "url":"api/topic/topic-remove"
};

// statsapi.list.fn-topic/topic-arrange-prospects [16] 
var topic_arrange_prospects = {
  "input":[
    {"symbol":"i_account_id","type":"uuid"},
    {"symbol":"i_topic_id","type":"uuid"},
    {"symbol":"i_prospect_order","type":"jsonb"}
  ],
  "return":"jsonb",
  "schema":"prediction/data-topic",
  "id":"topic_arrange_prospects",
  "flags":{"token":true,"mq.event":true},
  "url":"api/topic/topic-arrange-prospects"
};

// statsapi.list.fn-topic/topic-add-star [16] 
var topic_add_star = {
  "input":[
    {"symbol":"i_account_id","type":"uuid"},
    {"symbol":"i_topic_id","type":"uuid"}
  ],
  "return":"jsonb",
  "schema":"prediction/data-topic",
  "id":"topic_add_star",
  "flags":{"token":true,"mq.event":true},
  "url":"api/topic/topic-add-star"
};

// statsapi.list.fn-topic/topic-remove-star [16] 
var topic_remove_star = {
  "input":[
    {"symbol":"i_account_id","type":"uuid"},
    {"symbol":"i_topic_id","type":"uuid"}
  ],
  "return":"jsonb",
  "schema":"prediction/data-topic",
  "id":"topic_remove_star",
  "flags":{"token":true,"mq.event":true},
  "url":"api/topic/topic-remove-star"
};

// statsapi.list.fn-topic/topic-post-wall [16] 
var topic_post_wall = {
  "input":[
    {"symbol":"i_account_id","type":"uuid"},
    {"symbol":"i_topic_id","type":"uuid"},
    {"symbol":"i_parent_id","type":"uuid"},
    {"symbol":"i_body","type":"text"}
  ],
  "return":"jsonb",
  "schema":"prediction/data-topic",
  "id":"topic_post_wall",
  "flags":{"token":true,"mq.event":true},
  "url":"api/topic/topic-post-wall"
};

// statsapi.list.fn-topic/topic-edit-wall [16] 
var topic_edit_wall = {
  "input":[
    {"symbol":"i_account_id","type":"uuid"},
    {"symbol":"i_topic_id","type":"uuid"},
    {"symbol":"i_communication_id","type":"uuid"},
    {"symbol":"i_new_body","type":"text"}
  ],
  "return":"jsonb",
  "schema":"prediction/data-topic",
  "id":"topic_edit_wall",
  "flags":{"token":true,"mq.event":true},
  "url":"api/topic/topic-edit-wall"
};

// statsapi.list.fn-topic/topic-upvote-wall [16] 
var topic_upvote_wall = {
  "input":[
    {"symbol":"i_account_id","type":"uuid"},
    {"symbol":"i_topic_id","type":"uuid"},
    {"symbol":"i_communication_id","type":"uuid"}
  ],
  "return":"jsonb",
  "schema":"prediction/data-topic",
  "id":"topic_upvote_wall",
  "flags":{"token":true,"mq.event":true},
  "url":"api/topic/topic-upvote-wall"
};

// statsapi.list.fn-topic/topic-downvote-wall [16] 
var topic_downvote_wall = {
  "input":[
    {"symbol":"i_account_id","type":"uuid"},
    {"symbol":"i_topic_id","type":"uuid"},
    {"symbol":"i_communication_id","type":"uuid"}
  ],
  "return":"jsonb",
  "schema":"prediction/data-topic",
  "id":"topic_downvote_wall",
  "flags":{"token":true,"mq.event":true},
  "url":"api/topic/topic-downvote-wall"
};

// statsapi.list.fn-topic/topic-unvote-wall [16] 
var topic_unvote_wall = {
  "input":[
    {"symbol":"i_account_id","type":"uuid"},
    {"symbol":"i_topic_id","type":"uuid"},
    {"symbol":"i_communication_id","type":"uuid"}
  ],
  "return":"jsonb",
  "schema":"prediction/data-topic",
  "id":"topic_unvote_wall",
  "flags":{"token":true,"mq.event":true},
  "url":"api/topic/topic-unvote-wall"
};

// statsapi.list.fn-topic/topic-add-judge [16] 
var topic_add_judge = {
  "input":[
    {"symbol":"i_account_id","type":"uuid"},
    {"symbol":"i_topic_id","type":"uuid"},
    {"symbol":"i_judge_account_id","type":"uuid"}
  ],
  "return":"jsonb",
  "schema":"prediction/data-topic",
  "id":"topic_add_judge",
  "flags":{"token":true},
  "url":"api/topic/topic-add-judge"
};

// statsapi.list.fn-topic/topic-remove-judge [16] 
var topic_remove_judge = {
  "input":[
    {"symbol":"i_account_id","type":"uuid"},
    {"symbol":"i_topic_id","type":"uuid"},
    {"symbol":"i_judge_account_id","type":"uuid"}
  ],
  "return":"jsonb",
  "schema":"prediction/data-topic",
  "id":"topic_remove_judge",
  "flags":{"token":true},
  "url":"api/topic/topic-remove-judge"
};

// statsapi.list.fn-topic/prospect-create [21] 
var prospect_create = {
  "input":[
    {"symbol":"i_account_id","type":"uuid"},
    {"symbol":"m","type":"jsonb"}
  ],
  "return":"jsonb",
  "schema":"prediction/data-prospect",
  "id":"prospect_create",
  "flags":{"token":true},
  "url":"api/prospect/prospect-create"
};

// statsapi.list.fn-topic/prospect-delete [21] 
var prospect_delete = {
  "input":[
    {"symbol":"i_account_id","type":"uuid"},
    {"symbol":"i_prospect_id","type":"uuid"}
  ],
  "return":"jsonb",
  "schema":"prediction/data-prospect",
  "id":"prospect_delete",
  "flags":{"token":true},
  "url":"api/prospect/prospect-delete"
};

// statsapi.list.fn-topic/prospect-add-star [21] 
var prospect_add_star = {
  "input":[
    {"symbol":"i_account_id","type":"uuid"},
    {"symbol":"i_prospect_id","type":"uuid"}
  ],
  "return":"jsonb",
  "schema":"prediction/data-prospect",
  "id":"prospect_add_star",
  "flags":{"token":true},
  "url":"api/prospect/prospect-add-star"
};

// statsapi.list.fn-topic/prospect-remove-star [21] 
var prospect_remove_star = {
  "input":[
    {"symbol":"i_account_id","type":"uuid"},
    {"symbol":"i_prospect_id","type":"uuid"}
  ],
  "return":"jsonb",
  "schema":"prediction/data-prospect",
  "id":"prospect_remove_star",
  "flags":{"token":true},
  "url":"api/prospect/prospect-remove-star"
};

// statsapi.list.fn-topic/prospect-post-comment [21] 
var prospect_post_comment = {
  "input":[
    {"symbol":"i_account_id","type":"uuid"},
    {"symbol":"i_prospect_id","type":"uuid"},
    {"symbol":"i_parent_id","type":"uuid"},
    {"symbol":"i_body","type":"text"}
  ],
  "return":"jsonb",
  "schema":"prediction/data-prospect",
  "id":"prospect_post_comment",
  "flags":{"token":true},
  "url":"api/prospect/prospect-post-comment"
};

// statsapi.list.fn-topic/prospect-edit-comment [21] 
var prospect_edit_comment = {
  "input":[
    {"symbol":"i_account_id","type":"uuid"},
    {"symbol":"i_prospect_id","type":"uuid"},
    {"symbol":"i_communication_id","type":"uuid"},
    {"symbol":"i_new_body","type":"text"}
  ],
  "return":"jsonb",
  "schema":"prediction/data-prospect",
  "id":"prospect_edit_comment",
  "flags":{"token":true},
  "url":"api/prospect/prospect-edit-comment"
};

// statsapi.list.fn-topic/prospect-upvote-comment [21] 
var prospect_upvote_comment = {
  "input":[
    {"symbol":"i_account_id","type":"uuid"},
    {"symbol":"i_prospect_id","type":"uuid"},
    {"symbol":"i_communication_id","type":"uuid"}
  ],
  "return":"jsonb",
  "schema":"prediction/data-prospect",
  "id":"prospect_upvote_comment",
  "flags":{"token":true},
  "url":"api/prospect/prospect-upvote-comment"
};

// statsapi.list.fn-topic/prospect-downvote-comment [21] 
var prospect_downvote_comment = {
  "input":[
    {"symbol":"i_account_id","type":"uuid"},
    {"symbol":"i_prospect_id","type":"uuid"},
    {"symbol":"i_communication_id","type":"uuid"}
  ],
  "return":"jsonb",
  "schema":"prediction/data-prospect",
  "id":"prospect_downvote_comment",
  "flags":{"token":true},
  "url":"api/prospect/prospect-downvote-comment"
};

// statsapi.list.fn-topic/prospect-unvote-comment [21] 
var prospect_unvote_comment = {
  "input":[
    {"symbol":"i_account_id","type":"uuid"},
    {"symbol":"i_prospect_id","type":"uuid"},
    {"symbol":"i_communication_id","type":"uuid"}
  ],
  "return":"jsonb",
  "schema":"prediction/data-prospect",
  "id":"prospect_unvote_comment",
  "flags":{"token":true},
  "url":"api/prospect/prospect-unvote-comment"
};

// statsapi.list.fn-topic/ROUTES [24] 
var ROUTES = {
  "topic_remove_star":topic_remove_star,
  "topic_add_star":topic_add_star,
  "prospect_post_comment":prospect_post_comment,
  "prospect_delete":prospect_delete,
  "prospect_downvote_comment":prospect_downvote_comment,
  "prospect_add_star":prospect_add_star,
  "prospect_unvote_comment":prospect_unvote_comment,
  "topic_upvote_wall":topic_upvote_wall,
  "prospect_create":prospect_create,
  "topic_check_available":topic_check_available,
  "topic_modify":topic_modify,
  "topic_post_wall":topic_post_wall,
  "topic_downvote_wall":topic_downvote_wall,
  "topic_unvote_wall":topic_unvote_wall,
  "topic_arrange_prospects":topic_arrange_prospects,
  "topic_edit_wall":topic_edit_wall,
  "prospect_edit_comment":prospect_edit_comment,
  "prospect_remove_star":prospect_remove_star,
  "topic_add_judge":topic_add_judge,
  "topic_remove":topic_remove,
  "topic_remove_judge":topic_remove_judge,
  "prospect_upvote_comment":prospect_upvote_comment
};

// statsapi.list.fn-topic/make-routes [27] 
function make_routes(){
  return ut.collect_routes_object(ROUTES);
}

var MODULE = {
  "topic_check_available":topic_check_available,
  "topic_modify":topic_modify,
  "topic_remove":topic_remove,
  "topic_arrange_prospects":topic_arrange_prospects,
  "topic_add_star":topic_add_star,
  "topic_remove_star":topic_remove_star,
  "topic_post_wall":topic_post_wall,
  "topic_edit_wall":topic_edit_wall,
  "topic_upvote_wall":topic_upvote_wall,
  "topic_downvote_wall":topic_downvote_wall,
  "topic_unvote_wall":topic_unvote_wall,
  "topic_add_judge":topic_add_judge,
  "topic_remove_judge":topic_remove_judge,
  "prospect_create":prospect_create,
  "prospect_delete":prospect_delete,
  "prospect_add_star":prospect_add_star,
  "prospect_remove_star":prospect_remove_star,
  "prospect_post_comment":prospect_post_comment,
  "prospect_edit_comment":prospect_edit_comment,
  "prospect_upvote_comment":prospect_upvote_comment,
  "prospect_downvote_comment":prospect_downvote_comment,
  "prospect_unvote_comment":prospect_unvote_comment,
  "ROUTES":ROUTES,
  "make_routes":make_routes
};

module.exports = MODULE