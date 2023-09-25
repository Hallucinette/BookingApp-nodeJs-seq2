const express = require('express');
const router = express.Router();

/* GET spot page. */
router.get('/', function(req, res, next) {
  res.json({message:"GET spot"});
});

router.post('/', function(req, res, next) {
  res.json({message:"POST spot"});
});

router.put('/', function(req, res, next) {
  res.json({message:"PUT spot"});
});

router.delete('/', function(req, res, next) {
  res.json({message:"DELETE spot"});
});

module.exports = router;
