const ut = require("@xtalk/db/base-util")

// statsapi.list.view-user/user-account-all [15] 
var user_account_all = {
  "input":[],
  "return":"jsonb",
  "schema":"core/query-user",
  "id":"user_account_all",
  "flags":{"super":true},
  "view":{
    "table":"UserAccount",
    "type":"select",
    "tag":"all",
    "access":{"query":null,"roles":{},"relation":null,"symbol":null},
    "query":null,
    "guards":[],
    "autos":[]
  }
};

// statsapi.list.view-user/user-account-by-nickname [15] 
var user_account_by_nickname = {
  "input":[{"symbol":"i_nickname","type":"citext"}],
  "return":"jsonb",
  "schema":"core/query-user",
  "id":"user_account_by_nickname",
  "flags":{"public":true},
  "view":{
    "table":"UserAccount",
    "type":"select",
    "tag":"by_nickname",
    "access":{"query":null,"roles":{},"relation":null,"symbol":null},
    "query":{
      "nickname":[
        "ilike",
        {
        "::":"sql/fn",
        "name":"||",
        "args":[
          {"::":"sql/arg","name":"{{i_nickname}}"},
          {"::":"sql/arg","name":"%"}
        ]
      }
      ]
    },
    "guards":[],
    "autos":[]
  }
};

// statsapi.list.view-user/user-account-by-organisation [15] 
var user_account_by_organisation = {
  "input":[{"symbol":"i_organisation_id","type":"uuid"}],
  "return":"jsonb",
  "schema":"core/query-user",
  "id":"user_account_by_organisation",
  "flags":{},
  "view":{
    "table":"UserAccount",
    "type":"select",
    "tag":"by_organisation",
    "access":{"query":null,"roles":{},"relation":null,"symbol":null},
    "query":{
      "access_entries":{"access":{"organisations":"{{i_organisation_id}}"}}
    },
    "guards":[
      {
      "function":{
        "input":[
          {"symbol":"i_account_id","type":"uuid"},
          {"symbol":"i_organisation_id","type":"uuid"}
        ],
        "return":"boolean",
        "schema":"core/account-organisation",
        "id":"assert_is_member",
        "flags":{}
      },
      "args":["{{<%>}}","{{i_organisation_id}}"]
    }
    ],
    "autos":[]
  }
};

// statsapi.list.view-user/user-email-by-account-id [15] 
var user_email_by_account_id = {
  "input":[{"symbol":"i_account_id","type":"uuid"}],
  "return":"jsonb",
  "schema":"core/query-user",
  "id":"user_email_by_account_id",
  "flags":{"personal":true},
  "view":{
    "table":"UserEmail",
    "type":"select",
    "tag":"by_account_id",
    "access":{"query":null,"roles":{},"relation":null,"symbol":null},
    "query":{"account":"{{i_account_id}}"},
    "guards":[],
    "autos":[]
  }
};

// statsapi.list.view-user/user-email-get-primary [15] 
var user_email_get_primary = {
  "input":[{"symbol":"i_account_id","type":"uuid"}],
  "return":"jsonb",
  "schema":"core/query-user",
  "id":"user_email_get_primary",
  "flags":{"personal":true},
  "view":{
    "table":"UserEmail",
    "type":"select",
    "tag":"get_primary",
    "access":{"query":null,"roles":{},"relation":null,"symbol":null},
    "query":{"account":"{{i_account_id}}","is_primary":true},
    "guards":[],
    "autos":[]
  }
};

// statsapi.list.view-user/access-entry-by-organisation [15] 
var access_entry_by_organisation = {
  "input":[
    {"symbol":"i_account_id","type":"uuid"},
    {"symbol":"i_organisation_id","type":"uuid"}
  ],
  "return":"jsonb",
  "schema":"core/query-user",
  "id":"access_entry_by_organisation",
  "flags":{},
  "view":{
    "table":"AccessEntry",
    "type":"select",
    "tag":"by_organisation",
    "access":{"query":null,"roles":{},"relation":null,"symbol":null},
    "query":{"access":{"organisations":"{{i_organisation_id}}"}},
    "guards":[
      {
      "function":{
        "input":[
          {"symbol":"i_account_id","type":"uuid"},
          {"symbol":"i_organisation_id","type":"uuid"}
        ],
        "return":"boolean",
        "schema":"core/account-organisation",
        "id":"assert_is_member",
        "flags":{}
      },
      "args":["{{i_account_id}}","{{i_organisation_id}}"]
    }
    ],
    "autos":[]
  }
};

