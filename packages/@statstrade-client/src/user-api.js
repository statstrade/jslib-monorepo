const user_call = require("./user-call")

const user_event = require("./user-event")

const base_system = require("./base-system")

const api_meta = require("./user-api-meta")

// statslink.impl.user-api/get-privacy-policy [55] 
function get_privacy_policy(user,cb){
  return user_call.user_handle(api_meta.API["get_privacy_policy"],user,[],null,cb);
}

// statslink.impl.user-api/get-terms-and-conditions [55] 
function get_terms_and_conditions(user,cb){
  return user_call.user_handle(api_meta.API["get_terms_and_conditions"],user,[],null,cb);
}

// statslink.impl.user-api/check-nickname-exists [55] 
function check_nickname_exists(user,i_nickname,cb){
  return user_call.user_handle(api_meta.API["check_nickname_exists"],user,[i_nickname],null,cb);
}

// statslink.impl.user-api/check-nickname-available [55] 
function check_nickname_available(user,i_nickname,cb){
  return user_call.user_handle(
    api_meta.API["check_nickname_available"],
    user,
    [i_nickname],
    null,
    cb
  );
}

// statslink.impl.user-api/check-email-exists [55] 
function check_email_exists(user,i_email,cb){
  return user_call.user_handle(api_meta.API["check_email_exists"],user,[i_email],null,cb);
}

// statslink.impl.user-api/check-email-available [55] 
function check_email_available(user,i_email,cb){
  return user_call.user_handle(api_meta.API["check_email_available"],user,[i_email],null,cb);
}

// statslink.impl.user-api/email-registration [55] 
function email_registration(user,m,cb){
  return user_call.user_handle(api_meta.API["email_registration"],user,[m],null,cb);
}

// statslink.impl.user-api/email-registration-external [55] 
function email_registration_external(user,m,cb){
  return user_call.user_handle(api_meta.API["email_registration_external"],user,[m],null,cb);
}

// statslink.impl.user-api/email-verification [55] 
function email_verification(user,m,cb){
  return user_call.user_handle(
    api_meta.API["email_verification"],
    user,
    [m],
    null,
    user_event.token_sync_wrap(user,cb)
  );
}

// statslink.impl.user-api/email-verification-resend [55] 
function email_verification_resend(user,m,cb){
  return user_call.user_handle(api_meta.API["email_verification_resend"],user,[m],null,cb);
}

// statslink.impl.user-api/create-account [55] 
function create_account(user,i_account_id,m,cb){
  return user_call.user_handle(api_meta.API["create_account"],user,[i_account_id,m],null,cb);
}

// statslink.impl.user-api/password-reset-request [55] 
function password_reset_request(user,m,cb){
  return user_call.user_handle(api_meta.API["password_reset_request"],user,[m],null,cb);
}

// statslink.impl.user-api/login-renew [55] 
function login_renew(user,i_token,cb){
  return user_call.user_handle(
    api_meta.API["login_renew"],
    user,
    [i_token],
    true,
    user_event.token_sync_wrap(user,cb)
  );
}

// statslink.impl.user-api/logout [55] 
function logout(user,i_token,cb){
  return user_call.user_handle(
    api_meta.API["logout"],
    user,
    [i_token],
    true,
    user_event.logout_sync_wrap(user,cb)
  );
}

// statslink.impl.user-api/net-check [55] 
function net_check(user,account_id,cb){
  return user_call.user_handle(api_meta.API["net_check"],user,[account_id],null,cb);
}

// statslink.impl.user-api/profile-modify [55] 
function profile_modify(user,i_account_id,m,cb){
  return user_call.user_handle(api_meta.API["profile_modify"],user,[i_account_id,m],null,cb);
}

// statslink.impl.user-api/notification-modify [55] 
function notification_modify(user,i_account_id,m,cb){
  return user_call.user_handle(
    api_meta.API["notification_modify"],
    user,
    [i_account_id,m],
    null,
    cb
  );
}

// statslink.impl.user-api/email-get-all [55] 
function email_get_all(user,i_account_id,cb){
  return user_call.user_handle(api_meta.API["email_get_all"],user,[i_account_id],null,cb);
}

// statslink.impl.user-api/email-get-primary [55] 
function email_get_primary(user,i_account_id,cb){
  return user_call.user_handle(api_meta.API["email_get_primary"],user,[i_account_id],null,cb);
}

// statslink.impl.user-api/email-remove-additional [55] 
function email_remove_additional(user,i_account_id,i_email,cb){
  return user_call.user_handle(
    api_meta.API["email_remove_additional"],
    user,
    [i_account_id,i_email],
    null,
    cb
  );
}

// statslink.impl.user-api/email-verify-additional [55] 
function email_verify_additional(user,i_account_id,i_email,i_code,cb){
  return user_call.user_handle(
    api_meta.API["email_verify_additional"],
    user,
    [i_account_id,i_email,i_code],
    null,
    cb
  );
}

// statslink.impl.user-api/email-set-primary [55] 
function email_set_primary(user,i_account_id,i_email,cb){
  return user_call.user_handle(
    api_meta.API["email_set_primary"],
    user,
    [i_account_id,i_email],
    null,
    cb
  );
}

// statslink.impl.user-api/delete-account-check [55] 
function delete_account_check(user,i_account_id,cb){
  return user_call.user_handle(
    api_meta.API["delete_account_check"],
    user,
    [i_account_id],
    null,
    cb
  );
}

// statslink.impl.user-api/delete-account [55] 
function delete_account(user,i_account_id,cb){
  return user_call.user_handle(api_meta.API["delete_account"],user,[i_account_id],null,cb);
}

// statslink.impl.user-api/oauth-unlink [55] 
function oauth_unlink(user,i_account_id,i_identity,cb){
  return user_call.user_handle(
    api_meta.API["oauth_unlink"],
    user,
    [i_account_id,i_identity],
    null,
    cb
  );
}

// statslink.impl.user-api/brand-create [87] 
function brand_create(user,i_account_id,m,cb){
  return user_call.user_handle(api_meta.API["brand_create"],user,[i_account_id,m],null,cb);
}

// statslink.impl.user-api/brand-transfer-ownership [87] 
function brand_transfer_ownership(user,i_account_id,i_brand_id,i_new_owner_id,cb){
  return user_call.user_handle(
    api_meta.API["brand_transfer_ownership"],
    user,
    [i_account_id,i_brand_id,i_new_owner_id],
    null,
    cb
  );
}

// statslink.impl.user-api/brand-remove [87] 
function brand_remove(user,i_account_id,i_brand_id,cb){
  return user_call.user_handle(
    api_meta.API["brand_remove"],
    user,
    [i_account_id,i_brand_id],
    null,
    cb
  );
}

// statslink.impl.user-api/brand-modify [87] 
function brand_modify(user,i_account_id,i_brand_id,m,cb){
  return user_call.user_handle(
    api_meta.API["brand_modify"],
    user,
    [i_account_id,i_brand_id,m],
    null,
    cb
  );
}

// statslink.impl.user-api/brand-add-member [87] 
function brand_add_member(user,i_account_id,i_brand_id,i_new_member_id,i_detail,cb){
  return user_call.user_handle(
    api_meta.API["brand_add_member"],
    user,
    [i_account_id,i_brand_id,i_new_member_id,i_detail],
    null,
    cb
  );
}

// statslink.impl.user-api/brand-remove-member [87] 
function brand_remove_member(user,i_account_id,i_brand_id,i_member_id,cb){
  return user_call.user_handle(
    api_meta.API["brand_remove_member"],
    user,
    [i_account_id,i_brand_id,i_member_id],
    null,
    cb
  );
}

// statslink.impl.user-api/brand-leave-as-member [87] 
function brand_leave_as_member(user,i_account_id,i_brand_id,cb){
  return user_call.user_handle(
    api_meta.API["brand_leave_as_member"],
    user,
    [i_account_id,i_brand_id],
    null,
    cb
  );
}

// statslink.impl.user-api/brand-add-star [87] 
function brand_add_star(user,i_account_id,i_brand_id,cb){
  return user_call.user_handle(
    api_meta.API["brand_add_star"],
    user,
    [i_account_id,i_brand_id],
    null,
    cb
  );
}

// statslink.impl.user-api/brand-remove-star [87] 
function brand_remove_star(user,i_account_id,i_brand_id,cb){
  return user_call.user_handle(
    api_meta.API["brand_remove_star"],
    user,
    [i_account_id,i_brand_id],
    null,
    cb
  );
}

// statslink.impl.user-api/brand-post-wall [87] 
function brand_post_wall(user,i_account_id,i_brand_id,i_parent_id,i_body,cb){
  return user_call.user_handle(
    api_meta.API["brand_post_wall"],
    user,
    [i_account_id,i_brand_id,i_parent_id,i_body],
    null,
    cb
  );
}

// statslink.impl.user-api/brand-edit-wall [87] 
function brand_edit_wall(user,i_account_id,i_brand_id,i_communication_id,i_new_body,cb){
  return user_call.user_handle(
    api_meta.API["brand_edit_wall"],
    user,
    [i_account_id,i_brand_id,i_communication_id,i_new_body],
    null,
    cb
  );
}

// statslink.impl.user-api/brand-upvote-wall [87] 
function brand_upvote_wall(user,i_account_id,i_brand_id,i_communication_id,cb){
  return user_call.user_handle(
    api_meta.API["brand_upvote_wall"],
    user,
    [i_account_id,i_brand_id,i_communication_id],
    null,
    cb
  );
}

// statslink.impl.user-api/brand-downvote-wall [87] 
function brand_downvote_wall(user,i_account_id,i_brand_id,i_communication_id,cb){
  return user_call.user_handle(
    api_meta.API["brand_downvote_wall"],
    user,
    [i_account_id,i_brand_id,i_communication_id],
    null,
    cb
  );
}

// statslink.impl.user-api/brand-unvote-wall [87] 
function brand_unvote_wall(user,i_account_id,i_brand_id,i_communication_id,cb){
  return user_call.user_handle(
    api_meta.API["brand_unvote_wall"],
    user,
    [i_account_id,i_brand_id,i_communication_id],
    null,
    cb
  );
}

// statslink.impl.user-api/brand-affiliation-add [87] 
function brand_affiliation_add(user,i_account_id,i_organisation_id,i_brand_id,cb){
  return user_call.user_handle(
    api_meta.API["brand_affiliation_add"],
    user,
    [i_account_id,i_organisation_id,i_brand_id],
    null,
    cb
  );
}

// statslink.impl.user-api/brand-affiliation-remove [87] 
function brand_affiliation_remove(user,i_account_id,i_organisation_id,i_brand_id,cb){
  return user_call.user_handle(
    api_meta.API["brand_affiliation_remove"],
    user,
    [i_account_id,i_organisation_id,i_brand_id],
    null,
    cb
  );
}

