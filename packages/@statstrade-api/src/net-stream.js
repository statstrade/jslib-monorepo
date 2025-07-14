const ut = require("@xtalk/db/base-util")

// statsnet.interface.net-stream/ticker-stream [15] 
var ticker_stream = {
  "input":[],
  "return":"stream",
  "id":"ticker_redis_main",
  "flags":{},
  "url":"stream/ticker",
  "encode":false
};

// statsnet.interface.net-stream/delta-stream [15] 
var delta_stream = {
  "input":[],
  "return":"stream",
  "id":"delta_redis_main",
  "flags":{},
  "url":"stream/delta",
  "encode":false
};

// statsnet.interface.net-stream/user-stream [15] 
var user_stream = {
  "input":[],
  "return":"stream",
  "id":"user_redis_main",
  "flags":{},
  "url":"stream/user",
  "encode":false
};

// statsnet.interface.net-stream/priority-stream [15] 
var priority_stream = {
  "input":[],
  "return":"stream",
  "id":"priority_redis_main",
  "flags":{},
  "url":"stream/priority",
  "encode":false
};

// statsnet.interface.net-stream/ROUTES [21] 
var ROUTES = {
  "ticker_stream":ticker_stream,
  "delta_stream":delta_stream,
  "user_stream":user_stream,
  "priority_stream":priority_stream
};

// statsnet.interface.net-stream/make-routes [24] 
function make_routes(){
  return ut.collect_routes_object(ROUTES);
}

var MODULE = {
  "ticker_stream":ticker_stream,
  "delta_stream":delta_stream,
  "user_stream":user_stream,
  "priority_stream":priority_stream,
  "ROUTES":ROUTES,
  "make_routes":make_routes
};

module.exports = MODULE