const internal_local = require("./internal-local")

const spec_remote_fn = require("./impl/spec-remote-fn")

const internal_state = require("./internal-state")

const base_event = require("./impl/base-event")

const common_global = require("@statstrade/api/db-global")

const k = require("@xtalk/lang/base-lib")

const flatten = require("@xtalk/db/base-flatten")

const schema_full = require("@statstrade/api/db-schema-full")

const user_remote_fn = require("./impl/user-remote-fn")

// statslink.full.internal-remote/make-remote-api [17] 
function make_remote_api(){
  return {
    "api/account/get-privacy-policy":user_remote_fn.get_privacy_policy,
    "api/account/get-terms-and-conditions":user_remote_fn.get_terms_and_conditions,
    "api/account/check-nickname-exists":user_remote_fn.check_nickname_exists,
    "api/account/check-nickname-available":user_remote_fn.check_nickname_available,
    "api/account/check-email-exists":user_remote_fn.check_email_exists,
    "api/account/check-email-available":user_remote_fn.check_email_available,
    "api/account/email-registration":user_remote_fn.email_registration,
    "api/account/email-registration-external":user_remote_fn.email_registration_external,
    "api/account/email-verification":user_remote_fn.email_verification,
    "api/account/email-verification-resend":user_remote_fn.email_verification_resend,
    "api/account/create-account":user_remote_fn.create_account,
    "api/account/password-reset-request":user_remote_fn.password_reset_request,
    "api/account/login-renew":user_remote_fn.login_renew,
    "api/account/logout":user_remote_fn.logout,
    "api/account/net-check":user_remote_fn.net_check,
    "api/account/profile-modify":user_remote_fn.profile_modify,
    "api/account/notification-modify":user_remote_fn.notification_modify,
    "api/account/email-get-all":user_remote_fn.email_get_all,
    "api/account/email-get-primary":user_remote_fn.email_get_primary,
    "api/account/email-remove-additional":user_remote_fn.email_remove_additional,
    "api/account/email-verify-additional":user_remote_fn.email_verify_additional,
    "api/account/email-set-primary":user_remote_fn.email_set_primary,
    "api/account/delete-account-check":user_remote_fn.delete_account_check,
    "api/account/delete-account":user_remote_fn.delete_account,
    "api/account/oauth-unlink":user_remote_fn.oauth_unlink,
    "api/brand/brand-create":user_remote_fn.brand_create,
    "api/brand/brand-transfer-ownership":user_remote_fn.brand_transfer_ownership,
    "api/brand/brand-remove":user_remote_fn.brand_remove,
    "api/brand/brand-modify":user_remote_fn.brand_modify,
    "api/brand/brand-add-member":user_remote_fn.brand_add_member,
    "api/brand/brand-remove-member":user_remote_fn.brand_remove_member,
    "api/brand/brand-leave-as-member":user_remote_fn.brand_leave_as_member,
    "api/brand/brand-add-star":user_remote_fn.brand_add_star,
    "api/brand/brand-remove-star":user_remote_fn.brand_remove_star,
    "api/brand/brand-post-wall":user_remote_fn.brand_post_wall,
    "api/brand/brand-edit-wall":user_remote_fn.brand_edit_wall,
    "api/brand/brand-upvote-wall":user_remote_fn.brand_upvote_wall,
    "api/brand/brand-downvote-wall":user_remote_fn.brand_downvote_wall,
    "api/brand/brand-unvote-wall":user_remote_fn.brand_unvote_wall,
    "api/brand/brand-affiliation-add":user_remote_fn.brand_affiliation_add,
    "api/brand/brand-affiliation-remove":user_remote_fn.brand_affiliation_remove,
    "api/brand/brand-affiliation-request":user_remote_fn.brand_affiliation_request,
    "api/brand/brand-affiliation-accept":user_remote_fn.brand_affiliation_accept,
    "api/brand/brand-affiliation-reject":user_remote_fn.brand_affiliation_reject,
    "api/brand/brand-topic-sponsorship-request":user_remote_fn.brand_topic_sponsorship_request,
    "api/brand/brand-topic-sponsorship-response":user_remote_fn.brand_topic_sponsorship_response,
    "api/brand/brand-swap-sponsorship-request":user_remote_fn.brand_swap_sponsorship_request,
    "api/brand/brand-swap-sponsorship-response":user_remote_fn.brand_swap_sponsorship_response,
    "api/ethereum/evm-add-chain":user_remote_fn.evm_add_chain,
    "api/ethereum/evm-remove-chain":user_remote_fn.evm_remove_chain,
    "api/ethereum/evm-update-chain":user_remote_fn.evm_update_chain,
    "api/ethereum/evm-add-contract-template":user_remote_fn.evm_add_contract_template,
    "api/ethereum/evm-remove-contract-template":user_remote_fn.evm_remove_contract_template,
    "api/ethereum/evm-add-contract":user_remote_fn.evm_add_contract,
    "api/ethereum/evm-remove-contract":user_remote_fn.evm_remove_contract,
    "api/ethereum/evm-add-token":user_remote_fn.evm_add_token,
    "api/ethereum/evm-remove-token":user_remote_fn.evm_remove_token,
    "api/ethereum/evm-update-token":user_remote_fn.evm_update_token,
    "api/ethereum/evm-add-faucet-entry":user_remote_fn.evm_add_faucet_entry,
    "api/ethereum/evm-remove-faucet-entry":user_remote_fn.evm_remove_faucet_entry,
    "api/ethereum/evm-remove-user-address":user_remote_fn.evm_remove_user_address,
    "api/ethereum/evm-action-get-status":user_remote_fn.evm_action_get_status,
    "api/ethereum/evm-action-take":user_remote_fn.evm_action_take,
    "api/ethereum/evm-action-take-reset":user_remote_fn.evm_action_take_reset,
    "api/ethereum/evm-action-error":user_remote_fn.evm_action_error,
    "api/ethereum/evm-action-return":user_remote_fn.evm_action_return,
    "api/ethereum/evm-account-close-request":user_remote_fn.evm_account_close_request,
    "api/ethereum/evm-vault-withdraw-create":user_remote_fn.evm_vault_withdraw_create,
    "api/ethereum/evm-vault-withdraw-cancel":user_remote_fn.evm_vault_withdraw_cancel,
    "api/ethereum/evm-vault-withdraw-requeue":user_remote_fn.evm_vault_withdraw_requeue,
    "api/ethereum/evm-vault-wait":user_remote_fn.evm_vault_wait,
    "api/extern/add-user-api-key":user_remote_fn.add_user_api_key,
    "api/extern/remove-user-api-key":user_remote_fn.remove_user_api_key,
    "api/extern/refresh-user-api-key":user_remote_fn.refresh_user_api_key,
    "api/extern/add-site-application":user_remote_fn.add_site_application,
    "api/extern/remove-site-application":user_remote_fn.remove_site_application,
    "api/game/prospect-start-registration":user_remote_fn.prospect_start_registration,
    "api/game/prospect-start-allocation":user_remote_fn.prospect_start_allocation,
    "api/game/prospect-start-trading":user_remote_fn.prospect_start_trading,
    "api/game/prospect-pause-trading":user_remote_fn.prospect_pause_trading,
    "api/game/prospect-stop-trading":user_remote_fn.prospect_stop_trading,
    "api/game/prospect-start-resolution":user_remote_fn.prospect_start_resolution,
    "api/game/prospect-resolve":user_remote_fn.prospect_resolve,
    "api/game/prospect-start-verdict-check":user_remote_fn.prospect_start_verdict_check,
    "api/game/prospect-start-verdict":user_remote_fn.prospect_start_verdict,
    "api/game/prospect-complete":user_remote_fn.prospect_complete,
    "api/game/topic-discard":user_remote_fn.topic_discard,
    "api/game/topic-undiscard":user_remote_fn.topic_undiscard,
    "api/game/topic-lock":user_remote_fn.topic_lock,
    "api/game/topic-start-registration":user_remote_fn.topic_start_registration,
    "api/game/topic-start-allocation":user_remote_fn.topic_start_allocation,
    "api/game/topic-start-trading":user_remote_fn.topic_start_trading,
    "api/game/topic-pause-trading":user_remote_fn.topic_pause_trading,
    "api/game/topic-stop-trading":user_remote_fn.topic_stop_trading,
    "api/game/topic-start-resolution":user_remote_fn.topic_start_resolution,
    "api/game/topic-start-verdict":user_remote_fn.topic_start_verdict,
    "api/game/topic-complete":user_remote_fn.topic_complete,
    "api/game/payout-discard":user_remote_fn.payout_discard,
    "api/game/payout-winning":user_remote_fn.payout_winning,
    "api/game/payout-return-no":user_remote_fn.payout_return_no,
    "api/game/payout-return-yes":user_remote_fn.payout_return_yes,
    "api/game/buy-stake":user_remote_fn.buy_stake,
    "api/game/payout-stake":user_remote_fn.payout_stake,
    "api/game/room-topic-create":user_remote_fn.room_topic_create,
    "api/game/verdict-announce":user_remote_fn.verdict_announce,
    "api/game/verdict-lock":user_remote_fn.verdict_lock,
    "api/game/prospect-confirm-verdict":user_remote_fn.prospect_confirm_verdict,
    "api/organisation/organisation-transfer-ownership":user_remote_fn.organisation_transfer_ownership,
    "api/organisation/organisation-remove":user_remote_fn.organisation_remove,
    "api/organisation/organisation-modify":user_remote_fn.organisation_modify,
    "api/organisation/organisation-add-member":user_remote_fn.organisation_add_member,
    "api/organisation/organisation-remove-member":user_remote_fn.organisation_remove_member,
    "api/organisation/organisation-leave-as-member":user_remote_fn.organisation_leave_as_member,
    "api/organisation/organisation-set-public-as-member":user_remote_fn.organisation_set_public_as_member,
    "api/organisation/organisation-add-star":user_remote_fn.organisation_add_star,
    "api/organisation/organisation-remove-star":user_remote_fn.organisation_remove_star,
    "api/organisation/organisation-add-rake":user_remote_fn.organisation_add_rake,
    "api/organisation/organisation-remove-rake":user_remote_fn.organisation_remove_rake,
    "api/organisation/organisation-add-staking":user_remote_fn.organisation_add_staking,
    "api/organisation/organisation-remove-staking":user_remote_fn.organisation_remove_staking,
    "api/organisation/organisation-add-buy-in":user_remote_fn.organisation_add_buy_in,
    "api/organisation/organisation-remove-buy-in":user_remote_fn.organisation_remove_buy_in,
    "api/entity/organisation-add-entity-group":user_remote_fn.organisation_add_entity_group,
    "api/entity/organisation-remove-entity-group":user_remote_fn.organisation_remove_entity_group,
    "api/entity/organisation-modify-entity-group":user_remote_fn.organisation_modify_entity_group,
    "api/entity/organisation-add-entity":user_remote_fn.organisation_add_entity,
    "api/entity/organisation-add-entity-bulk":user_remote_fn.organisation_add_entity_bulk,
    "api/entity/organisation-modify-entity-tags":user_remote_fn.organisation_modify_entity_tags,
    "api/entity/organisation-modify-entity":user_remote_fn.organisation_modify_entity,
    "api/entity/organisation-remove-entity":user_remote_fn.organisation_remove_entity,
    "api/room/room-check-available":user_remote_fn.room_check_available,
    "api/room/room-add-star":user_remote_fn.room_add_star,
    "api/room/room-remove-star":user_remote_fn.room_remove_star,
    "api/room/room-post-wall":user_remote_fn.room_post_wall,
    "api/room/room-edit-wall":user_remote_fn.room_edit_wall,
    "api/room/room-upvote-wall":user_remote_fn.room_upvote_wall,
    "api/room/room-downvote-wall":user_remote_fn.room_downvote_wall,
    "api/room/room-unvote-wall":user_remote_fn.room_unvote_wall,
    "api/room/room-join-invite-send":user_remote_fn.room_join_invite_send,
    "api/room/room-join-invite-accept":user_remote_fn.room_join_invite_accept,
    "api/room/room-join-invite-cancel":user_remote_fn.room_join_invite_cancel,
    "api/room/room-join-invite-reject":user_remote_fn.room_join_invite_reject,
    "api/room/room-join-request-send":user_remote_fn.room_join_request_send,
    "api/room/room-join-request-accept":user_remote_fn.room_join_request_accept,
    "api/room/room-join-request-cancel":user_remote_fn.room_join_request_cancel,
    "api/room/room-join-request-reject":user_remote_fn.room_join_request_reject,
    "api/room/room-add-member":user_remote_fn.room_add_member,
    "api/room/room-remove-member":user_remote_fn.room_remove_member,
    "api/room/room-activate":user_remote_fn.room_activate,
    "api/room/room-deactivate":user_remote_fn.room_deactivate,
    "api/room/room-set-official":user_remote_fn.room_set_official,
    "api/room/room-modify":user_remote_fn.room_modify,
    "api/room/room-remove":user_remote_fn.room_remove,
    "api/room/room-gas-asset-recharge":user_remote_fn.room_gas_asset_recharge,
    "api/room/room-evm-create-vault-request":user_remote_fn.room_evm_create_vault_request,
    "api/room/room-evm-account-open-request":user_remote_fn.room_evm_account_open_request,
    "api/room/room-evm-account-close-request":user_remote_fn.room_evm_account_close_request,
    "api/swap/swap-start-registration":user_remote_fn.swap_start_registration,
    "api/swap/swap-start-allocation":user_remote_fn.swap_start_allocation,
    "api/swap/swap-start-trading":user_remote_fn.swap_start_trading,
    "api/swap/swap-pause-trading":user_remote_fn.swap_pause_trading,
    "api/swap/swap-stop-trading":user_remote_fn.swap_stop_trading,
    "api/swap/swap-start-resolution":user_remote_fn.swap_start_resolution,
    "api/swap/swap-resolve":user_remote_fn.swap_resolve,
    "api/swap/swap-complete":user_remote_fn.swap_complete,
    "api/swap/swap-check-available":user_remote_fn.swap_check_available,
    "api/swap/swap-modify":user_remote_fn.swap_modify,
    "api/swap/swap-remove":user_remote_fn.swap_remove,
    "api/swap/swap-add-star":user_remote_fn.swap_add_star,
    "api/swap/swap-remove-star":user_remote_fn.swap_remove_star,
    "api/swap/swap-post-comment":user_remote_fn.swap_post_comment,
    "api/swap/swap-edit-comment":user_remote_fn.swap_edit_comment,
    "api/swap/swap-upvote-comment":user_remote_fn.swap_upvote_comment,
    "api/swap/swap-downvote-comment":user_remote_fn.swap_downvote_comment,
    "api/swap/swap-unvote-comment":user_remote_fn.swap_unvote_comment,
    "api/topic/topic-check-available":user_remote_fn.topic_check_available,
    "api/topic/topic-modify":user_remote_fn.topic_modify,
    "api/topic/topic-remove":user_remote_fn.topic_remove,
    "api/topic/topic-arrange-prospects":user_remote_fn.topic_arrange_prospects,
    "api/topic/topic-add-star":user_remote_fn.topic_add_star,
    "api/topic/topic-remove-star":user_remote_fn.topic_remove_star,
    "api/topic/topic-post-wall":user_remote_fn.topic_post_wall,
    "api/topic/topic-edit-wall":user_remote_fn.topic_edit_wall,
    "api/topic/topic-upvote-wall":user_remote_fn.topic_upvote_wall,
    "api/topic/topic-downvote-wall":user_remote_fn.topic_downvote_wall,
    "api/topic/topic-unvote-wall":user_remote_fn.topic_unvote_wall,
    "api/topic/topic-add-judge":user_remote_fn.topic_add_judge,
    "api/topic/topic-remove-judge":user_remote_fn.topic_remove_judge,
    "api/prospect/prospect-create":user_remote_fn.prospect_create,
    "api/prospect/prospect-delete":user_remote_fn.prospect_delete,
    "api/prospect/prospect-add-star":user_remote_fn.prospect_add_star,
    "api/prospect/prospect-remove-star":user_remote_fn.prospect_remove_star,
    "api/prospect/prospect-post-comment":user_remote_fn.prospect_post_comment,
    "api/prospect/prospect-edit-comment":user_remote_fn.prospect_edit_comment,
    "api/prospect/prospect-upvote-comment":user_remote_fn.prospect_upvote_comment,
    "api/prospect/prospect-downvote-comment":user_remote_fn.prospect_downvote_comment,
    "api/prospect/prospect-unvote-comment":user_remote_fn.prospect_unvote_comment,
    "api/super/abuse-report-create":user_remote_fn.abuse_report_create,
    "api/super/abuse-report-update":user_remote_fn.abuse_report_update,
    "api/super/site-var-set":user_remote_fn.site_var_set,
    "api/super/site-var-delete":user_remote_fn.site_var_delete,
    "api/super/currency-set":user_remote_fn.currency_set,
    "api/super/currency-delete":user_remote_fn.currency_delete,
    "api/super/region-country-set":user_remote_fn.region_country_set,
    "api/super/region-country-delete":user_remote_fn.region_country_delete,
    "api/super/region-state-set":user_remote_fn.region_state_set,
    "api/super/region-state-delete":user_remote_fn.region_state_delete,
    "api/super/region-city-set":user_remote_fn.region_city_set,
    "api/super/region-city-delete":user_remote_fn.region_city_delete,
    "api/super/service-set":user_remote_fn.service_set,
    "api/super/service-delete":user_remote_fn.service_delete,
    "api/super/infra-mq-set":user_remote_fn.infra_mq_set,
    "api/super/infra-mq-delete":user_remote_fn.infra_mq_delete,
    "api/super/infra-exchange-set":user_remote_fn.infra_exchange_set,
    "api/super/infra-exchange-delete":user_remote_fn.infra_exchange_delete,
    "api/super/set-account-super":user_remote_fn.set_account_super,
    "api/super/set-account-lock":user_remote_fn.set_account_lock,
    "api/super/set-organisation-lock":user_remote_fn.set_organisation_lock,
    "api/super/set-organisation-tier":user_remote_fn.set_organisation_tier,
    "api/super/set-room-lock":user_remote_fn.set_room_lock,
    "api/super/set-topic-lock":user_remote_fn.set_topic_lock,
    "api/super/user-privilege-add":user_remote_fn.user_privilege_add,
    "api/super/user-privilege-remove":user_remote_fn.user_privilege_remove,
    "api/super/account-token-secret-add":user_remote_fn.account_token_secret_add,
    "api/super/account-token-secret-remove":user_remote_fn.account_token_secret_remove,
    "api/super/account-token-secret-update":user_remote_fn.account_token_secret_update,
    "api/wallet/purchase-statscoin":user_remote_fn.purchase_statscoin,
    "api/wallet/tip-statscoin":user_remote_fn.tip_statscoin,
    "api/account/email-add-additional":user_remote_fn.email_add_additional,
    "api/account/email-verify-additional-resend":user_remote_fn.email_verify_additional_resend,
    "api/account/login":user_remote_fn.login,
    "api/account/password-change":user_remote_fn.password_change,
    "api/account/password-reset":user_remote_fn.password_reset,
    "api/helper/id":user_remote_fn.helper_id,
    "api/helper/ping":user_remote_fn.helper_ping,
    "api/helper/all-routes":user_remote_fn.helper_all_routes,
    "api/view/q":user_remote_fn.view_query,
    "api/view/q-nosync":user_remote_fn.view_query_nosync,
    "api/view/bulk":user_remote_fn.view_bulk,
    "api/view/overview":user_remote_fn.view_overview,
    "api/view/tables":user_remote_fn.view_tables,
    "api/view/methods":user_remote_fn.view_methods,
    "api/view/detail":user_remote_fn.view_detail,
    "api/imagekit/token":user_remote_fn.imagekit_token,
    "api/image/upload":user_remote_fn.upload_image,
    "api/social/token":user_remote_fn.oauth_access_token,
    "api/social/facebook/info":user_remote_fn.oauth_facebook_info,
    "api/social/facebook/login":user_remote_fn.oauth_facebook_login,
    "api/social/facebook/register":user_remote_fn.oauth_facebook_register,
    "api/social/facebook/link":user_remote_fn.oauth_facebook_link,
    "api/social/facebook/is-linked":user_remote_fn.oauth_facebook_is_linked,
    "api/social/coinbase/info":user_remote_fn.oauth_coinbase_info,
    "api/social/coinbase/login":user_remote_fn.oauth_coinbase_login,
    "api/social/coinbase/register":user_remote_fn.oauth_coinbase_register,
    "api/social/coinbase/link":user_remote_fn.oauth_coinbase_link,
    "api/social/coinbase/is-linked":user_remote_fn.oauth_coinbase_is_linked,
    "api/social/github/info":user_remote_fn.oauth_github_info,
    "api/social/github/login":user_remote_fn.oauth_github_login,
    "api/social/github/register":user_remote_fn.oauth_github_register,
    "api/social/github/link":user_remote_fn.oauth_github_link,
    "api/social/github/is-linked":user_remote_fn.oauth_github_is_linked,
    "api/room/room-create":user_remote_fn.room_create,
    "api/organisation/organisation-create":user_remote_fn.organisation_create,
    "api/game/topic-create":user_remote_fn.topic_create,
    "api/game/topic-confirm":user_remote_fn.topic_confirm,
    "api/game/topic-allocate-input":user_remote_fn.topic_allocate_input,
    "api/game/topic-allocate-process":user_remote_fn.topic_allocate_process,
    "api/swap/swap-create":user_remote_fn.swap_create,
    "api/swap/swap-confirm":user_remote_fn.swap_confirm,
    "api/swap/swap-allocate-input":user_remote_fn.swap_allocate_input,
    "api/swap/swap-allocate-process":user_remote_fn.swap_allocate_process,
    "api/swap/swap-reset":user_remote_fn.swap_reset,
    "api/order/place-contract-order":user_remote_fn.place_contract_order,
    "api/order/cancel-contract-order":user_remote_fn.cancel_contract_order,
    "api/order/place-swap-order":user_remote_fn.place_swap_order,
    "api/order/cancel-swap-order":user_remote_fn.cancel_swap_order,
    "api/market/browse":user_remote_fn.get_market,
    "api/market/bulk":user_remote_fn.get_market_bulk,
    "api/market/priority-browse":user_remote_fn.get_market_priority,
    "api/history/contract/init":user_remote_fn.get_contract_history_init,
    "api/history/contract/30sec":user_remote_fn.get_contract_history_30sec,
    "api/history/contract/5min":user_remote_fn.get_contract_history_5min,
    "api/history/contract/1hr":user_remote_fn.get_contract_history_1hr,
    "api/history/contract/1day":user_remote_fn.get_contract_history_1day,
    "api/history/contract/sparkline":user_remote_fn.get_contract_history_sparklines,
    "api/history/swap/init":user_remote_fn.get_swap_history_init,
    "api/history/swap/30sec":user_remote_fn.get_swap_history_30sec,
    "api/history/swap/5min":user_remote_fn.get_swap_history_5min,
    "api/history/swap/1hr":user_remote_fn.get_swap_history_1hr,
    "api/history/swap/1day":user_remote_fn.get_swap_history_1day,
    "api/history/swap/sparkline":user_remote_fn.get_swap_history_sparklines,
    "api/history/stake/30sec":user_remote_fn.get_stake_30sec,
    "api/history/stake/5min":user_remote_fn.get_stake_5min,
    "api/history/stake/1hr":user_remote_fn.get_stake_1hr,
    "api/history/stake/1day":user_remote_fn.get_stake_1day,
    "api/history/stake/sparkline":user_remote_fn.get_stake_sparklines,
    "api/web3/id":user_remote_fn.web3_id,
    "api/web3/ping":user_remote_fn.web3_ping,
    "api/web3/user-address-link":user_remote_fn.web3_user_address_link,
    "api/web3/user-address-verify":user_remote_fn.web3_user_address_verify
  };
}

