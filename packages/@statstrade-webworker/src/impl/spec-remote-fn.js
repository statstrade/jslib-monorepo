const fn_topic = require("@statstrade/api/fn-topic")

const fn_brand = require("@statstrade/api/fn-brand")

const fn_organisation = require("@statstrade/api/fn-organisation")

const fn_room = require("@statstrade/api/fn-room")

const net_general = require("@statstrade/api/net-general")

const fn_game = require("@statstrade/api/fn-prediction")

const net_web3 = require("@statstrade/api/net-web3")

const fn_swap = require("@statstrade/api/fn-swap")

const fn_extern = require("@statstrade/api/fn-extern")

const fn_wallet = require("@statstrade/api/fn-wallet")

const net_account = require("@statstrade/api/net-account")

const fn_account = require("@statstrade/api/fn-account")

const fn_super = require("@statstrade/api/fn-super")

const net_image = require("@statstrade/api/net-image")

const fn_ethereum = require("@statstrade/api/fn-ethereum")

const net_social = require("@statstrade/api/net-social")

const net_trade = require("@statstrade/api/net-trade")

const net_manage = require("@statstrade/api/net-manage")

// statslink.impl.spec-remote-fn/get-privacy-policy [50] 
var get_privacy_policy = {
  "task":"remote.call",
  "handler":{"fn":fn_account.get_privacy_policy}
};

// statslink.impl.spec-remote-fn/get-terms-and-conditions [50] 
var get_terms_and_conditions = {
  "task":"remote.call",
  "handler":{"fn":fn_account.get_terms_and_conditions}
};

// statslink.impl.spec-remote-fn/check-nickname-exists [50] 
var check_nickname_exists = {
  "task":"remote.call",
  "handler":{"fn":fn_account.check_nickname_exists}
};

// statslink.impl.spec-remote-fn/check-nickname-available [50] 
var check_nickname_available = {
  "task":"remote.call",
  "handler":{"fn":fn_account.check_nickname_available}
};

// statslink.impl.spec-remote-fn/check-email-exists [50] 
var check_email_exists = {
  "task":"remote.call",
  "handler":{"fn":fn_account.check_email_exists}
};

// statslink.impl.spec-remote-fn/check-email-available [50] 
var check_email_available = {
  "task":"remote.call",
  "handler":{"fn":fn_account.check_email_available}
};

// statslink.impl.spec-remote-fn/email-registration-external [50] 
var email_registration_external = {
  "task":"remote.call",
  "handler":{"fn":fn_account.email_registration_external}
};

// statslink.impl.spec-remote-fn/email-verification [50] 
var email_verification = {
  "task":"remote.call",
  "handler":{"fn":fn_account.email_verification},
  "notify":["stats/::LOCAL"]
};

// statslink.impl.spec-remote-fn/email-verification-resend [50] 
var email_verification_resend = {
  "task":"remote.call",
  "handler":{"fn":fn_account.email_verification_resend}
};

// statslink.impl.spec-remote-fn/create-account [50] 
var create_account = {
  "task":"remote.call",
  "handler":{"fn":fn_account.create_account}
};

// statslink.impl.spec-remote-fn/password-reset-request [50] 
var password_reset_request = {
  "task":"remote.call",
  "handler":{"fn":fn_account.password_reset_request}
};

// statslink.impl.spec-remote-fn/login-renew [50] 
var login_renew = {
  "task":"remote.call",
  "handler":{"fn":fn_account.login_renew},
  "notify":["stats/::LOCAL"]
};

// statslink.impl.spec-remote-fn/logout [50] 
var logout = {
  "task":"remote.call",
  "handler":{"fn":fn_account.logout},
  "notify":["stats/::LOCAL"]
};

// statslink.impl.spec-remote-fn/net-check [50] 
var net_check = {"task":"remote.call","handler":{"fn":fn_account.net_check}};

// statslink.impl.spec-remote-fn/profile-modify [50] 
var profile_modify = {
  "task":"remote.call",
  "handler":{"fn":fn_account.profile_modify}
};

// statslink.impl.spec-remote-fn/notification-modify [50] 
var notification_modify = {
  "task":"remote.call",
  "handler":{"fn":fn_account.notification_modify}
};

// statslink.impl.spec-remote-fn/email-get-all [50] 
var email_get_all = {
  "task":"remote.call",
  "handler":{"fn":fn_account.email_get_all}
};

// statslink.impl.spec-remote-fn/email-get-primary [50] 
var email_get_primary = {
  "task":"remote.call",
  "handler":{"fn":fn_account.email_get_primary}
};

// statslink.impl.spec-remote-fn/email-remove-additional [50] 
var email_remove_additional = {
  "task":"remote.call",
  "handler":{"fn":fn_account.email_remove_additional}
};

// statslink.impl.spec-remote-fn/email-verify-additional [50] 
var email_verify_additional = {
  "task":"remote.call",
  "handler":{"fn":fn_account.email_verify_additional}
};

// statslink.impl.spec-remote-fn/email-set-primary [50] 
var email_set_primary = {
  "task":"remote.call",
  "handler":{"fn":fn_account.email_set_primary}
};

// statslink.impl.spec-remote-fn/delete-account-check [50] 
var delete_account_check = {
  "task":"remote.call",
  "handler":{"fn":fn_account.delete_account_check}
};

// statslink.impl.spec-remote-fn/delete-account [50] 
var delete_account = {
  "task":"remote.call",
  "handler":{"fn":fn_account.delete_account}
};

// statslink.impl.spec-remote-fn/oauth-unlink [50] 
var oauth_unlink = {
  "task":"remote.call",
  "handler":{"fn":fn_account.oauth_unlink}
};

// statslink.impl.spec-remote-fn/login [84] 
var login = {
  "task":"remote.call",
  "handler":{"fn":net_account.login},
  "notify":["stats/::LOCAL"]
};

// statslink.impl.spec-remote-fn/password-change [84] 
var password_change = {
  "task":"remote.call",
  "handler":{"fn":net_account.password_change}
};

// statslink.impl.spec-remote-fn/password-reset [84] 
var password_reset = {
  "task":"remote.call",
  "handler":{"fn":net_account.password_reset}
};

// statslink.impl.spec-remote-fn/helper-id [93] 
var helper_id = {"task":"remote.call","handler":{"fn":net_general.helper_id}};

// statslink.impl.spec-remote-fn/helper-ping [93] 
var helper_ping = {
  "task":"remote.call",
  "handler":{"fn":net_general.helper_ping}
};

// statslink.impl.spec-remote-fn/helper-all-routes [93] 
var helper_all_routes = {
  "task":"remote.call",
  "handler":{"fn":net_general.helper_all_routes}
};

// statslink.impl.spec-remote-fn/view-query [93] 
var view_query = {
  "task":"remote.call",
  "handler":{"fn":net_general.view_query},
  "view":true
};

// statslink.impl.spec-remote-fn/view-query-nosync [93] 
var view_query_nosync = {
  "task":"remote.call",
  "handler":{"fn":net_general.view_query_nosync},
  "view":true
};

// statslink.impl.spec-remote-fn/view-bulk [93] 
var view_bulk = {
  "task":"remote.call",
  "handler":{"fn":net_general.view_bulk},
  "view":true
};

// statslink.impl.spec-remote-fn/view-overview [93] 
var view_overview = {
  "task":"remote.call",
  "handler":{"fn":net_general.view_overview}
};

// statslink.impl.spec-remote-fn/view-tables [93] 
var view_tables = {
  "task":"remote.call",
  "handler":{"fn":net_general.view_tables}
};

