const express = require('express');
const router = express.Router();

var reservationRouter = require('./reservation');
var roomRouter = require('./room');
var spotRouter = require('./spot');
var userRouter = require('./user');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({message:"Hello World"});
});

router.post('/', function(req, res, next) {
  res.json({message:"Hello post"});
});

router.put('/', function(req, res, next) {
  res.json({message:"Hello put"});
});

router.delete('/', function(req, res, next) {
  res.json({message:"Hello delete"});
});

router.use('/reservation', reservationRouter);
router.use('/room', roomRouter);
router.use('/spot', spotRouter);
router.use('/user', userRouter);

module.exports = router;
