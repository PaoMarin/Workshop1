var express = require('express');
var router = express.Router();


//1:
router.get('/hello', function(req, res, next) {
  res.json(["Hello World"]);
});


//2:
router.get('/hello', function(req, res) {
  const message= req.query.message;
  res.json({"response":'Hello $(message)'})
});

module.exports = router;
