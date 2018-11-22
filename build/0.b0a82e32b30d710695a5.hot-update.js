exports.id = 0;
exports.modules = {

/***/ "./src/app.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var express = __webpack_require__("express");
var app = express();

app.use('pug');

app.get('/', function (req, res) {
    res.render('index', { title: 'Hey', message: 'Hello there!' });
});

/* harmony default export */ __webpack_exports__["a"] = (app);

/***/ })

};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWxhMjMvUHJvamVjdHMvZGVyYm94ZXIvc3JjL2FwcC5qcyJdLCJuYW1lcyI6WyJleHByZXNzIiwicmVxdWlyZSIsImFwcCIsInVzZSIsImdldCIsInJlcSIsInJlcyIsInJlbmRlciIsInRpdGxlIiwibWVzc2FnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBLElBQUlBLFVBQVVDLG1CQUFPQSxDQUFDLFNBQVIsQ0FBZDtBQUNBLElBQUlDLE1BQU1GLFNBQVY7O0FBRUFFLElBQUlDLEdBQUosQ0FBUSxLQUFSOztBQUVBRCxJQUFJRSxHQUFKLENBQVEsR0FBUixFQUFhLFVBQVVDLEdBQVYsRUFBZUMsR0FBZixFQUFvQjtBQUM3QkEsUUFBSUMsTUFBSixDQUFXLE9BQVgsRUFBb0IsRUFBRUMsT0FBTyxLQUFULEVBQWdCQyxTQUFTLGNBQXpCLEVBQXBCO0FBQ0gsQ0FGRDs7QUFJZVAsNERBQWYsRSIsImZpbGUiOiIwLmIwYTgyZTMyYjMwZDcxMDY5NWE1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgZXhwcmVzcyA9IHJlcXVpcmUoJ2V4cHJlc3MnKVxudmFyIGFwcCA9IGV4cHJlc3MoKVxuXG5hcHAudXNlKCdwdWcnKVxuXG5hcHAuZ2V0KCcvJywgZnVuY3Rpb24gKHJlcSwgcmVzKSB7XG4gICAgcmVzLnJlbmRlcignaW5kZXgnLCB7IHRpdGxlOiAnSGV5JywgbWVzc2FnZTogJ0hlbGxvIHRoZXJlIScgfSlcbn0pXG5cbmV4cG9ydCBkZWZhdWx0IGFwcFxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC5qcyJdLCJzb3VyY2VSb290IjoiIn0=