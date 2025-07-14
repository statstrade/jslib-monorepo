const ut = require("@xtalk/db/base-util")

// statsnet.interface.net-trade/place-contract-order [17] 
var place_contract_order = {
  "input":[
    {"symbol":"account_id","type":"uuid"},
    {"symbol":"prospect_id","type":"uuid"},
    {"symbol":"order","type":"jsonb"}
  ],
  "return":"jsonb",
  "id":"place_contract_order",
  "flags":{"token":true},
  "url":"api/order/place-contract-order",
  "encode":true
};

// statsnet.interface.net-trade/cancel-contract-order [17] 
var cancel_contract_order = {
  "input":[
    {"symbol":"account_id","type":"uuid"},
    {"symbol":"prospect_id","type":"uuid"},
    {"symbol":"order_id","type":"uuid"}
  ],
  "return":"jsonb",
  "id":"cancel_contract_order",
  "flags":{"token":true},
  "url":"api/order/cancel-contract-order",
  "encode":true
};

// statsnet.interface.net-trade/place-swap-order [23] 
var place_swap_order = {
  "input":[
    {"symbol":"account_id","type":"uuid"},
    {"symbol":"swap_id","type":"uuid"},
    {"symbol":"order","type":"jsonb"}
  ],
  "return":"jsonb",
  "id":"place_swap_order",
  "flags":{"token":true},
  "url":"api/order/place-swap-order",
  "encode":true
};

// statsnet.interface.net-trade/cancel-swap-order [23] 
var cancel_swap_order = {
  "input":[
    {"symbol":"account_id","type":"uuid"},
    {"symbol":"swap_id","type":"uuid"},
    {"symbol":"order_id","type":"uuid"}
  ],
  "return":"jsonb",
  "id":"cancel_swap_order",
  "flags":{"token":true},
  "url":"api/order/cancel-swap-order",
  "encode":true
};

// statsnet.interface.net-trade/get-market [29] 
var get_market = {
  "input":[{"symbol":"book","type":"text"}],
  "return":"jsonb",
  "id":"get_market",
  "flags":{},
  "url":"api/market/browse",
  "encode":"wrap"
};

// statsnet.interface.net-trade/get-market-bulk [29] 
var get_market_bulk = {
  "input":[{"symbol":"books","type":"jsonb"}],
  "return":"jsonb",
  "id":"get_market_bulk",
  "flags":{},
  "url":"api/market/bulk",
  "encode":"wrap"
};

// statsnet.interface.net-trade/get-market-priority [29] 
var get_market_priority = {
  "input":[
    {"symbol":"account_id","type":"uuid"},
    {"symbol":"book","type":"text"}
  ],
  "return":"jsonb",
  "id":"get_market_priority",
  "flags":{"token":true},
  "url":"api/market/priority-browse",
  "encode":"wrap"
};

// statsnet.interface.net-trade/get-contract-history-init [34] 
var get_contract_history_init = {
  "input":[
    {"symbol":"book_ids","type":"jsonb"},
    {"symbol":"resolution","type":"text"}
  ],
  "return":"jsonb",
  "id":"get_contract_history_init",
  "flags":{},
  "url":"api/history/contract/init",
  "encode":true
};

// statsnet.interface.net-trade/get-contract-history-30sec [34] 
var get_contract_history_30sec = {
  "input":[
    {"symbol":"book_id","type":"text"},
    {"symbol":"from","type":"integer"},
    {"symbol":"to","type":"integer"},
    {"symbol":"opts","type":"jsonb"}
  ],
  "return":"jsonb",
  "id":"get_contract_history_30sec",
  "flags":{},
  "url":"api/history/contract/30sec",
  "encode":true
};

// statsnet.interface.net-trade/get-contract-history-5min [34] 
var get_contract_history_5min = {
  "input":[
    {"symbol":"book_id","type":"text"},
    {"symbol":"from","type":"integer"},
    {"symbol":"to","type":"integer"},
    {"symbol":"opts","type":"jsonb"}
  ],
  "return":"jsonb",
  "id":"get_contract_history_5min",
  "flags":{},
  "url":"api/history/contract/5min",
  "encode":true
};

// statsnet.interface.net-trade/get-contract-history-1hr [34] 
var get_contract_history_1hr = {
  "input":[
    {"symbol":"book_id","type":"text"},
    {"symbol":"from","type":"integer"},
    {"symbol":"to","type":"integer"},
    {"symbol":"opts","type":"jsonb"}
  ],
  "return":"jsonb",
  "id":"get_contract_history_1hr",
  "flags":{},
  "url":"api/history/contract/1hr",
  "encode":true
};

