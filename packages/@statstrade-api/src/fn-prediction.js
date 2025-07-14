const ut = require("@xtalk/db/base-util")

// statsapi.list.fn-prediction/prospect-start-registration [20] 
var prospect_start_registration = {
  "input":[
    {"symbol":"i_account_id","type":"uuid"},
    {"symbol":"i_prospect_id","type":"uuid"},
    {"symbol":"i_message","type":"text"}
  ],
  "return":"jsonb",
  "schema":"prediction/game-lifecycle",
  "id":"prospect_start_registration",
  "flags":{"token":true,"mq.event":true},
  "url":"api/game/prospect-start-registration"
};

// statsapi.list.fn-prediction/prospect-start-allocation [20] 
var prospect_start_allocation = {
  "input":[
    {"symbol":"i_account_id","type":"uuid"},
    {"symbol":"i_prospect_id","type":"uuid"},
    {"symbol":"i_message","type":"text"}
  ],
  "return":"jsonb",
  "schema":"prediction/game-lifecycle",
  "id":"prospect_start_allocation",
  "flags":{"token":true,"mq.event":true},
  "url":"api/game/prospect-start-allocation"
};

// statsapi.list.fn-prediction/prospect-start-trading [20] 
var prospect_start_trading = {
  "input":[
    {"symbol":"i_account_id","type":"uuid"},
    {"symbol":"i_prospect_id","type":"uuid"},
    {"symbol":"i_message","type":"text"}
  ],
  "return":"jsonb",
  "schema":"prediction/game-lifecycle",
  "id":"prospect_start_trading",
  "flags":{"token":true,"mq.event":true},
  "url":"api/game/prospect-start-trading"
};

// statsapi.list.fn-prediction/prospect-pause-trading [20] 
var prospect_pause_trading = {
  "input":[
    {"symbol":"i_account_id","type":"uuid"},
    {"symbol":"i_prospect_id","type":"uuid"},
    {"symbol":"i_message","type":"text"}
  ],
  "return":"jsonb",
  "schema":"prediction/game-lifecycle",
  "id":"prospect_pause_trading",
  "flags":{"token":true,"mq.event":true},
  "url":"api/game/prospect-pause-trading"
};

// statsapi.list.fn-prediction/prospect-stop-trading [20] 
var prospect_stop_trading = {
  "input":[
    {"symbol":"i_account_id","type":"uuid"},
    {"symbol":"i_prospect_id","type":"uuid"},
    {"symbol":"i_message","type":"text"}
  ],
  "return":"jsonb",
  "schema":"prediction/game-lifecycle",
  "id":"prospect_stop_trading",
  "flags":{"token":true,"mq.event":true},
  "url":"api/game/prospect-stop-trading"
};

// statsapi.list.fn-prediction/prospect-start-resolution [20] 
var prospect_start_resolution = {
  "input":[
    {"symbol":"i_account_id","type":"uuid"},
    {"symbol":"i_prospect_id","type":"uuid"},
    {"symbol":"i_message","type":"text"}
  ],
  "return":"jsonb",
  "schema":"prediction/game-lifecycle",
  "id":"prospect_start_resolution",
  "flags":{"token":true,"mq.event":true},
  "url":"api/game/prospect-start-resolution"
};

// statsapi.list.fn-prediction/prospect-resolve [20] 
var prospect_resolve = {
  "input":[
    {"symbol":"i_account_id","type":"uuid"},
    {"symbol":"i_prospect_id","type":"uuid"},
    {"symbol":"i_limit","type":"integer"}
  ],
  "return":"jsonb",
  "schema":"prediction/game-lifecycle",
  "id":"prospect_resolve",
  "flags":{"token":true,"mq.event":true},
  "url":"api/game/prospect-resolve"
};

// statsapi.list.fn-prediction/prospect-start-verdict-check [20] 
var prospect_start_verdict_check = {
  "input":[
    {"symbol":"i_account_id","type":"uuid"},
    {"symbol":"i_prospect_id","type":"uuid"}
  ],
  "return":"jsonb",
  "schema":"prediction/game-lifecycle",
  "id":"prospect_start_verdict_check",
  "flags":{"token":true,"mq.event":true},
  "url":"api/game/prospect-start-verdict-check"
};

// statsapi.list.fn-prediction/prospect-start-verdict [20] 
var prospect_start_verdict = {
  "input":[
    {"symbol":"i_account_id","type":"uuid"},
    {"symbol":"i_prospect_id","type":"uuid"},
    {"symbol":"i_message","type":"text"}
  ],
  "return":"jsonb",
  "schema":"prediction/game-lifecycle",
  "id":"prospect_start_verdict",
  "flags":{"token":true,"mq.event":true},
  "url":"api/game/prospect-start-verdict"
};

