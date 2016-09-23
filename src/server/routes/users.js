const express = require('express');
const router = express.Router();
const knex = require('../db/knex');
<<<<<<< HEAD

router.get('/', function (req, res, next) {
  res.render('users');
=======
const indexController = require('../controllers/index');

//get the the page that allows a user to sign up with the studio (new user)
router.get('/signup', function (req, res, next) {
  res.render('validation/signup');
});

//gets to the page that allows a user to log in (not a new user)
router.get('/signin', function (req, res, next) {
  res.render('validation/signin');
>>>>>>> 76e85bbfbe0b5dec286f1d4ba3ffb3e85fafc28c
});

module.exports = router;