// statslink.impl.user-api/brand-affiliation-request [87] 
function brand_affiliation_request(user,i_request_account_id,i_organisation_id,i_brand_id,cb){
  return user_call.user_handle(
    api_meta.API["brand_affiliation_request"],
    user,
    [i_request_account_id,i_organisation_id,i_brand_id],
    null,
    cb
  );
}

// statslink.impl.user-api/brand-affiliation-accept [87] 
function brand_affiliation_accept(user,i_account_id,i_organisation_id,i_brand_id,cb){
  return user_call.user_handle(
    api_meta.API["brand_affiliation_accept"],
    user,
    [i_account_id,i_organisation_id,i_brand_id],
    null,
    cb
  );
}

// statslink.impl.user-api/brand-affiliation-reject [87] 
function brand_affiliation_reject(user,i_account_id,i_organisation_id,i_brand_id,cb){
  return user_call.user_handle(
    api_meta.API["brand_affiliation_reject"],
    user,
    [i_account_id,i_organisation_id,i_brand_id],
    null,
    cb
  );
}

// statslink.impl.user-api/brand-topic-sponsorship-request [87] 
function brand_topic_sponsorship_request(user,i_topic_account_id,i_brand_id,i_topic_id,cb){
  return user_call.user_handle(
    api_meta.API["brand_topic_sponsorship_request"],
    user,
    [i_topic_account_id,i_brand_id,i_topic_id],
    null,
    cb
  );
}

// statslink.impl.user-api/brand-topic-sponsorship-response [87] 
function brand_topic_sponsorship_response(user,i_brand_account_id,i_sponsorship_id,i_status,cb){
  return user_call.user_handle(
    api_meta.API["brand_topic_sponsorship_response"],
    user,
    [i_brand_account_id,i_sponsorship_id,i_status],
    null,
    cb
  );
}

// statslink.impl.user-api/brand-swap-sponsorship-request [87] 
function brand_swap_sponsorship_request(user,i_swap_account_id,i_brand_id,i_swap_id,cb){
  return user_call.user_handle(
    api_meta.API["brand_swap_sponsorship_request"],
    user,
    [i_swap_account_id,i_brand_id,i_swap_id],
    null,
    cb
  );
}

// statslink.impl.user-api/brand-swap-sponsorship-response [87] 
function brand_swap_sponsorship_response(user,i_brand_account_id,i_sponsorship_id,i_status,cb){
  return user_call.user_handle(
    api_meta.API["brand_swap_sponsorship_response"],
    user,
    [i_brand_account_id,i_sponsorship_id,i_status],
    null,
    cb
  );
}

// statslink.impl.user-api/evm-add-chain [92] 
function evm_add_chain(user,i_account_id,m,cb){
  return user_call.user_handle(api_meta.API["evm_add_chain"],user,[i_account_id,m],null,cb);
}

// statslink.impl.user-api/evm-remove-chain [92] 
function evm_remove_chain(user,i_account_id,i_evm_id,cb){
  return user_call.user_handle(
    api_meta.API["evm_remove_chain"],
    user,
    [i_account_id,i_evm_id],
    null,
    cb
  );
}

// statslink.impl.user-api/evm-update-chain [92] 
function evm_update_chain(user,i_account_id,i_evm_id,m,cb){
  return user_call.user_handle(
    api_meta.API["evm_update_chain"],
    user,
    [i_account_id,i_evm_id,m],
    null,
    cb
  );
}

// statslink.impl.user-api/evm-add-contract-template [92] 
function evm_add_contract_template(user,i_account_id,m,cb){
  return user_call.user_handle(
    api_meta.API["evm_add_contract_template"],
    user,
    [i_account_id,m],
    null,
    cb
  );
}

// statslink.impl.user-api/evm-remove-contract-template [92] 
function evm_remove_contract_template(user,i_account_id,i_contract_id,cb){
  return user_call.user_handle(
    api_meta.API["evm_remove_contract_template"],
    user,
    [i_account_id,i_contract_id],
    null,
    cb
  );
}

// statslink.impl.user-api/evm-add-contract [92] 
function evm_add_contract(user,i_account_id,m,cb){
  return user_call.user_handle(api_meta.API["evm_add_contract"],user,[i_account_id,m],null,cb);
}

// statslink.impl.user-api/evm-remove-contract [92] 
function evm_remove_contract(user,i_account_id,i_contract_id,cb){
  return user_call.user_handle(
    api_meta.API["evm_remove_contract"],
    user,
    [i_account_id,i_contract_id],
    null,
    cb
  );
}

// statslink.impl.user-api/evm-add-token [92] 
function evm_add_token(user,i_account_id,m,cb){
  return user_call.user_handle(api_meta.API["evm_add_token"],user,[i_account_id,m],null,cb);
}

// statslink.impl.user-api/evm-remove-token [92] 
function evm_remove_token(user,i_account_id,i_token_id,cb){
  return user_call.user_handle(
    api_meta.API["evm_remove_token"],
    user,
    [i_account_id,i_token_id],
    null,
    cb
  );
}

// statslink.impl.user-api/evm-update-token [92] 
function evm_update_token(user,i_account_id,i_token_id,m,cb){
  return user_call.user_handle(
    api_meta.API["evm_update_token"],
    user,
    [i_account_id,i_token_id,m],
    null,
    cb
  );
}

// statslink.impl.user-api/evm-add-faucet-entry [92] 
function evm_add_faucet_entry(user,i_account_id,i_chain_id,i_currency_id,cb){
  return user_call.user_handle(
    api_meta.API["evm_add_faucet_entry"],
    user,
    [i_account_id,i_chain_id,i_currency_id],
    null,
    cb
  );
}

// statslink.impl.user-api/evm-remove-faucet-entry [92] 
function evm_remove_faucet_entry(user,i_account_id,i_faucet_entry_id,cb){
  return user_call.user_handle(
    api_meta.API["evm_remove_faucet_entry"],
    user,
    [i_account_id,i_faucet_entry_id],
    null,
    cb
  );
}

// statslink.impl.user-api/evm-remove-user-address [92] 
function evm_remove_user_address(user,i_account_id,i_user_address,cb){
  return user_call.user_handle(
    api_meta.API["evm_remove_user_address"],
    user,
    [i_account_id,i_user_address],
    null,
    cb
  );
}

// statslink.impl.user-api/evm-action-get-status [92] 
function evm_action_get_status(user,i_account_id,i_status,cb){
  return user_call.user_handle(
    api_meta.API["evm_action_get_status"],
    user,
    [i_account_id,i_status],
    null,
    cb
  );
}

// statslink.impl.user-api/evm-action-take [92] 
function evm_action_take(user,i_account_id,i_action_id,cb){
  return user_call.user_handle(
    api_meta.API["evm_action_take"],
    user,
    [i_account_id,i_action_id],
    null,
    cb
  );
}

// statslink.impl.user-api/evm-action-take-reset [92] 
function evm_action_take_reset(user,i_account_id,i_action_id,cb){
  return user_call.user_handle(
    api_meta.API["evm_action_take_reset"],
    user,
    [i_account_id,i_action_id],
    null,
    cb
  );
}

// statslink.impl.user-api/evm-action-error [92] 
function evm_action_error(user,i_account_id,i_action_id,i_detail,i_blockfee,cb){
  return user_call.user_handle(
    api_meta.API["evm_action_error"],
    user,
    [i_account_id,i_action_id,i_detail,i_blockfee],
    null,
    cb
  );
}

// statslink.impl.user-api/evm-action-return [92] 
function evm_action_return(user,i_account_id,i_action_id,i_type,i_tx_id,i_blockid,i_blocknum,i_blockfee,cb){
  return user_call.user_handle(api_meta.API["evm_action_return"],user,[
    i_account_id,
    i_action_id,
    i_type,
    i_tx_id,
    i_blockid,
    i_blocknum,
    i_blockfee
  ],null,cb);
}

// statslink.impl.user-api/evm-account-close-request [92] 
function evm_account_close_request(user,i_account_id,i_playable_id,i_user_address_id,cb){
  return user_call.user_handle(
    api_meta.API["evm_account_close_request"],
    user,
    [i_account_id,i_playable_id,i_user_address_id],
    null,
    cb
  );
}

// statslink.impl.user-api/evm-vault-withdraw-create [92] 
function evm_vault_withdraw_create(user,i_account_id,i_playable_id,i_amount,cb){
  return user_call.user_handle(
    api_meta.API["evm_vault_withdraw_create"],
    user,
    [i_account_id,i_playable_id,i_amount],
    null,
    cb
  );
}

// statslink.impl.user-api/evm-vault-withdraw-cancel [92] 
function evm_vault_withdraw_cancel(user,i_account_id,i_playable_id,i_withdraw_id,cb){
  return user_call.user_handle(
    api_meta.API["evm_vault_withdraw_cancel"],
    user,
    [i_account_id,i_playable_id,i_withdraw_id],
    null,
    cb
  );
}

// statslink.impl.user-api/evm-vault-withdraw-requeue [92] 
function evm_vault_withdraw_requeue(user,i_account_id,i_playable_id,i_withdraw_id,cb){
  return user_call.user_handle(
    api_meta.API["evm_vault_withdraw_requeue"],
    user,
    [i_account_id,i_playable_id,i_withdraw_id],
    null,
    cb
  );
}

// statslink.impl.user-api/evm-vault-wait [92] 
function evm_vault_wait(user,i_account_id,i_playable_id,i_tx_action_id,i_tx_id,i_blockid,i_blocknum,i_blockfee,i_type,cb){
  return user_call.user_handle(api_meta.API["evm_vault_wait"],user,[
    i_account_id,
    i_playable_id,
    i_tx_action_id,
    i_tx_id,
    i_blockid,
    i_blocknum,
    i_blockfee,
    i_type
  ],null,cb);
}

// statslink.impl.user-api/add-user-api-key [97] 
function add_user_api_key(user,i_account_id,i_tag,i_detail,cb){
  return user_call.user_handle(
    api_meta.API["add_user_api_key"],
    user,
    [i_account_id,i_tag,i_detail],
    null,
    cb
  );
}

// statslink.impl.user-api/remove-user-api-key [97] 
function remove_user_api_key(user,i_account_id,i_api_key_id,cb){
  return user_call.user_handle(
    api_meta.API["remove_user_api_key"],
    user,
    [i_account_id,i_api_key_id],
    null,
    cb
  );
}

// statslink.impl.user-api/refresh-user-api-key [97] 
function refresh_user_api_key(user,i_account_id,i_api_key_id,cb){
  return user_call.user_handle(
    api_meta.API["refresh_user_api_key"],
    user,
    [i_account_id,i_api_key_id],
    null,
    cb
  );
}

// statslink.impl.user-api/add-site-application [97] 
function add_site_application(user,i_account_id,i_organisation_id,m,cb){
  return user_call.user_handle(
    api_meta.API["add_site_application"],
    user,
    [i_account_id,i_organisation_id,m],
    null,
    cb
  );
}