// statsnet.interface.net-trade/get-contract-history-1day [34] 
var get_contract_history_1day = {
  "input":[
    {"symbol":"book_id","type":"text"},
    {"symbol":"from","type":"integer"},
    {"symbol":"to","type":"integer"},
    {"symbol":"opts","type":"jsonb"}
  ],
  "return":"jsonb",
  "id":"get_contract_history_1day",
  "flags":{},
  "url":"api/history/contract/1day",
  "encode":true
};

// statsnet.interface.net-trade/get-contract-history-sparklines [34] 
var get_contract_history_sparklines = {
  "input":[
    {"symbol":"book_ids","type":"jsonb"},
    {"symbol":"resolution","type":"text"},
    {"symbol":"from","type":"integer"}
  ],
  "return":"jsonb",
  "id":"get_contract_history_sparklines",
  "flags":{},
  "url":"api/history/contract/sparkline",
  "encode":true
};

// statsnet.interface.net-trade/get-swap-history-init [34] 
var get_swap_history_init = {
  "input":[
    {"symbol":"book_ids","type":"jsonb"},
    {"symbol":"resolution","type":"text"}
  ],
  "return":"jsonb",
  "id":"get_swap_history_init",
  "flags":{},
  "url":"api/history/swap/init",
  "encode":true
};

// statsnet.interface.net-trade/get-swap-history-30sec [34] 
var get_swap_history_30sec = {
  "input":[
    {"symbol":"book_id","type":"text"},
    {"symbol":"from","type":"integer"},
    {"symbol":"to","type":"integer"},
    {"symbol":"opts","type":"jsonb"}
  ],
  "return":"jsonb",
  "id":"get_swap_history_30sec",
  "flags":{},
  "url":"api/history/swap/30sec",
  "encode":true
};

// statsnet.interface.net-trade/get-swap-history-5min [34] 
var get_swap_history_5min = {
  "input":[
    {"symbol":"book_id","type":"text"},
    {"symbol":"from","type":"integer"},
    {"symbol":"to","type":"integer"},
    {"symbol":"opts","type":"jsonb"}
  ],
  "return":"jsonb",
  "id":"get_swap_history_5min",
  "flags":{},
  "url":"api/history/swap/5min",
  "encode":true
};

// statsnet.interface.net-trade/get-swap-history-1hr [34] 
var get_swap_history_1hr = {
  "input":[
    {"symbol":"book_id","type":"text"},
    {"symbol":"from","type":"integer"},
    {"symbol":"to","type":"integer"},
    {"symbol":"opts","type":"jsonb"}
  ],
  "return":"jsonb",
  "id":"get_swap_history_1hr",
  "flags":{},
  "url":"api/history/swap/1hr",
  "encode":true
};

// statsnet.interface.net-trade/get-swap-history-1day [34] 
var get_swap_history_1day = {
  "input":[
    {"symbol":"book_id","type":"text"},
    {"symbol":"from","type":"integer"},
    {"symbol":"to","type":"integer"},
    {"symbol":"opts","type":"jsonb"}
  ],
  "return":"jsonb",
  "id":"get_swap_history_1day",
  "flags":{},
  "url":"api/history/swap/1day",
  "encode":true
};

// statsnet.interface.net-trade/get-swap-history-sparklines [34] 
var get_swap_history_sparklines = {
  "input":[
    {"symbol":"book_ids","type":"jsonb"},
    {"symbol":"resolution","type":"text"},
    {"symbol":"from","type":"integer"}
  ],
  "return":"jsonb",
  "id":"get_swap_history_sparklines",
  "flags":{},
  "url":"api/history/swap/sparkline",
  "encode":true
};

// statsnet.interface.net-trade/get-stake-30sec [34] 
var get_stake_30sec = {
  "input":[
    {"symbol":"book_id","type":"text"},
    {"symbol":"from","type":"integer"},
    {"symbol":"to","type":"integer"},
    {"symbol":"opts","type":"jsonb"}
  ],
  "return":"jsonb",
  "id":"get_stake_30sec",
  "flags":{},
  "url":"api/history/stake/30sec",
  "encode":true
};