// statsapi.list.view-user/access-by-organisation [15] 
var access_by_organisation = {
  "input":[
    {"symbol":"i_account_id","type":"uuid"},
    {"symbol":"i_organisation_id","type":"uuid"}
  ],
  "return":"jsonb",
  "schema":"core/query-user",
  "id":"access_by_organisation",
  "flags":{},
  "view":{
    "table":"Access",
    "type":"select",
    "tag":"by_organisation",
    "access":{"query":null,"roles":{},"relation":null,"symbol":null},
    "query":{"organisations":"{{i_organisation_id}}"},
    "guards":[
      {
      "function":{
        "input":[
          {"symbol":"i_account_id","type":"uuid"},
          {"symbol":"i_organisation_id","type":"uuid"}
        ],
        "return":"boolean",
        "schema":"core/account-organisation",
        "id":"assert_is_member",
        "flags":{}
      },
      "args":["{{i_account_id}}","{{i_organisation_id}}"]
    }
    ],
    "autos":[]
  }
};

// statsapi.list.view-user/tx-asset-for-room-account-admin [15] 
var tx_asset_for_room_account_admin = {
  "input":[
    {"symbol":"i_admin","type":"uuid"},
    {"symbol":"i_room_id","type":"uuid"},
    {"symbol":"i_account_id","type":"uuid"},
    {"symbol":"i_start_time","type":"bigint"},
    {"symbol":"i_end_time","type":"bigint"}
  ],
  "return":"jsonb",
  "schema":"core/query-user",
  "id":"tx_asset_for_room_account_admin",
  "flags":{"personal":true},
  "view":{
    "table":"TxAsset",
    "type":"select",
    "tag":"for_room_account_admin",
    "access":{"query":null,"roles":{},"relation":null,"symbol":null},
    "query":{
      "asset":{
        "playable_assets":{
          "account":"{{i_account_id}}",
          "playable":{"rooms":"{{i_room_id}}"}
        }
      },
      "time_created":["between","{{i_start_time}}","and","{{i_end_time}}"]
    },
    "guards":[
      {
      "function":{
        "input":[
          {"symbol":"i_account_id","type":"uuid"},
          {"symbol":"i_room_id","type":"uuid"}
        ],
        "return":"boolean",
        "schema":"core/room-manage",
        "id":"assert_is_admin",
        "flags":{}
      },
      "args":["{{i_admin_id}}","{{i_room_id}}"]
    }
    ],
    "autos":[]
  }
};

// statsapi.list.view-user/tx-asset-for [15] 
var tx_asset_for = {
  "input":[
    {"symbol":"i_account_id","type":"uuid"},
    {"symbol":"i_currency_id","type":"text"},
    {"symbol":"i_start_time","type":"bigint"},
    {"symbol":"i_end_time","type":"bigint"}
  ],
  "return":"jsonb",
  "schema":"core/query-user",
  "id":"tx_asset_for",
  "flags":{"personal":true},
  "view":{
    "table":"TxAsset",
    "type":"select",
    "tag":"for",
    "access":{"query":null,"roles":{},"relation":null,"symbol":null},
    "query":{
      "asset":{
        "currency":"{{i_currency_id}}",
        "linked_wallet":{"wallet":{"owner":"{{i_account_id}}"}}
      },
      "time_created":["between","{{i_start_time}}","and","{{i_end_time}}"]
    },
    "guards":[],
    "autos":[]
  }
};

// statsapi.list.view-user/tx-asset-for-room-account [15] 
var tx_asset_for_room_account = {
  "input":[
    {"symbol":"i_account_id","type":"uuid"},
    {"symbol":"i_room_id","type":"uuid"},
    {"symbol":"i_start_time","type":"bigint"},
    {"symbol":"i_end_time","type":"bigint"}
  ],
  "return":"jsonb",
  "schema":"core/query-user",
  "id":"tx_asset_for_room_account",
  "flags":{"personal":true},
  "view":{
    "table":"TxAsset",
    "type":"select",
    "tag":"for_room_account",
    "access":{"query":null,"roles":{},"relation":null,"symbol":null},
    "query":{
      "asset":{
        "playable_assets":{
          "account":"{{i_account_id}}",
          "playable":{"rooms":"{{i_room_id}}"}
        }
      },
      "time_created":["between","{{i_start_time}}","and","{{i_end_time}}"]
    },
    "guards":[],
    "autos":[]
  }
};

