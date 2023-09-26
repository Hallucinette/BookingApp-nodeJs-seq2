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
router.get('/', function(req, res, next) {
    res.json({message:"GET reservation"});
  });

/* POST */
router.post('/', async (req, res, next) => {
    const reservation = await Reservation.create({
        date: Date.now(),
        name: 'Jason',
        note: 'rooftop please',
        status: '1',
        userId: '2',
        spotId: '3',
        roomId: '4'
    });
    res.json({message:"POST reservation"});
});

router.put('/', function(req, res, next) {
    res.json({message:"PUT reservation"});
  });
  
  router.delete('/', function(req, res, next) {
    res.json({message:"DELETE reservation"});
  });

module.exports = router;