// statsnet.interface.net-trade/get-stake-5min [34] 
var get_stake_5min = {
  "input":[
    {"symbol":"book_id","type":"text"},
    {"symbol":"from","type":"integer"},
    {"symbol":"to","type":"integer"},
    {"symbol":"opts","type":"jsonb"}
  ],
  "return":"jsonb",
  "id":"get_stake_5min",
  "flags":{},
  "url":"api/history/stake/5min",
  "encode":true
};

// statsnet.interface.net-trade/get-stake-1hr [34] 
var get_stake_1hr = {
  "input":[
    {"symbol":"book_id","type":"text"},
    {"symbol":"from","type":"integer"},
    {"symbol":"to","type":"integer"},
    {"symbol":"opts","type":"jsonb"}
  ],
  "return":"jsonb",
  "id":"get_stake_1hr",
  "flags":{},
  "url":"api/history/stake/1hr",
  "encode":true
};

// statsnet.interface.net-trade/get-stake-1day [34] 
var get_stake_1day = {
  "input":[
    {"symbol":"book_id","type":"text"},
    {"symbol":"from","type":"integer"},
    {"symbol":"to","type":"integer"},
    {"symbol":"opts","type":"jsonb"}
  ],
  "return":"jsonb",
  "id":"get_stake_1day",
  "flags":{},
  "url":"api/history/stake/1day",
  "encode":true
};

// statsnet.interface.net-trade/get-stake-sparklines [34] 
var get_stake_sparklines = {
  "input":[
    {"symbol":"book_ids","type":"jsonb"},
    {"symbol":"resolution","type":"text"}
  ],
  "return":"jsonb",
  "id":"get_stake_sparklines",
  "flags":{},
  "url":"api/history/stake/sparkline",
  "encode":true
};

// statsnet.interface.net-trade/ROUTES [37] 
var ROUTES = {
  "get_contract_history_30sec":get_contract_history_30sec,
  "get_swap_history_5min":get_swap_history_5min,
  "get_swap_history_30sec":get_swap_history_30sec,
  "get_swap_history_1day":get_swap_history_1day,
  "get_swap_history_sparklines":get_swap_history_sparklines,
  "get_stake_30sec":get_stake_30sec,
  "get_stake_1hr":get_stake_1hr,
  "get_contract_history_init":get_contract_history_init,
  "get_stake_sparklines":get_stake_sparklines,
  "get_contract_history_5min":get_contract_history_5min,
  "cancel_contract_order":cancel_contract_order,
  "get_swap_history_init":get_swap_history_init,
  "get_market":get_market,
  "get_stake_5min":get_stake_5min,
  "get_market_bulk":get_market_bulk,
  "get_contract_history_1day":get_contract_history_1day,
  "get_market_priority":get_market_priority,
  "place_swap_order":place_swap_order,
  "place_contract_order":place_contract_order,
  "get_contract_history_1hr":get_contract_history_1hr,
  "cancel_swap_order":cancel_swap_order,
  "get_swap_history_1hr":get_swap_history_1hr,
  "get_contract_history_sparklines":get_contract_history_sparklines,
  "get_stake_1day":get_stake_1day
};

// statsnet.interface.net-trade/make-routes [40] 
function make_routes(){
  return ut.collect_routes_object(ROUTES);
}

var MODULE = {
  "place_contract_order":place_contract_order,
  "cancel_contract_order":cancel_contract_order,
  "place_swap_order":place_swap_order,
  "cancel_swap_order":cancel_swap_order,
  "get_market":get_market,
  "get_market_bulk":get_market_bulk,
  "get_market_priority":get_market_priority,
  "get_contract_history_init":get_contract_history_init,
  "get_contract_history_30sec":get_contract_history_30sec,
  "get_contract_history_5min":get_contract_history_5min,
  "get_contract_history_1hr":get_contract_history_1hr,
  "get_contract_history_1day":get_contract_history_1day,
  "get_contract_history_sparklines":get_contract_history_sparklines,
  "get_swap_history_init":get_swap_history_init,
  "get_swap_history_30sec":get_swap_history_30sec,
  "get_swap_history_5min":get_swap_history_5min,
  "get_swap_history_1hr":get_swap_history_1hr,
  "get_swap_history_1day":get_swap_history_1day,
  "get_swap_history_sparklines":get_swap_history_sparklines,
  "get_stake_30sec":get_stake_30sec,
  "get_stake_5min":get_stake_5min,
  "get_stake_1hr":get_stake_1hr,
  "get_stake_1day":get_stake_1day,
  "get_stake_sparklines":get_stake_sparklines,
  "ROUTES":ROUTES,
  "make_routes":make_routes
};

module.exports = MODULE