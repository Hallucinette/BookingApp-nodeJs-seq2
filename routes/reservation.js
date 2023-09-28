const express = require('express');
const router = express.Router();
const { Sequelize, DataTypes } = require('sequelize');
const config = require('../config/config.json')['development'];

const sequelize = new Sequelize(config.database, config.username, config.password, {
    host: config.host,
    dialect: config.dialect
  });
const Reservation = require('../models/reservation')(
    sequelize, DataTypes
);

/* GET */
router.get('/', async (req, res, next) => {
  try {
      const reservations = await Reservation.findAll();
      res.json({ reservations });
  } catch (error) {
      next(error);
  }
});

/* POST */
router.post('/', async (req, res, next) => {
    const reservation = await Reservation.create({
        date: Date.now(),
        name: 'Jason',
        note: 'sunset',
        status: 1,
        userId: 2,
        spotId: 3,
        roomId: 4
    });
    res.json({message:"POST reservation"});
});

/* PUT */
router.put('/', async function(req, res, next) {
  const id = 7;
  const reservation = await Reservation.findByPk(id);
  reservation.note = 'sunset update';
  await reservation.save();
  res.json({message:"PUT reservation"});
  });
  
  /* DELETE */
  router.delete('/', async function(req, res, next) {
    const id = 6;
    const reservation = await Reservation.findByPk(id);
    reservation.note = 'sunset';
    await reservation.destroy();
    res.json({message:"DELETE reservation"});
  });

module.exports = router;