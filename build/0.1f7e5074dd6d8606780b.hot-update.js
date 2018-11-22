exports.id = 0;
exports.modules = {

/***/ "./src/app.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var express = __webpack_require__("express");
var app = express();

app.set('view engine', 'pug');

app.get('/', function (req, res) {
    res.render('index', { title: 'Hey', message: 'Hello there!' });
});

/* harmony default export */ __webpack_exports__["a"] = (app);

/***/ })

};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWxhMjMvUHJvamVjdHMvZGVyYm94ZXIvc3JjL2FwcC5qcyJdLCJuYW1lcyI6WyJleHByZXNzIiwicmVxdWlyZSIsImFwcCIsInNldCIsImdldCIsInJlcSIsInJlcyIsInJlbmRlciIsInRpdGxlIiwibWVzc2FnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBLElBQUlBLFVBQVVDLG1CQUFPQSxDQUFDLFNBQVIsQ0FBZDtBQUNBLElBQUlDLE1BQU1GLFNBQVY7O0FBRUFFLElBQUlDLEdBQUosQ0FBUSxhQUFSLEVBQXVCLEtBQXZCOztBQUVBRCxJQUFJRSxHQUFKLENBQVEsR0FBUixFQUFhLFVBQVVDLEdBQVYsRUFBZUMsR0FBZixFQUFvQjtBQUM3QkEsUUFBSUMsTUFBSixDQUFXLE9BQVgsRUFBb0IsRUFBRUMsT0FBTyxLQUFULEVBQWdCQyxTQUFTLGNBQXpCLEVBQXBCO0FBQ0gsQ0FGRDs7QUFJZVAsNERBQWYsRSIsImZpbGUiOiIwLjFmN2U1MDc0ZGQ2ZDg2MDY3ODBiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgZXhwcmVzcyA9IHJlcXVpcmUoJ2V4cHJlc3MnKVxudmFyIGFwcCA9IGV4cHJlc3MoKVxuXG5hcHAuc2V0KCd2aWV3IGVuZ2luZScsICdwdWcnKVxuXG5hcHAuZ2V0KCcvJywgZnVuY3Rpb24gKHJlcSwgcmVzKSB7XG4gICAgcmVzLnJlbmRlcignaW5kZXgnLCB7IHRpdGxlOiAnSGV5JywgbWVzc2FnZTogJ0hlbGxvIHRoZXJlIScgfSlcbn0pXG5cbmV4cG9ydCBkZWZhdWx0IGFwcFxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC5qcyJdLCJzb3VyY2VSb290IjoiIn0=