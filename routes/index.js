const express = require('express');
const router = express.Router();

const reservationRouter = require('./reservation');
const roomRouter = require('./room');
const spotRouter = require('./spot');
const userRouter = require('./user');
// const forgotPasswordRouter = require('./forgot-password'');
// const resetPasswordRouter = require('./reset-password');
// const passwordReset = require('./password-reset')

router.use('/reservation', reservationRouter);
router.use('/room', roomRouter);
router.use('/spot', spotRouter);
router.use('/user', userRouter);
// app.use("/password-reset", passwordReset);
// router.use('/forgot-password', forgotPasswordRouter);
// router.use('/reset-password', resetPasswordRouter);

module.exports = router;
