const ut = require("@xtalk/db/base-util")

// statsapi.list.fn-organisation/organisation-create [15] 
var organisation_create = {
  "input":[
    {"symbol":"i_account_id","type":"uuid"},
    {"symbol":"m","type":"jsonb"}
  ],
  "return":"jsonb",
  "schema":"core/account-organisation",
  "id":"organisation_create",
  "flags":{"token":true,"mq.event":true},
  "url":"api/organisation/organisation-create"
};

// statsapi.list.fn-organisation/organisation-transfer-ownership [15] 
var organisation_transfer_ownership = {
  "input":[
    {"symbol":"i_account_id","type":"uuid"},
    {"symbol":"i_organisation_id","type":"uuid"},
    {"symbol":"i_new_owner_id","type":"uuid"}
  ],
  "return":"jsonb",
  "schema":"core/account-organisation",
  "id":"organisation_transfer_ownership",
  "flags":{"token":true,"password":true},
  "url":"api/organisation/organisation-transfer-ownership"
};

// statsapi.list.fn-organisation/organisation-remove [15] 
var organisation_remove = {
  "input":[
    {"symbol":"i_account_id","type":"uuid"},
    {"symbol":"i_organisation_id","type":"uuid"}
  ],
  "return":"jsonb",
  "schema":"core/account-organisation",
  "id":"organisation_remove",
  "flags":{"token":true},
  "url":"api/organisation/organisation-remove"
};

// statsapi.list.fn-organisation/organisation-modify [15] 
var organisation_modify = {
  "input":[
    {"symbol":"i_account_id","type":"uuid"},
    {"symbol":"i_organisation_id","type":"uuid"},
    {"symbol":"m","type":"jsonb"}
  ],
  "return":"jsonb",
  "schema":"core/account-organisation",
  "id":"organisation_modify",
  "flags":{"token":true},
  "url":"api/organisation/organisation-modify"
};

// statsapi.list.fn-organisation/organisation-add-member [15] 
var organisation_add_member = {
  "input":[
    {"symbol":"i_account_id","type":"uuid"},
    {"symbol":"i_organisation_id","type":"uuid"},
    {"symbol":"i_new_member_id","type":"uuid"},
    {"symbol":"i_detail","type":"jsonb"}
  ],
  "return":"jsonb",
  "schema":"core/account-organisation",
  "id":"organisation_add_member",
  "flags":{"token":true,"mq.event":true},
  "url":"api/organisation/organisation-add-member"
};

// statsapi.list.fn-organisation/organisation-remove-member [15] 
var organisation_remove_member = {
  "input":[
    {"symbol":"i_account_id","type":"uuid"},
    {"symbol":"i_organisation_id","type":"uuid"},
    {"symbol":"i_member_id","type":"uuid"}
  ],
  "return":"jsonb",
  "schema":"core/account-organisation",
  "id":"organisation_remove_member",
  "flags":{"token":true,"mq.event":true},
  "url":"api/organisation/organisation-remove-member"
};

// statsapi.list.fn-organisation/organisation-leave-as-member [15] 
var organisation_leave_as_member = {
  "input":[
    {"symbol":"i_account_id","type":"uuid"},
    {"symbol":"i_organisation_id","type":"uuid"}
  ],
  "return":"jsonb",
  "schema":"core/account-organisation",
  "id":"organisation_leave_as_member",
  "flags":{"token":true,"mq.event":true},
  "url":"api/organisation/organisation-leave-as-member"
};

// statsapi.list.fn-organisation/organisation-set-public-as-member [15] 
var organisation_set_public_as_member = {
  "input":[
    {"symbol":"i_account_id","type":"uuid"},
    {"symbol":"i_organisation_id","type":"uuid"},
    {"symbol":"v_is_public","type":"boolean"}
  ],
  "return":"jsonb",
  "schema":"core/account-organisation",
  "id":"organisation_set_public_as_member",
  "flags":{"token":true,"mq.event":true},
  "url":"api/organisation/organisation-set-public-as-member"
};

// statsapi.list.fn-organisation/organisation-add-star [15] 
var organisation_add_star = {
  "input":[
    {"symbol":"i_account_id","type":"uuid"},
    {"symbol":"i_organisation_id","type":"uuid"}
  ],
  "return":"jsonb",
  "schema":"core/account-organisation",
  "id":"organisation_add_star",
  "flags":{"token":true,"mq.event":true},
  "url":"api/organisation/organisation-add-star"
};

// statsapi.list.fn-organisation/organisation-remove-star [15] 
var organisation_remove_star = {
  "input":[
    {"symbol":"i_account_id","type":"uuid"},
    {"symbol":"i_organisation_id","type":"uuid"}
  ],
  "return":"jsonb",
  "schema":"core/account-organisation",
  "id":"organisation_remove_star",
  "flags":{"token":true,"mq.event":true},
  "url":"api/organisation/organisation-remove-star"
};

