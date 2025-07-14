const user_call = require("./user-call")

const user_event = require("./user-event")

const base_system = require("./base-system")

// statslink.impl.user-remote-fn/get-privacy-policy [32] 
function get_privacy_policy(user,cb){
  return user_call.user_call(user,"api/account/get-privacy-policy",[],null,null,cb);
}

// statslink.impl.user-remote-fn/get-terms-and-conditions [32] 
function get_terms_and_conditions(user,cb){
  return user_call.user_call(user,"api/account/get-terms-and-conditions",[],null,null,cb);
}

// statslink.impl.user-remote-fn/check-nickname-exists [32] 
function check_nickname_exists(user,i_nickname,cb){
  return user_call.user_call(
    user,
    "api/account/check-nickname-exists",
    [i_nickname],
    null,
    null,
    cb
  );
}

// statslink.impl.user-remote-fn/check-nickname-available [32] 
function check_nickname_available(user,i_nickname,cb){
  return user_call.user_call(
    user,
    "api/account/check-nickname-available",
    [i_nickname],
    null,
    null,
    cb
  );
}

// statslink.impl.user-remote-fn/check-email-exists [32] 
function check_email_exists(user,i_email,cb){
  return user_call.user_call(user,"api/account/check-email-exists",[i_email],null,null,cb);
}

// statslink.impl.user-remote-fn/check-email-available [32] 
function check_email_available(user,i_email,cb){
  return user_call.user_call(user,"api/account/check-email-available",[i_email],null,null,cb);
}

// statslink.impl.user-remote-fn/email-registration [32] 
function email_registration(user,m,cb){
  return user_call.user_call(user,"api/account/email-registration",[m],null,null,cb);
}

// statslink.impl.user-remote-fn/email-registration-external [32] 
function email_registration_external(user,m,cb){
  return user_call.user_call(user,"api/account/email-registration-external",[m],null,null,cb);
}

// statslink.impl.user-remote-fn/email-verification [32] 
function email_verification(user,m,cb){
  return user_call.user_call(
    user,
    "api/account/email-verification",
    [m],
    null,
    null,
    user_event.token_sync_wrap(user,cb)
  );
}

// statslink.impl.user-remote-fn/email-verification-resend [32] 
function email_verification_resend(user,m,cb){
  return user_call.user_call(user,"api/account/email-verification-resend",[m],null,null,cb);
}

// statslink.impl.user-remote-fn/create-account [32] 
function create_account(user,i_account_id,m,cb){
  return user_call.user_call(user,"api/account/create-account",[i_account_id,m],null,null,cb);
}

// statslink.impl.user-remote-fn/password-reset-request [32] 
function password_reset_request(user,m,cb){
  return user_call.user_call(user,"api/account/password-reset-request",[m],null,null,cb);
}

// statslink.impl.user-remote-fn/login-renew [32] 
function login_renew(user,i_token,cb){
  return user_call.user_call(
    user,
    "api/account/login-renew",
    [],
    JSON.stringify(i_token),
    true,
    user_event.token_sync_wrap(user,cb)
  );
}

// statslink.impl.user-remote-fn/logout [32] 
function logout(user,i_token,cb){
  return user_call.user_call(
    user,
    "api/account/logout",
    [],
    JSON.stringify(i_token),
    true,
    user_event.logout_sync_wrap(user,cb)
  );
}

// statslink.impl.user-remote-fn/net-check [32] 
function net_check(user,account_id,cb){
  return user_call.user_call(user,"api/account/net-check",[account_id],null,null,cb);
}

// statslink.impl.user-remote-fn/profile-modify [32] 
function profile_modify(user,i_account_id,m,cb){
  return user_call.user_call(user,"api/account/profile-modify",[i_account_id,m],null,null,cb);
}

// statslink.impl.user-remote-fn/notification-modify [32] 
function notification_modify(user,i_account_id,m,cb){
  return user_call.user_call(
    user,
    "api/account/notification-modify",
    [i_account_id,m],
    null,
    null,
    cb
  );
}

// statslink.impl.user-remote-fn/email-get-all [32] 
function email_get_all(user,i_account_id,cb){
  return user_call.user_call(user,"api/account/email-get-all",[i_account_id],null,null,cb);
}

// statslink.impl.user-remote-fn/email-get-primary [32] 
function email_get_primary(user,i_account_id,cb){
  return user_call.user_call(user,"api/account/email-get-primary",[i_account_id],null,null,cb);
}

// statslink.impl.user-remote-fn/email-remove-additional [32] 
function email_remove_additional(user,i_account_id,i_email,cb){
  return user_call.user_call(
    user,
    "api/account/email-remove-additional",
    [i_account_id,i_email],
    null,
    null,
    cb
  );
}

// statslink.impl.user-remote-fn/email-verify-additional [32] 
function email_verify_additional(user,i_account_id,i_email,i_code,cb){
  return user_call.user_call(
    user,
    "api/account/email-verify-additional",
    [i_account_id,i_email,i_code],
    null,
    null,
    cb
  );
}

// statslink.impl.user-remote-fn/email-set-primary [32] 
function email_set_primary(user,i_account_id,i_email,cb){
  return user_call.user_call(
    user,
    "api/account/email-set-primary",
    [i_account_id,i_email],
    null,
    null,
    cb
  );
}

// statslink.impl.user-remote-fn/delete-account-check [32] 
function delete_account_check(user,i_account_id,cb){
  return user_call.user_call(
    user,
    "api/account/delete-account-check",
    [i_account_id],
    null,
    null,
    cb
  );
}

// statslink.impl.user-remote-fn/delete-account [32] 
function delete_account(user,i_account_id,cb){
  return user_call.user_call(user,"api/account/delete-account",[i_account_id],null,null,cb);
}

// statslink.impl.user-remote-fn/oauth-unlink [32] 
function oauth_unlink(user,i_account_id,i_identity,cb){
  return user_call.user_call(
    user,
    "api/account/oauth-unlink",
    [i_account_id,i_identity],
    null,
    null,
    cb
  );
}

// statslink.impl.user-remote-fn/brand-create [64] 
function brand_create(user,i_account_id,m,cb){
  return user_call.user_call(user,"api/brand/brand-create",[i_account_id,m],null,null,cb);
}

// statslink.impl.user-remote-fn/brand-transfer-ownership [64] 
function brand_transfer_ownership(user,i_account_id,i_brand_id,i_new_owner_id,cb){
  return user_call.user_call(
    user,
    "api/brand/brand-transfer-ownership",
    [i_account_id,i_brand_id,i_new_owner_id],
    null,
    null,
    cb
  );
}

// statslink.impl.user-remote-fn/brand-remove [64] 
function brand_remove(user,i_account_id,i_brand_id,cb){
  return user_call.user_call(
    user,
    "api/brand/brand-remove",
    [i_account_id,i_brand_id],
    null,
    null,
    cb
  );
}

// statslink.impl.user-remote-fn/brand-modify [64] 
function brand_modify(user,i_account_id,i_brand_id,m,cb){
  return user_call.user_call(
    user,
    "api/brand/brand-modify",
    [i_account_id,i_brand_id,m],
    null,
    null,
    cb
  );
}

// statslink.impl.user-remote-fn/brand-add-member [64] 
function brand_add_member(user,i_account_id,i_brand_id,i_new_member_id,i_detail,cb){
  return user_call.user_call(
    user,
    "api/brand/brand-add-member",
    [i_account_id,i_brand_id,i_new_member_id,i_detail],
    null,
    null,
    cb
  );
}

// statslink.impl.user-remote-fn/brand-remove-member [64] 
function brand_remove_member(user,i_account_id,i_brand_id,i_member_id,cb){
  return user_call.user_call(
    user,
    "api/brand/brand-remove-member",
    [i_account_id,i_brand_id,i_member_id],
    null,
    null,
    cb
  );
}

// statslink.impl.user-remote-fn/brand-leave-as-member [64] 
function brand_leave_as_member(user,i_account_id,i_brand_id,cb){
  return user_call.user_call(
    user,
    "api/brand/brand-leave-as-member",
    [i_account_id,i_brand_id],
    null,
    null,
    cb
  );
}

// statslink.impl.user-remote-fn/brand-add-star [64] 
function brand_add_star(user,i_account_id,i_brand_id,cb){
  return user_call.user_call(
    user,
    "api/brand/brand-add-star",
    [i_account_id,i_brand_id],
    null,
    null,
    cb
  );
}

// statslink.impl.user-remote-fn/brand-remove-star [64] 
function brand_remove_star(user,i_account_id,i_brand_id,cb){
  return user_call.user_call(
    user,
    "api/brand/brand-remove-star",
    [i_account_id,i_brand_id],
    null,
    null,
    cb
  );
}

// statslink.impl.user-remote-fn/brand-post-wall [64] 
function brand_post_wall(user,i_account_id,i_brand_id,i_parent_id,i_body,cb){
  return user_call.user_call(
    user,
    "api/brand/brand-post-wall",
    [i_account_id,i_brand_id,i_parent_id,i_body],
    null,
    null,
    cb
  );
}

// statslink.impl.user-remote-fn/brand-edit-wall [64] 
function brand_edit_wall(user,i_account_id,i_brand_id,i_communication_id,i_new_body,cb){
  return user_call.user_call(
    user,
    "api/brand/brand-edit-wall",
    [i_account_id,i_brand_id,i_communication_id,i_new_body],
    null,
    null,
    cb
  );
}

// statslink.impl.user-remote-fn/brand-upvote-wall [64] 
function brand_upvote_wall(user,i_account_id,i_brand_id,i_communication_id,cb){
  return user_call.user_call(
    user,
    "api/brand/brand-upvote-wall",
    [i_account_id,i_brand_id,i_communication_id],
    null,
    null,
    cb
  );
}

// statslink.impl.user-remote-fn/brand-downvote-wall [64] 
function brand_downvote_wall(user,i_account_id,i_brand_id,i_communication_id,cb){
  return user_call.user_call(
    user,
    "api/brand/brand-downvote-wall",
    [i_account_id,i_brand_id,i_communication_id],
    null,
    null,
    cb
  );
}

// statslink.impl.user-remote-fn/brand-unvote-wall [64] 
function brand_unvote_wall(user,i_account_id,i_brand_id,i_communication_id,cb){
  return user_call.user_call(
    user,
    "api/brand/brand-unvote-wall",
    [i_account_id,i_brand_id,i_communication_id],
    null,
    null,
    cb
  );
}

// statslink.impl.user-remote-fn/brand-affiliation-add [64] 
function brand_affiliation_add(user,i_account_id,i_organisation_id,i_brand_id,cb){
  return user_call.user_call(
    user,
    "api/brand/brand-affiliation-add",
    [i_account_id,i_organisation_id,i_brand_id],
    null,
    null,
    cb
  );
}

// statslink.impl.user-remote-fn/brand-affiliation-remove [64] 
function brand_affiliation_remove(user,i_account_id,i_organisation_id,i_brand_id,cb){
  return user_call.user_call(
    user,
    "api/brand/brand-affiliation-remove",
    [i_account_id,i_organisation_id,i_brand_id],
    null,
    null,
    cb
  );
}

// statslink.impl.user-remote-fn/brand-affiliation-request [64] 
function brand_affiliation_request(user,i_request_account_id,i_organisation_id,i_brand_id,cb){
  return user_call.user_call(
    user,
    "api/brand/brand-affiliation-request",
    [i_request_account_id,i_organisation_id,i_brand_id],
    null,
    null,
    cb
  );
}

// statslink.impl.user-remote-fn/brand-affiliation-accept [64] 
function brand_affiliation_accept(user,i_account_id,i_organisation_id,i_brand_id,cb){
  return user_call.user_call(
    user,
    "api/brand/brand-affiliation-accept",
    [i_account_id,i_organisation_id,i_brand_id],
    null,
    null,
    cb
  );
}

