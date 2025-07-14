const api = require("./base-api")

const user_event = require("./user-event")

const k = require("@xtalk/lang/base-lib")

const util_handle = require("@xtalk/lang/util-handle")

// statslink.impl.user-call/user-call [13] 
function user_call(user,url,input,body,is_auth,cb){
  let {token} = user;
  return   (  (util_handle.run_handle(
        api.api_task(),
        [url,token,input,body,is_auth,user],
        util_handle.to_handle_callback(user_event.call_sync_wrap(user,cb))
      ))[1])["task"];
}

// statslink.impl.user-call/user-handle [26] 
function user_handle(entry,user,args,is_auth,cb){
  let {flags,input,url} = entry;
  let {secured} = flags;
  let input_args = secured ? k.arr_slice(args,0,-1 - 1) : args;
  let input_secured = secured ? JSON.stringify(args[args.length + -1]) : null;
  return user_call(user,url,input_args,input_secured,is_auth,cb);
}

var MODULE = {"user_call":user_call,"user_handle":user_handle};

module.exports = MODULE