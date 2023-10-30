const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const jwt = require('jsonwebtoken');

const indexRouter = require('./routes/index');
const authRouter = require('./routes/auth');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
const cors = require('cors');
app.use(cors({ origin: 'http://localhost:8000' }));

const verifyJWT = (req, res, next) => {
  const  SECRET_KEY = "secretkey23456"; // A remplacer par la même clé secrète que dans la route signin
  const token = req.header('Authorization');

  if(!token) return res.status(401).json({ auth: false, message: 'No token provided.' });

  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    console.log(decoded);
    req.user = decoded;
    next(); // Si le token est valide, on passe à la suite
  } catch (error) {
    console.error(error)
    res.status(400).json({ auth: false, message: 'Invalid token.' });
  }
};

app.use('/auth', authRouter);
app.use('/', verifyJWT, indexRouter);

module.exports = app;
