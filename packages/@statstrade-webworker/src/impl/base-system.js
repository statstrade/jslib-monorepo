const rt = require("@xtalk/lang/base-runtime")

const k = require("@xtalk/lang/base-lib")

const ev_log = require("@xtalk/lang/event-log")

// statslink.impl.base-system/LOCAL-DB [11] 
var LOCAL_DB = "STATS/LOCAL_DB";

// statslink.impl.base-system/get-remote [17] 
function get_remote(){
  return rt.xt_item_get("statslink.impl.base-system","REMOTE",function (){
    return {
      "secured":false,
      "host":"127.0.0.1",
      "port":"8080",
      "auth_host":null,
      "auth_port":null
    };
  });
}

// statslink.impl.base-system/get-url [31] 
function get_url(path){
  let remote = get_remote();
  let {host,port,secured} = remote;
  return "http" + (secured ? "s" : "") + "://" + host + ":" + port + "/" + path;
}

// statslink.impl.base-system/get-url-auth [40] 
function get_url_auth(path){
  let remote = get_remote();
  let {auth_host,auth_port,host,port,secured} = remote;
  return "http" + (secured ? "s" : "") + "://" + (auth_host || host) + ":" + (auth_port || port) + "/" + path;
}

// statslink.impl.base-system/get-ws [51] 
function get_ws(path){
  let remote = get_remote();
  let {host,port,secured,ws_host,ws_port} = remote;
  return "ws" + (secured ? "s" : "") + "://" + (ws_host || host) + ":" + (ws_port || port) + "/" + path;
}

// statslink.impl.base-system/set-remote [64] 
function set_remote(m){
  let out = k.obj_assign(k.obj_clone(get_remote()),m);
  rt.xt_item_set("statslink.impl.base-system","REMOTE",out);
  return out;
}

// statslink.impl.base-system/system-log [80] 
function system_log(){
  return rt.xt_item_get("statslink.impl.base-system","system-log",function (){
    return ev_log.new_log({});
  });
}

// statslink.impl.base-system/system-log-reset [80] 
function system_log_reset(val){
  return rt.xt_var_set("statslink.impl.base-system/system-log",val);
}

// statslink.impl.base-system/event-log [91] 
function event_log(){
  return rt.xt_item_get("statslink.impl.base-system","event-log",function (){
    return ev_log.new_log({});
  });
}

// statslink.impl.base-system/event-log-reset [91] 
function event_log_reset(val){
  return rt.xt_var_set("statslink.impl.base-system/event-log",val);
}

// statslink.impl.base-system/remote-log [101] 
function remote_log(){
  return rt.xt_item_get("statslink.impl.base-system","remote-log",function (){
    return ev_log.new_log({});
  });
}

// statslink.impl.base-system/remote-log-reset [101] 
function remote_log_reset(val){
  return rt.xt_var_set("statslink.impl.base-system/remote-log",val);
}

// statslink.impl.base-system/remote-log-errors [107] 
function remote_log_errors(){
  return rt.xt_item_get("statslink.impl.base-system","remote-log-errors",function (){
    return k.arr_filter((remote_log())["processed"],function (m){
      return "error" == m["output"]["status"];
    });
  });
}

// statslink.impl.base-system/remote-log-errors-reset [107] 
function remote_log_errors_reset(val){
  return rt.xt_var_set("statslink.impl.base-system/remote-log-errors",val);
}

// statslink.impl.base-system/remote-log-last [117] 
function remote_log_last(){
  let entry = ev_log.get_last(remote_log());
  if(entry){
    return [k.id_fn(entry),entry];
  }
}

var MODULE = {
  "LOCAL_DB":LOCAL_DB,
  "get_remote":get_remote,
  "get_url":get_url,
  "get_url_auth":get_url_auth,
  "get_ws":get_ws,
  "set_remote":set_remote,
  "system_log":system_log,
  "system_log_reset":system_log_reset,
  "event_log":event_log,
  "event_log_reset":event_log_reset,
  "remote_log":remote_log,
  "remote_log_reset":remote_log_reset,
  "remote_log_errors":remote_log_errors,
  "remote_log_errors_reset":remote_log_errors_reset,
  "remote_log_last":remote_log_last
};

module.exports = MODULE