const common_global = require("./db-global")

const k = require("@xtalk/lang")

const check = require("@xtalk/db/base-check")

const base_scope = require("@xtalk/db/base-scope")

const base_view = require("@xtalk/db/base-view")

// statsapi.list.db-view/view-local-transform [19] 
function view_local_transform(view_entry){
  if(null == view_entry){
    return null;
  }
  let {view} = view_entry;
  let tview = k.walk(view,k.identity,function (res){
    if((null != res) && k.objp(res) && (res["__deleted__"] != null)){
      delete res["__deleted__"];
    }
    return res;
  });
  return k.obj_assign(k.obj_clone(view_entry),{"view":tview});
}

// statsapi.list.db-view/view-query-check [40] 
function view_query_check(entry,args,drop_first){
  let targs = entry["input"];
  if(drop_first){
    targs = [...targs];
    targs.shift();
  }
  let [l_ok,l_err] = check.check_args_length(args,targs);
  if(!l_ok){
    return [l_ok,l_err];
  }
  let [t_ok,t_err] = check.check_args_type(args,targs);
  if(!t_ok){
    return [t_ok,t_err];
  }
  return [true];
}

// statsapi.list.db-view/view-query-return-entry [57] 
function view_query_return_entry(table,return_query,data_only){
  return {
    "input":[],
    "return":"jsonb",
    "flags":{},
    "view":{
        "table":table,
        "type":"return",
        "query":data_only ? k.arr_filter(return_query,function (obj){
            return "string" == (typeof obj);
          }) : return_query,
        "access":{"roles":{}},
        "guards":[]
      }
  };
}

// statsapi.list.db-view/view-query-return-combined [73] 
function view_query_return_combined(table,return_entry,return_query,data_only){
  let query_mixin = data_only ? k.arr_filter(return_query,function (obj){
    return "string" == (typeof obj);
  }) : return_query;
  let query = k.get_in(return_entry,["view","query"]);
  k.arr_append(query,query_mixin);
  return return_entry;
}

// statsapi.list.db-view/view-query-entries [84] 
function view_query_entries(table,qm,data_only){
  let {return_method,return_query,select_method} = qm;
  let views = common_global.get_views();
  let select_entry = (null != select_method) ? k.get_in(views,[table,"select",select_method]) : null;
  let return_entry = null;
  if(return_method && return_query){
    return_entry = view_query_return_combined(
      table,
      k.clone_nested(k.get_in(views,[table,"return",return_method])),
      return_query,
      data_only
    );
  }
  else if(return_method){
    return_entry = k.get_in(views,[table,"return",return_method]);
  }
  else if(return_query){
    return_entry = view_query_return_entry(table,return_query,data_only);
  }
  return {"select_entry":select_entry,"return_entry":return_entry};
}

// statsapi.list.db-view/view-triggers [112] 
function view_triggers(table,qm){
  let qe = view_query_entries(table,qm);
  let {return_entry,select_entry} = qe;
  let schema = common_global.get_schema();
  let select_triggers = select_entry ? base_scope.get_query_tables(schema,table,select_entry["view"]["query"],{}) : {};
  let return_triggers = return_entry ? base_scope.get_linked_tables(schema,table,return_entry["view"]["query"]) : {};
  return k.obj_assign(select_triggers,return_triggers);
}

// statsapi.list.db-view/view-guard-args [137] 
function view_guard_args(guard,account_id,input_args,input_spec){
  let arg_map = {"{{<%>}}":account_id};
  for(let i = 0; i < input_spec.length; ++i){
    let e = input_spec[i];
    arg_map["{{" + e["symbol"] + "}}"] = input_args[i];
  };
  return k.arr_map(guard["args"],function (k){
    return arg_map[k] || k;
  });
}

// statsapi.list.db-view/view-overview [154] 
function view_overview(){
  return base_view.all_overview(common_global.get_views());
}

// statsapi.list.db-view/view-tables [164] 
function view_tables(){
  return k.obj_keys(common_global.get_views());
}

// statsapi.list.db-view/view-methods [174] 
function view_methods(table){
  return {
    "return":base_view.all_keys(common_global.get_views(),table,"return"),
    "select":base_view.all_keys(common_global.get_views(),table,"select")
  };
}

// statsapi.list.db-view/view-detail [189] 
function view_detail(table,type,id){
  return k.get_in(common_global.get_views(),[table,type,id]);
}

var MODULE = {
  "view_local_transform":view_local_transform,
  "view_query_check":view_query_check,
  "view_query_return_entry":view_query_return_entry,
  "view_query_return_combined":view_query_return_combined,
  "view_query_entries":view_query_entries,
  "view_triggers":view_triggers,
  "view_guard_args":view_guard_args,
  "view_overview":view_overview,
  "view_tables":view_tables,
  "view_methods":view_methods,
  "view_detail":view_detail
};

module.exports = MODULE