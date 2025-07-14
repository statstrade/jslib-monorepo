const ut = require("@xtalk/db/base-util")

// statsapi.list.fn-room/room-check-available [15] 
var room_check_available = {
  "input":[
    {"symbol":"i_account_id","type":"uuid"},
    {"symbol":"i_organisation_id","type":"uuid"},
    {"symbol":"i_room_name","type":"text"}
  ],
  "return":"boolean",
  "schema":"core/room-manage",
  "id":"room_check_available",
  "flags":{"token":true},
  "url":"api/room/room-check-available"
};

// statsapi.list.fn-room/room-add-star [15] 
var room_add_star = {
  "input":[
    {"symbol":"i_account_id","type":"uuid"},
    {"symbol":"i_room_id","type":"uuid"}
  ],
  "return":"jsonb",
  "schema":"core/room-manage",
  "id":"room_add_star",
  "flags":{"token":true,"mq.event":true},
  "url":"api/room/room-add-star"
};

// statsapi.list.fn-room/room-remove-star [15] 
var room_remove_star = {
  "input":[
    {"symbol":"i_account_id","type":"uuid"},
    {"symbol":"i_room_id","type":"uuid"}
  ],
  "return":"jsonb",
  "schema":"core/room-manage",
  "id":"room_remove_star",
  "flags":{"token":true,"mq.event":true},
  "url":"api/room/room-remove-star"
};

// statsapi.list.fn-room/room-post-wall [15] 
var room_post_wall = {
  "input":[
    {"symbol":"i_account_id","type":"uuid"},
    {"symbol":"i_room_id","type":"uuid"},
    {"symbol":"i_parent_id","type":"uuid"},
    {"symbol":"i_body","type":"text"}
  ],
  "return":"jsonb",
  "schema":"core/room-manage",
  "id":"room_post_wall",
  "flags":{"token":true,"mq.event":true},
  "url":"api/room/room-post-wall"
};

// statsapi.list.fn-room/room-edit-wall [15] 
var room_edit_wall = {
  "input":[
    {"symbol":"i_account_id","type":"uuid"},
    {"symbol":"i_room_id","type":"uuid"},
    {"symbol":"i_communication_id","type":"uuid"},
    {"symbol":"i_new_body","type":"text"}
  ],
  "return":"jsonb",
  "schema":"core/room-manage",
  "id":"room_edit_wall",
  "flags":{"token":true,"mq.event":true},
  "url":"api/room/room-edit-wall"
};

// statsapi.list.fn-room/room-upvote-wall [15] 
var room_upvote_wall = {
  "input":[
    {"symbol":"i_account_id","type":"uuid"},
    {"symbol":"i_room_id","type":"uuid"},
    {"symbol":"i_communication_id","type":"uuid"}
  ],
  "return":"jsonb",
  "schema":"core/room-manage",
  "id":"room_upvote_wall",
  "flags":{"token":true,"mq.event":true},
  "url":"api/room/room-upvote-wall"
};

// statsapi.list.fn-room/room-downvote-wall [15] 
var room_downvote_wall = {
  "input":[
    {"symbol":"i_account_id","type":"uuid"},
    {"symbol":"i_room_id","type":"uuid"},
    {"symbol":"i_communication_id","type":"uuid"}
  ],
  "return":"jsonb",
  "schema":"core/room-manage",
  "id":"room_downvote_wall",
  "flags":{"token":true,"mq.event":true},
  "url":"api/room/room-downvote-wall"
};

// statsapi.list.fn-room/room-unvote-wall [15] 
var room_unvote_wall = {
  "input":[
    {"symbol":"i_account_id","type":"uuid"},
    {"symbol":"i_room_id","type":"uuid"},
    {"symbol":"i_communication_id","type":"uuid"}
  ],
  "return":"jsonb",
  "schema":"core/room-manage",
  "id":"room_unvote_wall",
  "flags":{"token":true,"mq.event":true},
  "url":"api/room/room-unvote-wall"
};