// statslink.full.internal-remote/init-remote-api [27] 
function init_remote_api(){
  return internal_state.REMOTE_API_reset(make_remote_api());
}

// statslink.full.internal-remote/make-remote-tasks [33] 
function make_remote_tasks(){
  return {
    "api/account/get-privacy-policy":spec_remote_fn.get_privacy_policy,
    "api/account/get-terms-and-conditions":spec_remote_fn.get_terms_and_conditions,
    "api/account/check-nickname-exists":spec_remote_fn.check_nickname_exists,
    "api/account/check-nickname-available":spec_remote_fn.check_nickname_available,
    "api/account/check-email-exists":spec_remote_fn.check_email_exists,
    "api/account/check-email-available":spec_remote_fn.check_email_available,
    "api/account/email-registration-external":spec_remote_fn.email_registration_external,
    "api/account/email-verification":spec_remote_fn.email_verification,
    "api/account/email-verification-resend":spec_remote_fn.email_verification_resend,
    "api/account/create-account":spec_remote_fn.create_account,
    "api/account/password-reset-request":spec_remote_fn.password_reset_request,
    "api/account/login-renew":spec_remote_fn.login_renew,
    "api/account/logout":spec_remote_fn.logout,
    "api/account/net-check":spec_remote_fn.net_check,
    "api/account/profile-modify":spec_remote_fn.profile_modify,
    "api/account/notification-modify":spec_remote_fn.notification_modify,
    "api/account/email-get-all":spec_remote_fn.email_get_all,
    "api/account/email-get-primary":spec_remote_fn.email_get_primary,
    "api/account/email-remove-additional":spec_remote_fn.email_remove_additional,
    "api/account/email-verify-additional":spec_remote_fn.email_verify_additional,
    "api/account/email-set-primary":spec_remote_fn.email_set_primary,
    "api/account/delete-account-check":spec_remote_fn.delete_account_check,
    "api/account/delete-account":spec_remote_fn.delete_account,
    "api/account/oauth-unlink":spec_remote_fn.oauth_unlink,
    "api/account/login":spec_remote_fn.login,
    "api/account/password-change":spec_remote_fn.password_change,
    "api/account/password-reset":spec_remote_fn.password_reset,
    "api/helper/id":spec_remote_fn.helper_id,
    "api/helper/ping":spec_remote_fn.helper_ping,
    "api/helper/all-routes":spec_remote_fn.helper_all_routes,
    "api/view/q":spec_remote_fn.view_query,
    "api/view/q-nosync":spec_remote_fn.view_query_nosync,
    "api/view/bulk":spec_remote_fn.view_bulk,
    "api/view/overview":spec_remote_fn.view_overview,
    "api/view/tables":spec_remote_fn.view_tables,
    "api/view/methods":spec_remote_fn.view_methods,
    "api/view/detail":spec_remote_fn.view_detail,
    "api/account/email-registration":spec_remote_fn.email_registration,
    "api/account/email-add-additional":spec_remote_fn.email_add_additional,
    "api/account/email-verify-additional-resend":spec_remote_fn.email_verify_additional_resend,
    "api/imagekit/token":spec_remote_fn.imagekit_token,
    "api/image/upload":spec_remote_fn.upload_image,
    "api/social/token":spec_remote_fn.oauth_access_token,
    "api/social/facebook/info":spec_remote_fn.oauth_facebook_info,
    "api/social/facebook/login":spec_remote_fn.oauth_facebook_login,
    "api/social/facebook/register":spec_remote_fn.oauth_facebook_register,
    "api/social/facebook/link":spec_remote_fn.oauth_facebook_link,
    "api/social/facebook/is-linked":spec_remote_fn.oauth_facebook_is_linked,
    "api/social/coinbase/info":spec_remote_fn.oauth_coinbase_info,
    "api/social/coinbase/login":spec_remote_fn.oauth_coinbase_login,
    "api/social/coinbase/register":spec_remote_fn.oauth_coinbase_register,
    "api/social/coinbase/link":spec_remote_fn.oauth_coinbase_link,
    "api/social/coinbase/is-linked":spec_remote_fn.oauth_coinbase_is_linked,
    "api/social/github/info":spec_remote_fn.oauth_github_info,
    "api/social/github/login":spec_remote_fn.oauth_github_login,
    "api/social/github/register":spec_remote_fn.oauth_github_register,
    "api/social/github/link":spec_remote_fn.oauth_github_link,
    "api/social/github/is-linked":spec_remote_fn.oauth_github_is_linked,
    "api/brand/brand-create":spec_remote_fn.brand_create,
    "api/brand/brand-transfer-ownership":spec_remote_fn.brand_transfer_ownership,
    "api/brand/brand-remove":spec_remote_fn.brand_remove,
    "api/brand/brand-modify":spec_remote_fn.brand_modify,
    "api/brand/brand-add-member":spec_remote_fn.brand_add_member,
    "api/brand/brand-remove-member":spec_remote_fn.brand_remove_member,
    "api/brand/brand-leave-as-member":spec_remote_fn.brand_leave_as_member,
    "api/brand/brand-add-star":spec_remote_fn.brand_add_star,
    "api/brand/brand-remove-star":spec_remote_fn.brand_remove_star,
    "api/brand/brand-post-wall":spec_remote_fn.brand_post_wall,
    "api/brand/brand-edit-wall":spec_remote_fn.brand_edit_wall,
    "api/brand/brand-upvote-wall":spec_remote_fn.brand_upvote_wall,
    "api/brand/brand-downvote-wall":spec_remote_fn.brand_downvote_wall,
    "api/brand/brand-unvote-wall":spec_remote_fn.brand_unvote_wall,
    "api/brand/brand-affiliation-add":spec_remote_fn.brand_affiliation_add,
    "api/brand/brand-affiliation-remove":spec_remote_fn.brand_affiliation_remove,
    "api/brand/brand-affiliation-request":spec_remote_fn.brand_affiliation_request,
    "api/brand/brand-affiliation-accept":spec_remote_fn.brand_affiliation_accept,
    "api/brand/brand-affiliation-reject":spec_remote_fn.brand_affiliation_reject,
    "api/brand/brand-topic-sponsorship-request":spec_remote_fn.brand_topic_sponsorship_request,
    "api/brand/brand-topic-sponsorship-response":spec_remote_fn.brand_topic_sponsorship_response,
    "api/brand/brand-swap-sponsorship-request":spec_remote_fn.brand_swap_sponsorship_request,
    "api/brand/brand-swap-sponsorship-response":spec_remote_fn.brand_swap_sponsorship_response,
    "api/ethereum/evm-add-chain":spec_remote_fn.evm_add_chain,
    "api/ethereum/evm-remove-chain":spec_remote_fn.evm_remove_chain,
    "api/ethereum/evm-update-chain":spec_remote_fn.evm_update_chain,
    "api/ethereum/evm-add-contract-template":spec_remote_fn.evm_add_contract_template,
    "api/ethereum/evm-remove-contract-template":spec_remote_fn.evm_remove_contract_template,
    "api/ethereum/evm-add-contract":spec_remote_fn.evm_add_contract,
    "api/ethereum/evm-remove-contract":spec_remote_fn.evm_remove_contract,
    "api/ethereum/evm-add-token":spec_remote_fn.evm_add_token,
    "api/ethereum/evm-remove-token":spec_remote_fn.evm_remove_token,
    "api/ethereum/evm-update-token":spec_remote_fn.evm_update_token,
    "api/ethereum/evm-add-faucet-entry":spec_remote_fn.evm_add_faucet_entry,
    "api/ethereum/evm-remove-faucet-entry":spec_remote_fn.evm_remove_faucet_entry,
    "api/ethereum/evm-remove-user-address":spec_remote_fn.evm_remove_user_address,
    "api/ethereum/evm-action-get-status":spec_remote_fn.evm_action_get_status,
    "api/ethereum/evm-action-take":spec_remote_fn.evm_action_take,
    "api/ethereum/evm-action-take-reset":spec_remote_fn.evm_action_take_reset,
    "api/ethereum/evm-action-error":spec_remote_fn.evm_action_error,
    "api/ethereum/evm-action-return":spec_remote_fn.evm_action_return,
    "api/ethereum/evm-account-close-request":spec_remote_fn.evm_account_close_request,
    "api/ethereum/evm-vault-withdraw-create":spec_remote_fn.evm_vault_withdraw_create,
    "api/ethereum/evm-vault-withdraw-cancel":spec_remote_fn.evm_vault_withdraw_cancel,
    "api/ethereum/evm-vault-withdraw-requeue":spec_remote_fn.evm_vault_withdraw_requeue,
    "api/ethereum/evm-vault-wait":spec_remote_fn.evm_vault_wait,
    "api/extern/add-user-api-key":spec_remote_fn.add_user_api_key,
    "api/extern/remove-user-api-key":spec_remote_fn.remove_user_api_key,
    "api/extern/refresh-user-api-key":spec_remote_fn.refresh_user_api_key,
    "api/extern/add-site-application":spec_remote_fn.add_site_application,
    "api/extern/remove-site-application":spec_remote_fn.remove_site_application,
    "api/game/prospect-start-registration":spec_remote_fn.prospect_start_registration,
    "api/game/prospect-start-allocation":spec_remote_fn.prospect_start_allocation,
    "api/game/prospect-start-trading":spec_remote_fn.prospect_start_trading,
    "api/game/prospect-pause-trading":spec_remote_fn.prospect_pause_trading,
    "api/game/prospect-stop-trading":spec_remote_fn.prospect_stop_trading,
    "api/game/prospect-start-resolution":spec_remote_fn.prospect_start_resolution,
    "api/game/prospect-resolve":spec_remote_fn.prospect_resolve,
    "api/game/prospect-start-verdict-check":spec_remote_fn.prospect_start_verdict_check,
    "api/game/prospect-start-verdict":spec_remote_fn.prospect_start_verdict,
    "api/game/prospect-complete":spec_remote_fn.prospect_complete,
    "api/game/topic-discard":spec_remote_fn.topic_discard,
    "api/game/topic-undiscard":spec_remote_fn.topic_undiscard,
    "api/game/topic-lock":spec_remote_fn.topic_lock,
    "api/game/topic-start-registration":spec_remote_fn.topic_start_registration,
    "api/game/topic-start-allocation":spec_remote_fn.topic_start_allocation,
    "api/game/topic-start-trading":spec_remote_fn.topic_start_trading,
    "api/game/topic-pause-trading":spec_remote_fn.topic_pause_trading,
    "api/game/topic-stop-trading":spec_remote_fn.topic_stop_trading,
    "api/game/topic-start-resolution":spec_remote_fn.topic_start_resolution,
    "api/game/topic-start-verdict":spec_remote_fn.topic_start_verdict,
    "api/game/topic-complete":spec_remote_fn.topic_complete,
    "api/game/payout-discard":spec_remote_fn.payout_discard,
    "api/game/payout-winning":spec_remote_fn.payout_winning,
    "api/game/payout-return-no":spec_remote_fn.payout_return_no,
    "api/game/payout-return-yes":spec_remote_fn.payout_return_yes,
    "api/game/buy-stake":spec_remote_fn.buy_stake,
    "api/game/payout-stake":spec_remote_fn.payout_stake,
    "api/game/room-topic-create":spec_remote_fn.room_topic_create,
    "api/game/verdict-announce":spec_remote_fn.verdict_announce,
    "api/game/verdict-lock":spec_remote_fn.verdict_lock,
    "api/game/prospect-confirm-verdict":spec_remote_fn.prospect_confirm_verdict,
    "api/organisation/organisation-transfer-ownership":spec_remote_fn.organisation_transfer_ownership,
    "api/organisation/organisation-remove":spec_remote_fn.organisation_remove,
    "api/organisation/organisation-modify":spec_remote_fn.organisation_modify,
    "api/organisation/organisation-add-member":spec_remote_fn.organisation_add_member,
    "api/organisation/organisation-remove-member":spec_remote_fn.organisation_remove_member,
    "api/organisation/organisation-leave-as-member":spec_remote_fn.organisation_leave_as_member,
    "api/organisation/organisation-set-public-as-member":spec_remote_fn.organisation_set_public_as_member,
    "api/organisation/organisation-add-star":spec_remote_fn.organisation_add_star,
    "api/organisation/organisation-remove-star":spec_remote_fn.organisation_remove_star,
    "api/organisation/organisation-add-rake":spec_remote_fn.organisation_add_rake,
    "api/organisation/organisation-remove-rake":spec_remote_fn.organisation_remove_rake,
    "api/organisation/organisation-add-staking":spec_remote_fn.organisation_add_staking,
    "api/organisation/organisation-remove-staking":spec_remote_fn.organisation_remove_staking,
    "api/organisation/organisation-add-buy-in":spec_remote_fn.organisation_add_buy_in,
    "api/organisation/organisation-remove-buy-in":spec_remote_fn.organisation_remove_buy_in,
    "api/entity/organisation-add-entity-group":spec_remote_fn.organisation_add_entity_group,
    "api/entity/organisation-remove-entity-group":spec_remote_fn.organisation_remove_entity_group,
    "api/entity/organisation-modify-entity-group":spec_remote_fn.organisation_modify_entity_group,
    "api/entity/organisation-add-entity":spec_remote_fn.organisation_add_entity,
    "api/entity/organisation-add-entity-bulk":spec_remote_fn.organisation_add_entity_bulk,
    "api/entity/organisation-modify-entity-tags":spec_remote_fn.organisation_modify_entity_tags,
    "api/entity/organisation-modify-entity":spec_remote_fn.organisation_modify_entity,
    "api/entity/organisation-remove-entity":spec_remote_fn.organisation_remove_entity,
    "api/room/room-check-available":spec_remote_fn.room_check_available,
    "api/room/room-add-star":spec_remote_fn.room_add_star,
    "api/room/room-remove-star":spec_remote_fn.room_remove_star,
    "api/room/room-post-wall":spec_remote_fn.room_post_wall,
    "api/room/room-edit-wall":spec_remote_fn.room_edit_wall,
    "api/room/room-upvote-wall":spec_remote_fn.room_upvote_wall,
    "api/room/room-downvote-wall":spec_remote_fn.room_downvote_wall,
    "api/room/room-unvote-wall":spec_remote_fn.room_unvote_wall,
    "api/room/room-join-invite-send":spec_remote_fn.room_join_invite_send,
    "api/room/room-join-invite-accept":spec_remote_fn.room_join_invite_accept,
    "api/room/room-join-invite-cancel":spec_remote_fn.room_join_invite_cancel,
    "api/room/room-join-invite-reject":spec_remote_fn.room_join_invite_reject,
    "api/room/room-join-request-send":spec_remote_fn.room_join_request_send,
    "api/room/room-join-request-accept":spec_remote_fn.room_join_request_accept,
    "api/room/room-join-request-cancel":spec_remote_fn.room_join_request_cancel,
    "api/room/room-join-request-reject":spec_remote_fn.room_join_request_reject,
    "api/room/room-add-member":spec_remote_fn.room_add_member,
    "api/room/room-remove-member":spec_remote_fn.room_remove_member,
    "api/room/room-activate":spec_remote_fn.room_activate,
    "api/room/room-deactivate":spec_remote_fn.room_deactivate,
    "api/room/room-set-official":spec_remote_fn.room_set_official,
    "api/room/room-modify":spec_remote_fn.room_modify,
    "api/room/room-remove":spec_remote_fn.room_remove,
    "api/room/room-gas-asset-recharge":spec_remote_fn.room_gas_asset_recharge,
    "api/room/room-evm-create-vault-request":spec_remote_fn.room_evm_create_vault_request,
    "api/room/room-evm-account-open-request":spec_remote_fn.room_evm_account_open_request,
    "api/room/room-evm-account-close-request":spec_remote_fn.room_evm_account_close_request,
    "api/swap/swap-start-registration":spec_remote_fn.swap_start_registration,
    "api/swap/swap-start-allocation":spec_remote_fn.swap_start_allocation,
    "api/swap/swap-start-trading":spec_remote_fn.swap_start_trading,
    "api/swap/swap-pause-trading":spec_remote_fn.swap_pause_trading,
    "api/swap/swap-stop-trading":spec_remote_fn.swap_stop_trading,
    "api/swap/swap-start-resolution":spec_remote_fn.swap_start_resolution,
    "api/swap/swap-resolve":spec_remote_fn.swap_resolve,
    "api/swap/swap-complete":spec_remote_fn.swap_complete,
    "api/swap/swap-check-available":spec_remote_fn.swap_check_available,
    "api/swap/swap-modify":spec_remote_fn.swap_modify,
    "api/swap/swap-remove":spec_remote_fn.swap_remove,
    "api/swap/swap-add-star":spec_remote_fn.swap_add_star,
    "api/swap/swap-remove-star":spec_remote_fn.swap_remove_star,
    "api/swap/swap-post-comment":spec_remote_fn.swap_post_comment,
    "api/swap/swap-edit-comment":spec_remote_fn.swap_edit_comment,
    "api/swap/swap-upvote-comment":spec_remote_fn.swap_upvote_comment,
    "api/swap/swap-downvote-comment":spec_remote_fn.swap_downvote_comment,
    "api/swap/swap-unvote-comment":spec_remote_fn.swap_unvote_comment,
    "api/topic/topic-check-available":spec_remote_fn.topic_check_available,
    "api/topic/topic-modify":spec_remote_fn.topic_modify,
    "api/topic/topic-remove":spec_remote_fn.topic_remove,
    "api/topic/topic-arrange-prospects":spec_remote_fn.topic_arrange_prospects,
    "api/topic/topic-add-star":spec_remote_fn.topic_add_star,
    "api/topic/topic-remove-star":spec_remote_fn.topic_remove_star,
    "api/topic/topic-post-wall":spec_remote_fn.topic_post_wall,
    "api/topic/topic-edit-wall":spec_remote_fn.topic_edit_wall,
    "api/topic/topic-upvote-wall":spec_remote_fn.topic_upvote_wall,
    "api/topic/topic-downvote-wall":spec_remote_fn.topic_downvote_wall,
    "api/topic/topic-unvote-wall":spec_remote_fn.topic_unvote_wall,
    "api/topic/topic-add-judge":spec_remote_fn.topic_add_judge,
    "api/topic/topic-remove-judge":spec_remote_fn.topic_remove_judge,
    "api/prospect/prospect-create":spec_remote_fn.prospect_create,
    "api/prospect/prospect-delete":spec_remote_fn.prospect_delete,
    "api/prospect/prospect-add-star":spec_remote_fn.prospect_add_star,
    "api/prospect/prospect-remove-star":spec_remote_fn.prospect_remove_star,
    "api/prospect/prospect-post-comment":spec_remote_fn.prospect_post_comment,
    "api/prospect/prospect-edit-comment":spec_remote_fn.prospect_edit_comment,
    "api/prospect/prospect-upvote-comment":spec_remote_fn.prospect_upvote_comment,
    "api/prospect/prospect-downvote-comment":spec_remote_fn.prospect_downvote_comment,
    "api/prospect/prospect-unvote-comment":spec_remote_fn.prospect_unvote_comment,
    "api/super/abuse-report-create":spec_remote_fn.abuse_report_create,
    "api/super/abuse-report-update":spec_remote_fn.abuse_report_update,
    "api/super/site-var-set":spec_remote_fn.site_var_set,
    "api/super/site-var-delete":spec_remote_fn.site_var_delete,
    "api/super/currency-set":spec_remote_fn.currency_set,
    "api/super/currency-delete":spec_remote_fn.currency_delete,
    "api/super/region-country-set":spec_remote_fn.region_country_set,
    "api/super/region-country-delete":spec_remote_fn.region_country_delete,
    "api/super/region-state-set":spec_remote_fn.region_state_set,
    "api/super/region-state-delete":spec_remote_fn.region_state_delete,
    "api/super/region-city-set":spec_remote_fn.region_city_set,
    "api/super/region-city-delete":spec_remote_fn.region_city_delete,
    "api/super/service-set":spec_remote_fn.service_set,
    "api/super/service-delete":spec_remote_fn.service_delete,
    "api/super/infra-mq-set":spec_remote_fn.infra_mq_set,
    "api/super/infra-mq-delete":spec_remote_fn.infra_mq_delete,
    "api/super/infra-exchange-set":spec_remote_fn.infra_exchange_set,
    "api/super/infra-exchange-delete":spec_remote_fn.infra_exchange_delete,
    "api/super/set-account-super":spec_remote_fn.set_account_super,
    "api/super/set-account-lock":spec_remote_fn.set_account_lock,
    "api/super/set-organisation-lock":spec_remote_fn.set_organisation_lock,
    "api/super/set-organisation-tier":spec_remote_fn.set_organisation_tier,
    "api/super/set-room-lock":spec_remote_fn.set_room_lock,
    "api/super/set-topic-lock":spec_remote_fn.set_topic_lock,
    "api/super/user-privilege-add":spec_remote_fn.user_privilege_add,
    "api/super/user-privilege-remove":spec_remote_fn.user_privilege_remove,
    "api/super/account-token-secret-add":spec_remote_fn.account_token_secret_add,
    "api/super/account-token-secret-remove":spec_remote_fn.account_token_secret_remove,
    "api/super/account-token-secret-update":spec_remote_fn.account_token_secret_update,
    "api/wallet/purchase-statscoin":spec_remote_fn.purchase_statscoin,
    "api/wallet/tip-statscoin":spec_remote_fn.tip_statscoin,
    "api/room/room-create":spec_remote_fn.room_create,
    "api/organisation/organisation-create":spec_remote_fn.organisation_create,
    "api/game/topic-create":spec_remote_fn.topic_create,
    "api/game/topic-confirm":spec_remote_fn.topic_confirm,
    "api/game/topic-allocate-input":spec_remote_fn.topic_allocate_input,
    "api/game/topic-allocate-process":spec_remote_fn.topic_allocate_process,
    "api/swap/swap-create":spec_remote_fn.swap_create,
    "api/swap/swap-confirm":spec_remote_fn.swap_confirm,
    "api/swap/swap-allocate-input":spec_remote_fn.swap_allocate_input,
    "api/swap/swap-allocate-process":spec_remote_fn.swap_allocate_process,
    "api/swap/swap-reset":spec_remote_fn.swap_reset,
    "api/order/place-contract-order":spec_remote_fn.place_contract_order,
    "api/order/cancel-contract-order":spec_remote_fn.cancel_contract_order,
    "api/order/place-swap-order":spec_remote_fn.place_swap_order,
    "api/order/cancel-swap-order":spec_remote_fn.cancel_swap_order,
    "api/market/browse":spec_remote_fn.get_market,
    "api/market/bulk":spec_remote_fn.get_market_bulk,
    "api/market/priority-browse":spec_remote_fn.get_market_priority,
    "api/history/contract/init":spec_remote_fn.get_contract_history_init,
    "api/history/contract/30sec":spec_remote_fn.get_contract_history_30sec,
    "api/history/contract/5min":spec_remote_fn.get_contract_history_5min,
    "api/history/contract/1hr":spec_remote_fn.get_contract_history_1hr,
    "api/history/contract/1day":spec_remote_fn.get_contract_history_1day,
    "api/history/contract/sparkline":spec_remote_fn.get_contract_history_sparklines,
    "api/history/swap/init":spec_remote_fn.get_swap_history_init,
    "api/history/swap/30sec":spec_remote_fn.get_swap_history_30sec,
    "api/history/swap/5min":spec_remote_fn.get_swap_history_5min,
    "api/history/swap/1hr":spec_remote_fn.get_swap_history_1hr,
    "api/history/swap/1day":spec_remote_fn.get_swap_history_1day,
    "api/history/swap/sparkline":spec_remote_fn.get_swap_history_sparklines,
    "api/history/stake/30sec":spec_remote_fn.get_stake_30sec,
    "api/history/stake/5min":spec_remote_fn.get_stake_5min,
    "api/history/stake/1hr":spec_remote_fn.get_stake_1hr,
    "api/history/stake/1day":spec_remote_fn.get_stake_1day,
    "api/history/stake/sparkline":spec_remote_fn.get_stake_sparklines,
    "api/web3/id":spec_remote_fn.web3_id,
    "api/web3/ping":spec_remote_fn.web3_ping,
    "api/web3/user-address-link":spec_remote_fn.web3_user_address_link,
    "api/web3/user-address-verify":spec_remote_fn.web3_user_address_verify
  };
}