// statslink.impl.user-remote-fn/brand-affiliation-reject [64] 
function brand_affiliation_reject(user,i_account_id,i_organisation_id,i_brand_id,cb){
  return user_call.user_call(
    user,
    "api/brand/brand-affiliation-reject",
    [i_account_id,i_organisation_id,i_brand_id],
    null,
    null,
    cb
  );
}

// statslink.impl.user-remote-fn/brand-topic-sponsorship-request [64] 
function brand_topic_sponsorship_request(user,i_topic_account_id,i_brand_id,i_topic_id,cb){
  return user_call.user_call(
    user,
    "api/brand/brand-topic-sponsorship-request",
    [i_topic_account_id,i_brand_id,i_topic_id],
    null,
    null,
    cb
  );
}

// statslink.impl.user-remote-fn/brand-topic-sponsorship-response [64] 
function brand_topic_sponsorship_response(user,i_brand_account_id,i_sponsorship_id,i_status,cb){
  return user_call.user_call(
    user,
    "api/brand/brand-topic-sponsorship-response",
    [i_brand_account_id,i_sponsorship_id,i_status],
    null,
    null,
    cb
  );
}

// statslink.impl.user-remote-fn/brand-swap-sponsorship-request [64] 
function brand_swap_sponsorship_request(user,i_swap_account_id,i_brand_id,i_swap_id,cb){
  return user_call.user_call(
    user,
    "api/brand/brand-swap-sponsorship-request",
    [i_swap_account_id,i_brand_id,i_swap_id],
    null,
    null,
    cb
  );
}

// statslink.impl.user-remote-fn/brand-swap-sponsorship-response [64] 
function brand_swap_sponsorship_response(user,i_brand_account_id,i_sponsorship_id,i_status,cb){
  return user_call.user_call(
    user,
    "api/brand/brand-swap-sponsorship-response",
    [i_brand_account_id,i_sponsorship_id,i_status],
    null,
    null,
    cb
  );
}

// statslink.impl.user-remote-fn/evm-add-chain [69] 
function evm_add_chain(user,i_account_id,m,cb){
  return user_call.user_call(user,"api/ethereum/evm-add-chain",[i_account_id,m],null,null,cb);
}

// statslink.impl.user-remote-fn/evm-remove-chain [69] 
function evm_remove_chain(user,i_account_id,i_evm_id,cb){
  return user_call.user_call(
    user,
    "api/ethereum/evm-remove-chain",
    [i_account_id,i_evm_id],
    null,
    null,
    cb
  );
}

// statslink.impl.user-remote-fn/evm-update-chain [69] 
function evm_update_chain(user,i_account_id,i_evm_id,m,cb){
  return user_call.user_call(
    user,
    "api/ethereum/evm-update-chain",
    [i_account_id,i_evm_id,m],
    null,
    null,
    cb
  );
}

// statslink.impl.user-remote-fn/evm-add-contract-template [69] 
function evm_add_contract_template(user,i_account_id,m,cb){
  return user_call.user_call(
    user,
    "api/ethereum/evm-add-contract-template",
    [i_account_id,m],
    null,
    null,
    cb
  );
}

// statslink.impl.user-remote-fn/evm-remove-contract-template [69] 
function evm_remove_contract_template(user,i_account_id,i_contract_id,cb){
  return user_call.user_call(
    user,
    "api/ethereum/evm-remove-contract-template",
    [i_account_id,i_contract_id],
    null,
    null,
    cb
  );
}

// statslink.impl.user-remote-fn/evm-add-contract [69] 
function evm_add_contract(user,i_account_id,m,cb){
  return user_call.user_call(
    user,
    "api/ethereum/evm-add-contract",
    [i_account_id,m],
    null,
    null,
    cb
  );
}

// statslink.impl.user-remote-fn/evm-remove-contract [69] 
function evm_remove_contract(user,i_account_id,i_contract_id,cb){
  return user_call.user_call(
    user,
    "api/ethereum/evm-remove-contract",
    [i_account_id,i_contract_id],
    null,
    null,
    cb
  );
}

// statslink.impl.user-remote-fn/evm-add-token [69] 
function evm_add_token(user,i_account_id,m,cb){
  return user_call.user_call(user,"api/ethereum/evm-add-token",[i_account_id,m],null,null,cb);
}

// statslink.impl.user-remote-fn/evm-remove-token [69] 
function evm_remove_token(user,i_account_id,i_token_id,cb){
  return user_call.user_call(
    user,
    "api/ethereum/evm-remove-token",
    [i_account_id,i_token_id],
    null,
    null,
    cb
  );
}

// statslink.impl.user-remote-fn/evm-update-token [69] 
function evm_update_token(user,i_account_id,i_token_id,m,cb){
  return user_call.user_call(
    user,
    "api/ethereum/evm-update-token",
    [i_account_id,i_token_id,m],
    null,
    null,
    cb
  );
}

// statslink.impl.user-remote-fn/evm-add-faucet-entry [69] 
function evm_add_faucet_entry(user,i_account_id,i_chain_id,i_currency_id,cb){
  return user_call.user_call(
    user,
    "api/ethereum/evm-add-faucet-entry",
    [i_account_id,i_chain_id,i_currency_id],
    null,
    null,
    cb
  );
}

// statslink.impl.user-remote-fn/evm-remove-faucet-entry [69] 
function evm_remove_faucet_entry(user,i_account_id,i_faucet_entry_id,cb){
  return user_call.user_call(
    user,
    "api/ethereum/evm-remove-faucet-entry",
    [i_account_id,i_faucet_entry_id],
    null,
    null,
    cb
  );
}

// statslink.impl.user-remote-fn/evm-remove-user-address [69] 
function evm_remove_user_address(user,i_account_id,i_user_address,cb){
  return user_call.user_call(
    user,
    "api/ethereum/evm-remove-user-address",
    [i_account_id,i_user_address],
    null,
    null,
    cb
  );
}

// statslink.impl.user-remote-fn/evm-action-get-status [69] 
function evm_action_get_status(user,i_account_id,i_status,cb){
  return user_call.user_call(
    user,
    "api/ethereum/evm-action-get-status",
    [i_account_id,i_status],
    null,
    null,
    cb
  );
}

// statslink.impl.user-remote-fn/evm-action-take [69] 
function evm_action_take(user,i_account_id,i_action_id,cb){
  return user_call.user_call(
    user,
    "api/ethereum/evm-action-take",
    [i_account_id,i_action_id],
    null,
    null,
    cb
  );
}

// statslink.impl.user-remote-fn/evm-action-take-reset [69] 
function evm_action_take_reset(user,i_account_id,i_action_id,cb){
  return user_call.user_call(
    user,
    "api/ethereum/evm-action-take-reset",
    [i_account_id,i_action_id],
    null,
    null,
    cb
  );
}

// statslink.impl.user-remote-fn/evm-action-error [69] 
function evm_action_error(user,i_account_id,i_action_id,i_detail,i_blockfee,cb){
  return user_call.user_call(
    user,
    "api/ethereum/evm-action-error",
    [i_account_id,i_action_id,i_detail,i_blockfee],
    null,
    null,
    cb
  );
}

// statslink.impl.user-remote-fn/evm-action-return [69] 
function evm_action_return(user,i_account_id,i_action_id,i_type,i_tx_id,i_blockid,i_blocknum,i_blockfee,cb){
  return user_call.user_call(user,"api/ethereum/evm-action-return",[
    i_account_id,
    i_action_id,
    i_type,
    i_tx_id,
    i_blockid,
    i_blocknum,
    i_blockfee
  ],null,null,cb);
}

// statslink.impl.user-remote-fn/evm-account-close-request [69] 
function evm_account_close_request(user,i_account_id,i_playable_id,i_user_address_id,cb){
  return user_call.user_call(
    user,
    "api/ethereum/evm-account-close-request",
    [i_account_id,i_playable_id,i_user_address_id],
    null,
    null,
    cb
  );
}

// statslink.impl.user-remote-fn/evm-vault-withdraw-create [69] 
function evm_vault_withdraw_create(user,i_account_id,i_playable_id,i_amount,cb){
  return user_call.user_call(
    user,
    "api/ethereum/evm-vault-withdraw-create",
    [i_account_id,i_playable_id,i_amount],
    null,
    null,
    cb
  );
}

// statslink.impl.user-remote-fn/evm-vault-withdraw-cancel [69] 
function evm_vault_withdraw_cancel(user,i_account_id,i_playable_id,i_withdraw_id,cb){
  return user_call.user_call(
    user,
    "api/ethereum/evm-vault-withdraw-cancel",
    [i_account_id,i_playable_id,i_withdraw_id],
    null,
    null,
    cb
  );
}

// statslink.impl.user-remote-fn/evm-vault-withdraw-requeue [69] 
function evm_vault_withdraw_requeue(user,i_account_id,i_playable_id,i_withdraw_id,cb){
  return user_call.user_call(
    user,
    "api/ethereum/evm-vault-withdraw-requeue",
    [i_account_id,i_playable_id,i_withdraw_id],
    null,
    null,
    cb
  );
}

// statslink.impl.user-remote-fn/evm-vault-wait [69] 
function evm_vault_wait(user,i_account_id,i_playable_id,i_tx_action_id,i_tx_id,i_blockid,i_blocknum,i_blockfee,i_type,cb){
  return user_call.user_call(user,"api/ethereum/evm-vault-wait",[
    i_account_id,
    i_playable_id,
    i_tx_action_id,
    i_tx_id,
    i_blockid,
    i_blocknum,
    i_blockfee,
    i_type
  ],null,null,cb);
}

// statslink.impl.user-remote-fn/add-user-api-key [74] 
function add_user_api_key(user,i_account_id,i_tag,i_detail,cb){
  return user_call.user_call(
    user,
    "api/extern/add-user-api-key",
    [i_account_id,i_tag,i_detail],
    null,
    null,
    cb
  );
}

// statslink.impl.user-remote-fn/remove-user-api-key [74] 
function remove_user_api_key(user,i_account_id,i_api_key_id,cb){
  return user_call.user_call(
    user,
    "api/extern/remove-user-api-key",
    [i_account_id,i_api_key_id],
    null,
    null,
    cb
  );
}

// statslink.impl.user-remote-fn/refresh-user-api-key [74] 
function refresh_user_api_key(user,i_account_id,i_api_key_id,cb){
  return user_call.user_call(
    user,
    "api/extern/refresh-user-api-key",
    [i_account_id,i_api_key_id],
    null,
    null,
    cb
  );
}

// statslink.impl.user-remote-fn/add-site-application [74] 
function add_site_application(user,i_account_id,i_organisation_id,m,cb){
  return user_call.user_call(
    user,
    "api/extern/add-site-application",
    [i_account_id,i_organisation_id,m],
    null,
    null,
    cb
  );
}

// statslink.impl.user-remote-fn/remove-site-application [74] 
function remove_site_application(user,i_account_id,i_organisation_id,i_site_app_id,cb){
  return user_call.user_call(
    user,
    "api/extern/remove-site-application",
    [i_account_id,i_organisation_id,i_site_app_id],
    null,
    null,
    cb
  );
}

// statslink.impl.user-remote-fn/prospect-start-registration [79] 
function prospect_start_registration(user,i_account_id,i_prospect_id,i_message,cb){
  return user_call.user_call(
    user,
    "api/game/prospect-start-registration",
    [i_account_id,i_prospect_id,i_message],
    null,
    null,
    cb
  );
}

// statslink.impl.user-remote-fn/prospect-start-allocation [79] 
function prospect_start_allocation(user,i_account_id,i_prospect_id,i_message,cb){
  return user_call.user_call(
    user,
    "api/game/prospect-start-allocation",
    [i_account_id,i_prospect_id,i_message],
    null,
    null,
    cb
  );
}