// statslink.impl.spec-remote-fn/view-methods [93] 
var view_methods = {
  "task":"remote.call",
  "handler":{"fn":net_general.view_methods}
};

// statslink.impl.spec-remote-fn/view-detail [93] 
var view_detail = {
  "task":"remote.call",
  "handler":{"fn":net_general.view_detail}
};

// statslink.impl.spec-remote-fn/email-registration [93] 
var email_registration = {
  "task":"remote.call",
  "handler":{"fn":fn_account.email_registration}
};

// statslink.impl.spec-remote-fn/email-add-additional [93] 
var email_add_additional = {
  "task":"remote.call",
  "handler":{"fn":net_account.email_add_additional}
};

// statslink.impl.spec-remote-fn/email-verify-additional-resend [93] 
var email_verify_additional_resend = {
  "task":"remote.call",
  "handler":{"fn":net_account.email_verify_additional_resend}
};

// statslink.impl.spec-remote-fn/imagekit-token [110] 
var imagekit_token = {
  "task":"remote.call",
  "handler":{"fn":net_image.imagekit_token}
};

// statslink.impl.spec-remote-fn/upload-image [110] 
var upload_image = {"task":"remote.call","handler":{"fn":net_image.upload_image}};

// statslink.impl.spec-remote-fn/oauth-access-token [116] 
var oauth_access_token = {
  "task":"remote.call",
  "handler":{"fn":net_social.oauth_access_token}
};

// statslink.impl.spec-remote-fn/oauth-facebook-info [116] 
var oauth_facebook_info = {
  "task":"remote.call",
  "handler":{"fn":net_social.oauth_facebook_info}
};

// statslink.impl.spec-remote-fn/oauth-facebook-login [116] 
var oauth_facebook_login = {
  "task":"remote.call",
  "handler":{"fn":net_social.oauth_facebook_login},
  "notify":["stats/::LOCAL"]
};

// statslink.impl.spec-remote-fn/oauth-facebook-register [116] 
var oauth_facebook_register = {
  "task":"remote.call",
  "handler":{"fn":net_social.oauth_facebook_register},
  "notify":["stats/::LOCAL"]
};

// statslink.impl.spec-remote-fn/oauth-facebook-link [116] 
var oauth_facebook_link = {
  "task":"remote.call",
  "handler":{"fn":net_social.oauth_facebook_link}
};

// statslink.impl.spec-remote-fn/oauth-facebook-is-linked [116] 
var oauth_facebook_is_linked = {
  "task":"remote.call",
  "handler":{"fn":net_social.oauth_facebook_is_linked}
};

// statslink.impl.spec-remote-fn/oauth-coinbase-info [116] 
var oauth_coinbase_info = {
  "task":"remote.call",
  "handler":{"fn":net_social.oauth_coinbase_info}
};

// statslink.impl.spec-remote-fn/oauth-coinbase-login [116] 
var oauth_coinbase_login = {
  "task":"remote.call",
  "handler":{"fn":net_social.oauth_coinbase_login},
  "notify":["stats/::LOCAL"]
};

// statslink.impl.spec-remote-fn/oauth-coinbase-register [116] 
var oauth_coinbase_register = {
  "task":"remote.call",
  "handler":{"fn":net_social.oauth_coinbase_register},
  "notify":["stats/::LOCAL"]
};

// statslink.impl.spec-remote-fn/oauth-coinbase-link [116] 
var oauth_coinbase_link = {
  "task":"remote.call",
  "handler":{"fn":net_social.oauth_coinbase_link}
};

// statslink.impl.spec-remote-fn/oauth-coinbase-is-linked [116] 
var oauth_coinbase_is_linked = {
  "task":"remote.call",
  "handler":{"fn":net_social.oauth_coinbase_is_linked}
};

// statslink.impl.spec-remote-fn/oauth-github-info [116] 
var oauth_github_info = {
  "task":"remote.call",
  "handler":{"fn":net_social.oauth_github_info}
};

// statslink.impl.spec-remote-fn/oauth-github-login [116] 
var oauth_github_login = {
  "task":"remote.call",
  "handler":{"fn":net_social.oauth_github_login},
  "notify":["stats/::LOCAL"]
};

// statslink.impl.spec-remote-fn/oauth-github-register [116] 
var oauth_github_register = {
  "task":"remote.call",
  "handler":{"fn":net_social.oauth_github_register},
  "notify":["stats/::LOCAL"]
};

// statslink.impl.spec-remote-fn/oauth-github-link [116] 
var oauth_github_link = {
  "task":"remote.call",
  "handler":{"fn":net_social.oauth_github_link}
};

// statslink.impl.spec-remote-fn/oauth-github-is-linked [116] 
var oauth_github_is_linked = {
  "task":"remote.call",
  "handler":{"fn":net_social.oauth_github_is_linked}
};

// statslink.impl.spec-remote-fn/brand-create [136] 
var brand_create = {"task":"remote.call","handler":{"fn":fn_brand.brand_create}};

// statslink.impl.spec-remote-fn/brand-transfer-ownership [136] 
var brand_transfer_ownership = {
  "task":"remote.call",
  "handler":{"fn":fn_brand.brand_transfer_ownership}
};

// statslink.impl.spec-remote-fn/brand-remove [136] 
var brand_remove = {"task":"remote.call","handler":{"fn":fn_brand.brand_remove}};

// statslink.impl.spec-remote-fn/brand-modify [136] 
var brand_modify = {"task":"remote.call","handler":{"fn":fn_brand.brand_modify}};

// statslink.impl.spec-remote-fn/brand-add-member [136] 
var brand_add_member = {
  "task":"remote.call",
  "handler":{"fn":fn_brand.brand_add_member}
};

// statslink.impl.spec-remote-fn/brand-remove-member [136] 
var brand_remove_member = {
  "task":"remote.call",
  "handler":{"fn":fn_brand.brand_remove_member}
};

// statslink.impl.spec-remote-fn/brand-leave-as-member [136] 
var brand_leave_as_member = {
  "task":"remote.call",
  "handler":{"fn":fn_brand.brand_leave_as_member}
};

// statslink.impl.spec-remote-fn/brand-add-star [136] 
var brand_add_star = {
  "task":"remote.call",
  "handler":{"fn":fn_brand.brand_add_star}
};

// statslink.impl.spec-remote-fn/brand-remove-star [136] 
var brand_remove_star = {
  "task":"remote.call",
  "handler":{"fn":fn_brand.brand_remove_star}
};

// statslink.impl.spec-remote-fn/brand-post-wall [136] 
var brand_post_wall = {
  "task":"remote.call",
  "handler":{"fn":fn_brand.brand_post_wall}
};

// statslink.impl.spec-remote-fn/brand-edit-wall [136] 
var brand_edit_wall = {
  "task":"remote.call",
  "handler":{"fn":fn_brand.brand_edit_wall}
};

// statslink.impl.spec-remote-fn/brand-upvote-wall [136] 
var brand_upvote_wall = {
  "task":"remote.call",
  "handler":{"fn":fn_brand.brand_upvote_wall}
};

// statslink.impl.spec-remote-fn/brand-downvote-wall [136] 
var brand_downvote_wall = {
  "task":"remote.call",
  "handler":{"fn":fn_brand.brand_downvote_wall}
};

// statslink.impl.spec-remote-fn/brand-unvote-wall [136] 
var brand_unvote_wall = {
  "task":"remote.call",
  "handler":{"fn":fn_brand.brand_unvote_wall}
};