// statslink.full.internal-remote/init-remote-tasks [43] 
function init_remote_tasks(){
  return internal_state.REMOTE_TASKS_reset(make_remote_tasks());
}

// statslink.full.internal-remote/remote-db-notify [53] 
function remote_db_notify(event_fn,topic,data,table_name){
  let flat = (null == table_name) ? flatten.flatten_bulk(common_global.get_schema(),data) : flatten.flatten(common_global.get_schema(),table_name,data);
  let changes = k.obj_map(flat,k.obj_keys);
  if(event_fn){
    event_fn({"op":"stream","status":"ok","topic":topic,"body":changes});
  }
}

// statslink.full.internal-remote/remote-db-call [72] 
function remote_db_call(event_fn,data){
  if(data){
    let db_sync = data["db/sync"];
    if(db_sync){
      remote_db_notify(event_fn,base_event.EV_DB_SYNC,db_sync,null);
    }
    let db_remove = data["db/remove"];
    if(db_remove){
      remote_db_notify(event_fn,base_event.EV_DB_REMOVE,db_remove,null);
    }
  }
}

// statslink.full.internal-remote/remote-call-notify [91] 
function remote_call_notify(event_fn,notify,entry){
  let meta = k.obj_pick(entry,["id","schema","url"]);
  return {
    "success":function (data){
        if(event_fn){
          event_fn({
            "op":"stream",
            "status":"ok",
            "topic":base_event.EV_REMOTE,
            "body":data,
            "meta":meta
          });
          if(notify){
            for(let topic of notify){
              event_fn({
                "op":"stream",
                "status":"ok",
                "topic":topic,
                "body":data,
                "meta":meta
              });
            };
          }
        }
        remote_db_call(event_fn,data);
        return data;
      },
    "error":function (data){
        if(event_fn){
          event_fn({
            "op":"stream",
            "status":"error",
            "topic":base_event.EV_REMOTE,
            "body":data,
            "meta":meta
          });
        }
        throw data;
      }
  };
}