// statslink.impl.user-api/remove-site-application [97] 
function remove_site_application(user,i_account_id,i_organisation_id,i_site_app_id,cb){
  return user_call.user_handle(
    api_meta.API["remove_site_application"],
    user,
    [i_account_id,i_organisation_id,i_site_app_id],
    null,
    cb
  );
}

// statslink.impl.user-api/prospect-start-registration [102] 
function prospect_start_registration(user,i_account_id,i_prospect_id,i_message,cb){
  return user_call.user_handle(
    api_meta.API["prospect_start_registration"],
    user,
    [i_account_id,i_prospect_id,i_message],
    null,
    cb
  );
}

// statslink.impl.user-api/prospect-start-allocation [102] 
function prospect_start_allocation(user,i_account_id,i_prospect_id,i_message,cb){
  return user_call.user_handle(
    api_meta.API["prospect_start_allocation"],
    user,
    [i_account_id,i_prospect_id,i_message],
    null,
    cb
  );
}

// statslink.impl.user-api/prospect-start-trading [102] 
function prospect_start_trading(user,i_account_id,i_prospect_id,i_message,cb){
  return user_call.user_handle(
    api_meta.API["prospect_start_trading"],
    user,
    [i_account_id,i_prospect_id,i_message],
    null,
    cb
  );
}

// statslink.impl.user-api/prospect-pause-trading [102] 
function prospect_pause_trading(user,i_account_id,i_prospect_id,i_message,cb){
  return user_call.user_handle(
    api_meta.API["prospect_pause_trading"],
    user,
    [i_account_id,i_prospect_id,i_message],
    null,
    cb
  );
}

// statslink.impl.user-api/prospect-stop-trading [102] 
function prospect_stop_trading(user,i_account_id,i_prospect_id,i_message,cb){
  return user_call.user_handle(
    api_meta.API["prospect_stop_trading"],
    user,
    [i_account_id,i_prospect_id,i_message],
    null,
    cb
  );
}

// statslink.impl.user-api/prospect-start-resolution [102] 
function prospect_start_resolution(user,i_account_id,i_prospect_id,i_message,cb){
  return user_call.user_handle(
    api_meta.API["prospect_start_resolution"],
    user,
    [i_account_id,i_prospect_id,i_message],
    null,
    cb
  );
}

// statslink.impl.user-api/prospect-resolve [102] 
function prospect_resolve(user,i_account_id,i_prospect_id,i_limit,cb){
  return user_call.user_handle(
    api_meta.API["prospect_resolve"],
    user,
    [i_account_id,i_prospect_id,i_limit],
    null,
    cb
  );
}

// statslink.impl.user-api/prospect-start-verdict-check [102] 
function prospect_start_verdict_check(user,i_account_id,i_prospect_id,cb){
  return user_call.user_handle(
    api_meta.API["prospect_start_verdict_check"],
    user,
    [i_account_id,i_prospect_id],
    null,
    cb
  );
}

// statslink.impl.user-api/prospect-start-verdict [102] 
function prospect_start_verdict(user,i_account_id,i_prospect_id,i_message,cb){
  return user_call.user_handle(
    api_meta.API["prospect_start_verdict"],
    user,
    [i_account_id,i_prospect_id,i_message],
    null,
    cb
  );
}

// statslink.impl.user-api/prospect-complete [102] 
function prospect_complete(user,i_account_id,i_prospect_id,i_message,cb){
  return user_call.user_handle(
    api_meta.API["prospect_complete"],
    user,
    [i_account_id,i_prospect_id,i_message],
    null,
    cb
  );
}

// statslink.impl.user-api/topic-discard [102] 
function topic_discard(user,i_account_id,i_topic_id,i_message,cb){
  return user_call.user_handle(
    api_meta.API["topic_discard"],
    user,
    [i_account_id,i_topic_id,i_message],
    null,
    cb
  );
}

// statslink.impl.user-api/topic-undiscard [102] 
function topic_undiscard(user,i_account_id,i_topic_id,i_message,cb){
  return user_call.user_handle(
    api_meta.API["topic_undiscard"],
    user,
    [i_account_id,i_topic_id,i_message],
    null,
    cb
  );
}

// statslink.impl.user-api/topic-lock [102] 
function topic_lock(user,i_account_id,i_topic_id,i_message,cb){
  return user_call.user_handle(
    api_meta.API["topic_lock"],
    user,
    [i_account_id,i_topic_id,i_message],
    null,
    cb
  );
}

// statslink.impl.user-api/topic-start-registration [102] 
function topic_start_registration(user,i_account_id,i_topic_id,i_message,cb){
  return user_call.user_handle(
    api_meta.API["topic_start_registration"],
    user,
    [i_account_id,i_topic_id,i_message],
    null,
    cb
  );
}

// statslink.impl.user-api/topic-start-allocation [102] 
function topic_start_allocation(user,i_account_id,i_topic_id,i_message,cb){
  return user_call.user_handle(
    api_meta.API["topic_start_allocation"],
    user,
    [i_account_id,i_topic_id,i_message],
    null,
    cb
  );
}

// statslink.impl.user-api/topic-start-trading [102] 
function topic_start_trading(user,i_account_id,i_topic_id,i_message,cb){
  return user_call.user_handle(
    api_meta.API["topic_start_trading"],
    user,
    [i_account_id,i_topic_id,i_message],
    null,
    cb
  );
}

// statslink.impl.user-api/topic-pause-trading [102] 
function topic_pause_trading(user,i_account_id,i_topic_id,i_message,cb){
  return user_call.user_handle(
    api_meta.API["topic_pause_trading"],
    user,
    [i_account_id,i_topic_id,i_message],
    null,
    cb
  );
}

// statslink.impl.user-api/topic-stop-trading [102] 
function topic_stop_trading(user,i_account_id,i_topic_id,i_message,cb){
  return user_call.user_handle(
    api_meta.API["topic_stop_trading"],
    user,
    [i_account_id,i_topic_id,i_message],
    null,
    cb
  );
}

// statslink.impl.user-api/topic-start-resolution [102] 
function topic_start_resolution(user,i_account_id,i_topic_id,i_message,cb){
  return user_call.user_handle(
    api_meta.API["topic_start_resolution"],
    user,
    [i_account_id,i_topic_id,i_message],
    null,
    cb
  );
}

// statslink.impl.user-api/topic-start-verdict [102] 
function topic_start_verdict(user,i_account_id,i_topic_id,i_message,cb){
  return user_call.user_handle(
    api_meta.API["topic_start_verdict"],
    user,
    [i_account_id,i_topic_id,i_message],
    null,
    cb
  );
}

// statslink.impl.user-api/topic-complete [102] 
function topic_complete(user,i_account_id,i_topic_id,i_message,cb){
  return user_call.user_handle(
    api_meta.API["topic_complete"],
    user,
    [i_account_id,i_topic_id,i_message],
    null,
    cb
  );
}

// statslink.impl.user-api/payout-discard [102] 
function payout_discard(user,i_account_id,i_prospect_id,i_limit,cb){
  return user_call.user_handle(
    api_meta.API["payout_discard"],
    user,
    [i_account_id,i_prospect_id,i_limit],
    null,
    cb
  );
}

// statslink.impl.user-api/payout-winning [102] 
function payout_winning(user,i_account_id,i_prospect_id,i_limit,cb){
  return user_call.user_handle(
    api_meta.API["payout_winning"],
    user,
    [i_account_id,i_prospect_id,i_limit],
    null,
    cb
  );
}

// statslink.impl.user-api/payout-return-no [102] 
function payout_return_no(user,i_account_id,i_prospect_id,i_limit,cb){
  return user_call.user_handle(
    api_meta.API["payout_return_no"],
    user,
    [i_account_id,i_prospect_id,i_limit],
    null,
    cb
  );
}

// statslink.impl.user-api/payout-return-yes [102] 
function payout_return_yes(user,i_account_id,i_prospect_id,i_limit,cb){
  return user_call.user_handle(
    api_meta.API["payout_return_yes"],
    user,
    [i_account_id,i_prospect_id,i_limit],
    null,
    cb
  );
}

// statslink.impl.user-api/buy-stake [102] 
function buy_stake(user,i_account_id,i_prospect_id,i_stake,cb){
  return user_call.user_handle(
    api_meta.API["buy_stake"],
    user,
    [i_account_id,i_prospect_id,i_stake],
    null,
    cb
  );
}

// statslink.impl.user-api/payout-stake [102] 
function payout_stake(user,i_account_id,i_prospect_id,i_limit,cb){
  return user_call.user_handle(
    api_meta.API["payout_stake"],
    user,
    [i_account_id,i_prospect_id,i_limit],
    null,
    cb
  );
}

// statslink.impl.user-api/room-topic-create [102] 
function room_topic_create(user,i_account_id,i_room_id,m,cb){
  return user_call.user_handle(
    api_meta.API["room_topic_create"],
    user,
    [i_account_id,i_room_id,m],
    null,
    cb
  );
}

// statslink.impl.user-api/verdict-announce [102] 
function verdict_announce(user,i_account_id,i_prospect_id,i_result,cb){
  return user_call.user_handle(
    api_meta.API["verdict_announce"],
    user,
    [i_account_id,i_prospect_id,i_result],
    null,
    cb
  );
}

// statslink.impl.user-api/verdict-lock [102] 
function verdict_lock(user,i_account_id,i_prospect_id,i_result,cb){
  return user_call.user_handle(
    api_meta.API["verdict_lock"],
    user,
    [i_account_id,i_prospect_id,i_result],
    null,
    cb
  );
}

// statslink.impl.user-api/prospect-confirm-verdict [102] 
function prospect_confirm_verdict(user,i_account_id,i_prospect_id,i_message,cb){
  return user_call.user_handle(
    api_meta.API["prospect_confirm_verdict"],
    user,
    [i_account_id,i_prospect_id,i_message],
    null,
    cb
  );
}

// statslink.impl.user-api/organisation-transfer-ownership [107] 
function organisation_transfer_ownership(user,i_account_id,i_organisation_id,i_new_owner_id,cb){
  return user_call.user_handle(
    api_meta.API["organisation_transfer_ownership"],
    user,
    [i_account_id,i_organisation_id,i_new_owner_id],
    null,
    cb
  );
}

// statslink.impl.user-api/organisation-remove [107] 
function organisation_remove(user,i_account_id,i_organisation_id,cb){
  return user_call.user_handle(
    api_meta.API["organisation_remove"],
    user,
    [i_account_id,i_organisation_id],
    null,
    cb
  );
}

// statslink.impl.user-api/organisation-modify [107] 
function organisation_modify(user,i_account_id,i_organisation_id,m,cb){
  return user_call.user_handle(
    api_meta.API["organisation_modify"],
    user,
    [i_account_id,i_organisation_id,m],
    null,
    cb
  );
}

