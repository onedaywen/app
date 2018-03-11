webpackJsonp([1],{

/***/ 355:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_14_1_1_vue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(358);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_14_1_1_vue_loader_lib_selector_type_script_index_0_index_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_14_1_1_vue_loader_lib_selector_type_script_index_0_index_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_14_1_1_vue_loader_lib_selector_type_script_index_0_index_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_14_1_1_vue_loader_lib_selector_type_script_index_0_index_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_14_1_1_vue_loader_lib_template_compiler_index_id_data_v_1badc801_hasScoped_false_buble_transforms_node_modules_vue_loader_14_1_1_vue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(372);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_14_1_1_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(99);
var disposed = false
function injectStyle (context) {
  if (disposed) return
  __webpack_require__(362)
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_14_1_1_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_14_1_1_vue_loader_lib_selector_type_script_index_0_index_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_14_1_1_vue_loader_lib_template_compiler_index_id_data_v_1badc801_hasScoped_false_buble_transforms_node_modules_vue_loader_14_1_1_vue_loader_lib_selector_type_template_index_0_index_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_14_1_1_vue_loader_lib_template_compiler_index_id_data_v_1badc801_hasScoped_false_buble_transforms_node_modules_vue_loader_14_1_1_vue_loader_lib_selector_type_template_index_0_index_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/index/index.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1badc801", Component.options)
  } else {
    hotAPI.reload("data-v-1badc801", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 358:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(366);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _index2.default; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/***/ }),

/***/ 362:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(363);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(98).default
var update = add("2a1961bd", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/_css-loader@0.28.10@css-loader/index.js!../../../node_modules/_vue-loader@14.1.1@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-1badc801\",\"scoped\":false,\"sourceMap\":false}!../../../node_modules/_less-loader@4.0.6@less-loader/dist/cjs.js!../../../node_modules/_vue-loader@14.1.1@vue-loader/lib/selector.js?type=styles&index=0!./index.vue", function() {
     var newContent = require("!!../../../node_modules/_css-loader@0.28.10@css-loader/index.js!../../../node_modules/_vue-loader@14.1.1@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-1badc801\",\"scoped\":false,\"sourceMap\":false}!../../../node_modules/_less-loader@4.0.6@less-loader/dist/cjs.js!../../../node_modules/_vue-loader@14.1.1@vue-loader/lib/selector.js?type=styles&index=0!./index.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 363:
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(364);
exports = module.exports = __webpack_require__(97)(false);
// imports


// module
exports.push([module.i, "\n.index .index-content {\n  background: url(" + escape(__webpack_require__(365)) + ");\n}\n.index .index-content .nav-list {\n  height: 0.53333333rem;\n}\n.index .index-content .nav-list > li {\n  width: 0.25rem;\n  height: 0.26666667rem;\n  padding-top: 0.2rem;\n  box-sizing: border-box;\n  float: left;\n}\n.index .index-content .nav-list > li > img {\n  display: block;\n  margin: 0 auto;\n  width: 0.2rem;\n  height: 0.2rem;\n}\n.index .index-content .nav-list > li > p {\n  font-size: 0.04rem;\n  text-align: center;\n}\n.index .index-content .img-list {\n  margin-top: 0.26666667rem;\n}\n.index .index-content .img-list > li {\n  margin-bottom: 0.02666667rem;\n}\n.index .index-content .img-list > li .img-item {\n  width: 0.26666667rem;\n  height: auto;\n  float: left;\n}\n.index .index-content .img-list > li .img-desc {\n  width: 0.73333333rem;\n  float: left;\n  box-sizing: border-box;\n  font-size: 0.04rem;\n  padding: 0.01333333rem 0.01333333rem 0.01333333rem 0.01333333rem;\n}\n", ""]);

// exports


/***/ }),

/***/ 364:
/***/ (function(module, exports) {

module.exports = function escape(url) {
    if (typeof url !== 'string') {
        return url
    }
    // If url is already wrapped in quotes, remove them
    if (/^['"].*['"]$/.test(url)) {
        url = url.slice(1, -1);
    }
    // Should url be wrapped?
    // See https://drafts.csswg.org/css-values-3/#urls
    if (/["'() \t\n]/.test(url)) {
        return '"' + url.replace(/"/g, '\\"').replace(/\n/g, '\\n') + '"'
    }

    return url
}


/***/ }),

/***/ 365:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/1.838347a2ec412113f4fb6b78170ad6dc.jpg";

/***/ }),

/***/ 366:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _ajax = __webpack_require__(367);

var _ajax2 = _interopRequireDefault(_ajax);

var _vuex = __webpack_require__(65);

var _index = __webpack_require__(368);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
	data: function data() {
		return {
			title: '图片展示页面'
		};
	},


	computed: (0, _vuex.mapState)({
		index: function index(state) {
			return state.index;
		},
		navList: function navList(state) {
			return state.index.navList;
		},
		imglist: function imglist(state) {
			return state.index.imglist;
		}

	}),

	created: function created() {
		var _this = this;

		if (!this.$store.index) {
			this.$store.registerModule('index', _index2.default);
		}
		document.title = this.title;
		this.$nextTick(function () {

			_this.getData();
		});
	},


	methods: {
		getData: function getData() {
			var param = {
				method: 'post',
				url: '/f/d',
				data: {
					a: 10,
					b: 100
				},
				headers: {
					a: [100, 200],
					b: { x: 10, y: 'yyyyyyyy' }
				}
				// timeout: 1000,
			};
			var p = (0, _ajax2.default)(param);
			p.then(function (data) {
				console.log(data);
			});
			// p.abort();
		}
	}
};

/***/ }),

/***/ 367:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var ArrayPrototype = Array.prototype;
var isObject = function isObject(obj) {
	return obj !== null && (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object';
};
var isArray = function isArray(arr) {
	return ArrayPrototype.toString.call(arr) === '[object Array]';
};

var METHODS = ['GET', 'HEAD', 'POST', 'PUT', 'DELETE', 'CONNECT', 'OPTIONS', 'TRACE', 'PATCH'];
var EVENTS = ['abort', 'error', 'loadstart', 'load', 'loadend', 'progress', 'timeout'];

var setHeaders = function setHeaders(xhr, headers) {
	for (var i in headers) {
		if (headers.hasOwnProperty(i)) {
			var headerVal = headers[i];
			if (isArray(headerVal) || isObject(headerVal)) {
				headerVal = JSON.stringify(headerVal);
			}
			xhr.setRequestHeader(i, headerVal);
		}
	}
};

var ajax = function ajax(param) {
	if (!isObject(param)) {
		throw new Error('request param must be an Object');
	}
	if (!param.url || typeof param.url !== 'string') {
		throw new Error('request url error');
	}

	var xhr = new XMLHttpRequest();

	var url = param.url;
	var method = param.method.toUpperCase();
	var async = param.async === false ? false : true;
	var data = param.data || {};
	var headers = param.headers || {};
	var events = param.events || {};

	xhr.timeout = param.timeout || 0;

	if (!METHODS.includes(method)) {
		throw new Error('request method error');
	}

	if (method === 'GET') {
		url += '?';
		for (var i in data) {
			if (data.hasOwnProperty(i)) {
				url += i + '=' + data[i] + '&';
			}
		}
		url = url.substring(0, url.lastIndexOf('&'));
	}

	var p = new Promise(function (resolve, reject) {
		xhr.addEventListener('readystatechange', function (e) {
			if (xhr.readyState === 4) {
				if (xhr.status === 200 || xhr.status === 304) {
					var res = {};
					try {
						res = JSON.parse(xhr.responseText);
					} catch (err) {
						res = xhr.responseText;
					}
					resolve(res);
				} else {
					reject(e);
				}
			}
		}, false);

		['abort', 'error', 'timeout'].forEach(function (evt) {
			xhr.addEventListener(evt, function (e) {
				reject(e);
			}, false);
		});
	});

	xhr.open(method, url, async);

	setHeaders(xhr, headers);

	xhr.send(data);

	p.abort = function () {
		return xhr.abort();
	};
	p.getResponseHeader = function (headerName) {
		return xhr.getResponseHeader(headerName);
	};
	p.getAllResponseHeaders = function () {
		return xhr.getAllResponseHeaders();
	};

	return p;
};

module.exports = ajax;

/***/ }),