// statsapi.list.fn-prediction/prospect-complete [20] 
var prospect_complete = {
  "input":[
    {"symbol":"i_account_id","type":"uuid"},
    {"symbol":"i_prospect_id","type":"uuid"},
    {"symbol":"i_message","type":"text"}
  ],
  "return":"jsonb",
  "schema":"prediction/game-lifecycle",
  "id":"prospect_complete",
  "flags":{"token":true,"mq.event":true},
  "url":"api/game/prospect-complete"
};

// statsapi.list.fn-prediction/topic-discard [25] 
var topic_discard = {
  "input":[
    {"symbol":"i_account_id","type":"uuid"},
    {"symbol":"i_topic_id","type":"uuid"},
    {"symbol":"i_message","type":"text"}
  ],
  "return":"jsonb",
  "schema":"prediction/game-bulk",
  "id":"topic_discard",
  "flags":{"token":true,"mq.event":true},
  "url":"api/game/topic-discard"
};

// statsapi.list.fn-prediction/topic-undiscard [25] 
var topic_undiscard = {
  "input":[
    {"symbol":"i_account_id","type":"uuid"},
    {"symbol":"i_topic_id","type":"uuid"},
    {"symbol":"i_message","type":"text"}
  ],
  "return":"jsonb",
  "schema":"prediction/game-bulk",
  "id":"topic_undiscard",
  "flags":{"token":true,"mq.event":true},
  "url":"api/game/topic-undiscard"
};

// statsapi.list.fn-prediction/topic-lock [25] 
var topic_lock = {
  "input":[
    {"symbol":"i_account_id","type":"uuid"},
    {"symbol":"i_topic_id","type":"uuid"},
    {"symbol":"i_message","type":"text"}
  ],
  "return":"jsonb",
  "schema":"prediction/game-bulk",
  "id":"topic_lock",
  "flags":{"token":true,"mq.event":true},
  "url":"api/game/topic-lock"
};

// statsapi.list.fn-prediction/topic-start-registration [25] 
var topic_start_registration = {
  "input":[
    {"symbol":"i_account_id","type":"uuid"},
    {"symbol":"i_topic_id","type":"uuid"},
    {"symbol":"i_message","type":"text"}
  ],
  "return":"jsonb",
  "schema":"prediction/game-bulk",
  "id":"topic_start_registration",
  "flags":{"token":true,"mq.event":true},
  "url":"api/game/topic-start-registration"
};

// statsapi.list.fn-prediction/topic-start-allocation [25] 
var topic_start_allocation = {
  "input":[
    {"symbol":"i_account_id","type":"uuid"},
    {"symbol":"i_topic_id","type":"uuid"},
    {"symbol":"i_message","type":"text"}
  ],
  "return":"jsonb",
  "schema":"prediction/game-bulk",
  "id":"topic_start_allocation",
  "flags":{"token":true,"mq.event":true},
  "url":"api/game/topic-start-allocation"
};

// statsapi.list.fn-prediction/topic-start-trading [25] 
var topic_start_trading = {
  "input":[
    {"symbol":"i_account_id","type":"uuid"},
    {"symbol":"i_topic_id","type":"uuid"},
    {"symbol":"i_message","type":"text"}
  ],
  "return":"jsonb",
  "schema":"prediction/game-bulk",
  "id":"topic_start_trading",
  "flags":{"token":true,"mq.event":true},
  "url":"api/game/topic-start-trading"
};

// statsapi.list.fn-prediction/topic-pause-trading [25] 
var topic_pause_trading = {
  "input":[
    {"symbol":"i_account_id","type":"uuid"},
    {"symbol":"i_topic_id","type":"uuid"},
    {"symbol":"i_message","type":"text"}
  ],
  "return":"jsonb",
  "schema":"prediction/game-bulk",
  "id":"topic_pause_trading",
  "flags":{"token":true,"mq.event":true},
  "url":"api/game/topic-pause-trading"
};

// statsapi.list.fn-prediction/topic-stop-trading [25] 
var topic_stop_trading = {
  "input":[
    {"symbol":"i_account_id","type":"uuid"},
    {"symbol":"i_topic_id","type":"uuid"},
    {"symbol":"i_message","type":"text"}
  ],
  "return":"jsonb",
  "schema":"prediction/game-bulk",
  "id":"topic_stop_trading",
  "flags":{"token":true,"mq.event":true},
  "url":"api/game/topic-stop-trading"
};

// statsapi.list.fn-prediction/topic-start-resolution [25] 
var topic_start_resolution = {
  "input":[
    {"symbol":"i_account_id","type":"uuid"},
    {"symbol":"i_topic_id","type":"uuid"},
    {"symbol":"i_message","type":"text"}
  ],
  "return":"jsonb",
  "schema":"prediction/game-bulk",
  "id":"topic_start_resolution",
  "flags":{"token":true,"mq.event":true},
  "url":"api/game/topic-start-resolution"
};

