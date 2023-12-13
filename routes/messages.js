var express = require('express');
var router = express.Router();
//import { v4 as uuidv4 } from 'uuid';
//const { v4, uuidv4 } = require("uuid");
const uuid = require("uuid");
/* GET users listing. */
/*
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});*/


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






router.get('/', (req, res) => {
  return res.send(Object.values(messages));
});

router.get('/:messageId', (req, res) => {
  return res.send(messages[req.params.messageId]);
});

router.post('/', (req, res) => {
    const id = uuid.v4();
    const message = {
      id,
      text: req.body.text,
    };
  
    messages[id] = message;
  
    return res.send(message);
  });


module.exports = router;
