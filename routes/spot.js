const express = require('express');
const router = express.Router();
const { Sequelize, DataTypes } = require('sequelize');
const spot = require('../models/spot');
const config = require('../config/config.json')['development'];

const sequelize = new Sequelize(config.database, config.username, config.password, {
    host: config.host,
    dialect: config.dialect
  });
const Spot = require('../models/spot')(
    sequelize, DataTypes
);

/* GET spot page. */
router.get('/', async (req, res, next) => {
  try {
      const spots = await Spot.findAll();
      res.json({ spots });
  } catch (error) {
      next(error);
  }
});

/* POST */
router.post('/', async (req, res, next) => {
    const spot = await Spot.create({
        name: "1"
    });
    res.json({message:"POST spot"});
});

/* PUT */
router.put('/', async function(req, res, next) {
  const id = 1;
  const spot = await Spot.findByPk(id);
  spot.name = "1";
  await spot.save();
  res.json({message:"PUT spot"});
});

  /* DELETE */
  router.delete('/', async function(req, res, next) {
    const id = 1;
    const spot = await Spot.findByPk(id);
    await spot.destroy();
    await User.destroy({
      where: {
        id: id
      },
    });
    res.json({message:"DELETE spot"});
  });

module.exports = router;
