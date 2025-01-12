import {
  require_prop_types
} from "./chunk-PNDONJFS.js";
import {
  require_react
} from "./chunk-WNPTCGAH.js";
import {
  __commonJS,
  __toESM
} from "./chunk-5WRI5ZAA.js";

// node_modules/jsonp/node_modules/ms/index.js
var require_ms = __commonJS({
  "node_modules/jsonp/node_modules/ms/index.js"(exports, module) {
    var s = 1e3;
    var m = s * 60;
    var h = m * 60;
    var d = h * 24;
    var y = d * 365.25;
    module.exports = function(val, options) {
      options = options || {};
      var type = typeof val;
      if (type === "string" && val.length > 0) {
        return parse(val);
      } else if (type === "number" && isNaN(val) === false) {
        return options.long ? fmtLong(val) : fmtShort(val);
      }
      throw new Error(
        "val is not a non-empty string or a valid number. val=" + JSON.stringify(val)
      );
    };
    function parse(str) {
      str = String(str);
      if (str.length > 100) {
        return;
      }
      var match = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(
        str
      );
      if (!match) {
        return;
      }
      var n = parseFloat(match[1]);
      var type = (match[2] || "ms").toLowerCase();
      switch (type) {
        case "years":
        case "year":
        case "yrs":
        case "yr":
        case "y":
          return n * y;
        case "days":
        case "day":
        case "d":
          return n * d;
        case "hours":
        case "hour":
        case "hrs":
        case "hr":
        case "h":
          return n * h;
        case "minutes":
        case "minute":
        case "mins":
        case "min":
        case "m":
          return n * m;
        case "seconds":
        case "second":
        case "secs":
        case "sec":
        case "s":
          return n * s;
        case "milliseconds":
        case "millisecond":
        case "msecs":
        case "msec":
        case "ms":
          return n;
        default:
          return void 0;
      }
    }
    function fmtShort(ms) {
      if (ms >= d) {
        return Math.round(ms / d) + "d";
      }
      if (ms >= h) {
        return Math.round(ms / h) + "h";
      }
      if (ms >= m) {
        return Math.round(ms / m) + "m";
      }
      if (ms >= s) {
        return Math.round(ms / s) + "s";
      }
      return ms + "ms";
    }
    function fmtLong(ms) {
      return plural(ms, d, "day") || plural(ms, h, "hour") || plural(ms, m, "minute") || plural(ms, s, "second") || ms + " ms";
    }
    function plural(ms, n, name) {
      if (ms < n) {
        return;
      }
      if (ms < n * 1.5) {
        return Math.floor(ms / n) + " " + name;
      }
      return Math.ceil(ms / n) + " " + name + "s";
    }
  }
});