// statsapi.list.fn-organisation/organisation-add-rake [15] 
var organisation_add_rake = {
  "input":[
    {"symbol":"i_account_id","type":"uuid"},
    {"symbol":"i_organisation_id","type":"uuid"},
    {"symbol":"m","type":"jsonb"}
  ],
  "return":"jsonb",
  "schema":"core/account-organisation",
  "id":"organisation_add_rake",
  "flags":{"token":true,"mq.event":true},
  "url":"api/organisation/organisation-add-rake"
};

// statsapi.list.fn-organisation/organisation-remove-rake [15] 
var organisation_remove_rake = {
  "input":[
    {"symbol":"i_account_id","type":"uuid"},
    {"symbol":"i_organisation_id","type":"uuid"},
    {"symbol":"i_rake_id","type":"uuid"}
  ],
  "return":"jsonb",
  "schema":"core/account-organisation",
  "id":"organisation_remove_rake",
  "flags":{"token":true,"mq.event":true},
  "url":"api/organisation/organisation-remove-rake"
};

// statsapi.list.fn-organisation/organisation-add-staking [15] 
var organisation_add_staking = {
  "input":[
    {"symbol":"i_account_id","type":"uuid"},
    {"symbol":"i_organisation_id","type":"uuid"},
    {"symbol":"m","type":"jsonb"}
  ],
  "return":"jsonb",
  "schema":"core/account-organisation",
  "id":"organisation_add_staking",
  "flags":{"token":true,"mq.event":true},
  "url":"api/organisation/organisation-add-staking"
};

// statsapi.list.fn-organisation/organisation-remove-staking [15] 
var organisation_remove_staking = {
  "input":[
    {"symbol":"i_account_id","type":"uuid"},
    {"symbol":"i_organisation_id","type":"uuid"},
    {"symbol":"i_staking_id","type":"uuid"}
  ],
  "return":"jsonb",
  "schema":"core/account-organisation",
  "id":"organisation_remove_staking",
  "flags":{"token":true,"mq.event":true},
  "url":"api/organisation/organisation-remove-staking"
};

// statsapi.list.fn-organisation/organisation-add-buy-in [15] 
var organisation_add_buy_in = {
  "input":[
    {"symbol":"i_account_id","type":"uuid"},
    {"symbol":"i_organisation_id","type":"uuid"},
    {"symbol":"m","type":"jsonb"}
  ],
  "return":"jsonb",
  "schema":"core/account-organisation",
  "id":"organisation_add_buy_in",
  "flags":{"token":true,"mq.event":true},
  "url":"api/organisation/organisation-add-buy-in"
};

// statsapi.list.fn-organisation/organisation-remove-buy-in [15] 
var organisation_remove_buy_in = {
  "input":[
    {"symbol":"i_account_id","type":"uuid"},
    {"symbol":"i_organisation_id","type":"uuid"},
    {"symbol":"i_buy_in_id","type":"uuid"}
  ],
  "return":"jsonb",
  "schema":"core/account-organisation",
  "id":"organisation_remove_buy_in",
  "flags":{"token":true,"mq.event":true},
  "url":"api/organisation/organisation-remove-buy-in"
};

// statsapi.list.fn-organisation/organisation-add-entity-group [20] 
var organisation_add_entity_group = {
  "input":[
    {"symbol":"i_account_id","type":"uuid"},
    {"symbol":"i_organisation_id","type":"uuid"},
    {"symbol":"m","type":"jsonb"}
  ],
  "return":"jsonb",
  "schema":"core/account-entity",
  "id":"organisation_add_entity_group",
  "flags":{"token":true},
  "url":"api/entity/organisation-add-entity-group"
};

// statsapi.list.fn-organisation/organisation-remove-entity-group [20] 
var organisation_remove_entity_group = {
  "input":[
    {"symbol":"i_account_id","type":"uuid"},
    {"symbol":"i_organisation_id","type":"uuid"},
    {"symbol":"i_group_id","type":"uuid"}
  ],
  "return":"jsonb",
  "schema":"core/account-entity",
  "id":"organisation_remove_entity_group",
  "flags":{"token":true},
  "url":"api/entity/organisation-remove-entity-group"
};

// statsapi.list.fn-organisation/organisation-modify-entity-group [20] 
var organisation_modify_entity_group = {
  "input":[
    {"symbol":"i_account_id","type":"uuid"},
    {"symbol":"i_group_id","type":"uuid"},
    {"symbol":"m","type":"jsonb"}
  ],
  "return":"jsonb",
  "schema":"core/account-entity",
  "id":"organisation_modify_entity_group",
  "flags":{"token":true},
  "url":"api/entity/organisation-modify-entity-group"
};

// statsapi.list.fn-organisation/organisation-add-entity [20] 
var organisation_add_entity = {
  "input":[
    {"symbol":"i_account_id","type":"uuid"},
    {"symbol":"i_group_id","type":"uuid"},
    {"symbol":"m","type":"jsonb"}
  ],
  "return":"jsonb",
  "schema":"core/account-entity",
  "id":"organisation_add_entity",
  "flags":{"token":true},
  "url":"api/entity/organisation-add-entity"
};

