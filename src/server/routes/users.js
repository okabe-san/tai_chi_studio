const express = require('express');
const router = express.Router();
const knex = require('../db/knex');
const bcrypt = require('bcrypt');

//get the the page that allows a user to sign up with the studio (new user)
router.get('/signup', function (req, res, next) {
  console.log('here is the req: ', req.body);
  res.render('validation/signup');
});

router.get('/verify', function (req, res, next) {
  console.log('here is the req: ', req.body);

  var renderObject = {};

  knex('users')
  .where({
    email: req.body.email,
    password: req.body.password
  })
  .select()
  .then((results) => {
    renderObject = results[0];
    console.log('renderObject: ', renderObject);
    res.json(renderObject);
  })
  .catch((err) => {
      console.log(err);
      res.status(500);
      res.render('validation/signin');
    });
});

//get the the page that allows a user to sign up with the studio (new user)
router.post('/signup', function (req, res, next) {
  // Hash the password with the salt
  //we should use bcrypt here to store the password
  var hash = bcrypt.hashSync(req.body.password, 10);

  knex('users')
  .returning('id')
  .insert({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    address_line_1: req.body.address_line_1,
    address_line_2: req.body.address_line_2,
    city: req.body.city,
    state: req.body.state,
    zip: req.body.zip,
    liability: req.body.liability,
    comments: req.body.comments,
    password: hash
  })
  .then((results) => {
      if (results) {
        console.log('Success');
        res.send(200);
      } else {
        res.status(500).send({
          status: 'error',
          message: 'error'
        });
      }
    })
  .catch((err) => {
      console.log(err);
      res.status(500);
      res.render('validation/signup');
    });
});

//gets to the page that allows a user to log in (not a new user)
router.get('/signin', function (req, res, next) {
  res.render('validation/signin');
});
//
// router.post('/signin', function (req, res, next) {
//   knex('users')
//   .where({
//     email: req.body.email
//   })
//   .select('password')
//   .then((results) => {
//     if(bcrypt.compareSync(req.body.password, results[0].password)) {
//       res.redirect('/classes');
//     } else {
//       res.status(500).send({
//         status: 'error',
//         message: 'error'
//       });
//     }
//   })
//   .catch((err) => {
//     console.log(err);
//     res.status(500);
//   });
// });

//gets to the page that allows a user to log in (not a new user)
router.get('/:id', function (req, res, next) {
  var member_id = req.params.id;
  console.log('the req', req.body);
  var renderObject = {};
  //select from users by id
  //populate edit fields

  knex('users')
  .where('id', member_id)
  .then((results) => {
    renderObject = results[0];
    console.log('renderObject: ', renderObject);
    res.render('users_edit_profile', {renderObject});
  });
});

router.put('/edit/:id', function (req, res, next) {
    res.render('users_edit_profile');
  });

module.exports = router;