// statslink.impl.spec-remote-fn/brand-affiliation-add [136] 
var brand_affiliation_add = {
  "task":"remote.call",
  "handler":{"fn":fn_brand.brand_affiliation_add}
};

// statslink.impl.spec-remote-fn/brand-affiliation-remove [136] 
var brand_affiliation_remove = {
  "task":"remote.call",
  "handler":{"fn":fn_brand.brand_affiliation_remove}
};

// statslink.impl.spec-remote-fn/brand-affiliation-request [136] 
var brand_affiliation_request = {
  "task":"remote.call",
  "handler":{"fn":fn_brand.brand_affiliation_request}
};

// statslink.impl.spec-remote-fn/brand-affiliation-accept [136] 
var brand_affiliation_accept = {
  "task":"remote.call",
  "handler":{"fn":fn_brand.brand_affiliation_accept}
};

// statslink.impl.spec-remote-fn/brand-affiliation-reject [136] 
var brand_affiliation_reject = {
  "task":"remote.call",
  "handler":{"fn":fn_brand.brand_affiliation_reject}
};

// statslink.impl.spec-remote-fn/brand-topic-sponsorship-request [136] 
var brand_topic_sponsorship_request = {
  "task":"remote.call",
  "handler":{"fn":fn_brand.brand_topic_sponsorship_request}
};

// statslink.impl.spec-remote-fn/brand-topic-sponsorship-response [136] 
var brand_topic_sponsorship_response = {
  "task":"remote.call",
  "handler":{"fn":fn_brand.brand_topic_sponsorship_response}
};

// statslink.impl.spec-remote-fn/brand-swap-sponsorship-request [136] 
var brand_swap_sponsorship_request = {
  "task":"remote.call",
  "handler":{"fn":fn_brand.brand_swap_sponsorship_request}
};

// statslink.impl.spec-remote-fn/brand-swap-sponsorship-response [136] 
var brand_swap_sponsorship_response = {
  "task":"remote.call",
  "handler":{"fn":fn_brand.brand_swap_sponsorship_response}
};

// statslink.impl.spec-remote-fn/evm-add-chain [141] 
var evm_add_chain = {
  "task":"remote.call",
  "handler":{"fn":fn_ethereum.evm_add_chain}
};

// statslink.impl.spec-remote-fn/evm-remove-chain [141] 
var evm_remove_chain = {
  "task":"remote.call",
  "handler":{"fn":fn_ethereum.evm_remove_chain}
};

// statslink.impl.spec-remote-fn/evm-update-chain [141] 
var evm_update_chain = {
  "task":"remote.call",
  "handler":{"fn":fn_ethereum.evm_update_chain}
};

// statslink.impl.spec-remote-fn/evm-add-contract-template [141] 
var evm_add_contract_template = {
  "task":"remote.call",
  "handler":{"fn":fn_ethereum.evm_add_contract_template}
};

// statslink.impl.spec-remote-fn/evm-remove-contract-template [141] 
var evm_remove_contract_template = {
  "task":"remote.call",
  "handler":{"fn":fn_ethereum.evm_remove_contract_template}
};

// statslink.impl.spec-remote-fn/evm-add-contract [141] 
var evm_add_contract = {
  "task":"remote.call",
  "handler":{"fn":fn_ethereum.evm_add_contract}
};

// statslink.impl.spec-remote-fn/evm-remove-contract [141] 
var evm_remove_contract = {
  "task":"remote.call",
  "handler":{"fn":fn_ethereum.evm_remove_contract}
};

// statslink.impl.spec-remote-fn/evm-add-token [141] 
var evm_add_token = {
  "task":"remote.call",
  "handler":{"fn":fn_ethereum.evm_add_token}
};

// statslink.impl.spec-remote-fn/evm-remove-token [141] 
var evm_remove_token = {
  "task":"remote.call",
  "handler":{"fn":fn_ethereum.evm_remove_token}
};

// statslink.impl.spec-remote-fn/evm-update-token [141] 
var evm_update_token = {
  "task":"remote.call",
  "handler":{"fn":fn_ethereum.evm_update_token}
};

// statslink.impl.spec-remote-fn/evm-add-faucet-entry [141] 
var evm_add_faucet_entry = {
  "task":"remote.call",
  "handler":{"fn":fn_ethereum.evm_add_faucet_entry}
};

// statslink.impl.spec-remote-fn/evm-remove-faucet-entry [141] 
var evm_remove_faucet_entry = {
  "task":"remote.call",
  "handler":{"fn":fn_ethereum.evm_remove_faucet_entry}
};

// statslink.impl.spec-remote-fn/evm-remove-user-address [141] 
var evm_remove_user_address = {
  "task":"remote.call",
  "handler":{"fn":fn_ethereum.evm_remove_user_address}
};

// statslink.impl.spec-remote-fn/evm-action-get-status [141] 
var evm_action_get_status = {
  "task":"remote.call",
  "handler":{"fn":fn_ethereum.evm_action_get_status}
};

// statslink.impl.spec-remote-fn/evm-action-take [141] 
var evm_action_take = {
  "task":"remote.call",
  "handler":{"fn":fn_ethereum.evm_action_take}
};

// statslink.impl.spec-remote-fn/evm-action-take-reset [141] 
var evm_action_take_reset = {
  "task":"remote.call",
  "handler":{"fn":fn_ethereum.evm_action_take_reset}
};

// statslink.impl.spec-remote-fn/evm-action-error [141] 
var evm_action_error = {
  "task":"remote.call",
  "handler":{"fn":fn_ethereum.evm_action_error}
};

// statslink.impl.spec-remote-fn/evm-action-return [141] 
var evm_action_return = {
  "task":"remote.call",
  "handler":{"fn":fn_ethereum.evm_action_return}
};

// statslink.impl.spec-remote-fn/evm-account-close-request [141] 
var evm_account_close_request = {
  "task":"remote.call",
  "handler":{"fn":fn_ethereum.evm_account_close_request}
};

// statslink.impl.spec-remote-fn/evm-vault-withdraw-create [141] 
var evm_vault_withdraw_create = {
  "task":"remote.call",
  "handler":{"fn":fn_ethereum.evm_vault_withdraw_create}
};

// statslink.impl.spec-remote-fn/evm-vault-withdraw-cancel [141] 
var evm_vault_withdraw_cancel = {
  "task":"remote.call",
  "handler":{"fn":fn_ethereum.evm_vault_withdraw_cancel}
};

// statslink.impl.spec-remote-fn/evm-vault-withdraw-requeue [141] 
var evm_vault_withdraw_requeue = {
  "task":"remote.call",
  "handler":{"fn":fn_ethereum.evm_vault_withdraw_requeue}
};

// statslink.impl.spec-remote-fn/evm-vault-wait [141] 
var evm_vault_wait = {
  "task":"remote.call",
  "handler":{"fn":fn_ethereum.evm_vault_wait}
};

// statslink.impl.spec-remote-fn/add-user-api-key [146] 
var add_user_api_key = {
  "task":"remote.call",
  "handler":{"fn":fn_extern.add_user_api_key}
};

// statslink.impl.spec-remote-fn/remove-user-api-key [146] 
var remove_user_api_key = {
  "task":"remote.call",
  "handler":{"fn":fn_extern.remove_user_api_key}
};

// statslink.impl.spec-remote-fn/refresh-user-api-key [146] 
var refresh_user_api_key = {
  "task":"remote.call",
  "handler":{"fn":fn_extern.refresh_user_api_key}
};

// statslink.impl.spec-remote-fn/add-site-application [146] 
var add_site_application = {
  "task":"remote.call",
  "handler":{"fn":fn_extern.add_site_application}
};