// statslink.impl.user-api/organisation-add-member [107] 
function organisation_add_member(user,i_account_id,i_organisation_id,i_new_member_id,i_detail,cb){
  return user_call.user_handle(
    api_meta.API["organisation_add_member"],
    user,
    [i_account_id,i_organisation_id,i_new_member_id,i_detail],
    null,
    cb
  );
}

// statslink.impl.user-api/organisation-remove-member [107] 
function organisation_remove_member(user,i_account_id,i_organisation_id,i_member_id,cb){
  return user_call.user_handle(
    api_meta.API["organisation_remove_member"],
    user,
    [i_account_id,i_organisation_id,i_member_id],
    null,
    cb
  );
}

// statslink.impl.user-api/organisation-leave-as-member [107] 
function organisation_leave_as_member(user,i_account_id,i_organisation_id,cb){
  return user_call.user_handle(
    api_meta.API["organisation_leave_as_member"],
    user,
    [i_account_id,i_organisation_id],
    null,
    cb
  );
}

// statslink.impl.user-api/organisation-set-public-as-member [107] 
function organisation_set_public_as_member(user,i_account_id,i_organisation_id,v_is_public,cb){
  return user_call.user_handle(
    api_meta.API["organisation_set_public_as_member"],
    user,
    [i_account_id,i_organisation_id,v_is_public],
    null,
    cb
  );
}

// statslink.impl.user-api/organisation-add-star [107] 
function organisation_add_star(user,i_account_id,i_organisation_id,cb){
  return user_call.user_handle(
    api_meta.API["organisation_add_star"],
    user,
    [i_account_id,i_organisation_id],
    null,
    cb
  );
}

// statslink.impl.user-api/organisation-remove-star [107] 
function organisation_remove_star(user,i_account_id,i_organisation_id,cb){
  return user_call.user_handle(
    api_meta.API["organisation_remove_star"],
    user,
    [i_account_id,i_organisation_id],
    null,
    cb
  );
}

// statslink.impl.user-api/organisation-add-rake [107] 
function organisation_add_rake(user,i_account_id,i_organisation_id,m,cb){
  return user_call.user_handle(
    api_meta.API["organisation_add_rake"],
    user,
    [i_account_id,i_organisation_id,m],
    null,
    cb
  );
}

// statslink.impl.user-api/organisation-remove-rake [107] 
function organisation_remove_rake(user,i_account_id,i_organisation_id,i_rake_id,cb){
  return user_call.user_handle(
    api_meta.API["organisation_remove_rake"],
    user,
    [i_account_id,i_organisation_id,i_rake_id],
    null,
    cb
  );
}

// statslink.impl.user-api/organisation-add-staking [107] 
function organisation_add_staking(user,i_account_id,i_organisation_id,m,cb){
  return user_call.user_handle(
    api_meta.API["organisation_add_staking"],
    user,
    [i_account_id,i_organisation_id,m],
    null,
    cb
  );
}

// statslink.impl.user-api/organisation-remove-staking [107] 
function organisation_remove_staking(user,i_account_id,i_organisation_id,i_staking_id,cb){
  return user_call.user_handle(
    api_meta.API["organisation_remove_staking"],
    user,
    [i_account_id,i_organisation_id,i_staking_id],
    null,
    cb
  );
}

// statslink.impl.user-api/organisation-add-buy-in [107] 
function organisation_add_buy_in(user,i_account_id,i_organisation_id,m,cb){
  return user_call.user_handle(
    api_meta.API["organisation_add_buy_in"],
    user,
    [i_account_id,i_organisation_id,m],
    null,
    cb
  );
}

// statslink.impl.user-api/organisation-remove-buy-in [107] 
function organisation_remove_buy_in(user,i_account_id,i_organisation_id,i_buy_in_id,cb){
  return user_call.user_handle(
    api_meta.API["organisation_remove_buy_in"],
    user,
    [i_account_id,i_organisation_id,i_buy_in_id],
    null,
    cb
  );
}

// statslink.impl.user-api/organisation-add-entity-group [107] 
function organisation_add_entity_group(user,i_account_id,i_organisation_id,m,cb){
  return user_call.user_handle(
    api_meta.API["organisation_add_entity_group"],
    user,
    [i_account_id,i_organisation_id,m],
    null,
    cb
  );
}

// statslink.impl.user-api/organisation-remove-entity-group [107] 
function organisation_remove_entity_group(user,i_account_id,i_organisation_id,i_group_id,cb){
  return user_call.user_handle(
    api_meta.API["organisation_remove_entity_group"],
    user,
    [i_account_id,i_organisation_id,i_group_id],
    null,
    cb
  );
}

// statslink.impl.user-api/organisation-modify-entity-group [107] 
function organisation_modify_entity_group(user,i_account_id,i_group_id,m,cb){
  return user_call.user_handle(
    api_meta.API["organisation_modify_entity_group"],
    user,
    [i_account_id,i_group_id,m],
    null,
    cb
  );
}

// statslink.impl.user-api/organisation-add-entity [107] 
function organisation_add_entity(user,i_account_id,i_group_id,m,cb){
  return user_call.user_handle(
    api_meta.API["organisation_add_entity"],
    user,
    [i_account_id,i_group_id,m],
    null,
    cb
  );
}

// statslink.impl.user-api/organisation-add-entity-bulk [107] 
function organisation_add_entity_bulk(user,i_account_id,i_group_id,i_entities,cb){
  return user_call.user_handle(
    api_meta.API["organisation_add_entity_bulk"],
    user,
    [i_account_id,i_group_id,i_entities],
    null,
    cb
  );
}

// statslink.impl.user-api/organisation-modify-entity-tags [107] 
function organisation_modify_entity_tags(user,i_account_id,i_entity_id,i_tags,cb){
  return user_call.user_handle(
    api_meta.API["organisation_modify_entity_tags"],
    user,
    [i_account_id,i_entity_id,i_tags],
    null,
    cb
  );
}

// statslink.impl.user-api/organisation-modify-entity [107] 
function organisation_modify_entity(user,i_account_id,i_entity_id,m,cb){
  return user_call.user_handle(
    api_meta.API["organisation_modify_entity"],
    user,
    [i_account_id,i_entity_id,m],
    null,
    cb
  );
}

// statslink.impl.user-api/organisation-remove-entity [107] 
function organisation_remove_entity(user,i_account_id,i_entity_id,cb){
  return user_call.user_handle(
    api_meta.API["organisation_remove_entity"],
    user,
    [i_account_id,i_entity_id],
    null,
    cb
  );
}

// statslink.impl.user-api/room-check-available [112] 
function room_check_available(user,i_account_id,i_organisation_id,i_room_name,cb){
  return user_call.user_handle(
    api_meta.API["room_check_available"],
    user,
    [i_account_id,i_organisation_id,i_room_name],
    null,
    cb
  );
}

// statslink.impl.user-api/room-add-star [112] 
function room_add_star(user,i_account_id,i_room_id,cb){
  return user_call.user_handle(
    api_meta.API["room_add_star"],
    user,
    [i_account_id,i_room_id],
    null,
    cb
  );
}

// statslink.impl.user-api/room-remove-star [112] 
function room_remove_star(user,i_account_id,i_room_id,cb){
  return user_call.user_handle(
    api_meta.API["room_remove_star"],
    user,
    [i_account_id,i_room_id],
    null,
    cb
  );
}

// statslink.impl.user-api/room-post-wall [112] 
function room_post_wall(user,i_account_id,i_room_id,i_parent_id,i_body,cb){
  return user_call.user_handle(
    api_meta.API["room_post_wall"],
    user,
    [i_account_id,i_room_id,i_parent_id,i_body],
    null,
    cb
  );
}

// statslink.impl.user-api/room-edit-wall [112] 
function room_edit_wall(user,i_account_id,i_room_id,i_communication_id,i_new_body,cb){
  return user_call.user_handle(
    api_meta.API["room_edit_wall"],
    user,
    [i_account_id,i_room_id,i_communication_id,i_new_body],
    null,
    cb
  );
}

// statslink.impl.user-api/room-upvote-wall [112] 
function room_upvote_wall(user,i_account_id,i_room_id,i_communication_id,cb){
  return user_call.user_handle(
    api_meta.API["room_upvote_wall"],
    user,
    [i_account_id,i_room_id,i_communication_id],
    null,
    cb
  );
}

// statslink.impl.user-api/room-downvote-wall [112] 
function room_downvote_wall(user,i_account_id,i_room_id,i_communication_id,cb){
  return user_call.user_handle(
    api_meta.API["room_downvote_wall"],
    user,
    [i_account_id,i_room_id,i_communication_id],
    null,
    cb
  );
}

// statslink.impl.user-api/room-unvote-wall [112] 
function room_unvote_wall(user,i_account_id,i_room_id,i_communication_id,cb){
  return user_call.user_handle(
    api_meta.API["room_unvote_wall"],
    user,
    [i_account_id,i_room_id,i_communication_id],
    null,
    cb
  );
}

// statslink.impl.user-api/room-join-invite-send [112] 
function room_join_invite_send(user,i_account_id,i_room_id,i_invited_account_id,i_role,i_detail,cb){
  return user_call.user_handle(
    api_meta.API["room_join_invite_send"],
    user,
    [i_account_id,i_room_id,i_invited_account_id,i_role,i_detail],
    null,
    cb
  );
}

// statslink.impl.user-api/room-join-invite-accept [112] 
function room_join_invite_accept(user,i_account_id,i_room_id,i_from_account_id,cb){
  return user_call.user_handle(
    api_meta.API["room_join_invite_accept"],
    user,
    [i_account_id,i_room_id,i_from_account_id],
    null,
    cb
  );
}

// statslink.impl.user-api/room-join-invite-cancel [112] 
function room_join_invite_cancel(user,i_account_id,i_room_id,i_invited_account_id,cb){
  return user_call.user_handle(
    api_meta.API["room_join_invite_cancel"],
    user,
    [i_account_id,i_room_id,i_invited_account_id],
    null,
    cb
  );
}

// statslink.impl.user-api/room-join-invite-reject [112] 
function room_join_invite_reject(user,i_account_id,i_room_id,i_from_account_id,cb){
  return user_call.user_handle(
    api_meta.API["room_join_invite_reject"],
    user,
    [i_account_id,i_room_id,i_from_account_id],
    null,
    cb
  );
}

// statslink.impl.user-api/room-join-request-send [112] 
function room_join_request_send(user,i_request_account_id,i_room_id,cb){
  return user_call.user_handle(
    api_meta.API["room_join_request_send"],
    user,
    [i_request_account_id,i_room_id],
    null,
    cb
  );
}

// statslink.impl.user-api/room-join-request-accept [112] 
function room_join_request_accept(user,i_account_id,i_room_id,i_request_account_id,cb){
  return user_call.user_handle(
    api_meta.API["room_join_request_accept"],
    user,
    [i_account_id,i_room_id,i_request_account_id],
    null,
    cb
  );
}