// statsapi.list.view-user/user-account-dashboard [20] 
var user_account_dashboard = {
  "input":[{"symbol":"i_account_id","type":"uuid"}],
  "return":"jsonb",
  "schema":"core/query-user",
  "id":"user_account_dashboard",
  "flags":{"personal":true},
  "view":{
    "table":"UserAccount",
    "type":"return",
    "tag":"dashboard",
    "access":{"query":null,"roles":{},"relation":null,"symbol":null},
    "query":[
      ["lock",["*/standard"]],
      ["notification"],
      ["portfolios",["*/standard"]],
      ["identities",{"__deleted__":false}],
      ["profile",["*/standard"]],
      ["organisations",{"__deleted__":false}],
      "*/standard",
      ["emails"],
      ["evm_users",["*/standard"]],
      ["privileges"],
      [
      "wallets",
      [
      [
      "entries",
      [["asset",["*/default",["currency",["*/default"]]]],"id"]
    ],
      "id"
    ]
    ]
    ],
    "guards":[],
    "autos":[]
  }
};

// statsapi.list.view-user/user-account-dashboard-min [20] 
var user_account_dashboard_min = {
  "input":[{"symbol":"i_account_id","type":"uuid"}],
  "return":"jsonb",
  "schema":"core/query-user",
  "id":"user_account_dashboard_min",
  "flags":{"personal":true},
  "view":{
    "table":"UserAccount",
    "type":"return",
    "tag":"dashboard_min",
    "access":{"query":null,"roles":{},"relation":null,"symbol":null},
    "query":[
      ["lock",["*/standard"]],
      ["identities",{"__deleted__":false}],
      ["profile",["*/standard"]],
      "*/standard",
      ["emails"],
      ["privileges"]
    ],
    "guards":[],
    "autos":[]
  }
};

// statsapi.list.view-user/user-account-info [20] 
var user_account_info = {
  "input":[{"symbol":"i_account_id","type":"uuid"}],
  "return":"jsonb",
  "schema":"core/query-user",
  "id":"user_account_info",
  "flags":{"public":true},
  "view":{
    "table":"UserAccount",
    "type":"return",
    "tag":"info",
    "access":{"query":null,"roles":{},"relation":null,"symbol":null},
    "query":["*/info",["profile",["*/info"]]],
    "guards":[],
    "autos":[]
  }
};

// statsapi.list.view-user/user-account-evm-accounts [20] 
var user_account_evm_accounts = {
  "input":[{"symbol":"i_account_id","type":"uuid"}],
  "return":"jsonb",
  "schema":"core/query-user",
  "id":"user_account_evm_accounts",
  "flags":{"personal":true},
  "view":{
    "table":"UserAccount",
    "type":"return",
    "tag":"evm_accounts",
    "access":{"query":null,"roles":{},"relation":null,"symbol":null},
    "query":[
      "*/standard",
      [
      "evm_users",
      [
      [
      "evm_vault_accounts",
      [
      ["tx_close",["*/standard"]],
      ["tx_open",["*/standard"]],
      [
      "vault",
      [
      ["playable",[["rooms",["*/standard"]],"*/standard"]],
      "*/standard"
    ]
    ],
      [
      "linked",
      [
      ["asset",[["currency",["*/standard"]],"*/standard"]],
      "*/standard"
    ]
    ],
      "*/standard"
    ]
    ],
      "*/standard"
    ]
    ]
    ],
    "guards":[],
    "autos":[]
  }
};

// statsapi.list.view-user/user-email-default [20] 
var user_email_default = {
  "input":[{"symbol":"i_email_id","type":"uuid"}],
  "return":"jsonb",
  "schema":"core/query-user",
  "id":"user_email_default",
  "flags":{"personal":true},
  "view":{
    "table":"UserEmail",
    "type":"return",
    "tag":"default",
    "access":{"query":null,"roles":{},"relation":null,"symbol":null},
    "query":["*/standard"],
    "guards":[],
    "autos":[]
  }
};

// statsapi.list.view-user/access-entry-default [20] 
var access_entry_default = {
  "input":[{"symbol":"i_access_entry_id","type":"uuid"}],
  "return":"jsonb",
  "schema":"core/query-user",
  "id":"access_entry_default",
  "flags":{},
  "view":{
    "table":"AccessEntry",
    "type":"return",
    "tag":"default",
    "access":{"query":null,"roles":{},"relation":null,"symbol":null},
    "query":[
      ["account",["nickname","id",["profile",["*/info"]]]],
      ["access",["*/standard"]],
      "*/standard"
    ],
    "guards":[],
    "autos":[]
  }
};

