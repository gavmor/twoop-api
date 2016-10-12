'use strict';

var _dotenv = require('dotenv');

var _dotenv2 = _interopRequireDefault(_dotenv);

var _twax = require('twax');

var _twax2 = _interopRequireDefault(_twax);

var _koa = require('koa');

var _koa2 = _interopRequireDefault(_koa);

var _koaPath = require('koa-path');

var _koaPath2 = _interopRequireDefault(_koaPath);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_dotenv2.default.config();

var app = (0, _koa2.default)();
var route = (0, _koaPath2.default)();
var twax = new _twax2.default();

app.use(route('/:handle', regeneratorRuntime.mark(function _callee() {
  var _this = this;

  return regeneratorRuntime.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return twax.taxonomize(this.params.handle).then(function (body) {
            return Object.assign(_this, { body: body });
          });

        case 2:
        case 'end':
          return _context.stop();
      }
    }
  }, _callee, this);
})));

console.log('listening');
app.listen(process.env.PORT || 3000);