// statslink.impl.user-api/room-join-request-cancel [112] 
function room_join_request_cancel(user,i_request_account_id,i_room_id,cb){
  return user_call.user_handle(
    api_meta.API["room_join_request_cancel"],
    user,
    [i_request_account_id,i_room_id],
    null,
    cb
  );
}

// statslink.impl.user-api/room-join-request-reject [112] 
function room_join_request_reject(user,i_account_id,i_room_id,i_request_account_id,cb){
  return user_call.user_handle(
    api_meta.API["room_join_request_reject"],
    user,
    [i_account_id,i_room_id,i_request_account_id],
    null,
    cb
  );
}

// statslink.impl.user-api/room-add-member [112] 
function room_add_member(user,i_account_id,i_room_id,i_new_member_id,i_detail,cb){
  return user_call.user_handle(
    api_meta.API["room_add_member"],
    user,
    [i_account_id,i_room_id,i_new_member_id,i_detail],
    null,
    cb
  );
}

// statslink.impl.user-api/room-remove-member [112] 
function room_remove_member(user,i_account_id,i_room_id,i_member_id,cb){
  return user_call.user_handle(
    api_meta.API["room_remove_member"],
    user,
    [i_account_id,i_room_id,i_member_id],
    null,
    cb
  );
}

// statslink.impl.user-api/room-activate [112] 
function room_activate(user,i_account_id,i_room_id,cb){
  return user_call.user_handle(
    api_meta.API["room_activate"],
    user,
    [i_account_id,i_room_id],
    null,
    cb
  );
}

// statslink.impl.user-api/room-deactivate [112] 
function room_deactivate(user,i_account_id,i_room_id,cb){
  return user_call.user_handle(
    api_meta.API["room_deactivate"],
    user,
    [i_account_id,i_room_id],
    null,
    cb
  );
}

// statslink.impl.user-api/room-set-official [112] 
function room_set_official(user,i_super_id,i_room_id,i_is_official,cb){
  return user_call.user_handle(
    api_meta.API["room_set_official"],
    user,
    [i_super_id,i_room_id,i_is_official],
    null,
    cb
  );
}

// statslink.impl.user-api/room-modify [112] 
function room_modify(user,i_account_id,i_room_id,m,cb){
  return user_call.user_handle(
    api_meta.API["room_modify"],
    user,
    [i_account_id,i_room_id,m],
    null,
    cb
  );
}

// statslink.impl.user-api/room-remove [112] 
function room_remove(user,i_account_id,i_room_id,cb){
  return user_call.user_handle(
    api_meta.API["room_remove"],
    user,
    [i_account_id,i_room_id],
    null,
    cb
  );
}

// statslink.impl.user-api/room-gas-asset-recharge [112] 
function room_gas_asset_recharge(user,i_account_id,i_room_id,i_amount,cb){
  return user_call.user_handle(
    api_meta.API["room_gas_asset_recharge"],
    user,
    [i_account_id,i_room_id,i_amount],
    null,
    cb
  );
}

// statslink.impl.user-api/room-evm-create-vault-request [112] 
function room_evm_create_vault_request(user,i_account_id,i_room_id,cb){
  return user_call.user_handle(
    api_meta.API["room_evm_create_vault_request"],
    user,
    [i_account_id,i_room_id],
    null,
    cb
  );
}

// statslink.impl.user-api/room-evm-account-open-request [112] 
function room_evm_account_open_request(user,i_account_id,i_room_id,i_user_address_id,cb){
  return user_call.user_handle(
    api_meta.API["room_evm_account_open_request"],
    user,
    [i_account_id,i_room_id,i_user_address_id],
    null,
    cb
  );
}

// statslink.impl.user-api/room-evm-account-close-request [112] 
function room_evm_account_close_request(user,i_account_id,i_room_id,i_user_address_id,cb){
  return user_call.user_handle(
    api_meta.API["room_evm_account_close_request"],
    user,
    [i_account_id,i_room_id,i_user_address_id],
    null,
    cb
  );
}

// statslink.impl.user-api/swap-start-registration [117] 
function swap_start_registration(user,i_account_id,i_swap_id,i_message,cb){
  return user_call.user_handle(
    api_meta.API["swap_start_registration"],
    user,
    [i_account_id,i_swap_id,i_message],
    null,
    cb
  );
}

// statslink.impl.user-api/swap-start-allocation [117] 
function swap_start_allocation(user,i_account_id,i_swap_id,i_message,cb){
  return user_call.user_handle(
    api_meta.API["swap_start_allocation"],
    user,
    [i_account_id,i_swap_id,i_message],
    null,
    cb
  );
}

// statslink.impl.user-api/swap-start-trading [117] 
function swap_start_trading(user,i_account_id,i_swap_id,i_message,cb){
  return user_call.user_handle(
    api_meta.API["swap_start_trading"],
    user,
    [i_account_id,i_swap_id,i_message],
    null,
    cb
  );
}

// statslink.impl.user-api/swap-pause-trading [117] 
function swap_pause_trading(user,i_account_id,i_swap_id,i_message,cb){
  return user_call.user_handle(
    api_meta.API["swap_pause_trading"],
    user,
    [i_account_id,i_swap_id,i_message],
    null,
    cb
  );
}

// statslink.impl.user-api/swap-stop-trading [117] 
function swap_stop_trading(user,i_account_id,i_swap_id,i_message,cb){
  return user_call.user_handle(
    api_meta.API["swap_stop_trading"],
    user,
    [i_account_id,i_swap_id,i_message],
    null,
    cb
  );
}

// statslink.impl.user-api/swap-start-resolution [117] 
function swap_start_resolution(user,i_account_id,i_swap_id,i_message,cb){
  return user_call.user_handle(
    api_meta.API["swap_start_resolution"],
    user,
    [i_account_id,i_swap_id,i_message],
    null,
    cb
  );
}

// statslink.impl.user-api/swap-resolve [117] 
function swap_resolve(user,i_account_id,i_swap_id,i_limit,cb){
  return user_call.user_handle(
    api_meta.API["swap_resolve"],
    user,
    [i_account_id,i_swap_id,i_limit],
    null,
    cb
  );
}

// statslink.impl.user-api/swap-complete [117] 
function swap_complete(user,i_account_id,i_swap_id,i_message,cb){
  return user_call.user_handle(
    api_meta.API["swap_complete"],
    user,
    [i_account_id,i_swap_id,i_message],
    null,
    cb
  );
}

// statslink.impl.user-api/swap-check-available [117] 
function swap_check_available(user,i_account_id,i_organisation_id,i_swap_code,cb){
  return user_call.user_handle(
    api_meta.API["swap_check_available"],
    user,
    [i_account_id,i_organisation_id,i_swap_code],
    null,
    cb
  );
}

// statslink.impl.user-api/swap-modify [117] 
function swap_modify(user,i_account_id,i_swap_id,m,cb){
  return user_call.user_handle(
    api_meta.API["swap_modify"],
    user,
    [i_account_id,i_swap_id,m],
    null,
    cb
  );
}

// statslink.impl.user-api/swap-remove [117] 
function swap_remove(user,i_account_id,i_swap_id,cb){
  return user_call.user_handle(
    api_meta.API["swap_remove"],
    user,
    [i_account_id,i_swap_id],
    null,
    cb
  );
}

// statslink.impl.user-api/swap-add-star [117] 
function swap_add_star(user,i_account_id,i_swap_id,cb){
  return user_call.user_handle(
    api_meta.API["swap_add_star"],
    user,
    [i_account_id,i_swap_id],
    null,
    cb
  );
}

// statslink.impl.user-api/swap-remove-star [117] 
function swap_remove_star(user,i_account_id,i_swap_id,cb){
  return user_call.user_handle(
    api_meta.API["swap_remove_star"],
    user,
    [i_account_id,i_swap_id],
    null,
    cb
  );
}

// statslink.impl.user-api/swap-post-comment [117] 
function swap_post_comment(user,i_account_id,i_swap_id,i_parent_id,i_body,cb){
  return user_call.user_handle(
    api_meta.API["swap_post_comment"],
    user,
    [i_account_id,i_swap_id,i_parent_id,i_body],
    null,
    cb
  );
}

// statslink.impl.user-api/swap-edit-comment [117] 
function swap_edit_comment(user,i_account_id,i_swap_id,i_communication_id,i_new_body,cb){
  return user_call.user_handle(
    api_meta.API["swap_edit_comment"],
    user,
    [i_account_id,i_swap_id,i_communication_id,i_new_body],
    null,
    cb
  );
}

// statslink.impl.user-api/swap-upvote-comment [117] 
function swap_upvote_comment(user,i_account_id,i_swap_id,i_communication_id,cb){
  return user_call.user_handle(
    api_meta.API["swap_upvote_comment"],
    user,
    [i_account_id,i_swap_id,i_communication_id],
    null,
    cb
  );
}

// statslink.impl.user-api/swap-downvote-comment [117] 
function swap_downvote_comment(user,i_account_id,i_swap_id,i_communication_id,cb){
  return user_call.user_handle(
    api_meta.API["swap_downvote_comment"],
    user,
    [i_account_id,i_swap_id,i_communication_id],
    null,
    cb
  );
}

// statslink.impl.user-api/swap-unvote-comment [117] 
function swap_unvote_comment(user,i_account_id,i_swap_id,i_communication_id,cb){
  return user_call.user_handle(
    api_meta.API["swap_unvote_comment"],
    user,
    [i_account_id,i_swap_id,i_communication_id],
    null,
    cb
  );
}

// statslink.impl.user-api/topic-check-available [122] 
function topic_check_available(user,i_account_id,i_organisation_id,i_topic_code,cb){
  return user_call.user_handle(
    api_meta.API["topic_check_available"],
    user,
    [i_account_id,i_organisation_id,i_topic_code],
    null,
    cb
  );
}

// statslink.impl.user-api/topic-modify [122] 
function topic_modify(user,i_account_id,i_topic_id,m,cb){
  return user_call.user_handle(
    api_meta.API["topic_modify"],
    user,
    [i_account_id,i_topic_id,m],
    null,
    cb
  );
}

// statslink.impl.user-api/topic-remove [122] 
function topic_remove(user,i_account_id,i_topic_id,cb){
  return user_call.user_handle(
    api_meta.API["topic_remove"],
    user,
    [i_account_id,i_topic_id],
    null,
    cb
  );
}

// statslink.impl.user-api/topic-arrange-prospects [122] 
function topic_arrange_prospects(user,i_account_id,i_topic_id,i_prospect_order,cb){
  return user_call.user_handle(
    api_meta.API["topic_arrange_prospects"],
    user,
    [i_account_id,i_topic_id,i_prospect_order],
    null,
    cb
  );
}

// statslink.impl.user-api/topic-add-star [122] 
function topic_add_star(user,i_account_id,i_topic_id,cb){
  return user_call.user_handle(
    api_meta.API["topic_add_star"],
    user,
    [i_account_id,i_topic_id],
    null,
    cb
  );
}

