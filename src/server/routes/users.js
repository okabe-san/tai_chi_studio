const express = require('express');
const router = express.Router();
const knex = require('../db/knex');

//get the the page that allows a user to sign up with the studio (new user)
router.get('/signup', function (req, res, next) {
  res.render('validation/signup');
});

//gets to the page that allows a user to log in (not a new user)
router.get('/signin', function (req, res, next) {
  res.render('validation/signin');
});

//gets to the page that allows a user to log in (not a new user)
router.get('/edit/:id', function (req, res, next) {
  res.render('users_edit_profile');

  //select from users by id
  //populate edit fields
  //
});

router.post('/edit/:id', function (req, res, next) {
  res.render('users_edit_profile');
});

module.exports = router;