// statsapi.list.fn-room/room-join-invite-send [15] 
var room_join_invite_send = {
  "input":[
    {"symbol":"i_account_id","type":"uuid"},
    {"symbol":"i_room_id","type":"uuid"},
    {"symbol":"i_invited_account_id","type":"uuid"},
    {"symbol":"i_role","type":"text"},
    {"symbol":"i_detail","type":"jsonb"}
  ],
  "return":"jsonb",
  "schema":"core/room-manage",
  "id":"room_join_invite_send",
  "flags":{"token":true,"mq.event":true},
  "url":"api/room/room-join-invite-send"
};

// statsapi.list.fn-room/room-join-invite-accept [15] 
var room_join_invite_accept = {
  "input":[
    {"symbol":"i_account_id","type":"uuid"},
    {"symbol":"i_room_id","type":"uuid"},
    {"symbol":"i_from_account_id","type":"uuid"}
  ],
  "return":"jsonb",
  "schema":"core/room-manage",
  "id":"room_join_invite_accept",
  "flags":{"token":true,"mq.event":true},
  "url":"api/room/room-join-invite-accept"
};

// statsapi.list.fn-room/room-join-invite-cancel [15] 
var room_join_invite_cancel = {
  "input":[
    {"symbol":"i_account_id","type":"uuid"},
    {"symbol":"i_room_id","type":"uuid"},
    {"symbol":"i_invited_account_id","type":"uuid"}
  ],
  "return":"jsonb",
  "schema":"core/room-manage",
  "id":"room_join_invite_cancel",
  "flags":{"token":true,"mq.event":true},
  "url":"api/room/room-join-invite-cancel"
};

// statsapi.list.fn-room/room-join-invite-reject [15] 
var room_join_invite_reject = {
  "input":[
    {"symbol":"i_account_id","type":"uuid"},
    {"symbol":"i_room_id","type":"uuid"},
    {"symbol":"i_from_account_id","type":"uuid"}
  ],
  "return":"jsonb",
  "schema":"core/room-manage",
  "id":"room_join_invite_reject",
  "flags":{"token":true,"mq.event":true},
  "url":"api/room/room-join-invite-reject"
};

// statsapi.list.fn-room/room-join-request-send [15] 
var room_join_request_send = {
  "input":[
    {"symbol":"i_request_account_id","type":"uuid"},
    {"symbol":"i_room_id","type":"uuid"}
  ],
  "return":"jsonb",
  "schema":"core/room-manage",
  "id":"room_join_request_send",
  "flags":{"token":true,"mq.event":true},
  "url":"api/room/room-join-request-send"
};

// statsapi.list.fn-room/room-join-request-accept [15] 
var room_join_request_accept = {
  "input":[
    {"symbol":"i_account_id","type":"uuid"},
    {"symbol":"i_room_id","type":"uuid"},
    {"symbol":"i_request_account_id","type":"uuid"}
  ],
  "return":"jsonb",
  "schema":"core/room-manage",
  "id":"room_join_request_accept",
  "flags":{"token":true,"mq.event":true},
  "url":"api/room/room-join-request-accept"
};

// statsapi.list.fn-room/room-join-request-cancel [15] 
var room_join_request_cancel = {
  "input":[
    {"symbol":"i_request_account_id","type":"uuid"},
    {"symbol":"i_room_id","type":"uuid"}
  ],
  "return":"jsonb",
  "schema":"core/room-manage",
  "id":"room_join_request_cancel",
  "flags":{"token":true,"mq.event":true},
  "url":"api/room/room-join-request-cancel"
};

// statsapi.list.fn-room/room-join-request-reject [15] 
var room_join_request_reject = {
  "input":[
    {"symbol":"i_account_id","type":"uuid"},
    {"symbol":"i_room_id","type":"uuid"},
    {"symbol":"i_request_account_id","type":"uuid"}
  ],
  "return":"jsonb",
  "schema":"core/room-manage",
  "id":"room_join_request_reject",
  "flags":{"token":true,"mq.event":true},
  "url":"api/room/room-join-request-reject"
};