// statslink.impl.user-api/topic-remove-star [122] 
function topic_remove_star(user,i_account_id,i_topic_id,cb){
  return user_call.user_handle(
    api_meta.API["topic_remove_star"],
    user,
    [i_account_id,i_topic_id],
    null,
    cb
  );
}

// statslink.impl.user-api/topic-post-wall [122] 
function topic_post_wall(user,i_account_id,i_topic_id,i_parent_id,i_body,cb){
  return user_call.user_handle(
    api_meta.API["topic_post_wall"],
    user,
    [i_account_id,i_topic_id,i_parent_id,i_body],
    null,
    cb
  );
}

// statslink.impl.user-api/topic-edit-wall [122] 
function topic_edit_wall(user,i_account_id,i_topic_id,i_communication_id,i_new_body,cb){
  return user_call.user_handle(
    api_meta.API["topic_edit_wall"],
    user,
    [i_account_id,i_topic_id,i_communication_id,i_new_body],
    null,
    cb
  );
}

// statslink.impl.user-api/topic-upvote-wall [122] 
function topic_upvote_wall(user,i_account_id,i_topic_id,i_communication_id,cb){
  return user_call.user_handle(
    api_meta.API["topic_upvote_wall"],
    user,
    [i_account_id,i_topic_id,i_communication_id],
    null,
    cb
  );
}

// statslink.impl.user-api/topic-downvote-wall [122] 
function topic_downvote_wall(user,i_account_id,i_topic_id,i_communication_id,cb){
  return user_call.user_handle(
    api_meta.API["topic_downvote_wall"],
    user,
    [i_account_id,i_topic_id,i_communication_id],
    null,
    cb
  );
}

// statslink.impl.user-api/topic-unvote-wall [122] 
function topic_unvote_wall(user,i_account_id,i_topic_id,i_communication_id,cb){
  return user_call.user_handle(
    api_meta.API["topic_unvote_wall"],
    user,
    [i_account_id,i_topic_id,i_communication_id],
    null,
    cb
  );
}

// statslink.impl.user-api/topic-add-judge [122] 
function topic_add_judge(user,i_account_id,i_topic_id,i_judge_account_id,cb){
  return user_call.user_handle(
    api_meta.API["topic_add_judge"],
    user,
    [i_account_id,i_topic_id,i_judge_account_id],
    null,
    cb
  );
}

// statslink.impl.user-api/topic-remove-judge [122] 
function topic_remove_judge(user,i_account_id,i_topic_id,i_judge_account_id,cb){
  return user_call.user_handle(
    api_meta.API["topic_remove_judge"],
    user,
    [i_account_id,i_topic_id,i_judge_account_id],
    null,
    cb
  );
}

// statslink.impl.user-api/prospect-create [122] 
function prospect_create(user,i_account_id,m,cb){
  return user_call.user_handle(api_meta.API["prospect_create"],user,[i_account_id,m],null,cb);
}

// statslink.impl.user-api/prospect-delete [122] 
function prospect_delete(user,i_account_id,i_prospect_id,cb){
  return user_call.user_handle(
    api_meta.API["prospect_delete"],
    user,
    [i_account_id,i_prospect_id],
    null,
    cb
  );
}

// statslink.impl.user-api/prospect-add-star [122] 
function prospect_add_star(user,i_account_id,i_prospect_id,cb){
  return user_call.user_handle(
    api_meta.API["prospect_add_star"],
    user,
    [i_account_id,i_prospect_id],
    null,
    cb
  );
}

// statslink.impl.user-api/prospect-remove-star [122] 
function prospect_remove_star(user,i_account_id,i_prospect_id,cb){
  return user_call.user_handle(
    api_meta.API["prospect_remove_star"],
    user,
    [i_account_id,i_prospect_id],
    null,
    cb
  );
}

// statslink.impl.user-api/prospect-post-comment [122] 
function prospect_post_comment(user,i_account_id,i_prospect_id,i_parent_id,i_body,cb){
  return user_call.user_handle(
    api_meta.API["prospect_post_comment"],
    user,
    [i_account_id,i_prospect_id,i_parent_id,i_body],
    null,
    cb
  );
}

// statslink.impl.user-api/prospect-edit-comment [122] 
function prospect_edit_comment(user,i_account_id,i_prospect_id,i_communication_id,i_new_body,cb){
  return user_call.user_handle(
    api_meta.API["prospect_edit_comment"],
    user,
    [i_account_id,i_prospect_id,i_communication_id,i_new_body],
    null,
    cb
  );
}

// statslink.impl.user-api/prospect-upvote-comment [122] 
function prospect_upvote_comment(user,i_account_id,i_prospect_id,i_communication_id,cb){
  return user_call.user_handle(
    api_meta.API["prospect_upvote_comment"],
    user,
    [i_account_id,i_prospect_id,i_communication_id],
    null,
    cb
  );
}

// statslink.impl.user-api/prospect-downvote-comment [122] 
function prospect_downvote_comment(user,i_account_id,i_prospect_id,i_communication_id,cb){
  return user_call.user_handle(
    api_meta.API["prospect_downvote_comment"],
    user,
    [i_account_id,i_prospect_id,i_communication_id],
    null,
    cb
  );
}

// statslink.impl.user-api/prospect-unvote-comment [122] 
function prospect_unvote_comment(user,i_account_id,i_prospect_id,i_communication_id,cb){
  return user_call.user_handle(
    api_meta.API["prospect_unvote_comment"],
    user,
    [i_account_id,i_prospect_id,i_communication_id],
    null,
    cb
  );
}

// statslink.impl.user-api/abuse-report-create [127] 
function abuse_report_create(user,i_account_id,m,cb){
  return user_call.user_handle(
    api_meta.API["abuse_report_create"],
    user,
    [i_account_id,m],
    null,
    cb
  );
}

// statslink.impl.user-api/abuse-report-update [127] 
function abuse_report_update(user,i_super_id,i_report_id,m,cb){
  return user_call.user_handle(
    api_meta.API["abuse_report_update"],
    user,
    [i_super_id,i_report_id,m],
    null,
    cb
  );
}

// statslink.impl.user-api/site-var-set [127] 
function site_var_set(user,i_super_id,m,cb){
  return user_call.user_handle(api_meta.API["site_var_set"],user,[i_super_id,m],null,cb);
}

// statslink.impl.user-api/site-var-delete [127] 
function site_var_delete(user,i_super_id,site_var_id,cb){
  return user_call.user_handle(
    api_meta.API["site_var_delete"],
    user,
    [i_super_id,site_var_id],
    null,
    cb
  );
}

// statslink.impl.user-api/currency-set [127] 
function currency_set(user,i_super_id,m,cb){
  return user_call.user_handle(api_meta.API["currency_set"],user,[i_super_id,m],null,cb);
}

// statslink.impl.user-api/currency-delete [127] 
function currency_delete(user,i_super_id,currency_id,cb){
  return user_call.user_handle(
    api_meta.API["currency_delete"],
    user,
    [i_super_id,currency_id],
    null,
    cb
  );
}

// statslink.impl.user-api/region-country-set [127] 
function region_country_set(user,i_super_id,m,cb){
  return user_call.user_handle(api_meta.API["region_country_set"],user,[i_super_id,m],null,cb);
}

// statslink.impl.user-api/region-country-delete [127] 
function region_country_delete(user,i_super_id,i_region_country_id,cb){
  return user_call.user_handle(
    api_meta.API["region_country_delete"],
    user,
    [i_super_id,i_region_country_id],
    null,
    cb
  );
}

// statslink.impl.user-api/region-state-set [127] 
function region_state_set(user,i_super_id,m,cb){
  return user_call.user_handle(api_meta.API["region_state_set"],user,[i_super_id,m],null,cb);
}

// statslink.impl.user-api/region-state-delete [127] 
function region_state_delete(user,i_super_id,i_region_state_id,cb){
  return user_call.user_handle(
    api_meta.API["region_state_delete"],
    user,
    [i_super_id,i_region_state_id],
    null,
    cb
  );
}

// statslink.impl.user-api/region-city-set [127] 
function region_city_set(user,i_super_id,m,cb){
  return user_call.user_handle(api_meta.API["region_city_set"],user,[i_super_id,m],null,cb);
}

// statslink.impl.user-api/region-city-delete [127] 
function region_city_delete(user,i_super_id,i_region_city_id,cb){
  return user_call.user_handle(
    api_meta.API["region_city_delete"],
    user,
    [i_super_id,i_region_city_id],
    null,
    cb
  );
}

// statslink.impl.user-api/service-set [127] 
function service_set(user,i_super_id,m,cb){
  return user_call.user_handle(api_meta.API["service_set"],user,[i_super_id,m],null,cb);
}

// statslink.impl.user-api/service-delete [127] 
function service_delete(user,i_super_id,i_service_id,cb){
  return user_call.user_handle(
    api_meta.API["service_delete"],
    user,
    [i_super_id,i_service_id],
    null,
    cb
  );
}

// statslink.impl.user-api/infra-mq-set [127] 
function infra_mq_set(user,i_super_id,m,cb){
  return user_call.user_handle(api_meta.API["infra_mq_set"],user,[i_super_id,m],null,cb);
}

// statslink.impl.user-api/infra-mq-delete [127] 
function infra_mq_delete(user,i_super_id,i_infra_mq_id,cb){
  return user_call.user_handle(
    api_meta.API["infra_mq_delete"],
    user,
    [i_super_id,i_infra_mq_id],
    null,
    cb
  );
}

// statslink.impl.user-api/infra-exchange-set [127] 
function infra_exchange_set(user,i_super_id,m,cb){
  return user_call.user_handle(api_meta.API["infra_exchange_set"],user,[i_super_id,m],null,cb);
}

// statslink.impl.user-api/infra-exchange-delete [127] 
function infra_exchange_delete(user,i_super_id,i_infra_exchange_id,cb){
  return user_call.user_handle(
    api_meta.API["infra_exchange_delete"],
    user,
    [i_super_id,i_infra_exchange_id],
    null,
    cb
  );
}

// statslink.impl.user-api/set-account-super [127] 
function set_account_super(user,i_super_id,i_account_id,i_status,cb){
  return user_call.user_handle(
    api_meta.API["set_account_super"],
    user,
    [i_super_id,i_account_id,i_status],
    null,
    cb
  );
}

// statslink.impl.user-api/set-account-lock [127] 
function set_account_lock(user,i_super_id,i_account_id,i_status,i_reason,i_detail,cb){
  return user_call.user_handle(
    api_meta.API["set_account_lock"],
    user,
    [i_super_id,i_account_id,i_status,i_reason,i_detail],
    null,
    cb
  );
}