/***/ 368:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _vue = __webpack_require__(47);

var _vue2 = _interopRequireDefault(_vue);

var _vuex = __webpack_require__(65);

var _vuex2 = _interopRequireDefault(_vuex);

var _state = __webpack_require__(369);

var _state2 = _interopRequireDefault(_state);

var _mutations = __webpack_require__(370);

var _mutations2 = _interopRequireDefault(_mutations);

var _actions = __webpack_require__(371);

var _actions2 = _interopRequireDefault(_actions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_vue2.default.use(_vuex2.default);

var store = new _vuex2.default.Store({
	state: _state2.default,
	mutations: _mutations2.default,
	actions: _actions2.default
});

exports.default = store;

/***/ }),

/***/ 369:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
	navList: [{
		src: '../../..//common/images/1.jpg',
		name: '找攻略'
	}, {
		src: 'src/common/images/2.jpg',
		name: '看游记'
	}, {
		src: 'src/common/images/3.jpg',
		name: '问达人'
	}, {
		src: 'src/common/images/1.jpg',
		name: '结伴'
	}, {
		src: 'src/common/images/2.jpg',
		name: '酒店'
	}, {
		src: 'src/common/images/3.jpg',
		name: '旅行商城'
	}, {
		src: 'src/common/images/3.jpg',
		name: '机票'
	}, {
		src: 'src/common/images/3.jpg',
		name: '当地玩乐'
	}],

	imglist: [{
		src: 'src/common/images/1.jpg',
		itemName: '阿萨德肌肤可拉上来看见对方24234'
	}, {
		src: 'src/common/images/2.jpg',
		itemName: '瓦尔缇欧尔特人叫苦连天'
	}, {
		src: 'src/common/images/3.jpg',
		itemName: '温特温柔特里克认同'
	}, {
		src: 'src/common/images/1.jpg',
		itemName: '阿萨德肌肤可拉上来看见对方'

	}, {
		src: 'src/common/images/2.jpg',
		itemName: '瓦尔缇欧尔特人叫苦连天'
	}, {
		src: 'src/common/images/3.jpg',
		itemName: '温特温柔特里克认同'
	}, {
		src: 'src/common/images/1.jpg',
		itemName: '阿萨德肌肤可拉上来看见对方'
	}, {
		src: 'src/common/images/2.jpg',
		itemName: '瓦尔缇欧尔特人叫苦连天'
	}, {
		src: 'src/common/images/3.jpg',
		itemName: '温特温柔特里克认同'
	}, {
		src: 'src/common/images/1.jpg',
		itemName: '阿萨德肌肤可拉上来看见对方'

	}, {
		src: 'src/common/images/2.jpg',
		itemName: '瓦尔缇欧尔特人叫苦连天'
	}, {
		src: 'src/common/images/3.jpg',
		itemName: '温特温柔特里克认同'
	}, {
		src: 'src/common/images/1.jpg',
		itemName: '阿萨德肌肤可拉上来看见对方'
	}, {
		src: 'src/common/images/2.jpg',
		itemName: '瓦尔缇欧尔特人叫苦连天'
	}, {
		src: 'src/common/images/3.jpg',
		itemName: '温特温柔特里克认同'
	}, {
		src: 'src/common/images/1.jpg',
		itemName: '阿萨德肌肤可拉上来看见对方'

	}, {
		src: 'src/common/images/2.jpg',
		itemName: '瓦尔缇欧尔特人叫苦连天'
	}, {
		src: 'src/common/images/3.jpg',
		itemName: '温特温柔特里克认同'
	}, {
		src: 'src/common/images/1.jpg',
		itemName: '阿萨德肌肤可拉上来看见对方'
	}, {
		src: 'src/common/images/2.jpg',
		itemName: '瓦尔缇欧尔特人叫苦连天'
	}, {
		src: 'src/common/images/3.jpg',
		itemName: '温特温柔特里克认同'
	}, {
		src: 'src/common/images/1.jpg',
		itemName: '阿萨德肌肤可拉上来看见对方'

	}, {
		src: 'src/common/images/2.jpg',
		itemName: '瓦尔缇欧尔特人叫苦连天'
	}, {
		src: 'src/common/images/3.jpg',
		itemName: '温特温柔特里克认同'
	}, {
		src: 'src/common/images/1.jpg',
		itemName: '阿萨德肌肤可拉上来看见对方'
	}, {
		src: 'src/common/images/2.jpg',
		itemName: '瓦尔缇欧尔特人叫苦连天'
	}, {
		src: 'src/common/images/3.jpg',
		itemName: '温特温柔特里克认同'
	}, {
		src: 'src/common/images/1.jpg',
		itemName: '阿萨德肌肤可拉上来看见对方'

	}, {
		src: 'src/common/images/2.jpg',
		itemName: '瓦尔缇欧尔特人叫苦连天'
	}, {
		src: 'src/common/images/3.jpg',
		itemName: '温特温柔特里克认同'
	}, {
		src: 'src/common/images/1.jpg',
		itemName: '阿萨德肌肤可拉上来看见对方'
	}, {
		src: 'src/common/images/2.jpg',
		itemName: '瓦尔缇欧尔特人叫苦连天'
	}, {
		src: 'src/common/images/3.jpg',
		itemName: '温特温柔特里克认同'
	}, {
		src: 'src/common/images/1.jpg',
		itemName: '阿萨德肌肤可拉上来看见对方'

	}, {
		src: 'src/common/images/2.jpg',
		itemName: '瓦尔缇欧尔特人叫苦连天'
	}, {
		src: 'src/common/images/3.jpg',
		itemName: '温特温柔特里克认同'
	}, {
		src: 'src/common/images/1.jpg',
		itemName: '阿萨德肌肤可拉上来看见对方'
	}, {
		src: 'src/common/images/2.jpg',
		itemName: '瓦尔缇欧尔特人叫苦连天'
	}, {
		src: 'src/common/images/3.jpg',
		itemName: '温特温柔特里克认同'
	}, {
		src: 'src/common/images/1.jpg',
		itemName: '阿萨德肌肤可拉上来看见对方'

	}, {
		src: 'src/common/images/2.jpg',
		itemName: '瓦尔缇欧尔特人叫苦连天'
	}, {
		src: 'src/common/images/3.jpg',
		itemName: '温特温柔特里克认同'
	}, {
		src: 'src/common/images/1.jpg',
		itemName: '阿萨德肌肤可拉上来看见对方'
	}, {
		src: 'src/common/images/2.jpg',
		itemName: '瓦尔缇欧尔特人叫苦连天'
	}, {
		src: 'src/common/images/3.jpg',
		itemName: '温特温柔特里克认同'
	}, {
		src: 'src/common/images/1.jpg',
		itemName: '阿萨德肌肤可拉上来看见对方'

	}, {
		src: 'src/common/images/2.jpg',
		itemName: '瓦尔缇欧尔特人叫苦连天'
	}, {
		src: 'src/common/images/3.jpg',
		itemName: '温特温柔特里克认同'
	}, {
		src: 'src/common/images/1.jpg',
		itemName: '阿萨德肌肤可拉上来看见对方'
	}, {
		src: 'src/common/images/2.jpg',
		itemName: '瓦尔缇欧尔特人叫苦连天'
	}, {
		src: 'src/common/images/3.jpg',
		itemName: '温特温柔特里克认同'
	}, {
		src: 'src/common/images/1.jpg',
		itemName: '阿萨德肌肤可拉上来看见对方'

	}, {
		src: 'src/common/images/2.jpg',
		itemName: '瓦尔缇欧尔特人叫苦连天'
	}, {
		src: 'src/common/images/3.jpg',
		itemName: '温特温柔特里克认同'
	}]
};

/***/ }),

/***/ 370:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {};

/***/ }),

/***/ 371:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {};

/***/ }),

/***/ 372:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "index" }, [
    _c("div", { staticClass: "index-content" }, [
      _c(
        "ul",
        { staticClass: "nav-list clear" },
        _vm._l(_vm.navList, function(x) {
          return _c("li", [
            _c("img", { attrs: { src: x.src } }),
            _vm._v(" "),
            _c("p", [_vm._v("\n\t\t\t\t\t" + _vm._s(x.name) + "\n\t\t\t\t")])
          ])
        })
      ),
      _vm._v(" "),
      _c(
        "ul",
        { staticClass: "img-list" },
        _vm._l(_vm.imglist, function(x) {
          return _c("li", { staticClass: "clear" }, [
            _c("div", { staticClass: "img-item" }, [
              _c("img", { attrs: { src: x.src } })
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "img-desc" }, [
              _c("p", [_vm._v(_vm._s(x.itemName))])
            ])
          ])
        })
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-loader/node_modules/vue-hot-reload-api")      .rerender("data-v-1badc801", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ })

});