// statslink.impl.user-remote-fn/prospect-start-trading [79] 
function prospect_start_trading(user,i_account_id,i_prospect_id,i_message,cb){
  return user_call.user_call(
    user,
    "api/game/prospect-start-trading",
    [i_account_id,i_prospect_id,i_message],
    null,
    null,
    cb
  );
}

// statslink.impl.user-remote-fn/prospect-pause-trading [79] 
function prospect_pause_trading(user,i_account_id,i_prospect_id,i_message,cb){
  return user_call.user_call(
    user,
    "api/game/prospect-pause-trading",
    [i_account_id,i_prospect_id,i_message],
    null,
    null,
    cb
  );
}

// statslink.impl.user-remote-fn/prospect-stop-trading [79] 
function prospect_stop_trading(user,i_account_id,i_prospect_id,i_message,cb){
  return user_call.user_call(
    user,
    "api/game/prospect-stop-trading",
    [i_account_id,i_prospect_id,i_message],
    null,
    null,
    cb
  );
}

// statslink.impl.user-remote-fn/prospect-start-resolution [79] 
function prospect_start_resolution(user,i_account_id,i_prospect_id,i_message,cb){
  return user_call.user_call(
    user,
    "api/game/prospect-start-resolution",
    [i_account_id,i_prospect_id,i_message],
    null,
    null,
    cb
  );
}

// statslink.impl.user-remote-fn/prospect-resolve [79] 
function prospect_resolve(user,i_account_id,i_prospect_id,i_limit,cb){
  return user_call.user_call(
    user,
    "api/game/prospect-resolve",
    [i_account_id,i_prospect_id,i_limit],
    null,
    null,
    cb
  );
}

// statslink.impl.user-remote-fn/prospect-start-verdict-check [79] 
function prospect_start_verdict_check(user,i_account_id,i_prospect_id,cb){
  return user_call.user_call(
    user,
    "api/game/prospect-start-verdict-check",
    [i_account_id,i_prospect_id],
    null,
    null,
    cb
  );
}

// statslink.impl.user-remote-fn/prospect-start-verdict [79] 
function prospect_start_verdict(user,i_account_id,i_prospect_id,i_message,cb){
  return user_call.user_call(
    user,
    "api/game/prospect-start-verdict",
    [i_account_id,i_prospect_id,i_message],
    null,
    null,
    cb
  );
}

// statslink.impl.user-remote-fn/prospect-complete [79] 
function prospect_complete(user,i_account_id,i_prospect_id,i_message,cb){
  return user_call.user_call(
    user,
    "api/game/prospect-complete",
    [i_account_id,i_prospect_id,i_message],
    null,
    null,
    cb
  );
}

// statslink.impl.user-remote-fn/topic-discard [79] 
function topic_discard(user,i_account_id,i_topic_id,i_message,cb){
  return user_call.user_call(
    user,
    "api/game/topic-discard",
    [i_account_id,i_topic_id,i_message],
    null,
    null,
    cb
  );
}

// statslink.impl.user-remote-fn/topic-undiscard [79] 
function topic_undiscard(user,i_account_id,i_topic_id,i_message,cb){
  return user_call.user_call(
    user,
    "api/game/topic-undiscard",
    [i_account_id,i_topic_id,i_message],
    null,
    null,
    cb
  );
}

// statslink.impl.user-remote-fn/topic-lock [79] 
function topic_lock(user,i_account_id,i_topic_id,i_message,cb){
  return user_call.user_call(
    user,
    "api/game/topic-lock",
    [i_account_id,i_topic_id,i_message],
    null,
    null,
    cb
  );
}

// statslink.impl.user-remote-fn/topic-start-registration [79] 
function topic_start_registration(user,i_account_id,i_topic_id,i_message,cb){
  return user_call.user_call(
    user,
    "api/game/topic-start-registration",
    [i_account_id,i_topic_id,i_message],
    null,
    null,
    cb
  );
}

// statslink.impl.user-remote-fn/topic-start-allocation [79] 
function topic_start_allocation(user,i_account_id,i_topic_id,i_message,cb){
  return user_call.user_call(
    user,
    "api/game/topic-start-allocation",
    [i_account_id,i_topic_id,i_message],
    null,
    null,
    cb
  );
}

// statslink.impl.user-remote-fn/topic-start-trading [79] 
function topic_start_trading(user,i_account_id,i_topic_id,i_message,cb){
  return user_call.user_call(
    user,
    "api/game/topic-start-trading",
    [i_account_id,i_topic_id,i_message],
    null,
    null,
    cb
  );
}

// statslink.impl.user-remote-fn/topic-pause-trading [79] 
function topic_pause_trading(user,i_account_id,i_topic_id,i_message,cb){
  return user_call.user_call(
    user,
    "api/game/topic-pause-trading",
    [i_account_id,i_topic_id,i_message],
    null,
    null,
    cb
  );
}

// statslink.impl.user-remote-fn/topic-stop-trading [79] 
function topic_stop_trading(user,i_account_id,i_topic_id,i_message,cb){
  return user_call.user_call(
    user,
    "api/game/topic-stop-trading",
    [i_account_id,i_topic_id,i_message],
    null,
    null,
    cb
  );
}

// statslink.impl.user-remote-fn/topic-start-resolution [79] 
function topic_start_resolution(user,i_account_id,i_topic_id,i_message,cb){
  return user_call.user_call(
    user,
    "api/game/topic-start-resolution",
    [i_account_id,i_topic_id,i_message],
    null,
    null,
    cb
  );
}

// statslink.impl.user-remote-fn/topic-start-verdict [79] 
function topic_start_verdict(user,i_account_id,i_topic_id,i_message,cb){
  return user_call.user_call(
    user,
    "api/game/topic-start-verdict",
    [i_account_id,i_topic_id,i_message],
    null,
    null,
    cb
  );
}

// statslink.impl.user-remote-fn/topic-complete [79] 
function topic_complete(user,i_account_id,i_topic_id,i_message,cb){
  return user_call.user_call(
    user,
    "api/game/topic-complete",
    [i_account_id,i_topic_id,i_message],
    null,
    null,
    cb
  );
}

// statslink.impl.user-remote-fn/payout-discard [79] 
function payout_discard(user,i_account_id,i_prospect_id,i_limit,cb){
  return user_call.user_call(
    user,
    "api/game/payout-discard",
    [i_account_id,i_prospect_id,i_limit],
    null,
    null,
    cb
  );
}

// statslink.impl.user-remote-fn/payout-winning [79] 
function payout_winning(user,i_account_id,i_prospect_id,i_limit,cb){
  return user_call.user_call(
    user,
    "api/game/payout-winning",
    [i_account_id,i_prospect_id,i_limit],
    null,
    null,
    cb
  );
}

// statslink.impl.user-remote-fn/payout-return-no [79] 
function payout_return_no(user,i_account_id,i_prospect_id,i_limit,cb){
  return user_call.user_call(
    user,
    "api/game/payout-return-no",
    [i_account_id,i_prospect_id,i_limit],
    null,
    null,
    cb
  );
}

// statslink.impl.user-remote-fn/payout-return-yes [79] 
function payout_return_yes(user,i_account_id,i_prospect_id,i_limit,cb){
  return user_call.user_call(
    user,
    "api/game/payout-return-yes",
    [i_account_id,i_prospect_id,i_limit],
    null,
    null,
    cb
  );
}

// statslink.impl.user-remote-fn/buy-stake [79] 
function buy_stake(user,i_account_id,i_prospect_id,i_stake,cb){
  return user_call.user_call(
    user,
    "api/game/buy-stake",
    [i_account_id,i_prospect_id,i_stake],
    null,
    null,
    cb
  );
}

// statslink.impl.user-remote-fn/payout-stake [79] 
function payout_stake(user,i_account_id,i_prospect_id,i_limit,cb){
  return user_call.user_call(
    user,
    "api/game/payout-stake",
    [i_account_id,i_prospect_id,i_limit],
    null,
    null,
    cb
  );
}

// statslink.impl.user-remote-fn/room-topic-create [79] 
function room_topic_create(user,i_account_id,i_room_id,m,cb){
  return user_call.user_call(
    user,
    "api/game/room-topic-create",
    [i_account_id,i_room_id,m],
    null,
    null,
    cb
  );
}

// statslink.impl.user-remote-fn/verdict-announce [79] 
function verdict_announce(user,i_account_id,i_prospect_id,i_result,cb){
  return user_call.user_call(
    user,
    "api/game/verdict-announce",
    [i_account_id,i_prospect_id,i_result],
    null,
    null,
    cb
  );
}

// statslink.impl.user-remote-fn/verdict-lock [79] 
function verdict_lock(user,i_account_id,i_prospect_id,i_result,cb){
  return user_call.user_call(
    user,
    "api/game/verdict-lock",
    [i_account_id,i_prospect_id,i_result],
    null,
    null,
    cb
  );
}

// statslink.impl.user-remote-fn/prospect-confirm-verdict [79] 
function prospect_confirm_verdict(user,i_account_id,i_prospect_id,i_message,cb){
  return user_call.user_call(
    user,
    "api/game/prospect-confirm-verdict",
    [i_account_id,i_prospect_id,i_message],
    null,
    null,
    cb
  );
}

// statslink.impl.user-remote-fn/organisation-transfer-ownership [84] 
function organisation_transfer_ownership(user,i_account_id,i_organisation_id,i_new_owner_id,cb){
  return user_call.user_call(
    user,
    "api/organisation/organisation-transfer-ownership",
    [i_account_id,i_organisation_id,i_new_owner_id],
    null,
    null,
    cb
  );
}

// statslink.impl.user-remote-fn/organisation-remove [84] 
function organisation_remove(user,i_account_id,i_organisation_id,cb){
  return user_call.user_call(
    user,
    "api/organisation/organisation-remove",
    [i_account_id,i_organisation_id],
    null,
    null,
    cb
  );
}

// statslink.impl.user-remote-fn/organisation-modify [84] 
function organisation_modify(user,i_account_id,i_organisation_id,m,cb){
  return user_call.user_call(
    user,
    "api/organisation/organisation-modify",
    [i_account_id,i_organisation_id,m],
    null,
    null,
    cb
  );
}

// statslink.impl.user-remote-fn/organisation-add-member [84] 
function organisation_add_member(user,i_account_id,i_organisation_id,i_new_member_id,i_detail,cb){
  return user_call.user_call(
    user,
    "api/organisation/organisation-add-member",
    [i_account_id,i_organisation_id,i_new_member_id,i_detail],
    null,
    null,
    cb
  );
}

// statslink.impl.user-remote-fn/organisation-remove-member [84] 
function organisation_remove_member(user,i_account_id,i_organisation_id,i_member_id,cb){
  return user_call.user_call(
    user,
    "api/organisation/organisation-remove-member",
    [i_account_id,i_organisation_id,i_member_id],
    null,
    null,
    cb
  );
}

// statslink.impl.user-remote-fn/organisation-leave-as-member [84] 
function organisation_leave_as_member(user,i_account_id,i_organisation_id,cb){
  return user_call.user_call(
    user,
    "api/organisation/organisation-leave-as-member",
    [i_account_id,i_organisation_id],
    null,
    null,
    cb
  );
}

// statslink.impl.user-remote-fn/organisation-set-public-as-member [84] 
function organisation_set_public_as_member(user,i_account_id,i_organisation_id,v_is_public,cb){
  return user_call.user_call(
    user,
    "api/organisation/organisation-set-public-as-member",
    [i_account_id,i_organisation_id,v_is_public],
    null,
    null,
    cb
  );
}

// statslink.impl.user-remote-fn/organisation-add-star [84] 
function organisation_add_star(user,i_account_id,i_organisation_id,cb){
  return user_call.user_call(
    user,
    "api/organisation/organisation-add-star",
    [i_account_id,i_organisation_id],
    null,
    null,
    cb
  );
}

// statslink.impl.user-remote-fn/organisation-remove-star [84] 
function organisation_remove_star(user,i_account_id,i_organisation_id,cb){
  return user_call.user_call(
    user,
    "api/organisation/organisation-remove-star",
    [i_account_id,i_organisation_id],
    null,
    null,
    cb
  );
}

