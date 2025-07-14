const http = require("@xtalk/lang/util-http")

const k = require("@xtalk/lang")

const base_interval = require("@xtalk/lang/base-interval")

const event_log = require("@xtalk/lang/event-log")

const net_stream = require("@statstrade/api/net-stream")

const base_system = require("./base-system")

// statslink.impl.base-stream/stream-create-conn [19] 
function stream_create_conn(uri,log_fn,stream,opts){
  let {log} = stream;
  let {on_close,on_message,on_open} = opts;
  let open_fn = function (conn){
    stream["active"] = true;
    if(on_open){
      on_open(conn);
    }
  };
  let close_fn = function (conn){
    stream["active"] = false;
    if(on_close){
      on_close(conn);
    }
  };
  let message_fn = function (msg){
    if(on_message){
      on_message(msg);
    }
    log_fn(log,msg);
  };
  let full = base_system.get_ws(uri);
  let conn = http.ws_connect(full,k.obj_assign(
    opts,
    {"on_open":open_fn,"on_message":message_fn,"on_close":close_fn}
  ));
  return conn;
}

// statslink.impl.base-stream/stream-create [48] 
function stream_create(uri,log_fn,opts){
  let {object_fn,on_close,on_message,on_open} = opts;
  let log = event_log.new_log({},null);
  let stream = object_fn ? object_fn() : {"::":"stream.ws"};
  stream["log"] = log;
  stream["instance"] = stream_create_conn(uri,log_fn,stream,opts);
  let interval = base_interval.start_interval(function (){
    let {instance} = stream;
    if(!http.ws_activep(instance)){
      stream["instance"] = stream_create_conn(uri,log_fn,stream,opts);
    }
  },30000);
  stream["interval"] = interval;
  return stream;
}

// statslink.impl.base-stream/stream-active? [73] 
function stream_activep(stream){
  return stream["active"] && http.ws_activep(stream["instance"]);
}

// statslink.impl.base-stream/stream-close [80] 
function stream_close(stream){
  if(stream_activep(stream)){
    http.ws_close(stream["instance"]);
  }
  stream["active"] = false;
  stream["instance"] = null;
  let {interval} = stream;
  if(null != interval){
    base_interval.stop_interval(interval);
  }
  stream["interval"] = null;
  return stream;
}

// statslink.impl.base-stream/log-trade-line [98] 
function log_trade_line(log,msg){
  let {data} = msg;
  if(data){
    let line = JSON.parse(data);
    event_log.queue_entry(log,line,function (){
      return data;
    },k.identity,line[3]);
  }
}

// statslink.impl.base-stream/connect-delta [111] 
function connect_delta(book,opts){
  return stream_create(
    net_stream.delta_stream["url"] + "?id=" + encodeURIComponent(book.toUpperCase()),
    log_trade_line,
    opts
  );
}

// statslink.impl.base-stream/connect-ticker [121] 
function connect_ticker(opts){
  return stream_create(net_stream.ticker_stream["url"],log_trade_line,opts);
}

// statslink.impl.base-stream/log-priority-line [130] 
function log_priority_line(log,msg){
  let {data} = msg;
  if(data){
    let line = JSON.parse(data);
    event_log.queue_entry(log,line,function (){
      return data;
    },k.identity);
  }
}

// statslink.impl.base-stream/connect-priority [142] 
function connect_priority(book,opts){
  return stream_create(
    net_stream.priority_stream["url"] + "?id=" + encodeURIComponent(book.toUpperCase()),
    log_priority_line,
    opts
  );
}

// statslink.impl.base-stream/log-user-line [156] 
function log_user_line(log,msg){
  let {data} = msg;
  if(data){
    let input = JSON.parse(data);
    let [rid,sid,entry] = input;
    let lu = {
      "P":function (e){
            return e["tx"]["id"];
          },
      "R":function (e){
            return e["reconcile"]["id"];
          }
    };
    let key_fn = lu[[sid]] || (function (e){
      return e["msg_id"];
    });
    event_log.queue_entry(log,entry,key_fn,k.identity,Date.now());
  }
}

// statslink.impl.base-stream/connect-user [174] 
function connect_user(token,account_id,opts){
  return stream_create(
    net_stream.user_stream["url"] + "?id=" + encodeURIComponent(account_id) + "&token=" + encodeURIComponent(token),
    log_user_line,
    opts
  );
}

// statslink.impl.base-stream/connect-harness [184] 
function connect_harness(account_ids,opts){
  return stream_create(
    "stream/harness?id=" + k.arr_join(account_ids,","),
    log_user_line,
    opts
  );
}

var MODULE = {
  "stream_create_conn":stream_create_conn,
  "stream_create":stream_create,
  "stream_activep":stream_activep,
  "stream_close":stream_close,
  "log_trade_line":log_trade_line,
  "connect_delta":connect_delta,
  "connect_ticker":connect_ticker,
  "log_priority_line":log_priority_line,
  "connect_priority":connect_priority,
  "log_user_line":log_user_line,
  "connect_user":connect_user,
  "connect_harness":connect_harness
};

module.exports = MODULE