const ut = require("@xtalk/db/base-util")

// statsapi.list.fn-ethereum/evm-add-chain [15] 
var evm_add_chain = {
  "input":[
    {"symbol":"i_account_id","type":"uuid"},
    {"symbol":"m","type":"jsonb"}
  ],
  "return":"jsonb",
  "schema":"core/evm-common",
  "id":"evm_add_chain",
  "flags":{"super":true},
  "url":"api/ethereum/evm-add-chain"
};

// statsapi.list.fn-ethereum/evm-remove-chain [15] 
var evm_remove_chain = {
  "input":[
    {"symbol":"i_account_id","type":"uuid"},
    {"symbol":"i_evm_id","type":"citext"}
  ],
  "return":"jsonb",
  "schema":"core/evm-common",
  "id":"evm_remove_chain",
  "flags":{"super":true},
  "url":"api/ethereum/evm-remove-chain"
};

// statsapi.list.fn-ethereum/evm-update-chain [15] 
var evm_update_chain = {
  "input":[
    {"symbol":"i_account_id","type":"uuid"},
    {"symbol":"i_evm_id","type":"citext"},
    {"symbol":"m","type":"jsonb"}
  ],
  "return":"jsonb",
  "schema":"core/evm-common",
  "id":"evm_update_chain",
  "flags":{"super":true},
  "url":"api/ethereum/evm-update-chain"
};

// statsapi.list.fn-ethereum/evm-add-contract-template [15] 
var evm_add_contract_template = {
  "input":[
    {"symbol":"i_account_id","type":"uuid"},
    {"symbol":"m","type":"jsonb"}
  ],
  "return":"jsonb",
  "schema":"core/evm-common",
  "id":"evm_add_contract_template",
  "flags":{"super":true},
  "url":"api/ethereum/evm-add-contract-template"
};

// statsapi.list.fn-ethereum/evm-remove-contract-template [15] 
var evm_remove_contract_template = {
  "input":[
    {"symbol":"i_account_id","type":"uuid"},
    {"symbol":"i_contract_id","type":"uuid"}
  ],
  "return":"jsonb",
  "schema":"core/evm-common",
  "id":"evm_remove_contract_template",
  "flags":{"super":true},
  "url":"api/ethereum/evm-remove-contract-template"
};

// statsapi.list.fn-ethereum/evm-add-contract [15] 
var evm_add_contract = {
  "input":[
    {"symbol":"i_account_id","type":"uuid"},
    {"symbol":"m","type":"jsonb"}
  ],
  "return":"jsonb",
  "schema":"core/evm-common",
  "id":"evm_add_contract",
  "flags":{"super":true},
  "url":"api/ethereum/evm-add-contract"
};

// statsapi.list.fn-ethereum/evm-remove-contract [15] 
var evm_remove_contract = {
  "input":[
    {"symbol":"i_account_id","type":"uuid"},
    {"symbol":"i_contract_id","type":"uuid"}
  ],
  "return":"jsonb",
  "schema":"core/evm-common",
  "id":"evm_remove_contract",
  "flags":{"super":true},
  "url":"api/ethereum/evm-remove-contract"
};

// statsapi.list.fn-ethereum/evm-add-token [15] 
var evm_add_token = {
  "input":[
    {"symbol":"i_account_id","type":"uuid"},
    {"symbol":"m","type":"jsonb"}
  ],
  "return":"jsonb",
  "schema":"core/evm-common",
  "id":"evm_add_token",
  "flags":{"super":true},
  "url":"api/ethereum/evm-add-token"
};

// statsapi.list.fn-ethereum/evm-remove-token [15] 
var evm_remove_token = {
  "input":[
    {"symbol":"i_account_id","type":"uuid"},
    {"symbol":"i_token_id","type":"uuid"}
  ],
  "return":"jsonb",
  "schema":"core/evm-common",
  "id":"evm_remove_token",
  "flags":{"super":true},
  "url":"api/ethereum/evm-remove-token"
};

// statsapi.list.fn-ethereum/evm-update-token [15] 
var evm_update_token = {
  "input":[
    {"symbol":"i_account_id","type":"uuid"},
    {"symbol":"i_token_id","type":"uuid"},
    {"symbol":"m","type":"jsonb"}
  ],
  "return":"jsonb",
  "schema":"core/evm-common",
  "id":"evm_update_token",
  "flags":{"super":true},
  "url":"api/ethereum/evm-update-token"
};

// statsapi.list.fn-ethereum/evm-add-faucet-entry [15] 
var evm_add_faucet_entry = {
  "input":[
    {"symbol":"i_account_id","type":"uuid"},
    {"symbol":"i_chain_id","type":"citext"},
    {"symbol":"i_currency_id","type":"citext"}
  ],
  "return":"jsonb",
  "schema":"core/evm-common",
  "id":"evm_add_faucet_entry",
  "flags":{"super":true},
  "url":"api/ethereum/evm-add-faucet-entry"
};