// statslink.impl.user-remote-fn/organisation-add-rake [84] 
function organisation_add_rake(user,i_account_id,i_organisation_id,m,cb){
  return user_call.user_call(
    user,
    "api/organisation/organisation-add-rake",
    [i_account_id,i_organisation_id,m],
    null,
    null,
    cb
  );
}

// statslink.impl.user-remote-fn/organisation-remove-rake [84] 
function organisation_remove_rake(user,i_account_id,i_organisation_id,i_rake_id,cb){
  return user_call.user_call(
    user,
    "api/organisation/organisation-remove-rake",
    [i_account_id,i_organisation_id,i_rake_id],
    null,
    null,
    cb
  );
}

// statslink.impl.user-remote-fn/organisation-add-staking [84] 
function organisation_add_staking(user,i_account_id,i_organisation_id,m,cb){
  return user_call.user_call(
    user,
    "api/organisation/organisation-add-staking",
    [i_account_id,i_organisation_id,m],
    null,
    null,
    cb
  );
}

// statslink.impl.user-remote-fn/organisation-remove-staking [84] 
function organisation_remove_staking(user,i_account_id,i_organisation_id,i_staking_id,cb){
  return user_call.user_call(
    user,
    "api/organisation/organisation-remove-staking",
    [i_account_id,i_organisation_id,i_staking_id],
    null,
    null,
    cb
  );
}

// statslink.impl.user-remote-fn/organisation-add-buy-in [84] 
function organisation_add_buy_in(user,i_account_id,i_organisation_id,m,cb){
  return user_call.user_call(
    user,
    "api/organisation/organisation-add-buy-in",
    [i_account_id,i_organisation_id,m],
    null,
    null,
    cb
  );
}

// statslink.impl.user-remote-fn/organisation-remove-buy-in [84] 
function organisation_remove_buy_in(user,i_account_id,i_organisation_id,i_buy_in_id,cb){
  return user_call.user_call(
    user,
    "api/organisation/organisation-remove-buy-in",
    [i_account_id,i_organisation_id,i_buy_in_id],
    null,
    null,
    cb
  );
}

// statslink.impl.user-remote-fn/organisation-add-entity-group [84] 
function organisation_add_entity_group(user,i_account_id,i_organisation_id,m,cb){
  return user_call.user_call(
    user,
    "api/entity/organisation-add-entity-group",
    [i_account_id,i_organisation_id,m],
    null,
    null,
    cb
  );
}

// statslink.impl.user-remote-fn/organisation-remove-entity-group [84] 
function organisation_remove_entity_group(user,i_account_id,i_organisation_id,i_group_id,cb){
  return user_call.user_call(
    user,
    "api/entity/organisation-remove-entity-group",
    [i_account_id,i_organisation_id,i_group_id],
    null,
    null,
    cb
  );
}

// statslink.impl.user-remote-fn/organisation-modify-entity-group [84] 
function organisation_modify_entity_group(user,i_account_id,i_group_id,m,cb){
  return user_call.user_call(
    user,
    "api/entity/organisation-modify-entity-group",
    [i_account_id,i_group_id,m],
    null,
    null,
    cb
  );
}

// statslink.impl.user-remote-fn/organisation-add-entity [84] 
function organisation_add_entity(user,i_account_id,i_group_id,m,cb){
  return user_call.user_call(
    user,
    "api/entity/organisation-add-entity",
    [i_account_id,i_group_id,m],
    null,
    null,
    cb
  );
}

// statslink.impl.user-remote-fn/organisation-add-entity-bulk [84] 
function organisation_add_entity_bulk(user,i_account_id,i_group_id,i_entities,cb){
  return user_call.user_call(
    user,
    "api/entity/organisation-add-entity-bulk",
    [i_account_id,i_group_id,i_entities],
    null,
    null,
    cb
  );
}

// statslink.impl.user-remote-fn/organisation-modify-entity-tags [84] 
function organisation_modify_entity_tags(user,i_account_id,i_entity_id,i_tags,cb){
  return user_call.user_call(
    user,
    "api/entity/organisation-modify-entity-tags",
    [i_account_id,i_entity_id,i_tags],
    null,
    null,
    cb
  );
}

// statslink.impl.user-remote-fn/organisation-modify-entity [84] 
function organisation_modify_entity(user,i_account_id,i_entity_id,m,cb){
  return user_call.user_call(
    user,
    "api/entity/organisation-modify-entity",
    [i_account_id,i_entity_id,m],
    null,
    null,
    cb
  );
}

// statslink.impl.user-remote-fn/organisation-remove-entity [84] 
function organisation_remove_entity(user,i_account_id,i_entity_id,cb){
  return user_call.user_call(
    user,
    "api/entity/organisation-remove-entity",
    [i_account_id,i_entity_id],
    null,
    null,
    cb
  );
}

// statslink.impl.user-remote-fn/room-check-available [89] 
function room_check_available(user,i_account_id,i_organisation_id,i_room_name,cb){
  return user_call.user_call(
    user,
    "api/room/room-check-available",
    [i_account_id,i_organisation_id,i_room_name],
    null,
    null,
    cb
  );
}

// statslink.impl.user-remote-fn/room-add-star [89] 
function room_add_star(user,i_account_id,i_room_id,cb){
  return user_call.user_call(
    user,
    "api/room/room-add-star",
    [i_account_id,i_room_id],
    null,
    null,
    cb
  );
}

// statslink.impl.user-remote-fn/room-remove-star [89] 
function room_remove_star(user,i_account_id,i_room_id,cb){
  return user_call.user_call(
    user,
    "api/room/room-remove-star",
    [i_account_id,i_room_id],
    null,
    null,
    cb
  );
}

// statslink.impl.user-remote-fn/room-post-wall [89] 
function room_post_wall(user,i_account_id,i_room_id,i_parent_id,i_body,cb){
  return user_call.user_call(
    user,
    "api/room/room-post-wall",
    [i_account_id,i_room_id,i_parent_id,i_body],
    null,
    null,
    cb
  );
}

// statslink.impl.user-remote-fn/room-edit-wall [89] 
function room_edit_wall(user,i_account_id,i_room_id,i_communication_id,i_new_body,cb){
  return user_call.user_call(
    user,
    "api/room/room-edit-wall",
    [i_account_id,i_room_id,i_communication_id,i_new_body],
    null,
    null,
    cb
  );
}

// statslink.impl.user-remote-fn/room-upvote-wall [89] 
function room_upvote_wall(user,i_account_id,i_room_id,i_communication_id,cb){
  return user_call.user_call(
    user,
    "api/room/room-upvote-wall",
    [i_account_id,i_room_id,i_communication_id],
    null,
    null,
    cb
  );
}

// statslink.impl.user-remote-fn/room-downvote-wall [89] 
function room_downvote_wall(user,i_account_id,i_room_id,i_communication_id,cb){
  return user_call.user_call(
    user,
    "api/room/room-downvote-wall",
    [i_account_id,i_room_id,i_communication_id],
    null,
    null,
    cb
  );
}

// statslink.impl.user-remote-fn/room-unvote-wall [89] 
function room_unvote_wall(user,i_account_id,i_room_id,i_communication_id,cb){
  return user_call.user_call(
    user,
    "api/room/room-unvote-wall",
    [i_account_id,i_room_id,i_communication_id],
    null,
    null,
    cb
  );
}

// statslink.impl.user-remote-fn/room-join-invite-send [89] 
function room_join_invite_send(user,i_account_id,i_room_id,i_invited_account_id,i_role,i_detail,cb){
  return user_call.user_call(
    user,
    "api/room/room-join-invite-send",
    [i_account_id,i_room_id,i_invited_account_id,i_role,i_detail],
    null,
    null,
    cb
  );
}

// statslink.impl.user-remote-fn/room-join-invite-accept [89] 
function room_join_invite_accept(user,i_account_id,i_room_id,i_from_account_id,cb){
  return user_call.user_call(
    user,
    "api/room/room-join-invite-accept",
    [i_account_id,i_room_id,i_from_account_id],
    null,
    null,
    cb
  );
}

// statslink.impl.user-remote-fn/room-join-invite-cancel [89] 
function room_join_invite_cancel(user,i_account_id,i_room_id,i_invited_account_id,cb){
  return user_call.user_call(
    user,
    "api/room/room-join-invite-cancel",
    [i_account_id,i_room_id,i_invited_account_id],
    null,
    null,
    cb
  );
}

// statslink.impl.user-remote-fn/room-join-invite-reject [89] 
function room_join_invite_reject(user,i_account_id,i_room_id,i_from_account_id,cb){
  return user_call.user_call(
    user,
    "api/room/room-join-invite-reject",
    [i_account_id,i_room_id,i_from_account_id],
    null,
    null,
    cb
  );
}

// statslink.impl.user-remote-fn/room-join-request-send [89] 
function room_join_request_send(user,i_request_account_id,i_room_id,cb){
  return user_call.user_call(
    user,
    "api/room/room-join-request-send",
    [i_request_account_id,i_room_id],
    null,
    null,
    cb
  );
}

// statslink.impl.user-remote-fn/room-join-request-accept [89] 
function room_join_request_accept(user,i_account_id,i_room_id,i_request_account_id,cb){
  return user_call.user_call(
    user,
    "api/room/room-join-request-accept",
    [i_account_id,i_room_id,i_request_account_id],
    null,
    null,
    cb
  );
}

// statslink.impl.user-remote-fn/room-join-request-cancel [89] 
function room_join_request_cancel(user,i_request_account_id,i_room_id,cb){
  return user_call.user_call(
    user,
    "api/room/room-join-request-cancel",
    [i_request_account_id,i_room_id],
    null,
    null,
    cb
  );
}

// statslink.impl.user-remote-fn/room-join-request-reject [89] 
function room_join_request_reject(user,i_account_id,i_room_id,i_request_account_id,cb){
  return user_call.user_call(
    user,
    "api/room/room-join-request-reject",
    [i_account_id,i_room_id,i_request_account_id],
    null,
    null,
    cb
  );
}

// statslink.impl.user-remote-fn/room-add-member [89] 
function room_add_member(user,i_account_id,i_room_id,i_new_member_id,i_detail,cb){
  return user_call.user_call(
    user,
    "api/room/room-add-member",
    [i_account_id,i_room_id,i_new_member_id,i_detail],
    null,
    null,
    cb
  );
}

// statslink.impl.user-remote-fn/room-remove-member [89] 
function room_remove_member(user,i_account_id,i_room_id,i_member_id,cb){
  return user_call.user_call(
    user,
    "api/room/room-remove-member",
    [i_account_id,i_room_id,i_member_id],
    null,
    null,
    cb
  );
}

// statslink.impl.user-remote-fn/room-activate [89] 
function room_activate(user,i_account_id,i_room_id,cb){
  return user_call.user_call(
    user,
    "api/room/room-activate",
    [i_account_id,i_room_id],
    null,
    null,
    cb
  );
}

// statslink.impl.user-remote-fn/room-deactivate [89] 
function room_deactivate(user,i_account_id,i_room_id,cb){
  return user_call.user_call(
    user,
    "api/room/room-deactivate",
    [i_account_id,i_room_id],
    null,
    null,
    cb
  );
}

// statslink.impl.user-remote-fn/room-set-official [89] 
function room_set_official(user,i_super_id,i_room_id,i_is_official,cb){
  return user_call.user_call(
    user,
    "api/room/room-set-official",
    [i_super_id,i_room_id,i_is_official],
    null,
    null,
    cb
  );
}

// statslink.impl.user-remote-fn/room-modify [89] 
function room_modify(user,i_account_id,i_room_id,m,cb){
  return user_call.user_call(
    user,
    "api/room/room-modify",
    [i_account_id,i_room_id,m],
    null,
    null,
    cb
  );
}

