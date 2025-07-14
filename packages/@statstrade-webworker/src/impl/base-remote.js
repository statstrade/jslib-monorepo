const k = require("@xtalk/lang/base-lib")

const http = require("@xtalk/lang/util-http")

const net_general = require("@statstrade/api/net-general")

const base_system = require("./base-system")

// statslink.impl.base-remote/remote-call [12] 
function remote_call(uri,args,token,cb,api,body,params,is_auth){
  let path = uri + (params ? ("?" + params) : "");
  let full = is_auth ? base_system.get_url_auth(path) : base_system.get_url(path);
  let success_fn = cb["success"];
  let error_fn = cb["error"];
  let finally_fn = cb["finally"];
  let headers = {"Args":JSON.stringify(args)};
  if("string" == (typeof token)){
    headers["Token"] = token;
  }
  return new Promise(function (resolve,reject){
    resolve(http.fetch_call(
      full,
      {"method":"POST","headers":headers,"body":body,"as":"json"}
    ));
  }).then(function (res){
    if("error" == res["status"]){
      if(error_fn){
        return error_fn(res);
      }
      else{
        throw res;
      }
    }
    else{
      let out = api ? res : res["data"];
      if(success_fn){
        return success_fn(out);
      }
      else{
        return out;
      }
    }
  }).catch(function (err){
    if(error_fn){
      return error_fn(err);
    }
    else{
      throw err;
    }
  }).finally(function (){
    if(finally_fn){
      finally_fn();
    }
  });
}

// statslink.impl.base-remote/remote-single [52] 
function remote_single(route,args,token,cb,api,body,params){
  let {flags,url} = route;
  return remote_call(url,args,token,cb,api,body,params);
}

// statslink.impl.base-remote/remote-route [59] 
function remote_route(routes,id,args,token,cb,api,body){
  let {url} = routes[id];
  return remote_call(url,args,token,cb,api,body);
}

// statslink.impl.base-remote/remote-view-select [66] 
function remote_view_select(sel_view,args,token,cb,api){
  let {view} = sel_view;
  let {table,tag} = view;
  return remote_single(
    net_general.view_query,
    [table,{"select_method":tag,"select_args":args}],
    token,
    cb,
    api,
    "",
    table
  );
}

// statslink.impl.base-remote/remote-view-return [81] 
function remote_view_return(ret_view,id,args,token,cb,api){
  let {view} = ret_view;
  let {query,table,tag,type} = view;
  return remote_single(net_general.view_query,[
    table,
    {"return_method":tag,"return_id":id,"return_args":args}
  ],token,cb,api,"",table);
}

// statslink.impl.base-remote/remote-view-combined [97] 
function remote_view_combined(sel_view,sel_args,ret_view,ret_args,ret_omit,token,cb,api){
  let table = sel_view["view"]["table"];
  return remote_single(net_general.view_query,[
    table,
    {
      "select_method":sel_view["view"]["tag"],
      "select_args":sel_args,
      "return_method":ret_view["view"]["tag"],
      "return_args":ret_args,
      "return_omit":ret_omit
    }
  ],token,cb,api,"",table);
}

var MODULE = {
  "remote_call":remote_call,
  "remote_single":remote_single,
  "remote_route":remote_route,
  "remote_view_select":remote_view_select,
  "remote_view_return":remote_view_return,
  "remote_view_combined":remote_view_combined
};

module.exports = MODULE