// statsapi.list.fn-room/room-add-member [15] 
var room_add_member = {
  "input":[
    {"symbol":"i_account_id","type":"uuid"},
    {"symbol":"i_room_id","type":"uuid"},
    {"symbol":"i_new_member_id","type":"uuid"},
    {"symbol":"i_detail","type":"jsonb"}
  ],
  "return":"jsonb",
  "schema":"core/room-manage",
  "id":"room_add_member",
  "flags":{"token":true,"mq.event":true},
  "url":"api/room/room-add-member"
};

// statsapi.list.fn-room/room-remove-member [15] 
var room_remove_member = {
  "input":[
    {"symbol":"i_account_id","type":"uuid"},
    {"symbol":"i_room_id","type":"uuid"},
    {"symbol":"i_member_id","type":"uuid"}
  ],
  "return":"jsonb",
  "schema":"core/room-manage",
  "id":"room_remove_member",
  "flags":{"token":true,"mq.event":true},
  "url":"api/room/room-remove-member"
};

// statsapi.list.fn-room/room-activate [15] 
var room_activate = {
  "input":[
    {"symbol":"i_account_id","type":"uuid"},
    {"symbol":"i_room_id","type":"uuid"}
  ],
  "return":"jsonb",
  "schema":"core/room-manage",
  "id":"room_activate",
  "flags":{"token":true,"mq.event":true},
  "url":"api/room/room-activate"
};

// statsapi.list.fn-room/room-deactivate [15] 
var room_deactivate = {
  "input":[
    {"symbol":"i_account_id","type":"uuid"},
    {"symbol":"i_room_id","type":"uuid"}
  ],
  "return":"jsonb",
  "schema":"core/room-manage",
  "id":"room_deactivate",
  "flags":{"token":true,"mq.event":true},
  "url":"api/room/room-deactivate"
};

// statsapi.list.fn-room/room-set-official [15] 
var room_set_official = {
  "input":[
    {"symbol":"i_super_id","type":"uuid"},
    {"symbol":"i_room_id","type":"uuid"},
    {"symbol":"i_is_official","type":"boolean"}
  ],
  "return":"jsonb",
  "schema":"core/room-manage",
  "id":"room_set_official",
  "flags":{"super":true,"mq.event":true},
  "url":"api/room/room-set-official"
};

// statsapi.list.fn-room/room-modify [20] 
var room_modify = {
  "input":[
    {"symbol":"i_account_id","type":"uuid"},
    {"symbol":"i_room_id","type":"uuid"},
    {"symbol":"m","type":"jsonb"}
  ],
  "return":"jsonb",
  "schema":"core/room-platform",
  "id":"room_modify",
  "flags":{"token":true},
  "url":"api/room/room-modify"
};

// statsapi.list.fn-room/room-remove [20] 
var room_remove = {
  "input":[
    {"symbol":"i_account_id","type":"uuid"},
    {"symbol":"i_room_id","type":"uuid"}
  ],
  "return":"jsonb",
  "schema":"core/room-platform",
  "id":"room_remove",
  "flags":{"token":true},
  "url":"api/room/room-remove"
};

// statsapi.list.fn-room/room-gas-asset-recharge [20] 
var room_gas_asset_recharge = {
  "input":[
    {"symbol":"i_account_id","type":"uuid"},
    {"symbol":"i_room_id","type":"uuid"},
    {"symbol":"i_amount","type":"numeric"}
  ],
  "return":"jsonb",
  "schema":"core/room-platform",
  "id":"room_gas_asset_recharge",
  "flags":{"token":true,"mq.event":true},
  "url":"api/room/room-gas-asset-recharge"
};

// statsapi.list.fn-room/room-evm-create-vault-request [20] 
var room_evm_create_vault_request = {
  "input":[
    {"symbol":"i_account_id","type":"uuid"},
    {"symbol":"i_room_id","type":"uuid"}
  ],
  "return":"jsonb",
  "schema":"core/room-platform",
  "id":"room_evm_create_vault_request",
  "flags":{"token":true,"mq.event":true},
  "url":"api/room/room-evm-create-vault-request"
};