// statslink.impl.user-remote-fn/room-remove [89] 
function room_remove(user,i_account_id,i_room_id,cb){
  return user_call.user_call(
    user,
    "api/room/room-remove",
    [i_account_id,i_room_id],
    null,
    null,
    cb
  );
}

// statslink.impl.user-remote-fn/room-gas-asset-recharge [89] 
function room_gas_asset_recharge(user,i_account_id,i_room_id,i_amount,cb){
  return user_call.user_call(
    user,
    "api/room/room-gas-asset-recharge",
    [i_account_id,i_room_id,i_amount],
    null,
    null,
    cb
  );
}

// statslink.impl.user-remote-fn/room-evm-create-vault-request [89] 
function room_evm_create_vault_request(user,i_account_id,i_room_id,cb){
  return user_call.user_call(
    user,
    "api/room/room-evm-create-vault-request",
    [i_account_id,i_room_id],
    null,
    null,
    cb
  );
}

// statslink.impl.user-remote-fn/room-evm-account-open-request [89] 
function room_evm_account_open_request(user,i_account_id,i_room_id,i_user_address_id,cb){
  return user_call.user_call(
    user,
    "api/room/room-evm-account-open-request",
    [i_account_id,i_room_id,i_user_address_id],
    null,
    null,
    cb
  );
}

// statslink.impl.user-remote-fn/room-evm-account-close-request [89] 
function room_evm_account_close_request(user,i_account_id,i_room_id,i_user_address_id,cb){
  return user_call.user_call(
    user,
    "api/room/room-evm-account-close-request",
    [i_account_id,i_room_id,i_user_address_id],
    null,
    null,
    cb
  );
}

// statslink.impl.user-remote-fn/swap-start-registration [94] 
function swap_start_registration(user,i_account_id,i_swap_id,i_message,cb){
  return user_call.user_call(
    user,
    "api/swap/swap-start-registration",
    [i_account_id,i_swap_id,i_message],
    null,
    null,
    cb
  );
}

// statslink.impl.user-remote-fn/swap-start-allocation [94] 
function swap_start_allocation(user,i_account_id,i_swap_id,i_message,cb){
  return user_call.user_call(
    user,
    "api/swap/swap-start-allocation",
    [i_account_id,i_swap_id,i_message],
    null,
    null,
    cb
  );
}

// statslink.impl.user-remote-fn/swap-start-trading [94] 
function swap_start_trading(user,i_account_id,i_swap_id,i_message,cb){
  return user_call.user_call(
    user,
    "api/swap/swap-start-trading",
    [i_account_id,i_swap_id,i_message],
    null,
    null,
    cb
  );
}

// statslink.impl.user-remote-fn/swap-pause-trading [94] 
function swap_pause_trading(user,i_account_id,i_swap_id,i_message,cb){
  return user_call.user_call(
    user,
    "api/swap/swap-pause-trading",
    [i_account_id,i_swap_id,i_message],
    null,
    null,
    cb
  );
}

// statslink.impl.user-remote-fn/swap-stop-trading [94] 
function swap_stop_trading(user,i_account_id,i_swap_id,i_message,cb){
  return user_call.user_call(
    user,
    "api/swap/swap-stop-trading",
    [i_account_id,i_swap_id,i_message],
    null,
    null,
    cb
  );
}

// statslink.impl.user-remote-fn/swap-start-resolution [94] 
function swap_start_resolution(user,i_account_id,i_swap_id,i_message,cb){
  return user_call.user_call(
    user,
    "api/swap/swap-start-resolution",
    [i_account_id,i_swap_id,i_message],
    null,
    null,
    cb
  );
}

// statslink.impl.user-remote-fn/swap-resolve [94] 
function swap_resolve(user,i_account_id,i_swap_id,i_limit,cb){
  return user_call.user_call(
    user,
    "api/swap/swap-resolve",
    [i_account_id,i_swap_id,i_limit],
    null,
    null,
    cb
  );
}

// statslink.impl.user-remote-fn/swap-complete [94] 
function swap_complete(user,i_account_id,i_swap_id,i_message,cb){
  return user_call.user_call(
    user,
    "api/swap/swap-complete",
    [i_account_id,i_swap_id,i_message],
    null,
    null,
    cb
  );
}

// statslink.impl.user-remote-fn/swap-check-available [94] 
function swap_check_available(user,i_account_id,i_organisation_id,i_swap_code,cb){
  return user_call.user_call(
    user,
    "api/swap/swap-check-available",
    [i_account_id,i_organisation_id,i_swap_code],
    null,
    null,
    cb
  );
}

// statslink.impl.user-remote-fn/swap-modify [94] 
function swap_modify(user,i_account_id,i_swap_id,m,cb){
  return user_call.user_call(
    user,
    "api/swap/swap-modify",
    [i_account_id,i_swap_id,m],
    null,
    null,
    cb
  );
}

// statslink.impl.user-remote-fn/swap-remove [94] 
function swap_remove(user,i_account_id,i_swap_id,cb){
  return user_call.user_call(
    user,
    "api/swap/swap-remove",
    [i_account_id,i_swap_id],
    null,
    null,
    cb
  );
}

// statslink.impl.user-remote-fn/swap-add-star [94] 
function swap_add_star(user,i_account_id,i_swap_id,cb){
  return user_call.user_call(
    user,
    "api/swap/swap-add-star",
    [i_account_id,i_swap_id],
    null,
    null,
    cb
  );
}

// statslink.impl.user-remote-fn/swap-remove-star [94] 
function swap_remove_star(user,i_account_id,i_swap_id,cb){
  return user_call.user_call(
    user,
    "api/swap/swap-remove-star",
    [i_account_id,i_swap_id],
    null,
    null,
    cb
  );
}

// statslink.impl.user-remote-fn/swap-post-comment [94] 
function swap_post_comment(user,i_account_id,i_swap_id,i_parent_id,i_body,cb){
  return user_call.user_call(
    user,
    "api/swap/swap-post-comment",
    [i_account_id,i_swap_id,i_parent_id,i_body],
    null,
    null,
    cb
  );
}

// statslink.impl.user-remote-fn/swap-edit-comment [94] 
function swap_edit_comment(user,i_account_id,i_swap_id,i_communication_id,i_new_body,cb){
  return user_call.user_call(
    user,
    "api/swap/swap-edit-comment",
    [i_account_id,i_swap_id,i_communication_id,i_new_body],
    null,
    null,
    cb
  );
}

// statslink.impl.user-remote-fn/swap-upvote-comment [94] 
function swap_upvote_comment(user,i_account_id,i_swap_id,i_communication_id,cb){
  return user_call.user_call(
    user,
    "api/swap/swap-upvote-comment",
    [i_account_id,i_swap_id,i_communication_id],
    null,
    null,
    cb
  );
}

// statslink.impl.user-remote-fn/swap-downvote-comment [94] 
function swap_downvote_comment(user,i_account_id,i_swap_id,i_communication_id,cb){
  return user_call.user_call(
    user,
    "api/swap/swap-downvote-comment",
    [i_account_id,i_swap_id,i_communication_id],
    null,
    null,
    cb
  );
}

// statslink.impl.user-remote-fn/swap-unvote-comment [94] 
function swap_unvote_comment(user,i_account_id,i_swap_id,i_communication_id,cb){
  return user_call.user_call(
    user,
    "api/swap/swap-unvote-comment",
    [i_account_id,i_swap_id,i_communication_id],
    null,
    null,
    cb
  );
}

// statslink.impl.user-remote-fn/topic-check-available [99] 
function topic_check_available(user,i_account_id,i_organisation_id,i_topic_code,cb){
  return user_call.user_call(
    user,
    "api/topic/topic-check-available",
    [i_account_id,i_organisation_id,i_topic_code],
    null,
    null,
    cb
  );
}

// statslink.impl.user-remote-fn/topic-modify [99] 
function topic_modify(user,i_account_id,i_topic_id,m,cb){
  return user_call.user_call(
    user,
    "api/topic/topic-modify",
    [i_account_id,i_topic_id,m],
    null,
    null,
    cb
  );
}

// statslink.impl.user-remote-fn/topic-remove [99] 
function topic_remove(user,i_account_id,i_topic_id,cb){
  return user_call.user_call(
    user,
    "api/topic/topic-remove",
    [i_account_id,i_topic_id],
    null,
    null,
    cb
  );
}

// statslink.impl.user-remote-fn/topic-arrange-prospects [99] 
function topic_arrange_prospects(user,i_account_id,i_topic_id,i_prospect_order,cb){
  return user_call.user_call(
    user,
    "api/topic/topic-arrange-prospects",
    [i_account_id,i_topic_id,i_prospect_order],
    null,
    null,
    cb
  );
}

// statslink.impl.user-remote-fn/topic-add-star [99] 
function topic_add_star(user,i_account_id,i_topic_id,cb){
  return user_call.user_call(
    user,
    "api/topic/topic-add-star",
    [i_account_id,i_topic_id],
    null,
    null,
    cb
  );
}

// statslink.impl.user-remote-fn/topic-remove-star [99] 
function topic_remove_star(user,i_account_id,i_topic_id,cb){
  return user_call.user_call(
    user,
    "api/topic/topic-remove-star",
    [i_account_id,i_topic_id],
    null,
    null,
    cb
  );
}

// statslink.impl.user-remote-fn/topic-post-wall [99] 
function topic_post_wall(user,i_account_id,i_topic_id,i_parent_id,i_body,cb){
  return user_call.user_call(
    user,
    "api/topic/topic-post-wall",
    [i_account_id,i_topic_id,i_parent_id,i_body],
    null,
    null,
    cb
  );
}

// statslink.impl.user-remote-fn/topic-edit-wall [99] 
function topic_edit_wall(user,i_account_id,i_topic_id,i_communication_id,i_new_body,cb){
  return user_call.user_call(
    user,
    "api/topic/topic-edit-wall",
    [i_account_id,i_topic_id,i_communication_id,i_new_body],
    null,
    null,
    cb
  );
}

// statslink.impl.user-remote-fn/topic-upvote-wall [99] 
function topic_upvote_wall(user,i_account_id,i_topic_id,i_communication_id,cb){
  return user_call.user_call(
    user,
    "api/topic/topic-upvote-wall",
    [i_account_id,i_topic_id,i_communication_id],
    null,
    null,
    cb
  );
}

// statslink.impl.user-remote-fn/topic-downvote-wall [99] 
function topic_downvote_wall(user,i_account_id,i_topic_id,i_communication_id,cb){
  return user_call.user_call(
    user,
    "api/topic/topic-downvote-wall",
    [i_account_id,i_topic_id,i_communication_id],
    null,
    null,
    cb
  );
}

// statslink.impl.user-remote-fn/topic-unvote-wall [99] 
function topic_unvote_wall(user,i_account_id,i_topic_id,i_communication_id,cb){
  return user_call.user_call(
    user,
    "api/topic/topic-unvote-wall",
    [i_account_id,i_topic_id,i_communication_id],
    null,
    null,
    cb
  );
}

// statslink.impl.user-remote-fn/topic-add-judge [99] 
function topic_add_judge(user,i_account_id,i_topic_id,i_judge_account_id,cb){
  return user_call.user_call(
    user,
    "api/topic/topic-add-judge",
    [i_account_id,i_topic_id,i_judge_account_id],
    null,
    null,
    cb
  );
}

// statslink.impl.user-remote-fn/topic-remove-judge [99] 
function topic_remove_judge(user,i_account_id,i_topic_id,i_judge_account_id,cb){
  return user_call.user_call(
    user,
    "api/topic/topic-remove-judge",
    [i_account_id,i_topic_id,i_judge_account_id],
    null,
    null,
    cb
  );
}

// statslink.impl.user-remote-fn/prospect-create [99] 
function prospect_create(user,i_account_id,m,cb){
  return user_call.user_call(
    user,
    "api/prospect/prospect-create",
    [i_account_id,m],
    null,
    null,
    cb
  );
}

