var express = require('express');
var router = express.Router();
const models = require("../models/model");
const uuid = require("uuid");



var app = express();

app.use((req, res, next) => {
  req.context = {
    models,
    me: models.users[1],
  };
  next();
});




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
      userId: req.me.id,
    };
  
    messages[id] = message;
  
    return res.send(message);
  });


  router.delete('/:messageId', (req, res) => {
    const {
      [req.params.messageId]: message,
      ...otherMessages
    } = messages;
  
    messages = otherMessages;
  
    return res.send(message);
  });

  router.get('/session', (req, res) => {
    console.log(hello)
    return res.send('hello');
  });

module.exports = router;
