const rt = require("@xtalk/lang/base-runtime")

const k = require("@xtalk/lang/base-lib")

const event_log = require("@xtalk/lang/event-log")

const util_handle = require("@xtalk/lang/util-handle")

const base_remote = require("./base-remote")

const base_system = require("./base-system")

// statslink.impl.base-api/routes-active [14] 
function routes_active(){
  return rt.xt_item_get("statslink.impl.base-api","routes-active",function (){
    return {};
  });
}

// statslink.impl.base-api/routes-active-reset [14] 
function routes_active_reset(val){
  return rt.xt_var_set("statslink.impl.base-api/routes-active",val);
}

// statslink.impl.base-api/make-entry [20] 
function make_entry(url,token,input,output,receipt,start_time,end_time){
  return {
    "id":receipt["id"],
    "url":url,
    "token":token,
    "input":input,
    "output":output,
    "start_time":start_time,
    "end_time":end_time
  };
}

// statslink.impl.base-api/log-entry [32] 
function log_entry(log,entry){
  return event_log.queue_entry(log,entry,k.id_fn,k.identity,function (e){
    return e["end_time"];
  });
}

// statslink.impl.base-api/api-task-handler [43] 
function api_task_handler(input){
  let [url,token,args,body,is_auth] = input;
  return base_remote.remote_call(
    url,
    args,
    token,
    {},
    true,
    body || "",
    ((url == "api/view/q") || (url == "api/view/q-nosync")) ? args[0] : "",
    is_auth
  );
}

// statslink.impl.base-api/api-task-wrap [60] 
function api_task_wrap(run_fn,args,receipt,task){
  let [url,token,input,user] = args;
  let active = routes_active();
  let key = JSON.stringify(args);
  let t = Date.now();
  let prev = active[key];
  if(prev && ((t - prev["t"]) < 20000)){
    return prev;
  }
  let proc = new Promise(function (resolve,reject){
    resolve(run_fn());
  }).then(function (output){
    delete active[key];
    let entry = make_entry(url,token,input,output,receipt,t,Date.now());
    log_entry(base_system.remote_log(),entry);
    if(user && user["log"]){
      log_entry(user["log"],entry);
    }
    return output;
  }).catch(function (err){
    delete active[key];
    throw err;
  });
  let curr = {"t":t,"task":proc,"receipt":receipt};
  active[key] = curr;
  return curr;
}

// statslink.impl.base-api/api-task [87] 
function api_task(){
  return rt.xt_item_get("statslink.impl.base-api","api-task",function (){
    return util_handle.new_handle(
      api_task_handler,
      [util_handle.plugin_counts,util_handle.plugin_timing],
      {"name":"API","wrap_fn":api_task_wrap}
    );
  });
}

// statslink.impl.base-api/api-task-reset [87] 
function api_task_reset(val){
  return rt.xt_var_set("statslink.impl.base-api/api-task",val);
}

// statslink.impl.base-api/api-call [98] 
function api_call(url,token,input,body,is_auth,cb){
  return util_handle.run_handle(
    api_task(),
    [url,token,input,body,is_auth],
    util_handle.to_handle_callback(cb)
  );
}

var MODULE = {
  "routes_active":routes_active,
  "routes_active_reset":routes_active_reset,
  "make_entry":make_entry,
  "log_entry":log_entry,
  "api_task_handler":api_task_handler,
  "api_task_wrap":api_task_wrap,
  "api_task":api_task,
  "api_task_reset":api_task_reset,
  "api_call":api_call
};

module.exports = MODULE