// statslink.impl.spec-remote-fn/remove-site-application [146] 
var remove_site_application = {
  "task":"remote.call",
  "handler":{"fn":fn_extern.remove_site_application}
};

// statslink.impl.spec-remote-fn/prospect-start-registration [152] 
var prospect_start_registration = {
  "task":"remote.call",
  "handler":{"fn":fn_game.prospect_start_registration}
};

// statslink.impl.spec-remote-fn/prospect-start-allocation [152] 
var prospect_start_allocation = {
  "task":"remote.call",
  "handler":{"fn":fn_game.prospect_start_allocation}
};

// statslink.impl.spec-remote-fn/prospect-start-trading [152] 
var prospect_start_trading = {
  "task":"remote.call",
  "handler":{"fn":fn_game.prospect_start_trading}
};

// statslink.impl.spec-remote-fn/prospect-pause-trading [152] 
var prospect_pause_trading = {
  "task":"remote.call",
  "handler":{"fn":fn_game.prospect_pause_trading}
};

// statslink.impl.spec-remote-fn/prospect-stop-trading [152] 
var prospect_stop_trading = {
  "task":"remote.call",
  "handler":{"fn":fn_game.prospect_stop_trading}
};

// statslink.impl.spec-remote-fn/prospect-start-resolution [152] 
var prospect_start_resolution = {
  "task":"remote.call",
  "handler":{"fn":fn_game.prospect_start_resolution}
};

// statslink.impl.spec-remote-fn/prospect-resolve [152] 
var prospect_resolve = {
  "task":"remote.call",
  "handler":{"fn":fn_game.prospect_resolve}
};

// statslink.impl.spec-remote-fn/prospect-start-verdict-check [152] 
var prospect_start_verdict_check = {
  "task":"remote.call",
  "handler":{"fn":fn_game.prospect_start_verdict_check}
};

// statslink.impl.spec-remote-fn/prospect-start-verdict [152] 
var prospect_start_verdict = {
  "task":"remote.call",
  "handler":{"fn":fn_game.prospect_start_verdict}
};

// statslink.impl.spec-remote-fn/prospect-complete [152] 
var prospect_complete = {
  "task":"remote.call",
  "handler":{"fn":fn_game.prospect_complete}
};

// statslink.impl.spec-remote-fn/topic-discard [152] 
var topic_discard = {"task":"remote.call","handler":{"fn":fn_game.topic_discard}};

// statslink.impl.spec-remote-fn/topic-undiscard [152] 
var topic_undiscard = {
  "task":"remote.call",
  "handler":{"fn":fn_game.topic_undiscard}
};

// statslink.impl.spec-remote-fn/topic-lock [152] 
var topic_lock = {"task":"remote.call","handler":{"fn":fn_game.topic_lock}};

// statslink.impl.spec-remote-fn/topic-start-registration [152] 
var topic_start_registration = {
  "task":"remote.call",
  "handler":{"fn":fn_game.topic_start_registration}
};

// statslink.impl.spec-remote-fn/topic-start-allocation [152] 
var topic_start_allocation = {
  "task":"remote.call",
  "handler":{"fn":fn_game.topic_start_allocation}
};

// statslink.impl.spec-remote-fn/topic-start-trading [152] 
var topic_start_trading = {
  "task":"remote.call",
  "handler":{"fn":fn_game.topic_start_trading}
};

// statslink.impl.spec-remote-fn/topic-pause-trading [152] 
var topic_pause_trading = {
  "task":"remote.call",
  "handler":{"fn":fn_game.topic_pause_trading}
};

// statslink.impl.spec-remote-fn/topic-stop-trading [152] 
var topic_stop_trading = {
  "task":"remote.call",
  "handler":{"fn":fn_game.topic_stop_trading}
};

// statslink.impl.spec-remote-fn/topic-start-resolution [152] 
var topic_start_resolution = {
  "task":"remote.call",
  "handler":{"fn":fn_game.topic_start_resolution}
};

// statslink.impl.spec-remote-fn/topic-start-verdict [152] 
var topic_start_verdict = {
  "task":"remote.call",
  "handler":{"fn":fn_game.topic_start_verdict}
};

// statslink.impl.spec-remote-fn/topic-complete [152] 
var topic_complete = {"task":"remote.call","handler":{"fn":fn_game.topic_complete}};

// statslink.impl.spec-remote-fn/payout-discard [152] 
var payout_discard = {"task":"remote.call","handler":{"fn":fn_game.payout_discard}};

// statslink.impl.spec-remote-fn/payout-winning [152] 
var payout_winning = {"task":"remote.call","handler":{"fn":fn_game.payout_winning}};

// statslink.impl.spec-remote-fn/payout-return-no [152] 
var payout_return_no = {
  "task":"remote.call",
  "handler":{"fn":fn_game.payout_return_no}
};

// statslink.impl.spec-remote-fn/payout-return-yes [152] 
var payout_return_yes = {
  "task":"remote.call",
  "handler":{"fn":fn_game.payout_return_yes}
};

// statslink.impl.spec-remote-fn/buy-stake [152] 
var buy_stake = {"task":"remote.call","handler":{"fn":fn_game.buy_stake}};

// statslink.impl.spec-remote-fn/payout-stake [152] 
var payout_stake = {"task":"remote.call","handler":{"fn":fn_game.payout_stake}};

// statslink.impl.spec-remote-fn/room-topic-create [152] 
var room_topic_create = {
  "task":"remote.call",
  "handler":{"fn":fn_game.room_topic_create}
};

// statslink.impl.spec-remote-fn/verdict-announce [152] 
var verdict_announce = {
  "task":"remote.call",
  "handler":{"fn":fn_game.verdict_announce}
};

// statslink.impl.spec-remote-fn/verdict-lock [152] 
var verdict_lock = {"task":"remote.call","handler":{"fn":fn_game.verdict_lock}};

// statslink.impl.spec-remote-fn/prospect-confirm-verdict [152] 
var prospect_confirm_verdict = {
  "task":"remote.call",
  "handler":{"fn":fn_game.prospect_confirm_verdict}
};

// statslink.impl.spec-remote-fn/organisation-transfer-ownership [157] 
var organisation_transfer_ownership = {
  "task":"remote.call",
  "handler":{"fn":fn_organisation.organisation_transfer_ownership}
};

// statslink.impl.spec-remote-fn/organisation-remove [157] 
var organisation_remove = {
  "task":"remote.call",
  "handler":{"fn":fn_organisation.organisation_remove}
};

// statslink.impl.spec-remote-fn/organisation-modify [157] 
var organisation_modify = {
  "task":"remote.call",
  "handler":{"fn":fn_organisation.organisation_modify}
};

// statslink.impl.spec-remote-fn/organisation-add-member [157] 
var organisation_add_member = {
  "task":"remote.call",
  "handler":{"fn":fn_organisation.organisation_add_member}
};

// statslink.impl.spec-remote-fn/organisation-remove-member [157] 
var organisation_remove_member = {
  "task":"remote.call",
  "handler":{"fn":fn_organisation.organisation_remove_member}
};

// statslink.impl.spec-remote-fn/organisation-leave-as-member [157] 
var organisation_leave_as_member = {
  "task":"remote.call",
  "handler":{"fn":fn_organisation.organisation_leave_as_member}
};

// statslink.impl.spec-remote-fn/organisation-set-public-as-member [157] 
var organisation_set_public_as_member = {
  "task":"remote.call",
  "handler":{"fn":fn_organisation.organisation_set_public_as_member}
};

