const express = require('express');
const router = express.Router();
const knex = require('../db/knex');
<<<<<<< HEAD

router.get('/', function (req, res, next) {
  knex('classes')
  .join('instructors', 'instructors.id', 'instructor_id')
  .select('*')
  .then((results) => {
    const renderObject = {};
    renderObject.classes = results;
    res.render('classes', renderObject);
  });
=======
const indexController = require('../controllers/index');

//gets ALL classes
router.get('/', function (req, res, next) {
  const renderObject = {};
  renderObject.classes = 'Classes Page';
  res.render('classes/classes', renderObject);
});

//gets ONE class
router.get('/:id/class', function (req, res, next) {
  res.render('classes/class');
});

//gets ONE class so the admin can edit the class information
router.get('/:id/class/edit', function (req, res, next) {
  res.render('classes/editclass');
>>>>>>> 76e85bbfbe0b5dec286f1d4ba3ffb3e85fafc28c
});

module.exports = router;
