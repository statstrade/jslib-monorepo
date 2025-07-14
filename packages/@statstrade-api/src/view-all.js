const view_super = require("./view-super")

const view_swap = require("./view-swap")

const view_topic = require("./view-topic")

const view_support = require("./view-support")

const view_harness = require("./view-harness")

const common_global = require("./db-global")

const view_brand = require("./view-brand")

const view_user = require("./view-user")

const view_extern = require("./view-extern")

const view_blockchain = require("./view-blockchain")

const view_room = require("./view-room")

// statsapi.list.view-all/init-views-base [20] 
function init_views_base(){
  return common_global.init_views([
    view_support.make_views(),
    view_user.make_views(),
    view_blockchain.make_views(),
    view_extern.make_views()
  ]);
}

// statsapi.list.view-all/init-views-manage [30] 
function init_views_manage(){
  return common_global.init_views([
    view_topic.make_views(),
    view_room.make_views(),
    view_swap.make_views(),
    view_brand.make_views()
  ]);
}

// statsapi.list.view-all/init-views-admin [40] 
function init_views_admin(){
  return common_global.init_views([view_super.make_views(),view_harness.make_views()]);
}

// statsapi.list.view-all/get-views [48] 
var get_views = common_global.get_views;

var MODULE = {
  "init_views_base":init_views_base,
  "init_views_manage":init_views_manage,
  "init_views_admin":init_views_admin,
  "get_views":get_views
};

module.exports = MODULE