// node_modules/jsonp/node_modules/debug/src/debug.js
var require_debug = __commonJS({
  "node_modules/jsonp/node_modules/debug/src/debug.js"(exports, module) {
    exports = module.exports = createDebug.debug = createDebug["default"] = createDebug;
    exports.coerce = coerce;
    exports.disable = disable;
    exports.enable = enable;
    exports.enabled = enabled;
    exports.humanize = require_ms();
    exports.names = [];
    exports.skips = [];
    exports.formatters = {};
    var prevTime;
    function selectColor(namespace) {
      var hash = 0, i;
      for (i in namespace) {
        hash = (hash << 5) - hash + namespace.charCodeAt(i);
        hash |= 0;
      }
      return exports.colors[Math.abs(hash) % exports.colors.length];
    }
    function createDebug(namespace) {
      function debug() {
        if (!debug.enabled) return;
        var self = debug;
        var curr = +/* @__PURE__ */ new Date();
        var ms = curr - (prevTime || curr);
        self.diff = ms;
        self.prev = prevTime;
        self.curr = curr;
        prevTime = curr;
        var args = new Array(arguments.length);
        for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i];
        }
        args[0] = exports.coerce(args[0]);
        if ("string" !== typeof args[0]) {
          args.unshift("%O");
        }
        var index = 0;
        args[0] = args[0].replace(/%([a-zA-Z%])/g, function(match, format) {
          if (match === "%%") return match;
          index++;
          var formatter = exports.formatters[format];
          if ("function" === typeof formatter) {
            var val = args[index];
            match = formatter.call(self, val);
            args.splice(index, 1);
            index--;
          }
          return match;
        });
        exports.formatArgs.call(self, args);
        var logFn = debug.log || exports.log || console.log.bind(console);
        logFn.apply(self, args);
      }
      debug.namespace = namespace;
      debug.enabled = exports.enabled(namespace);
      debug.useColors = exports.useColors();
      debug.color = selectColor(namespace);
      if ("function" === typeof exports.init) {
        exports.init(debug);
      }
      return debug;
    }
    function enable(namespaces) {
      exports.save(namespaces);
      exports.names = [];
      exports.skips = [];
      var split = (typeof namespaces === "string" ? namespaces : "").split(/[\s,]+/);
      var len = split.length;
      for (var i = 0; i < len; i++) {
        if (!split[i]) continue;
        namespaces = split[i].replace(/\*/g, ".*?");
        if (namespaces[0] === "-") {
          exports.skips.push(new RegExp("^" + namespaces.substr(1) + "$"));
        } else {
          exports.names.push(new RegExp("^" + namespaces + "$"));
        }
      }
    }
    function disable() {
      exports.enable("");
    }
    function enabled(name) {
      var i, len;
      for (i = 0, len = exports.skips.length; i < len; i++) {
        if (exports.skips[i].test(name)) {
          return false;
        }
      }
      for (i = 0, len = exports.names.length; i < len; i++) {
        if (exports.names[i].test(name)) {
          return true;
        }
      }
      return false;
    }
    function coerce(val) {
      if (val instanceof Error) return val.stack || val.message;
      return val;
    }
  }
});

// node_modules/jsonp/node_modules/debug/src/browser.js
var require_browser = __commonJS({
  "node_modules/jsonp/node_modules/debug/src/browser.js"(exports, module) {
    exports = module.exports = require_debug();
    exports.log = log;
    exports.formatArgs = formatArgs;
    exports.save = save;
    exports.load = load;
    exports.useColors = useColors;
    exports.storage = "undefined" != typeof chrome && "undefined" != typeof chrome.storage ? chrome.storage.local : localstorage();
    exports.colors = [
      "lightseagreen",
      "forestgreen",
      "goldenrod",
      "dodgerblue",
      "darkorchid",
      "crimson"
    ];
    function useColors() {
      if (typeof window !== "undefined" && window.process && window.process.type === "renderer") {
        return true;
      }
      return typeof document !== "undefined" && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || // is firebug? http://stackoverflow.com/a/398120/376773
      typeof window !== "undefined" && window.console && (window.console.firebug || window.console.exception && window.console.table) || // is firefox >= v31?
      // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
      typeof navigator !== "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || // double check webkit in userAgent just in case we are in a worker
      typeof navigator !== "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
    }
    exports.formatters.j = function(v) {
      try {
        return JSON.stringify(v);
      } catch (err) {
        return "[UnexpectedJSONParseError]: " + err.message;
      }
    };
    function formatArgs(args) {
      var useColors2 = this.useColors;
      args[0] = (useColors2 ? "%c" : "") + this.namespace + (useColors2 ? " %c" : " ") + args[0] + (useColors2 ? "%c " : " ") + "+" + exports.humanize(this.diff);
      if (!useColors2) return;
      var c = "color: " + this.color;
      args.splice(1, 0, c, "color: inherit");
      var index = 0;
      var lastC = 0;
      args[0].replace(/%[a-zA-Z%]/g, function(match) {
        if ("%%" === match) return;
        index++;
        if ("%c" === match) {
          lastC = index;
        }
      });
      args.splice(lastC, 0, c);
    }
    function log() {
      return "object" === typeof console && console.log && Function.prototype.apply.call(console.log, console, arguments);
    }
    function save(namespaces) {
      try {
        if (null == namespaces) {
          exports.storage.removeItem("debug");
        } else {
          exports.storage.debug = namespaces;
        }
      } catch (e) {
      }
    }
    function load() {
      var r;
      try {
        r = exports.storage.debug;
      } catch (e) {
      }
      if (!r && typeof process !== "undefined" && "env" in process) {
        r = process.env.DEBUG;
      }
      return r;
    }
    exports.enable(load());
    function localstorage() {
      try {
        return window.localStorage;
      } catch (e) {
      }
    }
  }
});

