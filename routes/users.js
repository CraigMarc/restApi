var express = require('express');
var router = express.Router();
const models = require("../models/model");

router.get('/', (req, res) => {
  
  return res.send(req.context.models.users[req.context.me.id]);
});

router.get('/:userId', (req, res) => {
  return res.send(req.context.models.users[req.params.userId]);
  
});

router.post('/', (req, res) => {
  return res.send('POST HTTP method on user resource');
});

router.put('/:userId', (req, res) => {
  return res.send(
    `PUT HTTP method on user/${req.params.userId} resource`,
  );
});

router.delete('/:userId', (req, res) => {
  return res.send(
    `DELETE HTTP method on user/${req.params.userId} resource`,
  );
});

router.get('/messages', (req, res) => {
  return res.send(Object.values(messages));
});

router.get('/messages/:messageId', (req, res) => {
  return res.send(messages[req.params.messageId]);
});


module.exports = router;