// statslink.impl.user-api/set-organisation-lock [127] 
function set_organisation_lock(user,i_super_id,i_organisation_id,i_status,i_reason,i_detail,cb){
  return user_call.user_handle(
    api_meta.API["set_organisation_lock"],
    user,
    [i_super_id,i_organisation_id,i_status,i_reason,i_detail],
    null,
    cb
  );
}

// statslink.impl.user-api/set-organisation-tier [127] 
function set_organisation_tier(user,i_super_id,i_organisation_id,i_tier,cb){
  return user_call.user_handle(
    api_meta.API["set_organisation_tier"],
    user,
    [i_super_id,i_organisation_id,i_tier],
    null,
    cb
  );
}

// statslink.impl.user-api/set-room-lock [127] 
function set_room_lock(user,i_super_id,i_room_id,i_status,i_reason,i_detail,cb){
  return user_call.user_handle(
    api_meta.API["set_room_lock"],
    user,
    [i_super_id,i_room_id,i_status,i_reason,i_detail],
    null,
    cb
  );
}

// statslink.impl.user-api/set-topic-lock [127] 
function set_topic_lock(user,i_super_id,i_topic_id,i_status,i_reason,i_detail,cb){
  return user_call.user_handle(
    api_meta.API["set_topic_lock"],
    user,
    [i_super_id,i_topic_id,i_status,i_reason,i_detail],
    null,
    cb
  );
}

// statslink.impl.user-api/user-privilege-add [127] 
function user_privilege_add(user,i_super_id,i_account_id,m,cb){
  return user_call.user_handle(
    api_meta.API["user_privilege_add"],
    user,
    [i_super_id,i_account_id,m],
    null,
    cb
  );
}

// statslink.impl.user-api/user-privilege-remove [127] 
function user_privilege_remove(user,i_super_id,i_account_id,i_type,cb){
  return user_call.user_handle(
    api_meta.API["user_privilege_remove"],
    user,
    [i_super_id,i_account_id,i_type],
    null,
    cb
  );
}

// statslink.impl.user-api/account-token-secret-add [127] 
function account_token_secret_add(user,i_super_id,m,cb){
  return user_call.user_handle(
    api_meta.API["account_token_secret_add"],
    user,
    [i_super_id,m],
    null,
    cb
  );
}

// statslink.impl.user-api/account-token-secret-remove [127] 
function account_token_secret_remove(user,i_super_id,i_prime,cb){
  return user_call.user_handle(
    api_meta.API["account_token_secret_remove"],
    user,
    [i_super_id,i_prime],
    null,
    cb
  );
}

// statslink.impl.user-api/account-token-secret-update [127] 
function account_token_secret_update(user,i_super_id,i_prime,i_secret,cb){
  return user_call.user_handle(
    api_meta.API["account_token_secret_update"],
    user,
    [i_super_id,i_prime,i_secret],
    null,
    cb
  );
}

// statslink.impl.user-api/purchase-statscoin [132] 
function purchase_statscoin(user,i_account_id,i_currency_id,i_amount,cb){
  return user_call.user_handle(
    api_meta.API["purchase_statscoin"],
    user,
    [i_account_id,i_currency_id,i_amount],
    null,
    cb
  );
}

// statslink.impl.user-api/tip-statscoin [132] 
function tip_statscoin(user,i_account_id,i_account_tipped_id,i_amount,cb){
  return user_call.user_handle(
    api_meta.API["tip_statscoin"],
    user,
    [i_account_id,i_account_tipped_id,i_amount],
    null,
    cb
  );
}

// statslink.impl.user-api/email-add-additional [137] 
function email_add_additional(user,i_account_id,m,cb){
  return user_call.user_handle(
    api_meta.API["email_add_additional"],
    user,
    [i_account_id,m],
    null,
    cb
  );
}

// statslink.impl.user-api/email-verify-additional-resend [137] 
function email_verify_additional_resend(user,i_account_id,i_email,cb){
  return user_call.user_handle(
    api_meta.API["email_verify_additional_resend"],
    user,
    [i_account_id,i_email],
    null,
    cb
  );
}

// statslink.impl.user-api/login [137] 
function login(user,m,cb){
  return user_call.user_handle(
    api_meta.API["login"],
    user,
    [m],
    true,
    user_event.token_sync_wrap(user,cb)
  );
}

// statslink.impl.user-api/password-change [137] 
function password_change(user,i_account_id,m,cb){
  return user_call.user_handle(api_meta.API["password_change"],user,[i_account_id,m],true,cb);
}

// statslink.impl.user-api/password-reset [137] 
function password_reset(user,m,cb){
  return user_call.user_handle(api_meta.API["password_reset"],user,[m],true,cb);
}

// statslink.impl.user-api/helper-id [147] 
function helper_id(user,account_id,cb){
  return user_call.user_handle(api_meta.API["helper_id"],user,[account_id],null,cb);
}

// statslink.impl.user-api/helper-ping [147] 
function helper_ping(user,cb){
  return user_call.user_handle(api_meta.API["helper_ping"],user,[],null,cb);
}

// statslink.impl.user-api/helper-all-routes [147] 
function helper_all_routes(user,cb){
  return user_call.user_handle(api_meta.API["helper_all_routes"],user,[],null,cb);
}

// statslink.impl.user-api/view-query [147] 
function view_query(user,table,qm,cb){
  return user_call.user_handle(
    api_meta.API["view_query"],
    user,
    [table,qm],
    null,
    user_event.view_sync_wrap(user,table,cb)
  );
}

// statslink.impl.user-api/view-query-nosync [147] 
function view_query_nosync(user,table,qm,cb){
  return user_call.user_handle(api_meta.API["view_query_nosync"],user,[table,qm],null,cb);
}

// statslink.impl.user-api/view-bulk [147] 
function view_bulk(user,bulk,cb){
  return user_call.user_handle(
    api_meta.API["view_bulk"],
    user,
    [bulk],
    null,
    user_event.view_bulk_sync_wrap(user,cb)
  );
}

// statslink.impl.user-api/view-overview [147] 
function view_overview(user,cb){
  return user_call.user_handle(api_meta.API["view_overview"],user,[],null,cb);
}

// statslink.impl.user-api/view-tables [147] 
function view_tables(user,cb){
  return user_call.user_handle(api_meta.API["view_tables"],user,[],null,cb);
}

// statslink.impl.user-api/view-methods [147] 
function view_methods(user,table,cb){
  return user_call.user_handle(api_meta.API["view_methods"],user,[table],null,cb);
}

// statslink.impl.user-api/view-detail [147] 
function view_detail(user,table,type,id,cb){
  return user_call.user_handle(api_meta.API["view_detail"],user,[table,type,id],null,cb);
}

// statslink.impl.user-api/imagekit-token [164] 
function imagekit_token(user,token,cb){
  return user_call.user_handle(api_meta.API["imagekit_token"],user,[token],null,cb);
}

// statslink.impl.user-api/upload-image [164] 
function upload_image(user,i_token,i_metadata,cb){
  return user_call.user_handle(api_meta.API["upload_image"],user,[i_token,i_metadata],null,cb);
}

// statslink.impl.user-api/oauth-access-token [170] 
function oauth_access_token(user,tag,client_id,redirect_url,code,query,cb){
  return user_call.user_handle(
    api_meta.API["oauth_access_token"],
    user,
    [tag,client_id,redirect_url,code,query],
    null,
    cb
  );
}

// statslink.impl.user-api/oauth-facebook-info [170] 
function oauth_facebook_info(user,oauth_token,cb){
  return user_call.user_handle(api_meta.API["oauth_facebook_info"],user,[oauth_token],null,cb);
}

// statslink.impl.user-api/oauth-facebook-login [170] 
function oauth_facebook_login(user,oauth_token,cb){
  return user_call.user_handle(
    api_meta.API["oauth_facebook_login"],
    user,
    [oauth_token],
    null,
    user_event.token_sync_wrap(user,cb)
  );
}

// statslink.impl.user-api/oauth-facebook-register [170] 
function oauth_facebook_register(user,oauth_token,m,cb){
  return user_call.user_handle(
    api_meta.API["oauth_facebook_register"],
    user,
    [oauth_token,m],
    true,
    user_event.token_sync_wrap(user,cb)
  );
}

// statslink.impl.user-api/oauth-facebook-link [170] 
function oauth_facebook_link(user,i_token,oauth_token,cb){
  return user_call.user_handle(
    api_meta.API["oauth_facebook_link"],
    user,
    [i_token,oauth_token],
    null,
    cb
  );
}

// statslink.impl.user-api/oauth-facebook-is-linked [170] 
function oauth_facebook_is_linked(user,i_token,oauth_token,cb){
  return user_call.user_handle(
    api_meta.API["oauth_facebook_is_linked"],
    user,
    [i_token,oauth_token],
    null,
    cb
  );
}

// statslink.impl.user-api/oauth-coinbase-info [170] 
function oauth_coinbase_info(user,oauth_token,cb){
  return user_call.user_handle(api_meta.API["oauth_coinbase_info"],user,[oauth_token],null,cb);
}

// statslink.impl.user-api/oauth-coinbase-login [170] 
function oauth_coinbase_login(user,oauth_token,cb){
  return user_call.user_handle(
    api_meta.API["oauth_coinbase_login"],
    user,
    [oauth_token],
    null,
    user_event.token_sync_wrap(user,cb)
  );
}

// statslink.impl.user-api/oauth-coinbase-register [170] 
function oauth_coinbase_register(user,oauth_token,m,cb){
  return user_call.user_handle(
    api_meta.API["oauth_coinbase_register"],
    user,
    [oauth_token,m],
    true,
    user_event.token_sync_wrap(user,cb)
  );
}

// statslink.impl.user-api/oauth-coinbase-link [170] 
function oauth_coinbase_link(user,i_token,oauth_token,cb){
  return user_call.user_handle(
    api_meta.API["oauth_coinbase_link"],
    user,
    [i_token,oauth_token],
    null,
    cb
  );
}

// statslink.impl.user-api/oauth-coinbase-is-linked [170] 
function oauth_coinbase_is_linked(user,i_token,oauth_token,cb){
  return user_call.user_handle(
    api_meta.API["oauth_coinbase_is_linked"],
    user,
    [i_token,oauth_token],
    null,
    cb
  );
}

// statslink.impl.user-api/oauth-github-info [170] 
function oauth_github_info(user,oauth_token,cb){
  return user_call.user_handle(api_meta.API["oauth_github_info"],user,[oauth_token],null,cb);
}

// statslink.impl.user-api/oauth-github-login [170] 
function oauth_github_login(user,oauth_token,cb){
  return user_call.user_handle(
    api_meta.API["oauth_github_login"],
    user,
    [oauth_token],
    null,
    user_event.token_sync_wrap(user,cb)
  );
}

// statslink.impl.user-api/oauth-github-register [170] 
function oauth_github_register(user,oauth_token,m,cb){
  return user_call.user_handle(
    api_meta.API["oauth_github_register"],
    user,
    [oauth_token,m],
    true,
    user_event.token_sync_wrap(user,cb)
  );
}