// statsapi.list.view-user/access-default [20] 
var access_default = {
  "input":[{"symbol":"i_access_id","type":"uuid"}],
  "return":"jsonb",
  "schema":"core/query-user",
  "id":"access_default",
  "flags":{},
  "view":{
    "table":"Access",
    "type":"return",
    "tag":"default",
    "access":{"query":null,"roles":{},"relation":null,"symbol":null},
    "query":["*/standard"],
    "guards":[],
    "autos":[]
  }
};

// statsapi.list.view-user/tx-asset-default [20] 
var tx_asset_default = {
  "input":[{"symbol":"i_tx_asset_id","type":"uuid"}],
  "return":"jsonb",
  "schema":"core/query-user",
  "id":"tx_asset_default",
  "flags":{},
  "view":{
    "table":"TxAsset",
    "type":"return",
    "tag":"default",
    "access":{"query":null,"roles":{},"relation":null,"symbol":null},
    "query":["*/standard"],
    "guards":[],
    "autos":[]
  }
};

// statsapi.list.view-user/tx-asset-linked-swap [20] 
var tx_asset_linked_swap = {
  "input":[{"symbol":"i_tx_asset_id","type":"uuid"}],
  "return":"jsonb",
  "schema":"core/query-user",
  "id":"tx_asset_linked_swap",
  "flags":{},
  "view":{
    "table":"TxAsset",
    "type":"return",
    "tag":"linked_swap",
    "access":{"query":null,"roles":{},"relation":null,"symbol":null},
    "query":[
      ["vault_withdraw",["*/standard"]],
      ["primary_holds",["*/standard"]],
      ["primary_unholds",["*/standard"]],
      ["secondary_unholds",["*/standard"]],
      ["secondary_holds",["*/standard"]],
      ["vault_deposit",["*/standard"]],
      "*/standard",
      ["vault_withdraw_return",["*/standard"]]
    ],
    "guards":[],
    "autos":[]
  }
};

// statsapi.list.view-user/tx-asset-full-swap [20] 
var tx_asset_full_swap = {
  "input":[{"symbol":"i_tx_asset_id","type":"uuid"}],
  "return":"jsonb",
  "schema":"core/query-user",
  "id":"tx_asset_full_swap",
  "flags":{},
  "view":{
    "table":"TxAsset",
    "type":"return",
    "tag":"full_swap",
    "access":{"query":null,"roles":{},"relation":null,"symbol":null},
    "query":[
      ["vault_withdraw",["*/standard"]],
      ["claim_entries",["*/standard"]],
      ["transfer_from",["*/info",["from",["nickname"]]]],
      [
      "secondary_unholds",
      [
      ["order",["book","*/default"]],
      "*/standard",
      ["tx_rake",["*/default"]]
    ]
    ],
      ["vault_deposit",["*/standard"]],
      ["transfer_to",["*/info",["to",["nickname"]]]],
      "*/standard",
      [
      "secondary_holds",
      [["order",["book","*/default"]],"*/standard"]
    ],
      [
      "primary_unholds",
      [
      ["order",["book","*/default"]],
      "*/standard",
      ["tx_rake",["*/default"]]
    ]
    ],
      ["vault_withdraw_return",["*/standard"]],
      [
      "primary_holds",
      [["order",["book","*/default"]],"*/standard"]
    ]
    ],
    "guards":[],
    "autos":[]
  }
};

// statsapi.list.view-user/tx-asset-linked-contract [20] 
var tx_asset_linked_contract = {
  "input":[{"symbol":"i_tx_asset_id","type":"uuid"}],
  "return":"jsonb",
  "schema":"core/query-user",
  "id":"tx_asset_linked_contract",
  "flags":{},
  "view":{
    "table":"TxAsset",
    "type":"return",
    "tag":"linked_contract",
    "access":{"query":null,"roles":{},"relation":null,"symbol":null},
    "query":[
      ["stake_payouts",["*/standard"]],
      "*/standard",
      ["asset_unholds",["*/standard"]],
      ["contract_payouts",["*/standard"]],
      ["asset_holds",["*/standard"]]
    ],
    "guards":[],
    "autos":[]
  }
};

