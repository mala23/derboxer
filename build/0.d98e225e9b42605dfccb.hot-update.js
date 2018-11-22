exports.id = 0;
exports.modules = {

/***/ "./src/app.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var express = __webpack_require__("express");
var app = express();

app.get('/', function (req, res) {
  res.render('index', { title: 'Hey', message: 'Hello there!' });
});

/* harmony default export */ __webpack_exports__["a"] = (app);

/***/ }),

/***/ "./src/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_http__ = __webpack_require__("http");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_http___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_http__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app__ = __webpack_require__("./src/app.js");



if (true) {
    module.hot.accept();
}

const port = process.env.PORT || 3000;

Object(__WEBPACK_IMPORTED_MODULE_0_http__["createServer"])((request, response) => response.end(Object(__WEBPACK_IMPORTED_MODULE_1__app__["a" /* default */])())).listen(port, () => process.stdout.write(`Running on :${port}\n`));

/***/ })

};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWxhMjMvUHJvamVjdHMvZGVyYm94ZXIvc3JjL2FwcC5qcyIsIi9Vc2Vycy9tYWxhMjMvUHJvamVjdHMvZGVyYm94ZXIvc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbImV4cHJlc3MiLCJyZXF1aXJlIiwiYXBwIiwiZ2V0IiwicmVxIiwicmVzIiwicmVuZGVyIiwidGl0bGUiLCJtZXNzYWdlIiwibW9kdWxlIiwiaG90IiwiYWNjZXB0IiwicG9ydCIsInByb2Nlc3MiLCJlbnYiLCJQT1JUIiwiY3JlYXRlU2VydmVyIiwicmVxdWVzdCIsInJlc3BvbnNlIiwiZW5kIiwibGlzdGVuIiwic3Rkb3V0Iiwid3JpdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQSxJQUFJQSxVQUFVQyxtQkFBT0EsQ0FBQyxTQUFSLENBQWQ7QUFDQSxJQUFJQyxNQUFNRixTQUFWOztBQUVFRSxJQUFJQyxHQUFKLENBQVEsR0FBUixFQUFhLFVBQVVDLEdBQVYsRUFBZUMsR0FBZixFQUFvQjtBQUM3QkEsTUFBSUMsTUFBSixDQUFXLE9BQVgsRUFBb0IsRUFBRUMsT0FBTyxLQUFULEVBQWdCQyxTQUFTLGNBQXpCLEVBQXBCO0FBQ0gsQ0FGRDs7QUFJYU4sNERBQWYsRTs7Ozs7Ozs7QUNQQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7O0FBRUEsSUFBSU8sSUFBSixFQUFnQjtBQUNaQSxXQUFPQyxHQUFQLENBQVdDLE1BQVg7QUFDSDs7QUFFRCxNQUFNQyxPQUFPQyxRQUFRQyxHQUFSLENBQVlDLElBQVosSUFBb0IsSUFBakM7O0FBRUFDLDBEQUFZQSxDQUFDLENBQUNDLE9BQUQsRUFBVUMsUUFBVixLQUF1QkEsU0FBU0MsR0FBVCxDQUFhakIsNkRBQUdBLEVBQWhCLENBQXBDLEVBQ0drQixNQURILENBQ1VSLElBRFYsRUFDZ0IsTUFBTUMsUUFBUVEsTUFBUixDQUFlQyxLQUFmLENBQXNCLGVBQWNWLElBQUssSUFBekMsQ0FEdEIsRSIsImZpbGUiOiIwLmQ5OGUyMjVlOWI0MjYwNWRmY2NiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgZXhwcmVzcyA9IHJlcXVpcmUoJ2V4cHJlc3MnKVxudmFyIGFwcCA9IGV4cHJlc3MoKVxuXG4gIGFwcC5nZXQoJy8nLCBmdW5jdGlvbiAocmVxLCByZXMpIHtcbiAgICAgIHJlcy5yZW5kZXIoJ2luZGV4JywgeyB0aXRsZTogJ0hleScsIG1lc3NhZ2U6ICdIZWxsbyB0aGVyZSEnIH0pXG4gIH0pXG5cbmV4cG9ydCBkZWZhdWx0IGFwcFxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC5qcyIsImltcG9ydCB7IGNyZWF0ZVNlcnZlciB9IGZyb20gJ2h0dHAnO1xuaW1wb3J0IGFwcCBmcm9tICcuL2FwcCc7XG5cbmlmIChtb2R1bGUuaG90KSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbn1cblxuY29uc3QgcG9ydCA9IHByb2Nlc3MuZW52LlBPUlQgfHwgMzAwMDtcblxuY3JlYXRlU2VydmVyKChyZXF1ZXN0LCByZXNwb25zZSkgPT4gcmVzcG9uc2UuZW5kKGFwcCgpKSlcbiAgLmxpc3Rlbihwb3J0LCAoKSA9PiBwcm9jZXNzLnN0ZG91dC53cml0ZShgUnVubmluZyBvbiA6JHtwb3J0fVxcbmApKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VSb290IjoiIn0=