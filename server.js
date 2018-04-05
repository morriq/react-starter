const path = require('path');
const express = require('express');
const history = require('connect-history-api-fallback');


const app = express();
const staticPath = path.join(__dirname, '/dist');

app.use(history({
  verbose: true
}));

app.use(express.static(staticPath));

app.listen(3000);
