var express = require('express');
var router = express.Router();
const models = require("../models/model");
const uuid = require("uuid");



let users = {
  1: {
    id: '1',
    username: 'Robin Wieruch',
  },
  2: {
    id: '2',
    username: 'Dave Davids',
  },
};

let messages = {
  1: {
    id: '1',
    text: 'Hello World',
    userId: '1',
  },
  2: {
    id: '2',
    text: 'By World',
    userId: '2',
  },
};

var app = express();

app.use((req, res, next) => {
  req.me = users[1];
  
  next();
});

router.get('/', (req, res) => {
   
    return res.send(users[req.me.id]);
  });




module.exports = router;