// statslink.full.internal-remote/remote-call-view [121] 
function remote_call_view(event_fn,args){
  let [table_name] = args;
  return {
    "success":function (data){
        if(event_fn){
          event_fn({
            "op":"stream",
            "status":"ok",
            "topic":base_event.EV_DB_VIEW,
            "table":table_name,
            "body":data
          });
        }
        remote_db_notify(event_fn,base_event.EV_DB_SYNC,data,table_name);
        return data;
      },
    "error":function (data){
        if(event_fn){
          event_fn({
            "op":"stream",
            "status":"error",
            "topic":base_event.EV_DB_VIEW,
            "table":table_name,
            "body":data
          });
        }
        throw data;
      }
  };
}

// statslink.full.internal-remote/remote-prep-entry [147] 
function remote_prep_entry(spec,args){
  let entry = spec["handler"]["fn"];
  let {flags,input} = entry;
  let {debug} = flags;
  if(debug){
    let dinput = k.arr_clone(input);
    let dargs = k.arr_clone(args);
    dinput.pop();
    dargs.pop();
    return [k.obj_assign(k.obj_clone(entry),{"input":dinput}),dargs];
  }
  return [entry,args];
}

// statslink.full.internal-remote/remote-call-spec [165] 
function remote_call_spec(url){
  return (internal_state.REMOTE_TASKS())[url];
}

