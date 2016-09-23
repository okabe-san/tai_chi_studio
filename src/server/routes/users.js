const express = require('express');
const router = express.Router();
const knex = require('../db/knex');
const indexController = require('../controllers/index');

//get the the page that allows a user to sign up with the studio (new user)
router.get('/signup', function (req, res, next) {
  res.render('validation/signup');
});

//gets to the page that allows a user to log in (not a new user)
router.get('/signin', function (req, res, next) {
  res.render('validation/signin');
});

module.exports = router;
