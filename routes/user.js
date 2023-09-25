const express = require('express');
const router = express.Router();

/* GET user page. */
router.get('/', function(req, res, next) {
  res.json({message:"GET user"});
});

router.post('/', function(req, res, next) {
  res.json({message:"POST user"});
});

router.put('/', function(req, res, next) {
  res.json({message:"PUT user"});
});

router.delete('/', function(req, res, next) {
  res.json({message:"DELETE user"});
});

module.exports = router;