// statslink.impl.spec-remote-fn/organisation-add-star [157] 
var organisation_add_star = {
  "task":"remote.call",
  "handler":{"fn":fn_organisation.organisation_add_star}
};

// statslink.impl.spec-remote-fn/organisation-remove-star [157] 
var organisation_remove_star = {
  "task":"remote.call",
  "handler":{"fn":fn_organisation.organisation_remove_star}
};

// statslink.impl.spec-remote-fn/organisation-add-rake [157] 
var organisation_add_rake = {
  "task":"remote.call",
  "handler":{"fn":fn_organisation.organisation_add_rake}
};

// statslink.impl.spec-remote-fn/organisation-remove-rake [157] 
var organisation_remove_rake = {
  "task":"remote.call",
  "handler":{"fn":fn_organisation.organisation_remove_rake}
};

// statslink.impl.spec-remote-fn/organisation-add-staking [157] 
var organisation_add_staking = {
  "task":"remote.call",
  "handler":{"fn":fn_organisation.organisation_add_staking}
};

// statslink.impl.spec-remote-fn/organisation-remove-staking [157] 
var organisation_remove_staking = {
  "task":"remote.call",
  "handler":{"fn":fn_organisation.organisation_remove_staking}
};

// statslink.impl.spec-remote-fn/organisation-add-buy-in [157] 
var organisation_add_buy_in = {
  "task":"remote.call",
  "handler":{"fn":fn_organisation.organisation_add_buy_in}
};

// statslink.impl.spec-remote-fn/organisation-remove-buy-in [157] 
var organisation_remove_buy_in = {
  "task":"remote.call",
  "handler":{"fn":fn_organisation.organisation_remove_buy_in}
};

// statslink.impl.spec-remote-fn/organisation-add-entity-group [157] 
var organisation_add_entity_group = {
  "task":"remote.call",
  "handler":{"fn":fn_organisation.organisation_add_entity_group}
};

// statslink.impl.spec-remote-fn/organisation-remove-entity-group [157] 
var organisation_remove_entity_group = {
  "task":"remote.call",
  "handler":{"fn":fn_organisation.organisation_remove_entity_group}
};

// statslink.impl.spec-remote-fn/organisation-modify-entity-group [157] 
var organisation_modify_entity_group = {
  "task":"remote.call",
  "handler":{"fn":fn_organisation.organisation_modify_entity_group}
};

// statslink.impl.spec-remote-fn/organisation-add-entity [157] 
var organisation_add_entity = {
  "task":"remote.call",
  "handler":{"fn":fn_organisation.organisation_add_entity}
};

// statslink.impl.spec-remote-fn/organisation-add-entity-bulk [157] 
var organisation_add_entity_bulk = {
  "task":"remote.call",
  "handler":{"fn":fn_organisation.organisation_add_entity_bulk}
};

// statslink.impl.spec-remote-fn/organisation-modify-entity-tags [157] 
var organisation_modify_entity_tags = {
  "task":"remote.call",
  "handler":{"fn":fn_organisation.organisation_modify_entity_tags}
};

// statslink.impl.spec-remote-fn/organisation-modify-entity [157] 
var organisation_modify_entity = {
  "task":"remote.call",
  "handler":{"fn":fn_organisation.organisation_modify_entity}
};

// statslink.impl.spec-remote-fn/organisation-remove-entity [157] 
var organisation_remove_entity = {
  "task":"remote.call",
  "handler":{"fn":fn_organisation.organisation_remove_entity}
};

// statslink.impl.spec-remote-fn/room-check-available [162] 
var room_check_available = {
  "task":"remote.call",
  "handler":{"fn":fn_room.room_check_available}
};

// statslink.impl.spec-remote-fn/room-add-star [162] 
var room_add_star = {"task":"remote.call","handler":{"fn":fn_room.room_add_star}};

// statslink.impl.spec-remote-fn/room-remove-star [162] 
var room_remove_star = {
  "task":"remote.call",
  "handler":{"fn":fn_room.room_remove_star}
};

// statslink.impl.spec-remote-fn/room-post-wall [162] 
var room_post_wall = {"task":"remote.call","handler":{"fn":fn_room.room_post_wall}};

// statslink.impl.spec-remote-fn/room-edit-wall [162] 
var room_edit_wall = {"task":"remote.call","handler":{"fn":fn_room.room_edit_wall}};

// statslink.impl.spec-remote-fn/room-upvote-wall [162] 
var room_upvote_wall = {
  "task":"remote.call",
  "handler":{"fn":fn_room.room_upvote_wall}
};

// statslink.impl.spec-remote-fn/room-downvote-wall [162] 
var room_downvote_wall = {
  "task":"remote.call",
  "handler":{"fn":fn_room.room_downvote_wall}
};

// statslink.impl.spec-remote-fn/room-unvote-wall [162] 
var room_unvote_wall = {
  "task":"remote.call",
  "handler":{"fn":fn_room.room_unvote_wall}
};

// statslink.impl.spec-remote-fn/room-join-invite-send [162] 
var room_join_invite_send = {
  "task":"remote.call",
  "handler":{"fn":fn_room.room_join_invite_send}
};

// statslink.impl.spec-remote-fn/room-join-invite-accept [162] 
var room_join_invite_accept = {
  "task":"remote.call",
  "handler":{"fn":fn_room.room_join_invite_accept}
};

// statslink.impl.spec-remote-fn/room-join-invite-cancel [162] 
var room_join_invite_cancel = {
  "task":"remote.call",
  "handler":{"fn":fn_room.room_join_invite_cancel}
};

// statslink.impl.spec-remote-fn/room-join-invite-reject [162] 
var room_join_invite_reject = {
  "task":"remote.call",
  "handler":{"fn":fn_room.room_join_invite_reject}
};

// statslink.impl.spec-remote-fn/room-join-request-send [162] 
var room_join_request_send = {
  "task":"remote.call",
  "handler":{"fn":fn_room.room_join_request_send}
};

// statslink.impl.spec-remote-fn/room-join-request-accept [162] 
var room_join_request_accept = {
  "task":"remote.call",
  "handler":{"fn":fn_room.room_join_request_accept}
};

// statslink.impl.spec-remote-fn/room-join-request-cancel [162] 
var room_join_request_cancel = {
  "task":"remote.call",
  "handler":{"fn":fn_room.room_join_request_cancel}
};

// statslink.impl.spec-remote-fn/room-join-request-reject [162] 
var room_join_request_reject = {
  "task":"remote.call",
  "handler":{"fn":fn_room.room_join_request_reject}
};

// statslink.impl.spec-remote-fn/room-add-member [162] 
var room_add_member = {
  "task":"remote.call",
  "handler":{"fn":fn_room.room_add_member}
};

// statslink.impl.spec-remote-fn/room-remove-member [162] 
var room_remove_member = {
  "task":"remote.call",
  "handler":{"fn":fn_room.room_remove_member}
};

// statslink.impl.spec-remote-fn/room-activate [162] 
var room_activate = {"task":"remote.call","handler":{"fn":fn_room.room_activate}};

// statslink.impl.spec-remote-fn/room-deactivate [162] 
var room_deactivate = {
  "task":"remote.call",
  "handler":{"fn":fn_room.room_deactivate}
};

// statslink.impl.spec-remote-fn/room-set-official [162] 
var room_set_official = {
  "task":"remote.call",
  "handler":{"fn":fn_room.room_set_official}
};

// statslink.impl.spec-remote-fn/room-modify [162] 
var room_modify = {"task":"remote.call","handler":{"fn":fn_room.room_modify}};

