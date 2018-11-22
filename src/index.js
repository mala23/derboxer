const express = require('express')
const app = express()
const port = 3000

app.set('view engine', 'pug')

app.get('/', function (req, res) {
  res.render('index', { title: 'Hey', message: 'Hello there!' })
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
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