// statsapi.list.fn-ethereum/evm-remove-faucet-entry [15] 
var evm_remove_faucet_entry = {
  "input":[
    {"symbol":"i_account_id","type":"uuid"},
    {"symbol":"i_faucet_entry_id","type":"uuid"}
  ],
  "return":"jsonb",
  "schema":"core/evm-common",
  "id":"evm_remove_faucet_entry",
  "flags":{"super":true},
  "url":"api/ethereum/evm-remove-faucet-entry"
};

// statsapi.list.fn-ethereum/evm-remove-user-address [15] 
var evm_remove_user_address = {
  "input":[
    {"symbol":"i_account_id","type":"uuid"},
    {"symbol":"i_user_address","type":"citext"}
  ],
  "return":"jsonb",
  "schema":"core/evm-common",
  "id":"evm_remove_user_address",
  "flags":{"token":true,"mq.event":true},
  "url":"api/ethereum/evm-remove-user-address"
};

// statsapi.list.fn-ethereum/evm-action-get-status [15] 
var evm_action_get_status = {
  "input":[
    {"symbol":"i_account_id","type":"uuid"},
    {"symbol":"i_status","type":"text"}
  ],
  "return":"jsonb",
  "schema":"core/evm-common",
  "id":"evm_action_get_status",
  "flags":{"super":true},
  "url":"api/ethereum/evm-action-get-status"
};

// statsapi.list.fn-ethereum/evm-action-take [15] 
var evm_action_take = {
  "input":[
    {"symbol":"i_account_id","type":"uuid"},
    {"symbol":"i_action_id","type":"uuid"}
  ],
  "return":"jsonb",
  "schema":"core/evm-common",
  "id":"evm_action_take",
  "flags":{"super":true,"mq.event":true},
  "url":"api/ethereum/evm-action-take"
};

// statsapi.list.fn-ethereum/evm-action-take-reset [15] 
var evm_action_take_reset = {
  "input":[
    {"symbol":"i_account_id","type":"uuid"},
    {"symbol":"i_action_id","type":"uuid"}
  ],
  "return":"jsonb",
  "schema":"core/evm-common",
  "id":"evm_action_take_reset",
  "flags":{"super":true,"mq.event":true},
  "url":"api/ethereum/evm-action-take-reset"
};

// statsapi.list.fn-ethereum/evm-action-error [15] 
var evm_action_error = {
  "input":[
    {"symbol":"i_account_id","type":"uuid"},
    {"symbol":"i_action_id","type":"uuid"},
    {"symbol":"i_detail","type":"jsonb"},
    {"symbol":"i_blockfee","type":"numeric"}
  ],
  "return":"jsonb",
  "schema":"core/evm-common",
  "id":"evm_action_error",
  "flags":{"super":true,"mq.event":true},
  "url":"api/ethereum/evm-action-error"
};

// statsapi.list.fn-ethereum/evm-action-return [15] 
var evm_action_return = {
  "input":[
    {"symbol":"i_account_id","type":"uuid"},
    {"symbol":"i_action_id","type":"uuid"},
    {"symbol":"i_type","type":"text"},
    {"symbol":"i_tx_id","type":"text"},
    {"symbol":"i_blockid","type":"citext"},
    {"symbol":"i_blocknum","type":"bigint"},
    {"symbol":"i_blockfee","type":"numeric"}
  ],
  "return":"jsonb",
  "schema":"core/evm-common",
  "id":"evm_action_return",
  "flags":{"super":true,"mq.event":true},
  "url":"api/ethereum/evm-action-return"
};

// statsapi.list.fn-ethereum/evm-account-close-request [20] 
var evm_account_close_request = {
  "input":[
    {"symbol":"i_account_id","type":"uuid"},
    {"symbol":"i_playable_id","type":"uuid"},
    {"symbol":"i_user_address_id","type":"citext"}
  ],
  "return":"jsonb",
  "schema":"core/evm-vault",
  "id":"evm_account_close_request",
  "flags":{"token":true,"mq.event":true},
  "url":"api/ethereum/evm-account-close-request"
};

// statsapi.list.fn-ethereum/evm-vault-withdraw-create [20] 
var evm_vault_withdraw_create = {
  "input":[
    {"symbol":"i_account_id","type":"uuid"},
    {"symbol":"i_playable_id","type":"uuid"},
    {"symbol":"i_amount","type":"numeric"}
  ],
  "return":"jsonb",
  "schema":"core/evm-vault",
  "id":"evm_vault_withdraw_create",
  "flags":{"token":true,"mq.event":true},
  "url":"api/ethereum/evm-vault-withdraw-create"
};

