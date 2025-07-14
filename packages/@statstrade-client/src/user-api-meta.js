const fn_topic = require("@statstrade/api/fn-topic")

const fn_util = require("@statstrade/api/fn-util")

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

const k = require("@xtalk/lang")

const net_image = require("@statstrade/api/net-image")

const fn_ethereum = require("@statstrade/api/fn-ethereum")

const net_social = require("@statstrade/api/net-social")

const net_trade = require("@statstrade/api/net-trade")

const net_manage = require("@statstrade/api/net-manage")

// statslink.impl.user-api-meta/API [28] 
var API = k.arr_foldl([
  fn_account.ROUTES,
  fn_brand.ROUTES,
  fn_ethereum.ROUTES,
  fn_organisation.ROUTES,
  fn_util.ROUTES,
  fn_room.ROUTES,
  fn_swap.ROUTES,
  fn_topic.ROUTES,
  fn_game.ROUTES,
  fn_super.ROUTES,
  fn_wallet.ROUTES,
  net_account.ROUTES,
  net_general.ROUTES,
  net_image.ROUTES,
  net_social.ROUTES,
  net_manage.ROUTES,
  net_trade.ROUTES,
  net_web3.ROUTES
],k.obj_assign,{});

var MODULE = {"API":API};

module.exports = MODULE