// statsapi.list.view-user/tx-asset-full-contract [20] 
var tx_asset_full_contract = {
  "input":[{"symbol":"i_tx_asset_id","type":"uuid"}],
  "return":"jsonb",
  "schema":"core/query-user",
  "id":"tx_asset_full_contract",
  "flags":{},
  "view":{
    "table":"TxAsset",
    "type":"return",
    "tag":"full_contract",
    "access":{"query":null,"roles":{},"relation":null,"symbol":null},
    "query":[
      ["vault_withdraw",["*/standard"]],
      ["subscription_entries",["*/standard"]],
      ["claim_entries",["*/standard"]],
      ["tip_to_entries",["*/standard",["from",["nickname","id"]]]],
      ["transfer_from",["*/info",["from",["nickname"]]]],
      [
      "asset_holds",
      [
      "*/standard",
      [
      "order",
      [
      "*/info",
      [
      "book",
      [
      [
      "prospect",
      [["topic",["type","id","code_full","detail"]],"id","code_full"]
    ],
      "id"
    ]
    ]
    ]
    ]
    ]
    ],
      ["vault_deposit",["*/standard"]],
      [
      "stake_payouts",
      [
      [
      "stake",
      [
      "*/info",
      [
      "book",
      [
      [
      "prospect",
      [["topic",["type","id","code_full","detail"]],"id","code_full"]
    ],
      "id"
    ]
    ]
    ]
    ],
      "*/standard"
    ]
    ],
      ["transfer_to",["*/info",["to",["nickname"]]]],
      ["credit_entries",["*/standard"]],
      "*/standard",
      [
      "contract_payouts",
      [
      "*/standard",
      [
      "contract",
      [
      "*/info",
      [
      "pair",
      [
      "id",
      [
      "book",
      [
      [
      "prospect",
      [["topic",["type","id","code_full","detail"]],"id","code_full"]
    ],
      "id"
    ]
    ]
    ]
    ]
    ]
    ]
    ]
    ],
      ["vault_withdraw_return",["*/standard"]],
      ["tip_from_entries",["*/standard",["to",["nickname","id"]]]],
      [
      "asset_unholds",
      [
      "*/standard",
      ["tx_rake",["*/default"]],
      [
      "order",
      [
      "*/info",
      [
      "book",
      [
      [
      "prospect",
      [["topic",["type","id","code_full","detail"]],"id","code_full"]
    ],
      "id"
    ]
    ]
    ]
    ]
    ]
    ]
    ],
    "guards":[],
    "autos":[]
  }
};

// statsapi.list.view-user/organisation-all [25] 
var organisation_all = {
  "input":[],
  "return":"jsonb",
  "schema":"core/query-organisation",
  "id":"organisation_all",
  "flags":{"super":true},
  "view":{
    "table":"Organisation",
    "type":"select",
    "tag":"all",
    "access":{"query":null,"roles":{},"relation":null,"symbol":null},
    "query":null,
    "guards":[],
    "autos":[]
  }
};

// statsapi.list.view-user/organisation-all-as-owner [25] 
var organisation_all_as_owner = {
  "input":[{"symbol":"i_account_id","type":"uuid"}],
  "return":"jsonb",
  "schema":"core/query-organisation",
  "id":"organisation_all_as_owner",
  "flags":{"personal":true},
  "view":{
    "table":"Organisation",
    "type":"select",
    "tag":"all_as_owner",
    "access":{
      "symbol":"statsdb.api.core.query_organisation/organisation_access_is_owner",
      "relation":"reverse",
      "query":{"clause":{"__deleted__":false,"owner":"{{<%>}}"}},
      "roles":{
        "organisation.admin":true,
        "organisation.owner":true,
        "organisation.member":true
      }
    },
    "query":{"__deleted__":false,"owner":"{{i_account_id}}"},
    "guards":[],
    "autos":[]
  }
};

