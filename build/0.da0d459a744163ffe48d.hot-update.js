exports.id = 0;
exports.modules = {

/***/ "./src/index.js":
/***/ (function(module, exports, __webpack_require__) {

const express = __webpack_require__("express");
const app = express();
const port = 3000;

app.set('view engine', 'pug');

app.get('/', function (req, res) {
  res.render('index', { title: 'Hey', message: 'Hello there!' });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
/*
import { createServer } from 'http';
import app from './app';

if (module.hot) {
    module.hot.accept();
}

const port = process.env.PORT || 3000;

createServer((request, response) => response.end(app()))
  .listen(port, () => process.stdout.write(`Running on :${port}\n`));
*/

/***/ })

};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWxhMjMvUHJvamVjdHMvZGVyYm94ZXIvc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbImV4cHJlc3MiLCJyZXF1aXJlIiwiYXBwIiwicG9ydCIsInNldCIsImdldCIsInJlcSIsInJlcyIsInJlbmRlciIsInRpdGxlIiwibWVzc2FnZSIsImxpc3RlbiIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE1BQU1BLFVBQVVDLG1CQUFPQSxDQUFDLFNBQVIsQ0FBaEI7QUFDQSxNQUFNQyxNQUFNRixTQUFaO0FBQ0EsTUFBTUcsT0FBTyxJQUFiOztBQUVBRCxJQUFJRSxHQUFKLENBQVEsYUFBUixFQUF1QixLQUF2Qjs7QUFFQUYsSUFBSUcsR0FBSixDQUFRLEdBQVIsRUFBYSxVQUFVQyxHQUFWLEVBQWVDLEdBQWYsRUFBb0I7QUFDL0JBLE1BQUlDLE1BQUosQ0FBVyxPQUFYLEVBQW9CLEVBQUVDLE9BQU8sS0FBVCxFQUFnQkMsU0FBUyxjQUF6QixFQUFwQjtBQUNELENBRkQ7O0FBSUFSLElBQUlTLE1BQUosQ0FBV1IsSUFBWCxFQUFpQixNQUFNUyxRQUFRQyxHQUFSLENBQWEsaUNBQWdDVixJQUFLLEdBQWxELENBQXZCO0FBQ0EiLCJmaWxlIjoiMC5kYTBkNDU5YTc0NDE2M2ZmZTQ4ZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgZXhwcmVzcyA9IHJlcXVpcmUoJ2V4cHJlc3MnKVxuY29uc3QgYXBwID0gZXhwcmVzcygpXG5jb25zdCBwb3J0ID0gMzAwMFxuXG5hcHAuc2V0KCd2aWV3IGVuZ2luZScsICdwdWcnKVxuXG5hcHAuZ2V0KCcvJywgZnVuY3Rpb24gKHJlcSwgcmVzKSB7XG4gIHJlcy5yZW5kZXIoJ2luZGV4JywgeyB0aXRsZTogJ0hleScsIG1lc3NhZ2U6ICdIZWxsbyB0aGVyZSEnIH0pXG59KVxuXG5hcHAubGlzdGVuKHBvcnQsICgpID0+IGNvbnNvbGUubG9nKGBFeGFtcGxlIGFwcCBsaXN0ZW5pbmcgb24gcG9ydCAke3BvcnR9IWApKVxuLypcbmltcG9ydCB7IGNyZWF0ZVNlcnZlciB9IGZyb20gJ2h0dHAnO1xuaW1wb3J0IGFwcCBmcm9tICcuL2FwcCc7XG5cbmlmIChtb2R1bGUuaG90KSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbn1cblxuY29uc3QgcG9ydCA9IHByb2Nlc3MuZW52LlBPUlQgfHwgMzAwMDtcblxuY3JlYXRlU2VydmVyKChyZXF1ZXN0LCByZXNwb25zZSkgPT4gcmVzcG9uc2UuZW5kKGFwcCgpKSlcbiAgLmxpc3Rlbihwb3J0LCAoKSA9PiBwcm9jZXNzLnN0ZG91dC53cml0ZShgUnVubmluZyBvbiA6JHtwb3J0fVxcbmApKTtcbiovXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvaW5kZXguanMiXSwic291cmNlUm9vdCI6IiJ9