const ut = require("@xtalk/db/base-util")

// statsnet.interface.net-manage/room-create [16] 
var room_create = {
  "input":[
    {"symbol":"account_id","type":"uuid"},
    {"symbol":"m","type":"jsonb"}
  ],
  "return":"jsonb",
  "id":"room_create",
  "flags":{"token":true},
  "url":"api/room/room-create",
  "encode":false
};

// statsnet.interface.net-manage/organisation-create [16] 
var organisation_create = {
  "input":[
    {"symbol":"account_id","type":"uuid"},
    {"symbol":"m","type":"jsonb"}
  ],
  "return":"jsonb",
  "id":"organisation_create",
  "flags":{"token":true},
  "url":"api/organisation/organisation-create",
  "encode":false
};

// statsnet.interface.net-manage/topic-create [22] 
var topic_create = {
  "input":[
    {"symbol":"account_id","type":"uuid"},
    {"symbol":"m","type":"jsonb"}
  ],
  "return":"jsonb",
  "id":"topic_create",
  "flags":{"token":true},
  "url":"api/game/topic-create",
  "encode":true
};

// statsnet.interface.net-manage/topic-confirm [22] 
var topic_confirm = {
  "input":[
    {"symbol":"account_id","type":"uuid"},
    {"symbol":"topic_id","type":"uuid"},
    {"symbol":"message","type":"text"}
  ],
  "return":"jsonb",
  "id":"topic_confirm",
  "flags":{"token":true},
  "url":"api/game/topic-confirm",
  "encode":true
};

// statsnet.interface.net-manage/topic-allocate-input [22] 
var topic_allocate_input = {
  "input":[
    {"symbol":"account_id","type":"uuid"},
    {"symbol":"topic_id","type":"uuid"},
    {"symbol":"message","type":"text"}
  ],
  "return":"jsonb",
  "id":"topic_allocate_input",
  "flags":{"token":true},
  "url":"api/game/topic-allocate-input",
  "encode":true
};

// statsnet.interface.net-manage/topic-allocate-process [22] 
var topic_allocate_process = {
  "input":[
    {"symbol":"account_id","type":"uuid"},
    {"symbol":"topic_id","type":"uuid"}
  ],
  "return":"jsonb",
  "id":"topic_allocate_process",
  "flags":{"token":true},
  "url":"api/game/topic-allocate-process",
  "encode":true
};

// statsnet.interface.net-manage/swap-create [30] 
var swap_create = {
  "input":[
    {"symbol":"account_id","type":"uuid"},
    {"symbol":"m","type":"jsonb"}
  ],
  "return":"jsonb",
  "id":"swap_create",
  "flags":{"token":true},
  "url":"api/swap/swap-create",
  "encode":true
};

// statsnet.interface.net-manage/swap-confirm [30] 
var swap_confirm = {
  "input":[
    {"symbol":"account_id","type":"uuid"},
    {"symbol":"swap_id","type":"uuid"},
    {"symbol":"message","type":"text"}
  ],
  "return":"jsonb",
  "id":"swap_confirm",
  "flags":{"token":true},
  "url":"api/swap/swap-confirm",
  "encode":true
};

// statsnet.interface.net-manage/swap-allocate-input [30] 
var swap_allocate_input = {
  "input":[
    {"symbol":"account_id","type":"uuid"},
    {"symbol":"swap_id","type":"uuid"},
    {"symbol":"message","type":"text"}
  ],
  "return":"jsonb",
  "id":"swap_allocate_input",
  "flags":{"token":true},
  "url":"api/swap/swap-allocate-input",
  "encode":true
};

// statsnet.interface.net-manage/swap-allocate-process [30] 
var swap_allocate_process = {
  "input":[
    {"symbol":"account_id","type":"uuid"},
    {"symbol":"swap_id","type":"uuid"}
  ],
  "return":"jsonb",
  "id":"swap_allocate_process",
  "flags":{"token":true},
  "url":"api/swap/swap-allocate-process",
  "encode":true
};

// statsnet.interface.net-manage/swap-reset [30] 
var swap_reset = {
  "input":[
    {"symbol":"account_id","type":"uuid"},
    {"symbol":"swap_id","type":"uuid"},
    {"symbol":"message","type":"text"}
  ],
  "return":"jsonb",
  "id":"swap_reset",
  "flags":{"token":true},
  "url":"api/swap/swap-reset",
  "encode":true
};

// statsnet.interface.net-manage/ROUTES [33] 
var ROUTES = {
  "topic_allocate_input":topic_allocate_input,
  "swap_reset":swap_reset,
  "swap_create":swap_create,
  "topic_create":topic_create,
  "organisation_create":organisation_create,
  "swap_confirm":swap_confirm,
  "swap_allocate_input":swap_allocate_input,
  "topic_confirm":topic_confirm,
  "swap_allocate_process":swap_allocate_process,
  "room_create":room_create,
  "topic_allocate_process":topic_allocate_process
};

// statsnet.interface.net-manage/make-routes [36] 
function make_routes(){
  return ut.collect_routes_object(ROUTES);
}

var MODULE = {
  "room_create":room_create,
  "organisation_create":organisation_create,
  "topic_create":topic_create,
  "topic_confirm":topic_confirm,
  "topic_allocate_input":topic_allocate_input,
  "topic_allocate_process":topic_allocate_process,
  "swap_create":swap_create,
  "swap_confirm":swap_confirm,
  "swap_allocate_input":swap_allocate_input,
  "swap_allocate_process":swap_allocate_process,
  "swap_reset":swap_reset,
  "ROUTES":ROUTES,
  "make_routes":make_routes
};

module.exports = MODULE