// statsapi.list.view-user/organisation-all-as-admin [25] 
var organisation_all_as_admin = {
  "input":[{"symbol":"i_account_id","type":"uuid"}],
  "return":"jsonb",
  "schema":"core/query-organisation",
  "id":"organisation_all_as_admin",
  "flags":{"personal":true},
  "view":{
    "table":"Organisation",
    "type":"select",
    "tag":"all_as_admin",
    "access":{
      "symbol":"statsdb.api.core.query_organisation/organisation_access_is_admin",
      "relation":"reverse",
      "query":{
        "clause":[
          {"owner":"{{<%>}}","__deleted__":false},
          {
          "__deleted__":false,
          "access":{"entries":{"role":"admin","account":"{{<%>}}"}}
        }
        ]
      },
      "roles":{"organisation.admin":true,"organisation.member":true}
    },
    "query":[
      {"owner":"{{i_account_id}}","__deleted__":false},
      {
      "__deleted__":false,
      "access":{"entries":{"role":"admin","account":"{{i_account_id}}"}}
    }
    ],
    "guards":[],
    "autos":[]
  }
};

// statsapi.list.view-user/organisation-all-as-member [25] 
var organisation_all_as_member = {
  "input":[{"symbol":"i_account_id","type":"uuid"}],
  "return":"jsonb",
  "schema":"core/query-organisation",
  "id":"organisation_all_as_member",
  "flags":{"personal":true},
  "view":{
    "table":"Organisation",
    "type":"select",
    "tag":"all_as_member",
    "access":{
      "symbol":"statsdb.api.core.query_organisation/organisation_access_is_member",
      "relation":"reverse",
      "query":{
        "clause":[
          {"owner":"{{<%>}}","__deleted__":false},
          {
          "__deleted__":false,
          "access":{"entries":{"account":"{{<%>}}"}}
        }
        ]
      },
      "roles":{"organisation.member":true}
    },
    "query":[
      {"owner":"{{i_account_id}}","__deleted__":false},
      {
      "__deleted__":false,
      "access":{"entries":{"account":"{{i_account_id}}"}}
    }
    ],
    "guards":[],
    "autos":[]
  }
};

// statsapi.list.view-user/organisation-by-name [25] 
var organisation_by_name = {
  "input":[{"symbol":"i_name","type":"text"}],
  "return":"jsonb",
  "schema":"core/query-organisation",
  "id":"organisation_by_name",
  "flags":{"public":true},
  "view":{
    "table":"Organisation",
    "type":"select",
    "tag":"by_name",
    "access":{"query":null,"roles":{},"relation":null,"symbol":null},
    "query":{"name":"{{i_name}}"},
    "guards":[],
    "autos":[]
  }
};

// statsapi.list.view-user/rake-template-by-organisation [25] 
var rake_template_by_organisation = {
  "input":[{"symbol":"i_organisation_id","type":"uuid"}],
  "return":"jsonb",
  "schema":"core/query-organisation",
  "id":"rake_template_by_organisation",
  "flags":{"public":true},
  "view":{
    "table":"RakeTemplate",
    "type":"select",
    "tag":"by_organisation",
    "access":{"query":null,"roles":{},"relation":null,"symbol":null},
    "query":{"organisation":"{{i_organisation_id}}"},
    "guards":[],
    "autos":[]
  }
};

// statsapi.list.view-user/buy-in-template-by-organisation [25] 
var buy_in_template_by_organisation = {
  "input":[{"symbol":"i_organisation_id","type":"uuid"}],
  "return":"jsonb",
  "schema":"core/query-organisation",
  "id":"buy_in_template_by_organisation",
  "flags":{"public":true},
  "view":{
    "table":"BuyInTemplate",
    "type":"select",
    "tag":"by_organisation",
    "access":{"query":null,"roles":{},"relation":null,"symbol":null},
    "query":{"organisation":"{{i_organisation_id}}"},
    "guards":[],
    "autos":[]
  }
};

// statsapi.list.view-user/staking-template-by-organisation [25] 
var staking_template_by_organisation = {
  "input":[{"symbol":"i_organisation_id","type":"uuid"}],
  "return":"jsonb",
  "schema":"core/query-organisation",
  "id":"staking_template_by_organisation",
  "flags":{"public":true},
  "view":{
    "table":"StakingTemplate",
    "type":"select",
    "tag":"by_organisation",
    "access":{"query":null,"roles":{},"relation":null,"symbol":null},
    "query":{"organisation":"{{i_organisation_id}}"},
    "guards":[],
    "autos":[]
  }
};