// statslink.full.internal-remote/remote-call-handler [171] 
function remote_call_handler(url){
  return (internal_state.REMOTE_API())[url];
}

// statslink.full.internal-remote/remote-call [177] 
function remote_call(url,args,event_fn,user_key){
  let spec = remote_call_spec(url);
  if(!spec){
    return [false,{"status":"error","tag":"worker/spec-not-found"}];
  }
  let [entry,eargs] = remote_prep_entry(spec,args);
  let [c_ok,c_err] = internal_local.local_args_check(entry,eargs);
  if(!c_ok){
    return [c_ok,c_err];
  }
  let handler = remote_call_handler(url);
  let {notify,view} = spec;
  let cb = view ? remote_call_view(event_fn,args) : remote_call_notify(event_fn,notify,entry);
  let out = handler(internal_state.get_user(user_key),...args,cb);
  return [true,out];
}

var MODULE = {
  "make_remote_api":make_remote_api,
  "init_remote_api":init_remote_api,
  "make_remote_tasks":make_remote_tasks,
  "init_remote_tasks":init_remote_tasks,
  "remote_db_notify":remote_db_notify,
  "remote_db_call":remote_db_call,
  "remote_call_notify":remote_call_notify,
  "remote_call_view":remote_call_view,
  "remote_prep_entry":remote_prep_entry,
  "remote_call_spec":remote_call_spec,
  "remote_call_handler":remote_call_handler,
  "remote_call":remote_call
};

module.exports = MODULE