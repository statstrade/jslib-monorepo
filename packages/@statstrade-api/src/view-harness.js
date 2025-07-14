const ut = require("@xtalk/db/base-util")

// statsapi.list.view-harness/harness-global-all [14] 
var harness_global_all = {
  "input":[],
  "return":"jsonb",
  "schema":"test/dev-harness",
  "id":"harness_global_all",
  "flags":{"public":true},
  "view":{
    "table":"HarnessGlobal",
    "type":"select",
    "tag":"all",
    "access":{"query":null,"roles":{},"relation":null,"symbol":null},
    "query":{},
    "guards":[],
    "autos":[]
  }
};

// statsapi.list.view-harness/harness-signal-by-topic [14] 
var harness_signal_by_topic = {
  "input":[{"symbol":"i_topic_id","type":"uuid"}],
  "return":"jsonb",
  "schema":"test/dev-harness",
  "id":"harness_signal_by_topic",
  "flags":{"public":true},
  "view":{
    "table":"HarnessSignal",
    "type":"select",
    "tag":"by_topic",
    "access":{"query":null,"roles":{},"relation":null,"symbol":null},
    "query":{"prospect":{"topic":"{{i_topic_id}}"}},
    "guards":[],
    "autos":[]
  }
};

// statsapi.list.view-harness/harness-signal-by-topics [14] 
var harness_signal_by_topics = {
  "input":[{"symbol":"i_topic_ids","type":"jsonb"}],
  "return":"jsonb",
  "schema":"test/dev-harness",
  "id":"harness_signal_by_topics",
  "flags":{"public":true},
  "view":{
    "table":"HarnessSignal",
    "type":"select",
    "tag":"by_topics",
    "access":{"query":null,"roles":{},"relation":null,"symbol":null},
    "query":{
      "prospect":{
        "topic":[
          "in",
          {
          "::":"sql/select",
          "args":[
            {
            "::":"sql/fn",
            "name":"uuid",
            "args":[
              {
              "::":"sql/fn",
              "name":"jsonb_array_elements_text",
              "args":[{"::":"sql/arg","name":"{{i_topic_ids}}"}]
            }
            ]
          }
          ]
        }
        ]
      }
    },
    "guards":[],
    "autos":[]
  }
};

// statsapi.list.view-harness/topic-all-harness [14] 
var topic_all_harness = {
  "input":[],
  "return":"jsonb",
  "schema":"test/dev-harness",
  "id":"topic_all_harness",
  "flags":{"public":true},
  "view":{
    "table":"Topic",
    "type":"select",
    "tag":"all_harness",
    "access":{"query":null,"roles":{},"relation":null,"symbol":null},
    "query":{"prospects":{"harness_accounts":["is_not_null"]}},
    "guards":[],
    "autos":[]
  }
};

// statsapi.list.view-harness/user-account-by-harness [14] 
var user_account_by_harness = {
  "input":[{"symbol":"i_prospect_id","type":"uuid"}],
  "return":"jsonb",
  "schema":"test/dev-harness",
  "id":"user_account_by_harness",
  "flags":{"public":true},
  "view":{
    "table":"UserAccount",
    "type":"select",
    "tag":"by_harness",
    "access":{"query":null,"roles":{},"relation":null,"symbol":null},
    "query":{"harness_accounts":{"prospect":"{{i_prospect_id}}"}},
    "guards":[],
    "autos":[]
  }
};

// statsapi.list.view-harness/harness-global-default [19] 
var harness_global_default = {
  "input":[{"symbol":"i_harness_id","type":"uuid"}],
  "return":"jsonb",
  "schema":"test/dev-harness",
  "id":"harness_global_default",
  "flags":{"public":true},
  "view":{
    "table":"HarnessGlobal",
    "type":"return",
    "tag":"default",
    "access":{"query":null,"roles":{},"relation":null,"symbol":null},
    "query":["*/standard"],
    "guards":[],
    "autos":[]
  }
};

// statsapi.list.view-harness/harness-signal-default [19] 
var harness_signal_default = {
  "input":[{"symbol":"i_signal_id","type":"uuid"}],
  "return":"jsonb",
  "schema":"test/dev-harness",
  "id":"harness_signal_default",
  "flags":{"public":true},
  "view":{
    "table":"HarnessSignal",
    "type":"return",
    "tag":"default",
    "access":{"query":null,"roles":{},"relation":null,"symbol":null},
    "query":["*/standard"],
    "guards":[],
    "autos":[]
  }
};