// node_modules/jsonp/index.js
var require_jsonp = __commonJS({
  "node_modules/jsonp/index.js"(exports, module) {
    var debug = require_browser()("jsonp");
    module.exports = jsonp2;
    var count = 0;
    function noop() {
    }
    function jsonp2(url, opts, fn) {
      if ("function" == typeof opts) {
        fn = opts;
        opts = {};
      }
      if (!opts) opts = {};
      var prefix = opts.prefix || "__jp";
      var id = opts.name || prefix + count++;
      var param = opts.param || "callback";
      var timeout = null != opts.timeout ? opts.timeout : 6e4;
      var enc = encodeURIComponent;
      var target = document.getElementsByTagName("script")[0] || document.head;
      var script;
      var timer;
      if (timeout) {
        timer = setTimeout(function() {
          cleanup();
          if (fn) fn(new Error("Timeout"));
        }, timeout);
      }
      function cleanup() {
        if (script.parentNode) script.parentNode.removeChild(script);
        window[id] = noop;
        if (timer) clearTimeout(timer);
      }
      function cancel() {
        if (window[id]) {
          cleanup();
        }
      }
      window[id] = function(data) {
        debug("jsonp got", data);
        cleanup();
        if (fn) fn(null, data);
      };
      url += (~url.indexOf("?") ? "&" : "?") + param + "=" + enc(id);
      url = url.replace("?&", "?");
      debug('jsonp req "%s"', url);
      script = document.createElement("script");
      script.src = url;
      target.parentNode.insertBefore(script, target);
      return cancel;
    }
  }
});

// node_modules/to-querystring/lib/to-querystring.min.js
var require_to_querystring_min = __commonJS({
  "node_modules/to-querystring/lib/to-querystring.min.js"(exports, module) {
    !function(t, o) {
      "object" == typeof exports && "object" == typeof module ? module.exports = o() : "function" == typeof define && define.amd ? define("to-querystring", [], o) : "object" == typeof exports ? exports["to-querystring"] = o() : t["to-querystring"] = o();
    }(exports, function() {
      return (() => {
        "use strict";
        var t = { d: (o2, e2) => {
          for (var n2 in e2) t.o(e2, n2) && !t.o(o2, n2) && Object.defineProperty(o2, n2, { enumerable: true, get: e2[n2] });
        }, o: (t2, o2) => Object.prototype.hasOwnProperty.call(t2, o2), r: (t2) => {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t2, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t2, "__esModule", { value: true });
        } }, o = {};
        function e(t2) {
          return e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t3) {
            return typeof t3;
          } : function(t3) {
            return t3 && "function" == typeof Symbol && t3.constructor === Symbol && t3 !== Symbol.prototype ? "symbol" : typeof t3;
          }, e(t2);
        }
        t.r(o), t.d(o, { default: () => a });
        var n = encodeURIComponent;
        function r(t2, o2, r2, c2, a2) {
          var i = c2 && a2.arrayPrefix || "";
          if ("object" === e(o2)) {
            var f = "".concat(t2).concat(i).concat(r2 && "]", "[");
            return "".concat(u(o2, "".concat(r2).concat(f), a2));
          }
          return r2 && r2.length ? "".concat(r2).concat(t2, "]").concat(i, "=").concat(n(o2)) : "".concat(t2).concat(i, "=").concat(n(o2));
        }
        function c(t2, o2, e2, n2) {
          return o2.map(function(o3) {
            return r(t2, o3, e2, true, n2);
          }).join("&");
        }
        function u(t2) {
          var o2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "", e2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
          return (Array.isArray(t2) ? t2.map(function(t3, n2) {
            return r("".concat(n2), t3, o2, true, e2);
          }) : Object.keys(t2).filter(function(o3) {
            return void 0 !== t2[o3];
          }).map(function(n2) {
            return t2[n2] && Array.isArray(t2[n2]) ? c("".concat(n2), t2[n2], o2, e2) : r(n2, t2[n2], o2, false, e2);
          })).join("&").replace(/%20/g, "+");
        }
        const a = u;
        return o;
      })();
    });
  }
});