// statslink.impl.spec-remote-fn/room-remove [162] 
var room_remove = {"task":"remote.call","handler":{"fn":fn_room.room_remove}};

// statslink.impl.spec-remote-fn/room-gas-asset-recharge [162] 
var room_gas_asset_recharge = {
  "task":"remote.call",
  "handler":{"fn":fn_room.room_gas_asset_recharge}
};

// statslink.impl.spec-remote-fn/room-evm-create-vault-request [162] 
var room_evm_create_vault_request = {
  "task":"remote.call",
  "handler":{"fn":fn_room.room_evm_create_vault_request}
};

// statslink.impl.spec-remote-fn/room-evm-account-open-request [162] 
var room_evm_account_open_request = {
  "task":"remote.call",
  "handler":{"fn":fn_room.room_evm_account_open_request}
};

// statslink.impl.spec-remote-fn/room-evm-account-close-request [162] 
var room_evm_account_close_request = {
  "task":"remote.call",
  "handler":{"fn":fn_room.room_evm_account_close_request}
};

// statslink.impl.spec-remote-fn/swap-start-registration [167] 
var swap_start_registration = {
  "task":"remote.call",
  "handler":{"fn":fn_swap.swap_start_registration}
};

// statslink.impl.spec-remote-fn/swap-start-allocation [167] 
var swap_start_allocation = {
  "task":"remote.call",
  "handler":{"fn":fn_swap.swap_start_allocation}
};

// statslink.impl.spec-remote-fn/swap-start-trading [167] 
var swap_start_trading = {
  "task":"remote.call",
  "handler":{"fn":fn_swap.swap_start_trading}
};

// statslink.impl.spec-remote-fn/swap-pause-trading [167] 
var swap_pause_trading = {
  "task":"remote.call",
  "handler":{"fn":fn_swap.swap_pause_trading}
};

// statslink.impl.spec-remote-fn/swap-stop-trading [167] 
var swap_stop_trading = {
  "task":"remote.call",
  "handler":{"fn":fn_swap.swap_stop_trading}
};

// statslink.impl.spec-remote-fn/swap-start-resolution [167] 
var swap_start_resolution = {
  "task":"remote.call",
  "handler":{"fn":fn_swap.swap_start_resolution}
};

// statslink.impl.spec-remote-fn/swap-resolve [167] 
var swap_resolve = {"task":"remote.call","handler":{"fn":fn_swap.swap_resolve}};

// statslink.impl.spec-remote-fn/swap-complete [167] 
var swap_complete = {"task":"remote.call","handler":{"fn":fn_swap.swap_complete}};

// statslink.impl.spec-remote-fn/swap-check-available [167] 
var swap_check_available = {
  "task":"remote.call",
  "handler":{"fn":fn_swap.swap_check_available}
};

// statslink.impl.spec-remote-fn/swap-modify [167] 
var swap_modify = {"task":"remote.call","handler":{"fn":fn_swap.swap_modify}};

// statslink.impl.spec-remote-fn/swap-remove [167] 
var swap_remove = {"task":"remote.call","handler":{"fn":fn_swap.swap_remove}};

// statslink.impl.spec-remote-fn/swap-add-star [167] 
var swap_add_star = {"task":"remote.call","handler":{"fn":fn_swap.swap_add_star}};

// statslink.impl.spec-remote-fn/swap-remove-star [167] 
var swap_remove_star = {
  "task":"remote.call",
  "handler":{"fn":fn_swap.swap_remove_star}
};

// statslink.impl.spec-remote-fn/swap-post-comment [167] 
var swap_post_comment = {
  "task":"remote.call",
  "handler":{"fn":fn_swap.swap_post_comment}
};

// statslink.impl.spec-remote-fn/swap-edit-comment [167] 
var swap_edit_comment = {
  "task":"remote.call",
  "handler":{"fn":fn_swap.swap_edit_comment}
};

// statslink.impl.spec-remote-fn/swap-upvote-comment [167] 
var swap_upvote_comment = {
  "task":"remote.call",
  "handler":{"fn":fn_swap.swap_upvote_comment}
};

// statslink.impl.spec-remote-fn/swap-downvote-comment [167] 
var swap_downvote_comment = {
  "task":"remote.call",
  "handler":{"fn":fn_swap.swap_downvote_comment}
};

// statslink.impl.spec-remote-fn/swap-unvote-comment [167] 
var swap_unvote_comment = {
  "task":"remote.call",
  "handler":{"fn":fn_swap.swap_unvote_comment}
};

// statslink.impl.spec-remote-fn/topic-check-available [172] 
var topic_check_available = {
  "task":"remote.call",
  "handler":{"fn":fn_topic.topic_check_available}
};

// statslink.impl.spec-remote-fn/topic-modify [172] 
var topic_modify = {"task":"remote.call","handler":{"fn":fn_topic.topic_modify}};

// statslink.impl.spec-remote-fn/topic-remove [172] 
var topic_remove = {"task":"remote.call","handler":{"fn":fn_topic.topic_remove}};

// statslink.impl.spec-remote-fn/topic-arrange-prospects [172] 
var topic_arrange_prospects = {
  "task":"remote.call",
  "handler":{"fn":fn_topic.topic_arrange_prospects}
};

// statslink.impl.spec-remote-fn/topic-add-star [172] 
var topic_add_star = {
  "task":"remote.call",
  "handler":{"fn":fn_topic.topic_add_star}
};

// statslink.impl.spec-remote-fn/topic-remove-star [172] 
var topic_remove_star = {
  "task":"remote.call",
  "handler":{"fn":fn_topic.topic_remove_star}
};

// statslink.impl.spec-remote-fn/topic-post-wall [172] 
var topic_post_wall = {
  "task":"remote.call",
  "handler":{"fn":fn_topic.topic_post_wall}
};

// statslink.impl.spec-remote-fn/topic-edit-wall [172] 
var topic_edit_wall = {
  "task":"remote.call",
  "handler":{"fn":fn_topic.topic_edit_wall}
};

// statslink.impl.spec-remote-fn/topic-upvote-wall [172] 
var topic_upvote_wall = {
  "task":"remote.call",
  "handler":{"fn":fn_topic.topic_upvote_wall}
};

// statslink.impl.spec-remote-fn/topic-downvote-wall [172] 
var topic_downvote_wall = {
  "task":"remote.call",
  "handler":{"fn":fn_topic.topic_downvote_wall}
};

// statslink.impl.spec-remote-fn/topic-unvote-wall [172] 
var topic_unvote_wall = {
  "task":"remote.call",
  "handler":{"fn":fn_topic.topic_unvote_wall}
};

// statslink.impl.spec-remote-fn/topic-add-judge [172] 
var topic_add_judge = {
  "task":"remote.call",
  "handler":{"fn":fn_topic.topic_add_judge}
};

// statslink.impl.spec-remote-fn/topic-remove-judge [172] 
var topic_remove_judge = {
  "task":"remote.call",
  "handler":{"fn":fn_topic.topic_remove_judge}
};

// statslink.impl.spec-remote-fn/prospect-create [172] 
var prospect_create = {
  "task":"remote.call",
  "handler":{"fn":fn_topic.prospect_create}
};

// statslink.impl.spec-remote-fn/prospect-delete [172] 
var prospect_delete = {
  "task":"remote.call",
  "handler":{"fn":fn_topic.prospect_delete}
};

// statslink.impl.spec-remote-fn/prospect-add-star [172] 
var prospect_add_star = {
  "task":"remote.call",
  "handler":{"fn":fn_topic.prospect_add_star}
};

