const express = require('express');
const router = express.Router();
const { Sequelize, DataTypes } = require('sequelize');
const config = require('../config/config.json')['development'];

const sequelize = new Sequelize(config.database, config.username, config.password, {
    host: config.host,
    dialect: config.dialect
  });
const Room = require('../models/room')(
    sequelize, DataTypes
);

/* GET room page. */
router.get('/', async (req, res, next) => {
    try {
        const rooms = await Room.findAll();
        res.json({ rooms });
    } catch (error) {
        next(error);
    }
  });

/* POST */
router.post('/', async (req, res, next) => {
    const room = await Room.create({
        name: '1'
    });
    res.json({message:"POST room"});
});

/* PUT */
router.put('/', async function(req, res, next) {
    const id = 1;
    const room = await Room.findByPk(id);
    room.name = '1.1';
    await room.save();
    res.json({message:"DELETE room"});
});

  /* DELETE */
  router.delete('/', async function(req, res, next) {
    const id = 1;
    const room = await Room.findByPk(id);
    await room.destroy();
    res.json({message:"DELETE room"});
  });

module.exports = router;