// statslink.impl.user-remote-fn/prospect-delete [99] 
function prospect_delete(user,i_account_id,i_prospect_id,cb){
  return user_call.user_call(
    user,
    "api/prospect/prospect-delete",
    [i_account_id,i_prospect_id],
    null,
    null,
    cb
  );
}

// statslink.impl.user-remote-fn/prospect-add-star [99] 
function prospect_add_star(user,i_account_id,i_prospect_id,cb){
  return user_call.user_call(
    user,
    "api/prospect/prospect-add-star",
    [i_account_id,i_prospect_id],
    null,
    null,
    cb
  );
}

// statslink.impl.user-remote-fn/prospect-remove-star [99] 
function prospect_remove_star(user,i_account_id,i_prospect_id,cb){
  return user_call.user_call(
    user,
    "api/prospect/prospect-remove-star",
    [i_account_id,i_prospect_id],
    null,
    null,
    cb
  );
}

// statslink.impl.user-remote-fn/prospect-post-comment [99] 
function prospect_post_comment(user,i_account_id,i_prospect_id,i_parent_id,i_body,cb){
  return user_call.user_call(
    user,
    "api/prospect/prospect-post-comment",
    [i_account_id,i_prospect_id,i_parent_id,i_body],
    null,
    null,
    cb
  );
}

// statslink.impl.user-remote-fn/prospect-edit-comment [99] 
function prospect_edit_comment(user,i_account_id,i_prospect_id,i_communication_id,i_new_body,cb){
  return user_call.user_call(
    user,
    "api/prospect/prospect-edit-comment",
    [i_account_id,i_prospect_id,i_communication_id,i_new_body],
    null,
    null,
    cb
  );
}

// statslink.impl.user-remote-fn/prospect-upvote-comment [99] 
function prospect_upvote_comment(user,i_account_id,i_prospect_id,i_communication_id,cb){
  return user_call.user_call(
    user,
    "api/prospect/prospect-upvote-comment",
    [i_account_id,i_prospect_id,i_communication_id],
    null,
    null,
    cb
  );
}

// statslink.impl.user-remote-fn/prospect-downvote-comment [99] 
function prospect_downvote_comment(user,i_account_id,i_prospect_id,i_communication_id,cb){
  return user_call.user_call(
    user,
    "api/prospect/prospect-downvote-comment",
    [i_account_id,i_prospect_id,i_communication_id],
    null,
    null,
    cb
  );
}

// statslink.impl.user-remote-fn/prospect-unvote-comment [99] 
function prospect_unvote_comment(user,i_account_id,i_prospect_id,i_communication_id,cb){
  return user_call.user_call(
    user,
    "api/prospect/prospect-unvote-comment",
    [i_account_id,i_prospect_id,i_communication_id],
    null,
    null,
    cb
  );
}

// statslink.impl.user-remote-fn/abuse-report-create [104] 
function abuse_report_create(user,i_account_id,m,cb){
  return user_call.user_call(
    user,
    "api/super/abuse-report-create",
    [i_account_id,m],
    null,
    null,
    cb
  );
}

// statslink.impl.user-remote-fn/abuse-report-update [104] 
function abuse_report_update(user,i_super_id,i_report_id,m,cb){
  return user_call.user_call(
    user,
    "api/super/abuse-report-update",
    [i_super_id,i_report_id,m],
    null,
    null,
    cb
  );
}

// statslink.impl.user-remote-fn/site-var-set [104] 
function site_var_set(user,i_super_id,m,cb){
  return user_call.user_call(user,"api/super/site-var-set",[i_super_id,m],null,null,cb);
}

// statslink.impl.user-remote-fn/site-var-delete [104] 
function site_var_delete(user,i_super_id,site_var_id,cb){
  return user_call.user_call(
    user,
    "api/super/site-var-delete",
    [i_super_id,site_var_id],
    null,
    null,
    cb
  );
}

// statslink.impl.user-remote-fn/currency-set [104] 
function currency_set(user,i_super_id,m,cb){
  return user_call.user_call(user,"api/super/currency-set",[i_super_id,m],null,null,cb);
}

// statslink.impl.user-remote-fn/currency-delete [104] 
function currency_delete(user,i_super_id,currency_id,cb){
  return user_call.user_call(
    user,
    "api/super/currency-delete",
    [i_super_id,currency_id],
    null,
    null,
    cb
  );
}

// statslink.impl.user-remote-fn/region-country-set [104] 
function region_country_set(user,i_super_id,m,cb){
  return user_call.user_call(user,"api/super/region-country-set",[i_super_id,m],null,null,cb);
}

// statslink.impl.user-remote-fn/region-country-delete [104] 
function region_country_delete(user,i_super_id,i_region_country_id,cb){
  return user_call.user_call(
    user,
    "api/super/region-country-delete",
    [i_super_id,i_region_country_id],
    null,
    null,
    cb
  );
}

// statslink.impl.user-remote-fn/region-state-set [104] 
function region_state_set(user,i_super_id,m,cb){
  return user_call.user_call(user,"api/super/region-state-set",[i_super_id,m],null,null,cb);
}

// statslink.impl.user-remote-fn/region-state-delete [104] 
function region_state_delete(user,i_super_id,i_region_state_id,cb){
  return user_call.user_call(
    user,
    "api/super/region-state-delete",
    [i_super_id,i_region_state_id],
    null,
    null,
    cb
  );
}

// statslink.impl.user-remote-fn/region-city-set [104] 
function region_city_set(user,i_super_id,m,cb){
  return user_call.user_call(user,"api/super/region-city-set",[i_super_id,m],null,null,cb);
}

// statslink.impl.user-remote-fn/region-city-delete [104] 
function region_city_delete(user,i_super_id,i_region_city_id,cb){
  return user_call.user_call(
    user,
    "api/super/region-city-delete",
    [i_super_id,i_region_city_id],
    null,
    null,
    cb
  );
}

// statslink.impl.user-remote-fn/service-set [104] 
function service_set(user,i_super_id,m,cb){
  return user_call.user_call(user,"api/super/service-set",[i_super_id,m],null,null,cb);
}

// statslink.impl.user-remote-fn/service-delete [104] 
function service_delete(user,i_super_id,i_service_id,cb){
  return user_call.user_call(
    user,
    "api/super/service-delete",
    [i_super_id,i_service_id],
    null,
    null,
    cb
  );
}

// statslink.impl.user-remote-fn/infra-mq-set [104] 
function infra_mq_set(user,i_super_id,m,cb){
  return user_call.user_call(user,"api/super/infra-mq-set",[i_super_id,m],null,null,cb);
}

// statslink.impl.user-remote-fn/infra-mq-delete [104] 
function infra_mq_delete(user,i_super_id,i_infra_mq_id,cb){
  return user_call.user_call(
    user,
    "api/super/infra-mq-delete",
    [i_super_id,i_infra_mq_id],
    null,
    null,
    cb
  );
}

// statslink.impl.user-remote-fn/infra-exchange-set [104] 
function infra_exchange_set(user,i_super_id,m,cb){
  return user_call.user_call(user,"api/super/infra-exchange-set",[i_super_id,m],null,null,cb);
}

// statslink.impl.user-remote-fn/infra-exchange-delete [104] 
function infra_exchange_delete(user,i_super_id,i_infra_exchange_id,cb){
  return user_call.user_call(
    user,
    "api/super/infra-exchange-delete",
    [i_super_id,i_infra_exchange_id],
    null,
    null,
    cb
  );
}

// statslink.impl.user-remote-fn/set-account-super [104] 
function set_account_super(user,i_super_id,i_account_id,i_status,cb){
  return user_call.user_call(
    user,
    "api/super/set-account-super",
    [i_super_id,i_account_id,i_status],
    null,
    null,
    cb
  );
}

// statslink.impl.user-remote-fn/set-account-lock [104] 
function set_account_lock(user,i_super_id,i_account_id,i_status,i_reason,i_detail,cb){
  return user_call.user_call(
    user,
    "api/super/set-account-lock",
    [i_super_id,i_account_id,i_status,i_reason,i_detail],
    null,
    null,
    cb
  );
}

// statslink.impl.user-remote-fn/set-organisation-lock [104] 
function set_organisation_lock(user,i_super_id,i_organisation_id,i_status,i_reason,i_detail,cb){
  return user_call.user_call(
    user,
    "api/super/set-organisation-lock",
    [i_super_id,i_organisation_id,i_status,i_reason,i_detail],
    null,
    null,
    cb
  );
}

// statslink.impl.user-remote-fn/set-organisation-tier [104] 
function set_organisation_tier(user,i_super_id,i_organisation_id,i_tier,cb){
  return user_call.user_call(
    user,
    "api/super/set-organisation-tier",
    [i_super_id,i_organisation_id,i_tier],
    null,
    null,
    cb
  );
}

// statslink.impl.user-remote-fn/set-room-lock [104] 
function set_room_lock(user,i_super_id,i_room_id,i_status,i_reason,i_detail,cb){
  return user_call.user_call(
    user,
    "api/super/set-room-lock",
    [i_super_id,i_room_id,i_status,i_reason,i_detail],
    null,
    null,
    cb
  );
}

// statslink.impl.user-remote-fn/set-topic-lock [104] 
function set_topic_lock(user,i_super_id,i_topic_id,i_status,i_reason,i_detail,cb){
  return user_call.user_call(
    user,
    "api/super/set-topic-lock",
    [i_super_id,i_topic_id,i_status,i_reason,i_detail],
    null,
    null,
    cb
  );
}

// statslink.impl.user-remote-fn/user-privilege-add [104] 
function user_privilege_add(user,i_super_id,i_account_id,m,cb){
  return user_call.user_call(
    user,
    "api/super/user-privilege-add",
    [i_super_id,i_account_id,m],
    null,
    null,
    cb
  );
}

// statslink.impl.user-remote-fn/user-privilege-remove [104] 
function user_privilege_remove(user,i_super_id,i_account_id,i_type,cb){
  return user_call.user_call(
    user,
    "api/super/user-privilege-remove",
    [i_super_id,i_account_id,i_type],
    null,
    null,
    cb
  );
}

// statslink.impl.user-remote-fn/account-token-secret-add [104] 
function account_token_secret_add(user,i_super_id,m,cb){
  return user_call.user_call(
    user,
    "api/super/account-token-secret-add",
    [i_super_id,m],
    null,
    null,
    cb
  );
}

// statslink.impl.user-remote-fn/account-token-secret-remove [104] 
function account_token_secret_remove(user,i_super_id,i_prime,cb){
  return user_call.user_call(
    user,
    "api/super/account-token-secret-remove",
    [i_super_id,i_prime],
    null,
    null,
    cb
  );
}

// statslink.impl.user-remote-fn/account-token-secret-update [104] 
function account_token_secret_update(user,i_super_id,i_prime,i_secret,cb){
  return user_call.user_call(
    user,
    "api/super/account-token-secret-update",
    [i_super_id,i_prime,i_secret],
    null,
    null,
    cb
  );
}

// statslink.impl.user-remote-fn/purchase-statscoin [109] 
function purchase_statscoin(user,i_account_id,i_currency_id,i_amount,cb){
  return user_call.user_call(
    user,
    "api/wallet/purchase-statscoin",
    [i_account_id,i_currency_id,i_amount],
    null,
    null,
    cb
  );
}

// statslink.impl.user-remote-fn/tip-statscoin [109] 
function tip_statscoin(user,i_account_id,i_account_tipped_id,i_amount,cb){
  return user_call.user_call(
    user,
    "api/wallet/tip-statscoin",
    [i_account_id,i_account_tipped_id,i_amount],
    null,
    null,
    cb
  );
}

// statslink.impl.user-remote-fn/email-add-additional [114] 
function email_add_additional(user,i_account_id,m,cb){
  return user_call.user_call(
    user,
    "api/account/email-add-additional",
    [i_account_id,m],
    null,
    null,
    cb
  );
}