// statslink.impl.spec-remote-fn/prospect-remove-star [172] 
var prospect_remove_star = {
  "task":"remote.call",
  "handler":{"fn":fn_topic.prospect_remove_star}
};

// statslink.impl.spec-remote-fn/prospect-post-comment [172] 
var prospect_post_comment = {
  "task":"remote.call",
  "handler":{"fn":fn_topic.prospect_post_comment}
};

// statslink.impl.spec-remote-fn/prospect-edit-comment [172] 
var prospect_edit_comment = {
  "task":"remote.call",
  "handler":{"fn":fn_topic.prospect_edit_comment}
};

// statslink.impl.spec-remote-fn/prospect-upvote-comment [172] 
var prospect_upvote_comment = {
  "task":"remote.call",
  "handler":{"fn":fn_topic.prospect_upvote_comment}
};

// statslink.impl.spec-remote-fn/prospect-downvote-comment [172] 
var prospect_downvote_comment = {
  "task":"remote.call",
  "handler":{"fn":fn_topic.prospect_downvote_comment}
};

// statslink.impl.spec-remote-fn/prospect-unvote-comment [172] 
var prospect_unvote_comment = {
  "task":"remote.call",
  "handler":{"fn":fn_topic.prospect_unvote_comment}
};

// statslink.impl.spec-remote-fn/abuse-report-create [177] 
var abuse_report_create = {
  "task":"remote.call",
  "handler":{"fn":fn_super.abuse_report_create}
};

// statslink.impl.spec-remote-fn/abuse-report-update [177] 
var abuse_report_update = {
  "task":"remote.call",
  "handler":{"fn":fn_super.abuse_report_update}
};

// statslink.impl.spec-remote-fn/site-var-set [177] 
var site_var_set = {"task":"remote.call","handler":{"fn":fn_super.site_var_set}};

// statslink.impl.spec-remote-fn/site-var-delete [177] 
var site_var_delete = {
  "task":"remote.call",
  "handler":{"fn":fn_super.site_var_delete}
};

// statslink.impl.spec-remote-fn/currency-set [177] 
var currency_set = {"task":"remote.call","handler":{"fn":fn_super.currency_set}};

// statslink.impl.spec-remote-fn/currency-delete [177] 
var currency_delete = {
  "task":"remote.call",
  "handler":{"fn":fn_super.currency_delete}
};

// statslink.impl.spec-remote-fn/region-country-set [177] 
var region_country_set = {
  "task":"remote.call",
  "handler":{"fn":fn_super.region_country_set}
};

// statslink.impl.spec-remote-fn/region-country-delete [177] 
var region_country_delete = {
  "task":"remote.call",
  "handler":{"fn":fn_super.region_country_delete}
};

// statslink.impl.spec-remote-fn/region-state-set [177] 
var region_state_set = {
  "task":"remote.call",
  "handler":{"fn":fn_super.region_state_set}
};

// statslink.impl.spec-remote-fn/region-state-delete [177] 
var region_state_delete = {
  "task":"remote.call",
  "handler":{"fn":fn_super.region_state_delete}
};

// statslink.impl.spec-remote-fn/region-city-set [177] 
var region_city_set = {
  "task":"remote.call",
  "handler":{"fn":fn_super.region_city_set}
};

// statslink.impl.spec-remote-fn/region-city-delete [177] 
var region_city_delete = {
  "task":"remote.call",
  "handler":{"fn":fn_super.region_city_delete}
};

// statslink.impl.spec-remote-fn/service-set [177] 
var service_set = {"task":"remote.call","handler":{"fn":fn_super.service_set}};

// statslink.impl.spec-remote-fn/service-delete [177] 
var service_delete = {
  "task":"remote.call",
  "handler":{"fn":fn_super.service_delete}
};

// statslink.impl.spec-remote-fn/infra-mq-set [177] 
var infra_mq_set = {"task":"remote.call","handler":{"fn":fn_super.infra_mq_set}};

// statslink.impl.spec-remote-fn/infra-mq-delete [177] 
var infra_mq_delete = {
  "task":"remote.call",
  "handler":{"fn":fn_super.infra_mq_delete}
};

// statslink.impl.spec-remote-fn/infra-exchange-set [177] 
var infra_exchange_set = {
  "task":"remote.call",
  "handler":{"fn":fn_super.infra_exchange_set}
};

// statslink.impl.spec-remote-fn/infra-exchange-delete [177] 
var infra_exchange_delete = {
  "task":"remote.call",
  "handler":{"fn":fn_super.infra_exchange_delete}
};

// statslink.impl.spec-remote-fn/set-account-super [177] 
var set_account_super = {
  "task":"remote.call",
  "handler":{"fn":fn_super.set_account_super}
};

// statslink.impl.spec-remote-fn/set-account-lock [177] 
var set_account_lock = {
  "task":"remote.call",
  "handler":{"fn":fn_super.set_account_lock}
};

// statslink.impl.spec-remote-fn/set-organisation-lock [177] 
var set_organisation_lock = {
  "task":"remote.call",
  "handler":{"fn":fn_super.set_organisation_lock}
};

// statslink.impl.spec-remote-fn/set-organisation-tier [177] 
var set_organisation_tier = {
  "task":"remote.call",
  "handler":{"fn":fn_super.set_organisation_tier}
};

// statslink.impl.spec-remote-fn/set-room-lock [177] 
var set_room_lock = {"task":"remote.call","handler":{"fn":fn_super.set_room_lock}};

// statslink.impl.spec-remote-fn/set-topic-lock [177] 
var set_topic_lock = {
  "task":"remote.call",
  "handler":{"fn":fn_super.set_topic_lock}
};

// statslink.impl.spec-remote-fn/user-privilege-add [177] 
var user_privilege_add = {
  "task":"remote.call",
  "handler":{"fn":fn_super.user_privilege_add}
};

// statslink.impl.spec-remote-fn/user-privilege-remove [177] 
var user_privilege_remove = {
  "task":"remote.call",
  "handler":{"fn":fn_super.user_privilege_remove}
};

// statslink.impl.spec-remote-fn/account-token-secret-add [177] 
var account_token_secret_add = {
  "task":"remote.call",
  "handler":{"fn":fn_super.account_token_secret_add}
};

// statslink.impl.spec-remote-fn/account-token-secret-remove [177] 
var account_token_secret_remove = {
  "task":"remote.call",
  "handler":{"fn":fn_super.account_token_secret_remove}
};

// statslink.impl.spec-remote-fn/account-token-secret-update [177] 
var account_token_secret_update = {
  "task":"remote.call",
  "handler":{"fn":fn_super.account_token_secret_update}
};

// statslink.impl.spec-remote-fn/purchase-statscoin [182] 
var purchase_statscoin = {
  "task":"remote.call",
  "handler":{"fn":fn_wallet.purchase_statscoin}
};

// statslink.impl.spec-remote-fn/tip-statscoin [182] 
var tip_statscoin = {
  "task":"remote.call",
  "handler":{"fn":fn_wallet.tip_statscoin}
};

// statslink.impl.spec-remote-fn/room-create [187] 
var room_create = {"task":"remote.call","handler":{"fn":net_manage.room_create}};

// statslink.impl.spec-remote-fn/organisation-create [187] 
var organisation_create = {
  "task":"remote.call",
  "handler":{"fn":net_manage.organisation_create}
};

// statslink.impl.spec-remote-fn/topic-create [187] 
var topic_create = {
  "task":"remote.call",
  "handler":{"fn":net_manage.topic_create}
};

