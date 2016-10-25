'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _babelPolyfill = require('babel-polyfill');

var _babelPolyfill2 = _interopRequireDefault(_babelPolyfill);

var _dotenv = require('dotenv');

var _dotenv2 = _interopRequireDefault(_dotenv);

var _twax = require('twax');

var _twax2 = _interopRequireDefault(_twax);

var _koa = require('koa');

var _koa2 = _interopRequireDefault(_koa);

var _koaPath = require('koa-path');

var _koaPath2 = _interopRequireDefault(_koaPath);

var _koaCors = require('koa-cors');

var _koaCors2 = _interopRequireDefault(_koaCors);

var _koaLogger = require('koa-logger');

var _koaLogger2 = _interopRequireDefault(_koaLogger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_dotenv2.default.config();

var app = (0, _koa2.default)();
var route = (0, _koaPath2.default)();
var twax = new _twax2.default();

app.use((0, _koaCors2.default)());
app.use((0, _koaLogger2.default)());

app.use(route('/user_id/:user_id', regeneratorRuntime.mark(function _callee() {
  var _this = this;

  return regeneratorRuntime.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return twax.taxonomize(_extends({}, this.params)).then(function (body) {
            return Object.assign(_this, { body: body });
          });

        case 2:
        case 'end':
          return _context.stop();
      }
    }
  }, _callee, this);
})));

app.use(route('/screen_name/:screen_name', regeneratorRuntime.mark(function _callee2() {
  var _this2 = this;

  return regeneratorRuntime.wrap(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          console.log(this.params);
          _context2.next = 3;
          return twax.taxonomize(_extends({}, this.params)).then(function (body) {
            return Object.assign(_this2, { body: body });
          });

        case 3:
        case 'end':
          return _context2.stop();
      }
    }
  }, _callee2, this);
})));

console.log('listening');
app.listen(process.env.PORT || 3000);