// statsapi.list.view-user/entity-group-by-organisation [25] 
var entity_group_by_organisation = {
  "input":[{"symbol":"i_organisation_ids","type":"jsonb"}],
  "return":"jsonb",
  "schema":"core/query-organisation",
  "id":"entity_group_by_organisation",
  "flags":{"public":true},
  "view":{
    "table":"EntityGroup",
    "type":"select",
    "tag":"by_organisation",
    "access":{"query":null,"roles":{},"relation":null,"symbol":null},
    "query":{
      "organisation":[
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
            "args":[{"::":"sql/arg","name":"{{i_organisation_ids}}"}]
          }
          ]
        }
        ]
      }
      ]
    },
    "guards":[],
    "autos":[]
  }
};

// statsapi.list.view-user/entity-by-group [25] 
var entity_by_group = {
  "input":[{"symbol":"i_group_id","type":"uuid"}],
  "return":"jsonb",
  "schema":"core/query-organisation",
  "id":"entity_by_group",
  "flags":{"public":true},
  "view":{
    "table":"Entity",
    "type":"select",
    "tag":"by_group",
    "access":{"query":null,"roles":{},"relation":null,"symbol":null},
    "query":{"group":"{{i_group_id}}"},
    "guards":[],
    "autos":[]
  }
};

// statsapi.list.view-user/organisation-view-default [30] 
var organisation_view_default = {
  "input":[{"symbol":"i_organisation_id","type":"uuid"}],
  "return":"jsonb",
  "schema":"core/query-organisation",
  "id":"organisation_view_default",
  "flags":{"public":true},
  "view":{
    "table":"Organisation",
    "type":"return",
    "tag":"view_default",
    "access":{"query":null,"roles":{},"relation":null,"symbol":null},
    "query":[["lock",["*/standard"]],"*/standard"],
    "guards":[],
    "autos":[]
  }
};

// statsapi.list.view-user/organisation-view-membership [30] 
var organisation_view_membership = {
  "input":[{"symbol":"i_organisation_id","type":"uuid"}],
  "return":"jsonb",
  "schema":"core/query-organisation",
  "id":"organisation_view_membership",
  "flags":{},
  "view":{
    "table":"Organisation",
    "type":"return",
    "tag":"view_membership",
    "access":{
      "symbol":"statsdb.api.core.query_organisation/organisation_access_is_member",
      "relation":"reverse",
      "query":{
        "clause":[
          {"owner":"{{<%>}}","__deleted__":false},
          {
          "__deleted__":false,
          "access":{"entries":{"account":"{{<%>}}"}}
        }
        ]
      },
      "roles":{"organisation.member":true}
    },
    "query":[
      ["lock",["*/standard"]],
      [
      "access",
      [
      "*/standard",
      [
      "entries",
      [
      "*/standard",
      [
      "account",
      [
      ["profile",["last_name","first_name","id","picture"]],
      "nickname",
      "id"
    ]
    ]
    ]
    ]
    ]
    ],
      "*/standard",
      ["rakes",["*/standard"]],
      ["trust",["*/standard"]]
    ],
    "guards":[],
    "autos":[]
  }
};

// statsapi.list.view-user/rake-template-default [30] 
var rake_template_default = {
  "input":[{"symbol":"i_rake_template_id","type":"uuid"}],
  "return":"jsonb",
  "schema":"core/query-organisation",
  "id":"rake_template_default",
  "flags":{"public":true},
  "view":{
    "table":"RakeTemplate",
    "type":"return",
    "tag":"default",
    "access":{"query":null,"roles":{},"relation":null,"symbol":null},
    "query":["*/standard"],
    "guards":[],
    "autos":[]
  }
};

// statsapi.list.view-user/buy-in-template-default [30] 
var buy_in_template_default = {
  "input":[{"symbol":"i_buy_in_template_id","type":"uuid"}],
  "return":"jsonb",
  "schema":"core/query-organisation",
  "id":"buy_in_template_default",
  "flags":{"public":true},
  "view":{
    "table":"BuyInTemplate",
    "type":"return",
    "tag":"default",
    "access":{"query":null,"roles":{},"relation":null,"symbol":null},
    "query":["*/standard"],
    "guards":[],
    "autos":[]
  }
};

// statsapi.list.view-user/staking-template-default [30] 
var staking_template_default = {
  "input":[{"symbol":"i_staking_template_id","type":"uuid"}],
  "return":"jsonb",
  "schema":"core/query-organisation",
  "id":"staking_template_default",
  "flags":{"public":true},
  "view":{
    "table":"StakingTemplate",
    "type":"return",
    "tag":"default",
    "access":{"query":null,"roles":{},"relation":null,"symbol":null},
    "query":["*/standard"],
    "guards":[],
    "autos":[]
  }
};