// statslink.impl.user-remote-fn/email-verify-additional-resend [114] 
function email_verify_additional_resend(user,i_account_id,i_email,cb){
  return user_call.user_call(
    user,
    "api/account/email-verify-additional-resend",
    [i_account_id,i_email],
    null,
    null,
    cb
  );
}

// statslink.impl.user-remote-fn/login [114] 
function login(user,m,cb){
  return user_call.user_call(
    user,
    "api/account/login",
    [],
    JSON.stringify(m),
    true,
    user_event.token_sync_wrap(user,cb)
  );
}

// statslink.impl.user-remote-fn/password-change [114] 
function password_change(user,i_account_id,m,cb){
  return user_call.user_call(
    user,
    "api/account/password-change",
    [i_account_id],
    JSON.stringify(m),
    true,
    cb
  );
}

// statslink.impl.user-remote-fn/password-reset [114] 
function password_reset(user,m,cb){
  return user_call.user_call(user,"api/account/password-reset",[],JSON.stringify(m),true,cb);
}

// statslink.impl.user-remote-fn/helper-id [124] 
function helper_id(user,account_id,cb){
  return user_call.user_call(user,"api/helper/id",[account_id],null,null,cb);
}

// statslink.impl.user-remote-fn/helper-ping [124] 
function helper_ping(user,cb){
  return user_call.user_call(user,"api/helper/ping",[],null,null,cb);
}

// statslink.impl.user-remote-fn/helper-all-routes [124] 
function helper_all_routes(user,cb){
  return user_call.user_call(user,"api/helper/all-routes",[],null,null,cb);
}

// statslink.impl.user-remote-fn/view-query [124] 
function view_query(user,table,qm,cb){
  return user_call.user_call(
    user,
    "api/view/q",
    [table,qm],
    null,
    null,
    user_event.view_sync_wrap(user,table,cb)
  );
}

// statslink.impl.user-remote-fn/view-query-nosync [124] 
function view_query_nosync(user,table,qm,cb){
  return user_call.user_call(user,"api/view/q-nosync",[table,qm],null,null,cb);
}

// statslink.impl.user-remote-fn/view-bulk [124] 
function view_bulk(user,bulk,cb){
  return user_call.user_call(
    user,
    "api/view/bulk",
    [bulk],
    null,
    null,
    user_event.view_bulk_sync_wrap(user,cb)
  );
}

// statslink.impl.user-remote-fn/view-overview [124] 
function view_overview(user,cb){
  return user_call.user_call(user,"api/view/overview",[],null,null,cb);
}

// statslink.impl.user-remote-fn/view-tables [124] 
function view_tables(user,cb){
  return user_call.user_call(user,"api/view/tables",[],null,null,cb);
}

// statslink.impl.user-remote-fn/view-methods [124] 
function view_methods(user,table,cb){
  return user_call.user_call(user,"api/view/methods",[table],null,null,cb);
}

// statslink.impl.user-remote-fn/view-detail [124] 
function view_detail(user,table,type,id,cb){
  return user_call.user_call(user,"api/view/detail",[table,type,id],null,null,cb);
}

// statslink.impl.user-remote-fn/imagekit-token [141] 
function imagekit_token(user,token,cb){
  return user_call.user_call(user,"api/imagekit/token",[token],null,null,cb);
}

// statslink.impl.user-remote-fn/upload-image [141] 
function upload_image(user,i_token,i_metadata,cb){
  return user_call.user_call(user,"api/image/upload",[i_token,i_metadata],null,null,cb);
}

// statslink.impl.user-remote-fn/oauth-access-token [147] 
function oauth_access_token(user,tag,client_id,redirect_url,code,query,cb){
  return user_call.user_call(
    user,
    "api/social/token",
    [tag,client_id,redirect_url,code,query],
    null,
    null,
    cb
  );
}

// statslink.impl.user-remote-fn/oauth-facebook-info [147] 
function oauth_facebook_info(user,oauth_token,cb){
  return user_call.user_call(user,"api/social/facebook/info",[oauth_token],null,null,cb);
}

// statslink.impl.user-remote-fn/oauth-facebook-login [147] 
function oauth_facebook_login(user,oauth_token,cb){
  return user_call.user_call(
    user,
    "api/social/facebook/login",
    [oauth_token],
    null,
    null,
    user_event.token_sync_wrap(user,cb)
  );
}

// statslink.impl.user-remote-fn/oauth-facebook-register [147] 
function oauth_facebook_register(user,oauth_token,m,cb){
  return user_call.user_call(
    user,
    "api/social/facebook/register",
    [oauth_token],
    JSON.stringify(m),
    true,
    user_event.token_sync_wrap(user,cb)
  );
}

// statslink.impl.user-remote-fn/oauth-facebook-link [147] 
function oauth_facebook_link(user,i_token,oauth_token,cb){
  return user_call.user_call(
    user,
    "api/social/facebook/link",
    [i_token,oauth_token],
    null,
    null,
    cb
  );
}

// statslink.impl.user-remote-fn/oauth-facebook-is-linked [147] 
function oauth_facebook_is_linked(user,i_token,oauth_token,cb){
  return user_call.user_call(
    user,
    "api/social/facebook/is-linked",
    [i_token,oauth_token],
    null,
    null,
    cb
  );
}

// statslink.impl.user-remote-fn/oauth-coinbase-info [147] 
function oauth_coinbase_info(user,oauth_token,cb){
  return user_call.user_call(user,"api/social/coinbase/info",[oauth_token],null,null,cb);
}

// statslink.impl.user-remote-fn/oauth-coinbase-login [147] 
function oauth_coinbase_login(user,oauth_token,cb){
  return user_call.user_call(
    user,
    "api/social/coinbase/login",
    [oauth_token],
    null,
    null,
    user_event.token_sync_wrap(user,cb)
  );
}

// statslink.impl.user-remote-fn/oauth-coinbase-register [147] 
function oauth_coinbase_register(user,oauth_token,m,cb){
  return user_call.user_call(
    user,
    "api/social/coinbase/register",
    [oauth_token],
    JSON.stringify(m),
    true,
    user_event.token_sync_wrap(user,cb)
  );
}

// statslink.impl.user-remote-fn/oauth-coinbase-link [147] 
function oauth_coinbase_link(user,i_token,oauth_token,cb){
  return user_call.user_call(
    user,
    "api/social/coinbase/link",
    [i_token,oauth_token],
    null,
    null,
    cb
  );
}

// statslink.impl.user-remote-fn/oauth-coinbase-is-linked [147] 
function oauth_coinbase_is_linked(user,i_token,oauth_token,cb){
  return user_call.user_call(
    user,
    "api/social/coinbase/is-linked",
    [i_token,oauth_token],
    null,
    null,
    cb
  );
}

// statslink.impl.user-remote-fn/oauth-github-info [147] 
function oauth_github_info(user,oauth_token,cb){
  return user_call.user_call(user,"api/social/github/info",[oauth_token],null,null,cb);
}

// statslink.impl.user-remote-fn/oauth-github-login [147] 
function oauth_github_login(user,oauth_token,cb){
  return user_call.user_call(
    user,
    "api/social/github/login",
    [oauth_token],
    null,
    null,
    user_event.token_sync_wrap(user,cb)
  );
}

// statslink.impl.user-remote-fn/oauth-github-register [147] 
function oauth_github_register(user,oauth_token,m,cb){
  return user_call.user_call(
    user,
    "api/social/github/register",
    [oauth_token],
    JSON.stringify(m),
    true,
    user_event.token_sync_wrap(user,cb)
  );
}

// statslink.impl.user-remote-fn/oauth-github-link [147] 
function oauth_github_link(user,i_token,oauth_token,cb){
  return user_call.user_call(user,"api/social/github/link",[i_token,oauth_token],null,null,cb);
}

// statslink.impl.user-remote-fn/oauth-github-is-linked [147] 
function oauth_github_is_linked(user,i_token,oauth_token,cb){
  return user_call.user_call(
    user,
    "api/social/github/is-linked",
    [i_token,oauth_token],
    null,
    null,
    cb
  );
}

// statslink.impl.user-remote-fn/room-create [173] 
function room_create(user,account_id,m,cb){
  return user_call.user_call(user,"api/room/room-create",[account_id,m],null,null,cb);
}

// statslink.impl.user-remote-fn/organisation-create [173] 
function organisation_create(user,account_id,m,cb){
  return user_call.user_call(
    user,
    "api/organisation/organisation-create",
    [account_id,m],
    null,
    null,
    cb
  );
}

// statslink.impl.user-remote-fn/topic-create [173] 
function topic_create(user,account_id,m,cb){
  return user_call.user_call(user,"api/game/topic-create",[account_id,m],null,null,cb);
}

// statslink.impl.user-remote-fn/topic-confirm [173] 
function topic_confirm(user,account_id,topic_id,message,cb){
  return user_call.user_call(
    user,
    "api/game/topic-confirm",
    [account_id,topic_id,message],
    null,
    null,
    cb
  );
}

// statslink.impl.user-remote-fn/topic-allocate-input [173] 
function topic_allocate_input(user,account_id,topic_id,message,cb){
  return user_call.user_call(
    user,
    "api/game/topic-allocate-input",
    [account_id,topic_id,message],
    null,
    null,
    cb
  );
}

// statslink.impl.user-remote-fn/topic-allocate-process [173] 
function topic_allocate_process(user,account_id,topic_id,cb){
  return user_call.user_call(
    user,
    "api/game/topic-allocate-process",
    [account_id,topic_id],
    null,
    null,
    cb
  );
}

// statslink.impl.user-remote-fn/swap-create [173] 
function swap_create(user,account_id,m,cb){
  return user_call.user_call(user,"api/swap/swap-create",[account_id,m],null,null,cb);
}

// statslink.impl.user-remote-fn/swap-confirm [173] 
function swap_confirm(user,account_id,swap_id,message,cb){
  return user_call.user_call(
    user,
    "api/swap/swap-confirm",
    [account_id,swap_id,message],
    null,
    null,
    cb
  );
}

// statslink.impl.user-remote-fn/swap-allocate-input [173] 
function swap_allocate_input(user,account_id,swap_id,message,cb){
  return user_call.user_call(
    user,
    "api/swap/swap-allocate-input",
    [account_id,swap_id,message],
    null,
    null,
    cb
  );
}

// statslink.impl.user-remote-fn/swap-allocate-process [173] 
function swap_allocate_process(user,account_id,swap_id,cb){
  return user_call.user_call(
    user,
    "api/swap/swap-allocate-process",
    [account_id,swap_id],
    null,
    null,
    cb
  );
}

// statslink.impl.user-remote-fn/swap-reset [173] 
function swap_reset(user,account_id,swap_id,message,cb){
  return user_call.user_call(
    user,
    "api/swap/swap-reset",
    [account_id,swap_id,message],
    null,
    null,
    cb
  );
}

// statslink.impl.user-remote-fn/place-contract-order [178] 
function place_contract_order(user,account_id,prospect_id,order,cb){
  return user_call.user_call(
    user,
    "api/order/place-contract-order",
    [account_id,prospect_id,order],
    null,
    null,
    cb
  );
}

// statslink.impl.user-remote-fn/cancel-contract-order [178] 
function cancel_contract_order(user,account_id,prospect_id,order_id,cb){
  return user_call.user_call(
    user,
    "api/order/cancel-contract-order",
    [account_id,prospect_id,order_id],
    null,
    null,
    cb
  );
}

// statslink.impl.user-remote-fn/place-swap-order [178] 
function place_swap_order(user,account_id,swap_id,order,cb){
  return user_call.user_call(
    user,
    "api/order/place-swap-order",
    [account_id,swap_id,order],
    null,
    null,
    cb
  );
}