// node_modules/react-mailchimp-subscribe/es/index.js
var import_react2 = __toESM(require_react());
var import_prop_types = __toESM(require_prop_types());
var import_jsonp = __toESM(require_jsonp());
var import_to_querystring = __toESM(require_to_querystring_min());

// node_modules/react-mailchimp-subscribe/es/SimpleForm.js
var import_react = __toESM(require_react());
var SimpleForm = function SimpleForm2(_ref) {
  var status = _ref.status, message = _ref.message, className = _ref.className, style = _ref.style, onSubmitted = _ref.onSubmitted;
  var input = void 0;
  var submit = function submit2() {
    return input && input.value.indexOf("@") > -1 && onSubmitted({
      EMAIL: input.value
    });
  };
  return import_react.default.createElement(
    "div",
    { className, style },
    status === "sending" && import_react.default.createElement(
      "div",
      { style: { color: "blue" } },
      "sending..."
    ),
    status === "error" && import_react.default.createElement("div", {
      style: { color: "red" },
      dangerouslySetInnerHTML: { __html: message }
    }),
    status === "success" && import_react.default.createElement("div", {
      style: { color: "green" },
      dangerouslySetInnerHTML: { __html: message }
    }),
    import_react.default.createElement("input", {
      ref: function ref(node) {
        return input = node;
      },
      type: "email",
      placeholder: "Your email"
    }),
    import_react.default.createElement(
      "button",
      { onClick: submit },
      "Submit"
    )
  );
};
var SimpleForm_default = SimpleForm;

// node_modules/react-mailchimp-subscribe/es/index.js
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return call && (typeof call === "object" || typeof call === "function") ? call : self;
}
function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}
var getAjaxUrl = function getAjaxUrl2(url) {
  return url.replace("/post?", "/post-json?");
};
var MailchimpSubscribe = function(_React$Component) {
  _inherits(MailchimpSubscribe2, _React$Component);
  function MailchimpSubscribe2() {
    var _temp, _this, _ret;
    _classCallCheck(this, MailchimpSubscribe2);
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {
      status: null,
      message: null
    }, _this.subscribe = function(data) {
      var params = (0, import_to_querystring.default)(data);
      var url = getAjaxUrl(_this.props.url) + "&" + params;
      _this.setState({
        status: "sending",
        message: null
      }, function() {
        return (0, import_jsonp.default)(url, {
          param: "c"
        }, function(err, data2) {
          if (err) {
            _this.setState({
              status: "error",
              message: err
            });
          } else if (data2.result !== "success") {
            _this.setState({
              status: "error",
              message: data2.msg
            });
          } else {
            _this.setState({
              status: "success",
              message: data2.msg
            });
          }
        });
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }
  MailchimpSubscribe2.prototype.render = function render2() {
    return this.props.render({
      subscribe: this.subscribe,
      status: this.state.status,
      message: this.state.message
    });
  };
  return MailchimpSubscribe2;
}(import_react2.default.Component);
MailchimpSubscribe.propTypes = true ? {
  render: import_prop_types.default.func,
  url: import_prop_types.default.string.isRequired
} : {};
MailchimpSubscribe.defaultProps = {
  render: function render(_ref) {
    var subscribe = _ref.subscribe, status = _ref.status, message = _ref.message;
    return import_react2.default.createElement(SimpleForm_default, {
      status,
      message,
      onSubmitted: function onSubmitted(formData) {
        return subscribe(formData);
      }
    });
  }
};
var es_default = MailchimpSubscribe;
export {
  es_default as default
};
//# sourceMappingURL=react-mailchimp-subscribe.js.map