// statsapi.list.view-harness/user-account-harness-dashboard [19] 
var user_account_harness_dashboard = {
  "input":[{"symbol":"i_account_id","type":"uuid"}],
  "return":"jsonb",
  "schema":"test/dev-harness",
  "id":"user_account_harness_dashboard",
  "flags":{"public":true},
  "view":{
    "table":"UserAccount",
    "type":"return",
    "tag":"harness_dashboard",
    "access":{"query":null,"roles":{},"relation":null,"symbol":null},
    "query":[
      ["notification"],
      ["portfolios",["*/standard"]],
      ["profile",["*/standard"]],
      ["identities"],
      ["organisations",{"__deleted__":false}],
      "*/standard",
      ["emails"],
      ["privileges"],
      ["harness_accounts",["*/standard"]],
      ["wallets",["id",["entries",["id",["asset",["*/default"]]]]]]
    ],
    "guards":[],
    "autos":[]
  }
};

// statsapi.list.view-harness/user-account-harness-topic [19] 
var user_account_harness_topic = {
  "input":[
    {"symbol":"i_account_id","type":"uuid"},
    {"symbol":"i_currency_id","type":"citext"},
    {"symbol":"i_topic_id","type":"uuid"}
  ],
  "return":"jsonb",
  "schema":"test/dev-harness",
  "id":"user_account_harness_topic",
  "flags":{"public":true},
  "view":{
    "table":"UserAccount",
    "type":"return",
    "tag":"harness_topic",
    "access":{"query":null,"roles":{},"relation":null,"symbol":null},
    "query":[
      [
      "wallets",
      [
      "*/standard",
      [
      "entries",
      {"asset":{"currency":"{{i_currency_id}}"}},
      ["*/standard",["asset",["*/standard"]]]
    ]
    ]
    ],
      [
      "contract_orders",
      {"book":{"prospect":{"topic":"{{i_topic_id}}"}}},
      ["*/standard"]
    ],
      "*/standard",
      [
      "portfolios",
      [
      "*/standard",
      [
      "pairs",
      {"book":{"prospect":{"topic":"{{i_topic_id}}"}}},
      [["contracts",["*/standard"]]]
    ]
    ]
    ]
    ],
    "guards":[],
    "autos":[]
  }
};

// statsapi.list.view-harness/user-account-harness-prospect [19] 
var user_account_harness_prospect = {
  "input":[
    {"symbol":"i_account_id","type":"uuid"},
    {"symbol":"i_currency_id","type":"citext"},
    {"symbol":"i_prospect_id","type":"uuid"}
  ],
  "return":"jsonb",
  "schema":"test/dev-harness",
  "id":"user_account_harness_prospect",
  "flags":{"public":true},
  "view":{
    "table":"UserAccount",
    "type":"return",
    "tag":"harness_prospect",
    "access":{"query":null,"roles":{},"relation":null,"symbol":null},
    "query":[
      [
      "wallets",
      [
      "*/standard",
      [
      "entries",
      {"asset":{"currency":"{{i_currency_id}}"}},
      ["*/standard",["asset",["*/standard"]]]
    ]
    ]
    ],
      "*/standard",
      [
      "contract_orders",
      {"book":"{{i_prospect_id}}","status":"active"},
      ["*/standard"]
    ],
      [
      "portfolios",
      [
      [
      "pairs",
      {"book":{"prospect":"{{i_prospect_id}}"}},
      [["contracts",["*/standard"]]]
    ],
      "*/standard"
    ]
    ],
      [
      "harness_accounts",
      {"prospect":"{{i_prospect_id}}"},
      ["*/standard"]
    ]
    ],
    "guards":[],
    "autos":[]
  }
};

// statsapi.list.view-harness/make-views [22] 
function make_views(){
  return ut.collect_views([
    harness_global_all,
    harness_signal_by_topic,
    harness_signal_by_topics,
    topic_all_harness,
    user_account_by_harness,
    harness_global_default,
    harness_signal_default,
    user_account_harness_dashboard,
    user_account_harness_topic,
    user_account_harness_prospect
  ]);
}

var MODULE = {
  "harness_global_all":harness_global_all,
  "harness_signal_by_topic":harness_signal_by_topic,
  "harness_signal_by_topics":harness_signal_by_topics,
  "topic_all_harness":topic_all_harness,
  "user_account_by_harness":user_account_by_harness,
  "harness_global_default":harness_global_default,
  "harness_signal_default":harness_signal_default,
  "user_account_harness_dashboard":user_account_harness_dashboard,
  "user_account_harness_topic":user_account_harness_topic,
  "user_account_harness_prospect":user_account_harness_prospect,
  "make_views":make_views
};

module.exports = MODULE