// statslink.impl.user-api/oauth-github-link [170] 
function oauth_github_link(user,i_token,oauth_token,cb){
  return user_call.user_handle(
    api_meta.API["oauth_github_link"],
    user,
    [i_token,oauth_token],
    null,
    cb
  );
}

// statslink.impl.user-api/oauth-github-is-linked [170] 
function oauth_github_is_linked(user,i_token,oauth_token,cb){
  return user_call.user_handle(
    api_meta.API["oauth_github_is_linked"],
    user,
    [i_token,oauth_token],
    null,
    cb
  );
}

// statslink.impl.user-api/room-create [196] 
function room_create(user,account_id,m,cb){
  return user_call.user_handle(api_meta.API["room_create"],user,[account_id,m],null,cb);
}

// statslink.impl.user-api/organisation-create [196] 
function organisation_create(user,account_id,m,cb){
  return user_call.user_handle(api_meta.API["organisation_create"],user,[account_id,m],null,cb);
}

// statslink.impl.user-api/topic-create [196] 
function topic_create(user,account_id,m,cb){
  return user_call.user_handle(api_meta.API["topic_create"],user,[account_id,m],null,cb);
}

// statslink.impl.user-api/topic-confirm [196] 
function topic_confirm(user,account_id,topic_id,message,cb){
  return user_call.user_handle(
    api_meta.API["topic_confirm"],
    user,
    [account_id,topic_id,message],
    null,
    cb
  );
}

// statslink.impl.user-api/topic-allocate-input [196] 
function topic_allocate_input(user,account_id,topic_id,message,cb){
  return user_call.user_handle(
    api_meta.API["topic_allocate_input"],
    user,
    [account_id,topic_id,message],
    null,
    cb
  );
}

// statslink.impl.user-api/topic-allocate-process [196] 
function topic_allocate_process(user,account_id,topic_id,cb){
  return user_call.user_handle(
    api_meta.API["topic_allocate_process"],
    user,
    [account_id,topic_id],
    null,
    cb
  );
}

// statslink.impl.user-api/swap-create [196] 
function swap_create(user,account_id,m,cb){
  return user_call.user_handle(api_meta.API["swap_create"],user,[account_id,m],null,cb);
}

// statslink.impl.user-api/swap-confirm [196] 
function swap_confirm(user,account_id,swap_id,message,cb){
  return user_call.user_handle(
    api_meta.API["swap_confirm"],
    user,
    [account_id,swap_id,message],
    null,
    cb
  );
}

// statslink.impl.user-api/swap-allocate-input [196] 
function swap_allocate_input(user,account_id,swap_id,message,cb){
  return user_call.user_handle(
    api_meta.API["swap_allocate_input"],
    user,
    [account_id,swap_id,message],
    null,
    cb
  );
}

// statslink.impl.user-api/swap-allocate-process [196] 
function swap_allocate_process(user,account_id,swap_id,cb){
  return user_call.user_handle(
    api_meta.API["swap_allocate_process"],
    user,
    [account_id,swap_id],
    null,
    cb
  );
}

// statslink.impl.user-api/swap-reset [196] 
function swap_reset(user,account_id,swap_id,message,cb){
  return user_call.user_handle(
    api_meta.API["swap_reset"],
    user,
    [account_id,swap_id,message],
    null,
    cb
  );
}

// statslink.impl.user-api/place-contract-order [201] 
function place_contract_order(user,account_id,prospect_id,order,cb){
  return user_call.user_handle(
    api_meta.API["place_contract_order"],
    user,
    [account_id,prospect_id,order],
    null,
    cb
  );
}

// statslink.impl.user-api/cancel-contract-order [201] 
function cancel_contract_order(user,account_id,prospect_id,order_id,cb){
  return user_call.user_handle(
    api_meta.API["cancel_contract_order"],
    user,
    [account_id,prospect_id,order_id],
    null,
    cb
  );
}

// statslink.impl.user-api/place-swap-order [201] 
function place_swap_order(user,account_id,swap_id,order,cb){
  return user_call.user_handle(
    api_meta.API["place_swap_order"],
    user,
    [account_id,swap_id,order],
    null,
    cb
  );
}

// statslink.impl.user-api/cancel-swap-order [201] 
function cancel_swap_order(user,account_id,swap_id,order_id,cb){
  return user_call.user_handle(
    api_meta.API["cancel_swap_order"],
    user,
    [account_id,swap_id,order_id],
    null,
    cb
  );
}

// statslink.impl.user-api/get-market [201] 
function get_market(user,book,cb){
  return user_call.user_handle(api_meta.API["get_market"],user,[book],null,cb);
}

// statslink.impl.user-api/get-market-bulk [201] 
function get_market_bulk(user,books,cb){
  return user_call.user_handle(api_meta.API["get_market_bulk"],user,[books],null,cb);
}

// statslink.impl.user-api/get-market-priority [201] 
function get_market_priority(user,account_id,book,cb){
  return user_call.user_handle(
    api_meta.API["get_market_priority"],
    user,
    [account_id,book],
    null,
    cb
  );
}

// statslink.impl.user-api/get-contract-history-init [201] 
function get_contract_history_init(user,book_ids,resolution,cb){
  return user_call.user_handle(
    api_meta.API["get_contract_history_init"],
    user,
    [book_ids,resolution],
    null,
    cb
  );
}

// statslink.impl.user-api/get-contract-history-30sec [201] 
function get_contract_history_30sec(user,book_id,from,to,opts,cb){
  return user_call.user_handle(
    api_meta.API["get_contract_history_30sec"],
    user,
    [book_id,from,to,opts],
    null,
    cb
  );
}

// statslink.impl.user-api/get-contract-history-5min [201] 
function get_contract_history_5min(user,book_id,from,to,opts,cb){
  return user_call.user_handle(
    api_meta.API["get_contract_history_5min"],
    user,
    [book_id,from,to,opts],
    null,
    cb
  );
}

// statslink.impl.user-api/get-contract-history-1hr [201] 
function get_contract_history_1hr(user,book_id,from,to,opts,cb){
  return user_call.user_handle(
    api_meta.API["get_contract_history_1hr"],
    user,
    [book_id,from,to,opts],
    null,
    cb
  );
}

// statslink.impl.user-api/get-contract-history-1day [201] 
function get_contract_history_1day(user,book_id,from,to,opts,cb){
  return user_call.user_handle(
    api_meta.API["get_contract_history_1day"],
    user,
    [book_id,from,to,opts],
    null,
    cb
  );
}

// statslink.impl.user-api/get-contract-history-sparklines [201] 
function get_contract_history_sparklines(user,book_ids,resolution,from,cb){
  return user_call.user_handle(
    api_meta.API["get_contract_history_sparklines"],
    user,
    [book_ids,resolution,from],
    null,
    cb
  );
}

// statslink.impl.user-api/get-swap-history-init [201] 
function get_swap_history_init(user,book_ids,resolution,cb){
  return user_call.user_handle(
    api_meta.API["get_swap_history_init"],
    user,
    [book_ids,resolution],
    null,
    cb
  );
}

// statslink.impl.user-api/get-swap-history-30sec [201] 
function get_swap_history_30sec(user,book_id,from,to,opts,cb){
  return user_call.user_handle(
    api_meta.API["get_swap_history_30sec"],
    user,
    [book_id,from,to,opts],
    null,
    cb
  );
}

// statslink.impl.user-api/get-swap-history-5min [201] 
function get_swap_history_5min(user,book_id,from,to,opts,cb){
  return user_call.user_handle(
    api_meta.API["get_swap_history_5min"],
    user,
    [book_id,from,to,opts],
    null,
    cb
  );
}

// statslink.impl.user-api/get-swap-history-1hr [201] 
function get_swap_history_1hr(user,book_id,from,to,opts,cb){
  return user_call.user_handle(
    api_meta.API["get_swap_history_1hr"],
    user,
    [book_id,from,to,opts],
    null,
    cb
  );
}

// statslink.impl.user-api/get-swap-history-1day [201] 
function get_swap_history_1day(user,book_id,from,to,opts,cb){
  return user_call.user_handle(
    api_meta.API["get_swap_history_1day"],
    user,
    [book_id,from,to,opts],
    null,
    cb
  );
}

// statslink.impl.user-api/get-swap-history-sparklines [201] 
function get_swap_history_sparklines(user,book_ids,resolution,from,cb){
  return user_call.user_handle(
    api_meta.API["get_swap_history_sparklines"],
    user,
    [book_ids,resolution,from],
    null,
    cb
  );
}

// statslink.impl.user-api/get-stake-30sec [201] 
function get_stake_30sec(user,book_id,from,to,opts,cb){
  return user_call.user_handle(
    api_meta.API["get_stake_30sec"],
    user,
    [book_id,from,to,opts],
    null,
    cb
  );
}

// statslink.impl.user-api/get-stake-5min [201] 
function get_stake_5min(user,book_id,from,to,opts,cb){
  return user_call.user_handle(
    api_meta.API["get_stake_5min"],
    user,
    [book_id,from,to,opts],
    null,
    cb
  );
}

// statslink.impl.user-api/get-stake-1hr [201] 
function get_stake_1hr(user,book_id,from,to,opts,cb){
  return user_call.user_handle(
    api_meta.API["get_stake_1hr"],
    user,
    [book_id,from,to,opts],
    null,
    cb
  );
}

// statslink.impl.user-api/get-stake-1day [201] 
function get_stake_1day(user,book_id,from,to,opts,cb){
  return user_call.user_handle(
    api_meta.API["get_stake_1day"],
    user,
    [book_id,from,to,opts],
    null,
    cb
  );
}

// statslink.impl.user-api/get-stake-sparklines [201] 
function get_stake_sparklines(user,book_ids,resolution,cb){
  return user_call.user_handle(
    api_meta.API["get_stake_sparklines"],
    user,
    [book_ids,resolution],
    null,
    cb
  );
}

// statslink.impl.user-api/web3-id [206] 
function web3_id(user,account_id,cb){
  return user_call.user_handle(api_meta.API["web3_id"],user,[account_id],null,cb);
}

// statslink.impl.user-api/web3-ping [206] 
function web3_ping(user,cb){
  return user_call.user_handle(api_meta.API["web3_ping"],user,[],null,cb);
}

// statslink.impl.user-api/web3-user-address-link [206] 
function web3_user_address_link(user,account_id,user_address,cb){
  return user_call.user_handle(
    api_meta.API["web3_user_address_link"],
    user,
    [account_id,user_address],
    null,
    cb
  );
}

// statslink.impl.user-api/web3-user-address-verify [206] 
function web3_user_address_verify(user,account_id,user_address,signature,tag,cb){
  return user_call.user_handle(
    api_meta.API["web3_user_address_verify"],
    user,
    [account_id,user_address,signature,tag],
    null,
    cb
  );
}

// statslink.impl.user-api/set-remote [209] 
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