// statsapi.list.view-user/entity-group-default [30] 
var entity_group_default = {
  "input":[{"symbol":"i_entity_id","type":"uuid"}],
  "return":"jsonb",
  "schema":"core/query-organisation",
  "id":"entity_group_default",
  "flags":{"public":true},
  "view":{
    "table":"EntityGroup",
    "type":"return",
    "tag":"default",
    "access":{"query":null,"roles":{},"relation":null,"symbol":null},
    "query":["*/standard"],
    "guards":[],
    "autos":[]
  }
};

// statsapi.list.view-user/entity-default [30] 
var entity_default = {
  "input":[{"symbol":"i_entity_id","type":"uuid"}],
  "return":"jsonb",
  "schema":"core/query-organisation",
  "id":"entity_default",
  "flags":{"public":true},
  "view":{
    "table":"Entity",
    "type":"return",
    "tag":"default",
    "access":{"query":null,"roles":{},"relation":null,"symbol":null},
    "query":["*/standard"],
    "guards":[],
    "autos":[]
  }
};

// statsapi.list.view-user/make-views [33] 
function make_views(){
  return ut.collect_views([
    user_account_all,
    user_account_by_nickname,
    user_account_by_organisation,
    user_email_by_account_id,
    user_email_get_primary,
    access_entry_by_organisation,
    access_by_organisation,
    tx_asset_for_room_account_admin,
    tx_asset_for,
    tx_asset_for_room_account,
    user_account_dashboard,
    user_account_dashboard_min,
    user_account_info,
    user_account_evm_accounts,
    user_email_default,
    access_entry_default,
    access_default,
    tx_asset_default,
    tx_asset_linked_swap,
    tx_asset_full_swap,
    tx_asset_linked_contract,
    tx_asset_full_contract,
    organisation_all,
    organisation_all_as_owner,
    organisation_all_as_admin,
    organisation_all_as_member,
    organisation_by_name,
    rake_template_by_organisation,
    buy_in_template_by_organisation,
    staking_template_by_organisation,
    entity_group_by_organisation,
    entity_by_group,
    organisation_view_default,
    organisation_view_membership,
    rake_template_default,
    buy_in_template_default,
    staking_template_default,
    entity_group_default,
    entity_default
  ]);
}

var MODULE = {
  "user_account_all":user_account_all,
  "user_account_by_nickname":user_account_by_nickname,
  "user_account_by_organisation":user_account_by_organisation,
  "user_email_by_account_id":user_email_by_account_id,
  "user_email_get_primary":user_email_get_primary,
  "access_entry_by_organisation":access_entry_by_organisation,
  "access_by_organisation":access_by_organisation,
  "tx_asset_for_room_account_admin":tx_asset_for_room_account_admin,
  "tx_asset_for":tx_asset_for,
  "tx_asset_for_room_account":tx_asset_for_room_account,
  "user_account_dashboard":user_account_dashboard,
  "user_account_dashboard_min":user_account_dashboard_min,
  "user_account_info":user_account_info,
  "user_account_evm_accounts":user_account_evm_accounts,
  "user_email_default":user_email_default,
  "access_entry_default":access_entry_default,
  "access_default":access_default,
  "tx_asset_default":tx_asset_default,
  "tx_asset_linked_swap":tx_asset_linked_swap,
  "tx_asset_full_swap":tx_asset_full_swap,
  "tx_asset_linked_contract":tx_asset_linked_contract,
  "tx_asset_full_contract":tx_asset_full_contract,
  "organisation_all":organisation_all,
  "organisation_all_as_owner":organisation_all_as_owner,
  "organisation_all_as_admin":organisation_all_as_admin,
  "organisation_all_as_member":organisation_all_as_member,
  "organisation_by_name":organisation_by_name,
  "rake_template_by_organisation":rake_template_by_organisation,
  "buy_in_template_by_organisation":buy_in_template_by_organisation,
  "staking_template_by_organisation":staking_template_by_organisation,
  "entity_group_by_organisation":entity_group_by_organisation,
  "entity_by_group":entity_by_group,
  "organisation_view_default":organisation_view_default,
  "organisation_view_membership":organisation_view_membership,
  "rake_template_default":rake_template_default,
  "buy_in_template_default":buy_in_template_default,
  "staking_template_default":staking_template_default,
  "entity_group_default":entity_group_default,
  "entity_default":entity_default,
  "make_views":make_views
};

module.exports = MODULE