const express = require('express');
const router = express.Router();

const { User } = require('../db.js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

router.post('/signup', async (req, res) => {
const salt = await bcrypt.genSalt(10);
const hashedPassword = await bcrypt.hash(req.body.password, salt);

const { firstName, lastName, email, phoneNumber } = req.body
const user = {
    password: hashedPassword,
    firstName,
    lastName,
    email,
    phoneNumber,
};
const existingUser = await User.findOne({
    where: {
      email: req.body.email,
    },
  });
  if (existingUser) return res.status(400).json({message: 'Email existant'})
    await User.create(user);
    res.json({message: "utilisateur créé", user})
});

const SECRET_KEY = 'secretkey23456'; // A remplacer par une clé secrète

router.post('/signin', async (req, res) => {
  const user = await User.findOne({
    where: {
      email: req.body.email,
    },
  });

    if (!user) return res.status(400).json({message: `Nom d'utilisateur ou mot de passe incorrect`});

    const validPassword = await bcrypt.compare(req.body.password, user.password);
    if (!validPassword) return res.status(400).json({message: `Nom d'utilisateur ou mot de passe incorrect`});

    const payload = {
        id: user.id,
        email: req.body.email
    // Vous pouvez ajouter d'autres propriétés ici
  };

  const token = jwt.sign(payload, SECRET_KEY, { expiresIn: '1h' });
  res.json({message: token});
});

module.exports = router;