// statslink.impl.user-remote-fn/cancel-swap-order [178] 
function cancel_swap_order(user,account_id,swap_id,order_id,cb){
  return user_call.user_call(
    user,
    "api/order/cancel-swap-order",
    [account_id,swap_id,order_id],
    null,
    null,
    cb
  );
}

// statslink.impl.user-remote-fn/get-market [178] 
function get_market(user,book,cb){
  return user_call.user_call(user,"api/market/browse",[book],null,null,cb);
}

// statslink.impl.user-remote-fn/get-market-bulk [178] 
function get_market_bulk(user,books,cb){
  return user_call.user_call(user,"api/market/bulk",[books],null,null,cb);
}

// statslink.impl.user-remote-fn/get-market-priority [178] 
function get_market_priority(user,account_id,book,cb){
  return user_call.user_call(user,"api/market/priority-browse",[account_id,book],null,null,cb);
}

// statslink.impl.user-remote-fn/get-contract-history-init [178] 
function get_contract_history_init(user,book_ids,resolution,cb){
  return user_call.user_call(
    user,
    "api/history/contract/init",
    [book_ids,resolution],
    null,
    null,
    cb
  );
}

// statslink.impl.user-remote-fn/get-contract-history-30sec [178] 
function get_contract_history_30sec(user,book_id,from,to,opts,cb){
  return user_call.user_call(
    user,
    "api/history/contract/30sec",
    [book_id,from,to,opts],
    null,
    null,
    cb
  );
}

// statslink.impl.user-remote-fn/get-contract-history-5min [178] 
function get_contract_history_5min(user,book_id,from,to,opts,cb){
  return user_call.user_call(
    user,
    "api/history/contract/5min",
    [book_id,from,to,opts],
    null,
    null,
    cb
  );
}

// statslink.impl.user-remote-fn/get-contract-history-1hr [178] 
function get_contract_history_1hr(user,book_id,from,to,opts,cb){
  return user_call.user_call(
    user,
    "api/history/contract/1hr",
    [book_id,from,to,opts],
    null,
    null,
    cb
  );
}

// statslink.impl.user-remote-fn/get-contract-history-1day [178] 
function get_contract_history_1day(user,book_id,from,to,opts,cb){
  return user_call.user_call(
    user,
    "api/history/contract/1day",
    [book_id,from,to,opts],
    null,
    null,
    cb
  );
}

// statslink.impl.user-remote-fn/get-contract-history-sparklines [178] 
function get_contract_history_sparklines(user,book_ids,resolution,from,cb){
  return user_call.user_call(
    user,
    "api/history/contract/sparkline",
    [book_ids,resolution,from],
    null,
    null,
    cb
  );
}

// statslink.impl.user-remote-fn/get-swap-history-init [178] 
function get_swap_history_init(user,book_ids,resolution,cb){
  return user_call.user_call(user,"api/history/swap/init",[book_ids,resolution],null,null,cb);
}

// statslink.impl.user-remote-fn/get-swap-history-30sec [178] 
function get_swap_history_30sec(user,book_id,from,to,opts,cb){
  return user_call.user_call(
    user,
    "api/history/swap/30sec",
    [book_id,from,to,opts],
    null,
    null,
    cb
  );
}

// statslink.impl.user-remote-fn/get-swap-history-5min [178] 
function get_swap_history_5min(user,book_id,from,to,opts,cb){
  return user_call.user_call(user,"api/history/swap/5min",[book_id,from,to,opts],null,null,cb);
}

// statslink.impl.user-remote-fn/get-swap-history-1hr [178] 
function get_swap_history_1hr(user,book_id,from,to,opts,cb){
  return user_call.user_call(user,"api/history/swap/1hr",[book_id,from,to,opts],null,null,cb);
}

// statslink.impl.user-remote-fn/get-swap-history-1day [178] 
function get_swap_history_1day(user,book_id,from,to,opts,cb){
  return user_call.user_call(user,"api/history/swap/1day",[book_id,from,to,opts],null,null,cb);
}

// statslink.impl.user-remote-fn/get-swap-history-sparklines [178] 
function get_swap_history_sparklines(user,book_ids,resolution,from,cb){
  return user_call.user_call(
    user,
    "api/history/swap/sparkline",
    [book_ids,resolution,from],
    null,
    null,
    cb
  );
}

// statslink.impl.user-remote-fn/get-stake-30sec [178] 
function get_stake_30sec(user,book_id,from,to,opts,cb){
  return user_call.user_call(
    user,
    "api/history/stake/30sec",
    [book_id,from,to,opts],
    null,
    null,
    cb
  );
}

// statslink.impl.user-remote-fn/get-stake-5min [178] 
function get_stake_5min(user,book_id,from,to,opts,cb){
  return user_call.user_call(
    user,
    "api/history/stake/5min",
    [book_id,from,to,opts],
    null,
    null,
    cb
  );
}

// statslink.impl.user-remote-fn/get-stake-1hr [178] 
function get_stake_1hr(user,book_id,from,to,opts,cb){
  return user_call.user_call(user,"api/history/stake/1hr",[book_id,from,to,opts],null,null,cb);
}

// statslink.impl.user-remote-fn/get-stake-1day [178] 
function get_stake_1day(user,book_id,from,to,opts,cb){
  return user_call.user_call(
    user,
    "api/history/stake/1day",
    [book_id,from,to,opts],
    null,
    null,
    cb
  );
}

// statslink.impl.user-remote-fn/get-stake-sparklines [178] 
function get_stake_sparklines(user,book_ids,resolution,cb){
  return user_call.user_call(
    user,
    "api/history/stake/sparkline",
    [book_ids,resolution],
    null,
    null,
    cb
  );
}

// statslink.impl.user-remote-fn/web3-id [183] 
function web3_id(user,account_id,cb){
  return user_call.user_call(user,"api/web3/id",[account_id],null,null,cb);
}

// statslink.impl.user-remote-fn/web3-ping [183] 
function web3_ping(user,cb){
  return user_call.user_call(user,"api/web3/ping",[],null,null,cb);
}

// statslink.impl.user-remote-fn/web3-user-address-link [183] 
function web3_user_address_link(user,account_id,user_address,cb){
  return user_call.user_call(
    user,
    "api/web3/user-address-link",
    [account_id,user_address],
    null,
    null,
    cb
  );
}

// statslink.impl.user-remote-fn/web3-user-address-verify [183] 
function web3_user_address_verify(user,account_id,user_address,signature,tag,cb){
  return user_call.user_call(
    user,
    "api/web3/user-address-verify",
    [account_id,user_address,signature,tag],
    null,
    null,
    cb
  );
}

// statslink.impl.user-remote-fn/set-remote [186] 
var set_remote = base_system.set_remote;

var MODULE = {
  "get_privacy_policy":get_privacy_policy,
  "get_terms_and_conditions":get_terms_and_conditions,
  "check_nickname_exists":check_nickname_exists,
  "check_nickname_available":check_nickname_available,
  "check_email_exists":check_email_exists,
  "check_email_available":check_email_available,
  "email_registration":email_registration,
  "email_registration_external":email_registration_external,
  "email_verification":email_verification,
  "email_verification_resend":email_verification_resend,
  "create_account":create_account,
  "password_reset_request":password_reset_request,
  "login_renew":login_renew,
  "logout":logout,
  "net_check":net_check,
  "profile_modify":profile_modify,
  "notification_modify":notification_modify,
  "email_get_all":email_get_all,
  "email_get_primary":email_get_primary,
  "email_remove_additional":email_remove_additional,
  "email_verify_additional":email_verify_additional,
  "email_set_primary":email_set_primary,
  "delete_account_check":delete_account_check,
  "delete_account":delete_account,
  "oauth_unlink":oauth_unlink,
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
  "add_user_api_key":add_user_api_key,
  "remove_user_api_key":remove_user_api_key,
  "refresh_user_api_key":refresh_user_api_key,
  "add_site_application":add_site_application,
  "remove_site_application":remove_site_application,
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
  "swap_start_registration":swap_start_registration,
  "swap_start_allocation":swap_start_allocation,
  "swap_start_trading":swap_start_trading,
  "swap_pause_trading":swap_pause_trading,
  "swap_stop_trading":swap_stop_trading,
  "swap_start_resolution":swap_start_resolution,
  "swap_resolve":swap_resolve,
  "swap_complete":swap_complete,
  "swap_check_available":swap_check_available,
  "swap_modify":swap_modify,
  "swap_remove":swap_remove,
  "swap_add_star":swap_add_star,
  "swap_remove_star":swap_remove_star,
  "swap_post_comment":swap_post_comment,
  "swap_edit_comment":swap_edit_comment,
  "swap_upvote_comment":swap_upvote_comment,
  "swap_downvote_comment":swap_downvote_comment,
  "swap_unvote_comment":swap_unvote_comment,
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
  "abuse_report_create":abuse_report_create,
  "abuse_report_update":abuse_report_update,
  "site_var_set":site_var_set,
  "site_var_delete":site_var_delete,
  "currency_set":currency_set,
  "currency_delete":currency_delete,
  "region_country_set":region_country_set,
  "region_country_delete":region_country_delete,
  "region_state_set":region_state_set,
  "region_state_delete":region_state_delete,
  "region_city_set":region_city_set,
  "region_city_delete":region_city_delete,
  "service_set":service_set,
  "service_delete":service_delete,
  "infra_mq_set":infra_mq_set,
  "infra_mq_delete":infra_mq_delete,
  "infra_exchange_set":infra_exchange_set,
  "infra_exchange_delete":infra_exchange_delete,
  "set_account_super":set_account_super,
  "set_account_lock":set_account_lock,
  "set_organisation_lock":set_organisation_lock,
  "set_organisation_tier":set_organisation_tier,
  "set_room_lock":set_room_lock,
  "set_topic_lock":set_topic_lock,
  "user_privilege_add":user_privilege_add,
  "user_privilege_remove":user_privilege_remove,
  "account_token_secret_add":account_token_secret_add,
  "account_token_secret_remove":account_token_secret_remove,
  "account_token_secret_update":account_token_secret_update,
  "purchase_statscoin":purchase_statscoin,
  "tip_statscoin":tip_statscoin,
  "email_add_additional":email_add_additional,
  "email_verify_additional_resend":email_verify_additional_resend,
  "login":login,
  "password_change":password_change,
  "password_reset":password_reset,
  "helper_id":helper_id,
  "helper_ping":helper_ping,
  "helper_all_routes":helper_all_routes,
  "view_query":view_query,
  "view_query_nosync":view_query_nosync,
  "view_bulk":view_bulk,
  "view_overview":view_overview,
  "view_tables":view_tables,
  "view_methods":view_methods,
  "view_detail":view_detail,
  "imagekit_token":imagekit_token,
  "upload_image":upload_image,
  "oauth_access_token":oauth_access_token,
  "oauth_facebook_info":oauth_facebook_info,
  "oauth_facebook_login":oauth_facebook_login,
  "oauth_facebook_register":oauth_facebook_register,
  "oauth_facebook_link":oauth_facebook_link,
  "oauth_facebook_is_linked":oauth_facebook_is_linked,
  "oauth_coinbase_info":oauth_coinbase_info,
  "oauth_coinbase_login":oauth_coinbase_login,
  "oauth_coinbase_register":oauth_coinbase_register,
  "oauth_coinbase_link":oauth_coinbase_link,
  "oauth_coinbase_is_linked":oauth_coinbase_is_linked,
  "oauth_github_info":oauth_github_info,
  "oauth_github_login":oauth_github_login,
  "oauth_github_register":oauth_github_register,
  "oauth_github_link":oauth_github_link,
  "oauth_github_is_linked":oauth_github_is_linked,
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
  "web3_id":web3_id,
  "web3_ping":web3_ping,
  "web3_user_address_link":web3_user_address_link,
  "web3_user_address_verify":web3_user_address_verify,
  "set_remote":set_remote
};

module.exports = MODULE