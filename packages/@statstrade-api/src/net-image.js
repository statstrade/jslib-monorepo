const ut = require("@xtalk/db/base-util")

// statsnet.interface.net-image/imagekit-token [13] 
var imagekit_token = {
  "input":[{"symbol":"token","type":"text"}],
  "return":"jsonb",
  "id":"imagekit_token",
  "flags":{},
  "url":"api/imagekit/token",
  "encode":true
};

// statsnet.interface.net-image/upload-image [16] 
var upload_image = {
  "input":[
    {"symbol":"i_token","type":"uuid"},
    {"symbol":"i_metadata","type":"jsonb"}
  ],
  "return":"jsonb",
  "id":"upload_image",
  "flags":{},
  "url":"api/image/upload",
  "encode":true
};

// statsnet.interface.net-image/ROUTES [19] 
var ROUTES = {"imagekit_token":imagekit_token,"upload_image":upload_image};

// statsnet.interface.net-image/make-routes [22] 
function make_routes(){
  return ut.collect_routes_object(ROUTES);
}

var MODULE = {
  "imagekit_token":imagekit_token,
  "upload_image":upload_image,
  "ROUTES":ROUTES,
  "make_routes":make_routes
};

module.exports = MODULE