// statsapi.list.fn-room/room-evm-account-open-request [20] 
var room_evm_account_open_request = {
  "input":[
    {"symbol":"i_account_id","type":"uuid"},
    {"symbol":"i_room_id","type":"uuid"},
    {"symbol":"i_user_address_id","type":"citext"}
  ],
  "return":"jsonb",
  "schema":"core/room-platform",
  "id":"room_evm_account_open_request",
  "flags":{"token":true,"mq.event":true},
  "url":"api/room/room-evm-account-open-request"
};

// statsapi.list.fn-room/room-evm-account-close-request [20] 
var room_evm_account_close_request = {
  "input":[
    {"symbol":"i_account_id","type":"uuid"},
    {"symbol":"i_room_id","type":"uuid"},
    {"symbol":"i_user_address_id","type":"citext"}
  ],
  "return":"jsonb",
  "schema":"core/room-platform",
  "id":"room_evm_account_close_request",
  "flags":{"token":true,"mq.event":true},
  "url":"api/room/room-evm-account-close-request"
};

// statsapi.list.fn-room/ROUTES [23] 
var ROUTES = {
  "room_modify":room_modify,
  "room_remove_star":room_remove_star,
  "room_join_request_reject":room_join_request_reject,
  "room_set_official":room_set_official,
  "room_evm_create_vault_request":room_evm_create_vault_request,
  "room_upvote_wall":room_upvote_wall,
  "room_unvote_wall":room_unvote_wall,
  "room_gas_asset_recharge":room_gas_asset_recharge,
  "room_activate":room_activate,
  "room_join_invite_accept":room_join_invite_accept,
  "room_join_request_send":room_join_request_send,
  "room_downvote_wall":room_downvote_wall,
  "room_remove_member":room_remove_member,
  "room_add_member":room_add_member,
  "room_remove":room_remove,
  "room_deactivate":room_deactivate,
  "room_evm_account_open_request":room_evm_account_open_request,
  "room_evm_account_close_request":room_evm_account_close_request,
  "room_check_available":room_check_available,
  "room_add_star":room_add_star,
  "room_post_wall":room_post_wall,
  "room_join_request_accept":room_join_request_accept,
  "room_join_request_cancel":room_join_request_cancel,
  "room_edit_wall":room_edit_wall,
  "room_join_invite_reject":room_join_invite_reject,
  "room_join_invite_send":room_join_invite_send,
  "room_join_invite_cancel":room_join_invite_cancel
};

// statsapi.list.fn-room/make-routes [26] 
function make_routes(){
  return ut.collect_routes_object(ROUTES);
}

var MODULE = {
  "room_check_available":room_check_available,
  "room_add_star":room_add_star,
  "room_remove_star":room_remove_star,
  "room_post_wall":room_post_wall,
  "room_edit_wall":room_edit_wall,
  "room_upvote_wall":room_upvote_wall,
  "room_downvote_wall":room_downvote_wall,
  "room_unvote_wall":room_unvote_wall,
  "room_join_invite_send":room_join_invite_send,
  "room_join_invite_accept":room_join_invite_accept,
  "room_join_invite_cancel":room_join_invite_cancel,
  "room_join_invite_reject":room_join_invite_reject,
  "room_join_request_send":room_join_request_send,
  "room_join_request_accept":room_join_request_accept,
  "room_join_request_cancel":room_join_request_cancel,
  "room_join_request_reject":room_join_request_reject,
  "room_add_member":room_add_member,
  "room_remove_member":room_remove_member,
  "room_activate":room_activate,
  "room_deactivate":room_deactivate,
  "room_set_official":room_set_official,
  "room_modify":room_modify,
  "room_remove":room_remove,
  "room_gas_asset_recharge":room_gas_asset_recharge,
  "room_evm_create_vault_request":room_evm_create_vault_request,
  "room_evm_account_open_request":room_evm_account_open_request,
  "room_evm_account_close_request":room_evm_account_close_request,
  "ROUTES":ROUTES,
  "make_routes":make_routes
};

module.exports = MODULE