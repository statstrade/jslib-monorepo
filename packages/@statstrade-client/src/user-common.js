const base_stream = require("./base-stream")

const event_log_latest = require("@xtalk/lang/event-log-latest")

const k = require("@xtalk/lang")

// statslink.impl.user-common/new-user [11] 
function new_user(ref_fn,user_id){
  ref_fn = (ref_fn || k.identity);
  return {
    "::":"statslink.user",
    "id":user_id || "default",
    "token":null,
    "config":{},
    "db":null,
    "log_latest":event_log_latest.new_log_latest({}),
    "streams":{
        "ticker":null,
        "user":null,
        "delta":{},
        "priority":{},
        "harness":null
      },
    "ref_fn":ref_fn
  };
}

// statslink.impl.user-common/set-token [30] 
function set_token(user,token){
  user["token"] = token;
  return token;
}

// statslink.impl.user-common/del-token [38] 
function del_token(user){
  return user["token"] = null;
}

// statslink.impl.user-common/get-token [45] 
function get_token(user){
  return user["token"];
}

// statslink.impl.user-common/has-token [52] 
function has_token(user){
  return user["token"] != null;
}

// statslink.impl.user-common/get-config [59] 
function get_config(user){
  return user["config"];
}

// statslink.impl.user-common/set-config [66] 
function set_config(user,key,value){
  return user["config"][key] = value;
}

// statslink.impl.user-common/token-decode [75] 
function token_decode(token){
  return JSON.parse(atob((token.split("."))[0]));
}

// statslink.impl.user-common/token-account-id [84] 
function token_account_id(token){
  return (token_decode(token))["id"];
}

// statslink.impl.user-common/get-account-id [91] 
function get_account_id(user){
  let {token} = user;
  if(token){
    return token_account_id(token);
  }
}

// statslink.impl.user-common/set-db [100] 
function set_db(user,db){
  let {ref_fn} = user;
  user["db"] = ref_fn(db);
  return user;
}

// statslink.impl.user-common/get-db [108] 
function get_db(user){
  return user["db"];
}

// statslink.impl.user-common/connect-raw [118] 
function connect_raw(user,opts,tag,connect_fn,connect_args){
  let {ref_fn,streams} = user;
  let curr = streams[tag];
  if(null != curr){
    throw "Already Connected";
  }
  curr = connect_fn(...connect_args,opts);
  streams[tag] = ref_fn(curr);
  return curr;
}

// statslink.impl.user-common/disconnect-raw [132] 
function disconnect_raw(user,tag){
  let {ref_fn,streams} = user;
  let curr = streams[tag];
  if(null != curr){
    base_stream.stream_close(curr);
    streams[tag] = null;
  }
  return curr;
}

// statslink.impl.user-common/connect-ticker [147] 
function connect_ticker(user,opts){
  let out = connect_raw(user,opts,"ticker",base_stream.connect_ticker,[]);
  return out;
}

// statslink.impl.user-common/disconnect-ticker [158] 
function disconnect_ticker(user){
  return disconnect_raw(user,"ticker");
}

// statslink.impl.user-common/connect-user [165] 
function connect_user(user,account_id,opts){
  let {ref_fn,streams,token} = user;
  if(null == token){
    throw "Token Required";
  }
  return connect_raw(user,opts,"user",base_stream.connect_user,[token,account_id]);
}

// statslink.impl.user-common/disconnect-user [178] 
function disconnect_user(user){
  return disconnect_raw(user,"user");
}

// statslink.impl.user-common/connect-delta [186] 
function connect_delta(user,book,opts){
  let {ref_fn,streams} = user;
  let curr = k.get_in(streams,["delta",book]);
  if(null != curr){
    throw "Already Connected";
  }
  curr = base_stream.connect_delta(book,opts);
  streams["delta"][book] = ref_fn(curr);
  return curr;
}

// statslink.impl.user-common/disconnect-delta [202] 
function disconnect_delta(user,book){
  let {streams} = user;
  let curr = k.get_in(streams,["delta",book]);
  if(null != curr){
    base_stream.stream_close(curr);
    delete streams["delta"][book];
  }
  return curr;
}

// statslink.impl.user-common/connect-priority [215] 
function connect_priority(user,book,opts){
  let {ref_fn,streams} = user;
  let curr = k.get_in(streams,["priority",book]);
  if(null != curr){
    throw "Already Connected";
  }
  curr = base_stream.connect_priority(book,opts);
  streams["priority"][book] = ref_fn(curr);
  return curr;
}

// statslink.impl.user-common/disconnect-priority [231] 
function disconnect_priority(user,book){
  let {streams} = user;
  let curr = k.get_in(streams,["priority",book]);
  if(null != curr){
    base_stream.stream_close(curr);
    delete streams["priority"][book];
  }
  return curr;
}

// statslink.impl.user-common/connect-harness [244] 
function connect_harness(user,account_ids,opts){
  let {streams} = user;
  return connect_raw(user,opts,"harness",base_stream.connect_harness,[account_ids]);
}

// statslink.impl.user-common/disconnect-harness [256] 
function disconnect_harness(user){
  return disconnect_raw(user,"harness");
}

// statslink.impl.user-common/get-summary [268] 
function get_summary(user){
  let {db,streams,token} = user;
  let {delta,harness,priority,ticker} = streams;
  return {
    "token":null != token,
    "db":null != db,
    "streams":{
        "ticker":null != ticker,
        "user":null != streams["user"],
        "delta":k.obj_map(delta,function (x){
            return null != x;
          }),
        "priority":k.obj_map(priority,function (x){
            return null != x;
          }),
        "harness":null != harness
      }
  };
}

// statslink.impl.user-common/get-log-user [283] 
function get_log_user(user){
  let stream = user["streams"]["user"];
  if(null != stream){
    return stream["log"]["processed"];
  }
}

// statslink.impl.user-common/get-log-ticker [292] 
function get_log_ticker(user){
  let stream = user["streams"]["ticker"];
  if(null != stream){
    return stream["log"]["processed"];
  }
}

// statslink.impl.user-common/get-log-delta [301] 
function get_log_delta(user,book){
  let stream = user["streams"]["delta"][book];
  if(null != stream){
    return stream["log"]["processed"];
  }
}

// statslink.impl.user-common/get-log-priority [310] 
function get_log_priority(user,book){
  let stream = user["streams"]["priority"][book];
  if(null != stream){
    return stream["log"]["processed"];
  }
}

var MODULE = {
  "new_user":new_user,
  "set_token":set_token,
  "del_token":del_token,
  "get_token":get_token,
  "has_token":has_token,
  "get_config":get_config,
  "set_config":set_config,
  "token_decode":token_decode,
  "token_account_id":token_account_id,
  "get_account_id":get_account_id,
  "set_db":set_db,
  "get_db":get_db,
  "connect_raw":connect_raw,
  "disconnect_raw":disconnect_raw,
  "connect_ticker":connect_ticker,
  "disconnect_ticker":disconnect_ticker,
  "connect_user":connect_user,
  "disconnect_user":disconnect_user,
  "connect_delta":connect_delta,
  "disconnect_delta":disconnect_delta,
  "connect_priority":connect_priority,
  "disconnect_priority":disconnect_priority,
  "connect_harness":connect_harness,
  "disconnect_harness":disconnect_harness,
  "get_summary":get_summary,
  "get_log_user":get_log_user,
  "get_log_ticker":get_log_ticker,
  "get_log_delta":get_log_delta,
  "get_log_priority":get_log_priority
};

module.exports = MODULE