// statsapi.list.fn-organisation/organisation-add-entity-bulk [20] 
var organisation_add_entity_bulk = {
  "input":[
    {"symbol":"i_account_id","type":"uuid"},
    {"symbol":"i_group_id","type":"uuid"},
    {"symbol":"i_entities","type":"jsonb"}
  ],
  "return":"jsonb",
  "schema":"core/account-entity",
  "id":"organisation_add_entity_bulk",
  "flags":{"token":true},
  "url":"api/entity/organisation-add-entity-bulk"
};

// statsapi.list.fn-organisation/organisation-modify-entity-tags [20] 
var organisation_modify_entity_tags = {
  "input":[
    {"symbol":"i_account_id","type":"uuid"},
    {"symbol":"i_entity_id","type":"uuid"},
    {"symbol":"i_tags","type":"jsonb"}
  ],
  "return":"jsonb",
  "schema":"core/account-entity",
  "id":"organisation_modify_entity_tags",
  "flags":{"token":true},
  "url":"api/entity/organisation-modify-entity-tags"
};

// statsapi.list.fn-organisation/organisation-modify-entity [20] 
var organisation_modify_entity = {
  "input":[
    {"symbol":"i_account_id","type":"uuid"},
    {"symbol":"i_entity_id","type":"uuid"},
    {"symbol":"m","type":"jsonb"}
  ],
  "return":"jsonb",
  "schema":"core/account-entity",
  "id":"organisation_modify_entity",
  "flags":{"token":true},
  "url":"api/entity/organisation-modify-entity"
};

// statsapi.list.fn-organisation/organisation-remove-entity [20] 
var organisation_remove_entity = {
  "input":[
    {"symbol":"i_account_id","type":"uuid"},
    {"symbol":"i_entity_id","type":"uuid"}
  ],
  "return":"jsonb",
  "schema":"core/account-entity",
  "id":"organisation_remove_entity",
  "flags":{"token":true},
  "url":"api/entity/organisation-remove-entity"
};

// statsapi.list.fn-organisation/ROUTES [23] 
var ROUTES = {
  "organisation_modify":organisation_modify,
  "organisation_add_member":organisation_add_member,
  "organisation_remove_member":organisation_remove_member,
  "organisation_modify_entity":organisation_modify_entity,
  "organisation_add_buy_in":organisation_add_buy_in,
  "organisation_remove_rake":organisation_remove_rake,
  "organisation_modify_entity_tags":organisation_modify_entity_tags,
  "organisation_remove_entity":organisation_remove_entity,
  "organisation_add_entity_bulk":organisation_add_entity_bulk,
  "organisation_add_entity":organisation_add_entity,
  "organisation_set_public_as_member":organisation_set_public_as_member,
  "organisation_remove_star":organisation_remove_star,
  "organisation_create":organisation_create,
  "organisation_leave_as_member":organisation_leave_as_member,
  "organisation_modify_entity_group":organisation_modify_entity_group,
  "organisation_add_rake":organisation_add_rake,
  "organisation_add_staking":organisation_add_staking,
  "organisation_add_entity_group":organisation_add_entity_group,
  "organisation_remove":organisation_remove,
  "organisation_remove_buy_in":organisation_remove_buy_in,
  "organisation_add_star":organisation_add_star,
  "organisation_transfer_ownership":organisation_transfer_ownership,
  "organisation_remove_entity_group":organisation_remove_entity_group,
  "organisation_remove_staking":organisation_remove_staking
};

// statsapi.list.fn-organisation/make-routes [26] 
function make_routes(){
  return ut.collect_routes_object(ROUTES);
}

var MODULE = {
  "organisation_create":organisation_create,
  "organisation_transfer_ownership":organisation_transfer_ownership,
  "organisation_remove":organisation_remove,
  "organisation_modify":organisation_modify,
  "organisation_add_member":organisation_add_member,
  "organisation_remove_member":organisation_remove_member,
  "organisation_leave_as_member":organisation_leave_as_member,
  "organisation_set_public_as_member":organisation_set_public_as_member,
  "organisation_add_star":organisation_add_star,
  "organisation_remove_star":organisation_remove_star,
  "organisation_add_rake":organisation_add_rake,
  "organisation_remove_rake":organisation_remove_rake,
  "organisation_add_staking":organisation_add_staking,
  "organisation_remove_staking":organisation_remove_staking,
  "organisation_add_buy_in":organisation_add_buy_in,
  "organisation_remove_buy_in":organisation_remove_buy_in,
  "organisation_add_entity_group":organisation_add_entity_group,
  "organisation_remove_entity_group":organisation_remove_entity_group,
  "organisation_modify_entity_group":organisation_modify_entity_group,
  "organisation_add_entity":organisation_add_entity,
  "organisation_add_entity_bulk":organisation_add_entity_bulk,
  "organisation_modify_entity_tags":organisation_modify_entity_tags,
  "organisation_modify_entity":organisation_modify_entity,
  "organisation_remove_entity":organisation_remove_entity,
  "ROUTES":ROUTES,
  "make_routes":make_routes
};

module.exports = MODULE