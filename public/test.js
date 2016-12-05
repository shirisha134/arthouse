(function() {
  'use strict';

  var globals = typeof window === 'undefined' ? global : window;
  if (typeof globals.require === 'function') return;

  var modules = {};
  var cache = {};
  var aliases = {};
  var has = ({}).hasOwnProperty;

  var expRe = /^\.\.?(\/|$)/;
  var expand = function(root, name) {
    var results = [], part;
    var parts = (expRe.test(name) ? root + '/' + name : name).split('/');
    for (var i = 0, length = parts.length; i < length; i++) {
      part = parts[i];
      if (part === '..') {
        results.pop();
      } else if (part !== '.' && part !== '') {
        results.push(part);
      }
    }
    return results.join('/');
  };

  var dirname = function(path) {
    return path.split('/').slice(0, -1).join('/');
  };

  var localRequire = function(path) {
    return function expanded(name) {
      var absolute = expand(dirname(path), name);
      return globals.require(absolute, path);
    };
  };

  var initModule = function(name, definition) {
    var hot = null;
    hot = hmr && hmr.createHot(name);
    var module = {id: name, exports: {}, hot: hot};
    cache[name] = module;
    definition(module.exports, localRequire(name), module);
    return module.exports;
  };

  var expandAlias = function(name) {
    return aliases[name] ? expandAlias(aliases[name]) : name;
  };

  var _resolve = function(name, dep) {
    return expandAlias(expand(dirname(name), dep));
  };

  var require = function(name, loaderPath) {
    if (loaderPath == null) loaderPath = '/';
    var path = expandAlias(name);

    if (has.call(cache, path)) return cache[path].exports;
    if (has.call(modules, path)) return initModule(path, modules[path]);

    throw new Error("Cannot find module '" + name + "' from '" + loaderPath + "'");
  };

  require.alias = function(from, to) {
    aliases[to] = from;
  };

  var extRe = /\.[^.\/]+$/;
  var indexRe = /\/index(\.[^\/]+)?$/;
  var addExtensions = function(bundle) {
    if (extRe.test(bundle)) {
      var alias = bundle.replace(extRe, '');
      if (!has.call(aliases, alias) || aliases[alias].replace(extRe, '') === alias + '/index') {
        aliases[alias] = bundle;
      }
    }

    if (indexRe.test(bundle)) {
      var iAlias = bundle.replace(indexRe, '');
      if (!has.call(aliases, iAlias)) {
        aliases[iAlias] = bundle;
      }
    }
  };

  require.register = require.define = function(bundle, fn) {
    if (typeof bundle === 'object') {
      for (var key in bundle) {
        if (has.call(bundle, key)) {
          require.register(key, bundle[key]);
        }
      }
    } else {
      modules[bundle] = fn;
      delete cache[bundle];
      addExtensions(bundle);
    }
  };

  require.list = function() {
    var list = [];
    for (var item in modules) {
      if (has.call(modules, item)) {
        list.push(item);
      }
    }
    return list;
  };

  var hmr = globals._hmr && new globals._hmr(_resolve, require, modules, cache);
  require._cache = cache;
  require.hmr = hmr && hmr.wrap;
  require.brunch = true;
  globals.require = require;
})();

(function() {
var global = window;
var process;
var __makeRelativeRequire = function(require, mappings, pref) {
  var none = {};
  var tryReq = function(name, pref) {
    var val;
    try {
      val = require(pref + '/node_modules/' + name);
      return val;
    } catch (e) {
      if (e.toString().indexOf('Cannot find module') === -1) {
        throw e;
      }

      if (pref.indexOf('node_modules') !== -1) {
        var s = pref.split('/');
        var i = s.lastIndexOf('node_modules');
        var newPref = s.slice(0, i).join('/');
        return tryReq(name, newPref);
      }
    }
    return none;
  };
  return function(name) {
    if (name in mappings) name = mappings[name];
    if (!name) return;
    if (name[0] !== '.' && pref) {
      var val = tryReq(name, pref);
      if (val !== none) return val;
    }
    return require(name);
  }
};
require.register("test/components.app.spec.js", function(exports, require, module) {
'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _chai = require('chai');

var _enzyme = require('enzyme');

var _navbar = require('../app/components/navbar/navbar');

var _navbar2 = _interopRequireDefault(_navbar);

var _app = require('../app/components/app');

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Components.App', function () {

    it('should be visible', function () {

        var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_app2.default, null));
        (0, _chai.expect)(wrapper.type()).to.equal('div');
        (0, _chai.expect)(wrapper.containsAllMatchingElements([_react2.default.createElement(_navbar2.default, null)])).to.equal(true);
        // expect(wrapper.find(<NavBar />)).to.be.length(1);
    });
});
});

require.register("test/components.navBar.spec.js", function(exports, require, module) {
"use strict";
});

;require.alias("brunch/node_modules/deppack/node_modules/node-browser-modules/node_modules/readable-stream/duplex.js", "_stream_duplex");
require.alias("brunch/node_modules/deppack/node_modules/node-browser-modules/node_modules/readable-stream/passthrough.js", "_stream_passthrough");
require.alias("brunch/node_modules/deppack/node_modules/node-browser-modules/node_modules/readable-stream/readable.js", "_stream_readable");
require.alias("brunch/node_modules/deppack/node_modules/node-browser-modules/node_modules/readable-stream/transform.js", "_stream_transform");
require.alias("brunch/node_modules/deppack/node_modules/node-browser-modules/node_modules/readable-stream/writable.js", "_stream_writable");
require.alias("brunch/node_modules/deppack/node_modules/node-browser-modules/node_modules/buffer/index.js", "buffer");
require.alias("brunch/node_modules/deppack/node_modules/node-browser-modules/node_modules/events/events.js", "events");
require.alias("brunch/node_modules/deppack/node_modules/node-browser-modules/node_modules/process/browser.js", "process");
require.alias("brunch/node_modules/deppack/node_modules/node-browser-modules/node_modules/stream-browserify/index.js", "stream");
require.alias("brunch/node_modules/deppack/node_modules/node-browser-modules/node_modules/string_decoder/index.js", "string_decoder");process = require('process');require.register("___globals___", function(exports, require, module) {
  
});})();require('___globals___');


//# sourceMappingURL=test.js.map