// statsapi.list.fn-prediction/topic-start-verdict [25] 
var topic_start_verdict = {
  "input":[
    {"symbol":"i_account_id","type":"uuid"},
    {"symbol":"i_topic_id","type":"uuid"},
    {"symbol":"i_message","type":"text"}
  ],
  "return":"jsonb",
  "schema":"prediction/game-bulk",
  "id":"topic_start_verdict",
  "flags":{"token":true,"mq.event":true},
  "url":"api/game/topic-start-verdict"
};

// statsapi.list.fn-prediction/topic-complete [25] 
var topic_complete = {
  "input":[
    {"symbol":"i_account_id","type":"uuid"},
    {"symbol":"i_topic_id","type":"uuid"},
    {"symbol":"i_message","type":"text"}
  ],
  "return":"jsonb",
  "schema":"prediction/game-bulk",
  "id":"topic_complete",
  "flags":{"token":true,"mq.event":true},
  "url":"api/game/topic-complete"
};

// statsapi.list.fn-prediction/payout-discard [30] 
var payout_discard = {
  "input":[
    {"symbol":"i_account_id","type":"uuid"},
    {"symbol":"i_prospect_id","type":"uuid"},
    {"symbol":"i_limit","type":"integer"}
  ],
  "return":"jsonb",
  "schema":"prediction/game-contract-payout",
  "id":"payout_discard",
  "flags":{"token":true,"mq.event":true},
  "url":"api/game/payout-discard"
};

// statsapi.list.fn-prediction/payout-winning [30] 
var payout_winning = {
  "input":[
    {"symbol":"i_account_id","type":"uuid"},
    {"symbol":"i_prospect_id","type":"uuid"},
    {"symbol":"i_limit","type":"integer"}
  ],
  "return":"jsonb",
  "schema":"prediction/game-contract-payout",
  "id":"payout_winning",
  "flags":{"token":true,"mq.event":true},
  "url":"api/game/payout-winning"
};

// statsapi.list.fn-prediction/payout-return-no [30] 
var payout_return_no = {
  "input":[
    {"symbol":"i_account_id","type":"uuid"},
    {"symbol":"i_prospect_id","type":"uuid"},
    {"symbol":"i_limit","type":"integer"}
  ],
  "return":"jsonb",
  "schema":"prediction/game-contract-payout",
  "id":"payout_return_no",
  "flags":{"token":true,"mq.event":true},
  "url":"api/game/payout-return-no"
};

// statsapi.list.fn-prediction/payout-return-yes [30] 
var payout_return_yes = {
  "input":[
    {"symbol":"i_account_id","type":"uuid"},
    {"symbol":"i_prospect_id","type":"uuid"},
    {"symbol":"i_limit","type":"integer"}
  ],
  "return":"jsonb",
  "schema":"prediction/game-contract-payout",
  "id":"payout_return_yes",
  "flags":{"token":true,"mq.event":true},
  "url":"api/game/payout-return-yes"
};

// statsapi.list.fn-prediction/buy-stake [35] 
var buy_stake = {
  "input":[
    {"symbol":"i_account_id","type":"uuid"},
    {"symbol":"i_prospect_id","type":"uuid"},
    {"symbol":"i_stake","type":"jsonb"}
  ],
  "return":"jsonb",
  "schema":"prediction/game-stake",
  "id":"buy_stake",
  "flags":{"token":true,"mq.event":true},
  "url":"api/game/buy-stake"
};

// statsapi.list.fn-prediction/payout-stake [40] 
var payout_stake = {
  "input":[
    {"symbol":"i_account_id","type":"uuid"},
    {"symbol":"i_prospect_id","type":"uuid"},
    {"symbol":"i_limit","type":"integer"}
  ],
  "return":"jsonb",
  "schema":"prediction/game-stake-payout",
  "id":"payout_stake",
  "flags":{"token":true,"mq.event":true},
  "url":"api/game/payout-stake"
};

// statsapi.list.fn-prediction/room-topic-create [45] 
var room_topic_create = {
  "input":[
    {"symbol":"i_account_id","type":"uuid"},
    {"symbol":"i_room_id","type":"uuid"},
    {"symbol":"m","type":"jsonb"}
  ],
  "return":"jsonb",
  "schema":"prediction/game-room",
  "id":"room_topic_create",
  "flags":{"token":true,"mq.event":true},
  "url":"api/game/room-topic-create"
};