// statsapi.list.fn-ethereum/evm-vault-withdraw-cancel [20] 
var evm_vault_withdraw_cancel = {
  "input":[
    {"symbol":"i_account_id","type":"uuid"},
    {"symbol":"i_playable_id","type":"uuid"},
    {"symbol":"i_withdraw_id","type":"uuid"}
  ],
  "return":"jsonb",
  "schema":"core/evm-vault",
  "id":"evm_vault_withdraw_cancel",
  "flags":{"token":true,"mq.event":true},
  "url":"api/ethereum/evm-vault-withdraw-cancel"
};

// statsapi.list.fn-ethereum/evm-vault-withdraw-requeue [20] 
var evm_vault_withdraw_requeue = {
  "input":[
    {"symbol":"i_account_id","type":"uuid"},
    {"symbol":"i_playable_id","type":"uuid"},
    {"symbol":"i_withdraw_id","type":"uuid"}
  ],
  "return":"jsonb",
  "schema":"core/evm-vault",
  "id":"evm_vault_withdraw_requeue",
  "flags":{"token":true,"mq.event":true},
  "url":"api/ethereum/evm-vault-withdraw-requeue"
};

// statsapi.list.fn-ethereum/evm-vault-wait [20] 
var evm_vault_wait = {
  "input":[
    {"symbol":"i_account_id","type":"uuid"},
    {"symbol":"i_playable_id","type":"uuid"},
    {"symbol":"i_tx_action_id","type":"uuid"},
    {"symbol":"i_tx_id","type":"citext"},
    {"symbol":"i_blockid","type":"citext"},
    {"symbol":"i_blocknum","type":"bigint"},
    {"symbol":"i_blockfee","type":"bigint"},
    {"symbol":"i_type","type":"text"}
  ],
  "return":"jsonb",
  "schema":"core/evm-vault",
  "id":"evm_vault_wait",
  "flags":{"super":true},
  "url":"api/ethereum/evm-vault-wait"
};

// statsapi.list.fn-ethereum/ROUTES [23] 
var ROUTES = {
  "evm_add_chain":evm_add_chain,
  "evm_remove_faucet_entry":evm_remove_faucet_entry,
  "evm_update_token":evm_update_token,
  "evm_action_take_reset":evm_action_take_reset,
  "evm_action_get_status":evm_action_get_status,
  "evm_vault_wait":evm_vault_wait,
  "evm_vault_withdraw_requeue":evm_vault_withdraw_requeue,
  "evm_remove_contract_template":evm_remove_contract_template,
  "evm_remove_token":evm_remove_token,
  "evm_vault_withdraw_cancel":evm_vault_withdraw_cancel,
  "evm_remove_chain":evm_remove_chain,
  "evm_account_close_request":evm_account_close_request,
  "evm_action_take":evm_action_take,
  "evm_add_faucet_entry":evm_add_faucet_entry,
  "evm_remove_user_address":evm_remove_user_address,
  "evm_vault_withdraw_create":evm_vault_withdraw_create,
  "evm_action_return":evm_action_return,
  "evm_add_token":evm_add_token,
  "evm_add_contract_template":evm_add_contract_template,
  "evm_add_contract":evm_add_contract,
  "evm_remove_contract":evm_remove_contract,
  "evm_action_error":evm_action_error,
  "evm_update_chain":evm_update_chain
};

// statsapi.list.fn-ethereum/make-routes [26] 
function make_routes(){
  return ut.collect_routes_object(ROUTES);
}

var MODULE = {
  "evm_add_chain":evm_add_chain,
  "evm_remove_chain":evm_remove_chain,
  "evm_update_chain":evm_update_chain,
  "evm_add_contract_template":evm_add_contract_template,
  "evm_remove_contract_template":evm_remove_contract_template,
  "evm_add_contract":evm_add_contract,
  "evm_remove_contract":evm_remove_contract,
  "evm_add_token":evm_add_token,
  "evm_remove_token":evm_remove_token,
  "evm_update_token":evm_update_token,
  "evm_add_faucet_entry":evm_add_faucet_entry,
  "evm_remove_faucet_entry":evm_remove_faucet_entry,
  "evm_remove_user_address":evm_remove_user_address,
  "evm_action_get_status":evm_action_get_status,
  "evm_action_take":evm_action_take,
  "evm_action_take_reset":evm_action_take_reset,
  "evm_action_error":evm_action_error,
  "evm_action_return":evm_action_return,
  "evm_account_close_request":evm_account_close_request,
  "evm_vault_withdraw_create":evm_vault_withdraw_create,
  "evm_vault_withdraw_cancel":evm_vault_withdraw_cancel,
  "evm_vault_withdraw_requeue":evm_vault_withdraw_requeue,
  "evm_vault_wait":evm_vault_wait,
  "ROUTES":ROUTES,
  "make_routes":make_routes
};

module.exports = MODULE