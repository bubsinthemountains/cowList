const express = require('express');
const path = require('path');
const app = express();
const db = require('./db/index.js');
// const morgan = require('morgan');
const bodyParser = require("body-parser");
const port = 3000;

// app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("./client/dist"));

// create new cow data
app.post('/api/cows', (req, res) => {
  const queryString = 'INSERT INTO cows (name, description) VALUES (?, ?);';
  const queryArgs = [req.body.name, req.body.description];
  db.query(queryString, queryArgs, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.send(results);
    }
  })
});

// read all cow data
app.get('/api/cows', (req, res) => {
  db.query('SELECT * FROM cows', (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.send(results);
    }
  })
});

app.listen(port, () => {
  console.log(`Cows is listening on ${port}`);
});