// statslink.impl.spec-remote-fn/topic-confirm [187] 
var topic_confirm = {
  "task":"remote.call",
  "handler":{"fn":net_manage.topic_confirm}
};

// statslink.impl.spec-remote-fn/topic-allocate-input [187] 
var topic_allocate_input = {
  "task":"remote.call",
  "handler":{"fn":net_manage.topic_allocate_input}
};

// statslink.impl.spec-remote-fn/topic-allocate-process [187] 
var topic_allocate_process = {
  "task":"remote.call",
  "handler":{"fn":net_manage.topic_allocate_process}
};

// statslink.impl.spec-remote-fn/swap-create [187] 
var swap_create = {"task":"remote.call","handler":{"fn":net_manage.swap_create}};

// statslink.impl.spec-remote-fn/swap-confirm [187] 
var swap_confirm = {
  "task":"remote.call",
  "handler":{"fn":net_manage.swap_confirm}
};

// statslink.impl.spec-remote-fn/swap-allocate-input [187] 
var swap_allocate_input = {
  "task":"remote.call",
  "handler":{"fn":net_manage.swap_allocate_input}
};

// statslink.impl.spec-remote-fn/swap-allocate-process [187] 
var swap_allocate_process = {
  "task":"remote.call",
  "handler":{"fn":net_manage.swap_allocate_process}
};

// statslink.impl.spec-remote-fn/swap-reset [187] 
var swap_reset = {"task":"remote.call","handler":{"fn":net_manage.swap_reset}};

// statslink.impl.spec-remote-fn/place-contract-order [192] 
var place_contract_order = {
  "task":"remote.call",
  "handler":{"fn":net_trade.place_contract_order}
};

// statslink.impl.spec-remote-fn/cancel-contract-order [192] 
var cancel_contract_order = {
  "task":"remote.call",
  "handler":{"fn":net_trade.cancel_contract_order}
};

// statslink.impl.spec-remote-fn/place-swap-order [192] 
var place_swap_order = {
  "task":"remote.call",
  "handler":{"fn":net_trade.place_swap_order}
};

// statslink.impl.spec-remote-fn/cancel-swap-order [192] 
var cancel_swap_order = {
  "task":"remote.call",
  "handler":{"fn":net_trade.cancel_swap_order}
};

// statslink.impl.spec-remote-fn/get-market [192] 
var get_market = {"task":"remote.call","handler":{"fn":net_trade.get_market}};

// statslink.impl.spec-remote-fn/get-market-bulk [192] 
var get_market_bulk = {
  "task":"remote.call",
  "handler":{"fn":net_trade.get_market_bulk}
};

// statslink.impl.spec-remote-fn/get-market-priority [192] 
var get_market_priority = {
  "task":"remote.call",
  "handler":{"fn":net_trade.get_market_priority}
};

// statslink.impl.spec-remote-fn/get-contract-history-init [192] 
var get_contract_history_init = {
  "task":"remote.call",
  "handler":{"fn":net_trade.get_contract_history_init}
};

// statslink.impl.spec-remote-fn/get-contract-history-30sec [192] 
var get_contract_history_30sec = {
  "task":"remote.call",
  "handler":{"fn":net_trade.get_contract_history_30sec}
};

// statslink.impl.spec-remote-fn/get-contract-history-5min [192] 
var get_contract_history_5min = {
  "task":"remote.call",
  "handler":{"fn":net_trade.get_contract_history_5min}
};

// statslink.impl.spec-remote-fn/get-contract-history-1hr [192] 
var get_contract_history_1hr = {
  "task":"remote.call",
  "handler":{"fn":net_trade.get_contract_history_1hr}
};

// statslink.impl.spec-remote-fn/get-contract-history-1day [192] 
var get_contract_history_1day = {
  "task":"remote.call",
  "handler":{"fn":net_trade.get_contract_history_1day}
};

// statslink.impl.spec-remote-fn/get-contract-history-sparklines [192] 
var get_contract_history_sparklines = {
  "task":"remote.call",
  "handler":{"fn":net_trade.get_contract_history_sparklines}
};

// statslink.impl.spec-remote-fn/get-swap-history-init [192] 
var get_swap_history_init = {
  "task":"remote.call",
  "handler":{"fn":net_trade.get_swap_history_init}
};

// statslink.impl.spec-remote-fn/get-swap-history-30sec [192] 
var get_swap_history_30sec = {
  "task":"remote.call",
  "handler":{"fn":net_trade.get_swap_history_30sec}
};

// statslink.impl.spec-remote-fn/get-swap-history-5min [192] 
var get_swap_history_5min = {
  "task":"remote.call",
  "handler":{"fn":net_trade.get_swap_history_5min}
};

// statslink.impl.spec-remote-fn/get-swap-history-1hr [192] 
var get_swap_history_1hr = {
  "task":"remote.call",
  "handler":{"fn":net_trade.get_swap_history_1hr}
};

// statslink.impl.spec-remote-fn/get-swap-history-1day [192] 
var get_swap_history_1day = {
  "task":"remote.call",
  "handler":{"fn":net_trade.get_swap_history_1day}
};

// statslink.impl.spec-remote-fn/get-swap-history-sparklines [192] 
var get_swap_history_sparklines = {
  "task":"remote.call",
  "handler":{"fn":net_trade.get_swap_history_sparklines}
};

// statslink.impl.spec-remote-fn/get-stake-30sec [192] 
var get_stake_30sec = {
  "task":"remote.call",
  "handler":{"fn":net_trade.get_stake_30sec}
};

// statslink.impl.spec-remote-fn/get-stake-5min [192] 
var get_stake_5min = {
  "task":"remote.call",
  "handler":{"fn":net_trade.get_stake_5min}
};

// statslink.impl.spec-remote-fn/get-stake-1hr [192] 
var get_stake_1hr = {
  "task":"remote.call",
  "handler":{"fn":net_trade.get_stake_1hr}
};

// statslink.impl.spec-remote-fn/get-stake-1day [192] 
var get_stake_1day = {
  "task":"remote.call",
  "handler":{"fn":net_trade.get_stake_1day}
};

// statslink.impl.spec-remote-fn/get-stake-sparklines [192] 
var get_stake_sparklines = {
  "task":"remote.call",
  "handler":{"fn":net_trade.get_stake_sparklines}
};

// statslink.impl.spec-remote-fn/web3-id [197] 
var web3_id = {"task":"remote.call","handler":{"fn":net_web3.web3_id}};

// statslink.impl.spec-remote-fn/web3-ping [197] 
var web3_ping = {"task":"remote.call","handler":{"fn":net_web3.web3_ping}};

// statslink.impl.spec-remote-fn/web3-user-address-link [197] 
var web3_user_address_link = {
  "task":"remote.call",
  "handler":{"fn":net_web3.web3_user_address_link}
};

// statslink.impl.spec-remote-fn/web3-user-address-verify [197] 
var web3_user_address_verify = {
  "task":"remote.call",
  "handler":{"fn":net_web3.web3_user_address_verify}
};

var MODULE = {
  "get_privacy_policy":get_privacy_policy,
  "get_terms_and_conditions":get_terms_and_conditions,
  "check_nickname_exists":check_nickname_exists,
  "check_nickname_available":check_nickname_available,
  "check_email_exists":check_email_exists,
  "check_email_available":check_email_available,
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
  "email_registration":email_registration,
  "email_add_additional":email_add_additional,
  "email_verify_additional_resend":email_verify_additional_resend,
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
  "web3_user_address_verify":web3_user_address_verify
};

module.exports = MODULE