// statsapi.list.fn-prediction/verdict-announce [50] 
var verdict_announce = {
  "input":[
    {"symbol":"i_account_id","type":"uuid"},
    {"symbol":"i_prospect_id","type":"uuid"},
    {"symbol":"i_result","type":"text"}
  ],
  "return":"jsonb",
  "schema":"prediction/game-verdict",
  "id":"verdict_announce",
  "flags":{"token":true,"mq.event":true},
  "url":"api/game/verdict-announce"
};

// statsapi.list.fn-prediction/verdict-lock [50] 
var verdict_lock = {
  "input":[
    {"symbol":"i_account_id","type":"uuid"},
    {"symbol":"i_prospect_id","type":"uuid"},
    {"symbol":"i_result","type":"text"}
  ],
  "return":"jsonb",
  "schema":"prediction/game-verdict",
  "id":"verdict_lock",
  "flags":{"token":true,"mq.event":true},
  "url":"api/game/verdict-lock"
};

// statsapi.list.fn-prediction/prospect-confirm-verdict [50] 
var prospect_confirm_verdict = {
  "input":[
    {"symbol":"i_account_id","type":"uuid"},
    {"symbol":"i_prospect_id","type":"uuid"},
    {"symbol":"i_message","type":"text"}
  ],
  "return":"jsonb",
  "schema":"prediction/game-verdict",
  "id":"prospect_confirm_verdict",
  "flags":{"token":true,"mq.event":true},
  "url":"api/game/prospect-confirm-verdict"
};

// statsapi.list.fn-prediction/ROUTES [53] 
var ROUTES = {
  "prospect_start_resolution":prospect_start_resolution,
  "topic_start_registration":topic_start_registration,
  "prospect_start_verdict_check":prospect_start_verdict_check,
  "prospect_start_trading":prospect_start_trading,
  "room_topic_create":room_topic_create,
  "prospect_stop_trading":prospect_stop_trading,
  "prospect_resolve":prospect_resolve,
  "payout_discard":payout_discard,
  "topic_stop_trading":topic_stop_trading,
  "prospect_start_verdict":prospect_start_verdict,
  "prospect_start_registration":prospect_start_registration,
  "topic_complete":topic_complete,
  "topic_start_allocation":topic_start_allocation,
  "topic_lock":topic_lock,
  "prospect_confirm_verdict":prospect_confirm_verdict,
  "topic_pause_trading":topic_pause_trading,
  "topic_start_verdict":topic_start_verdict,
  "payout_winning":payout_winning,
  "payout_stake":payout_stake,
  "prospect_start_allocation":prospect_start_allocation,
  "payout_return_yes":payout_return_yes,
  "topic_start_resolution":topic_start_resolution,
  "buy_stake":buy_stake,
  "prospect_pause_trading":prospect_pause_trading,
  "topic_start_trading":topic_start_trading,
  "verdict_announce":verdict_announce,
  "payout_return_no":payout_return_no,
  "prospect_complete":prospect_complete,
  "verdict_lock":verdict_lock,
  "topic_undiscard":topic_undiscard,
  "topic_discard":topic_discard
};

// statsapi.list.fn-prediction/make-routes [56] 
function make_routes(){
  return ut.collect_routes_object(ROUTES);
}

var MODULE = {
  "prospect_start_registration":prospect_start_registration,
  "prospect_start_allocation":prospect_start_allocation,
  "prospect_start_trading":prospect_start_trading,
  "prospect_pause_trading":prospect_pause_trading,
  "prospect_stop_trading":prospect_stop_trading,
  "prospect_start_resolution":prospect_start_resolution,
  "prospect_resolve":prospect_resolve,
  "prospect_start_verdict_check":prospect_start_verdict_check,
  "prospect_start_verdict":prospect_start_verdict,
  "prospect_complete":prospect_complete,
  "topic_discard":topic_discard,
  "topic_undiscard":topic_undiscard,
  "topic_lock":topic_lock,
  "topic_start_registration":topic_start_registration,
  "topic_start_allocation":topic_start_allocation,
  "topic_start_trading":topic_start_trading,
  "topic_pause_trading":topic_pause_trading,
  "topic_stop_trading":topic_stop_trading,
  "topic_start_resolution":topic_start_resolution,
  "topic_start_verdict":topic_start_verdict,
  "topic_complete":topic_complete,
  "payout_discard":payout_discard,
  "payout_winning":payout_winning,
  "payout_return_no":payout_return_no,
  "payout_return_yes":payout_return_yes,
  "buy_stake":buy_stake,
  "payout_stake":payout_stake,
  "room_topic_create":room_topic_create,
  "verdict_announce":verdict_announce,
  "verdict_lock":verdict_lock,
  "prospect_confirm_verdict":prospect_confirm_verdict,
  "ROUTES":ROUTES,
  "make_routes":make_routes
};

module.exports = MODULE