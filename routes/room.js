const express = require('express');
const router = express.Router();

/* GET room page. */
router.get('/', function(req, res, next) {
  res.json({message:"GET room"});
});

router.post('/', function(req, res, next) {
  res.json({message:"POST room"});
});

router.put('/', function(req, res, next) {
  res.json({message:"PUT room"});
});

router.delete('/', function(req, res, next) {
  res.json({message:"DELETE room"});
});

module.exports = router;
