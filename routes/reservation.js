const express = require('express');
const router = express.Router();

/* GET reservation page. */
router.get('/', function(req, res, next) {
  res.json({message:"GET reservation"});
});

router.post('/', function(req, res, next) {
  res.json({message:"POST reservation"});
});

router.put('/', function(req, res, next) {
  res.json({message:"PUT reservation"});
});

router.delete('/', function(req, res, next) {
  res.json({message:"DELETE reservation"});
});

module.exports = router;
