const express = require('express');
const router = express.Router();
const knex = require('../db/knex');

//gets ALL classes
router.get('/', function (req, res, next) {
  knex('classes')
  .join('instructors', 'instructors.id', 'instructor_id')
  .select('*')
  .then((results) => {
    const renderObject = {};
    renderObject.classes = results;
    res.render('classes/class', renderObject);
  });
});

//gets ONE class
router.get('/:id/class', function (req, res, next) {
  res.render('classes/class');
});

//gets ONE class so the admin can edit the class information
router.get('/:id/class/edit', function (req, res, next) {
  res.render('classes/editclass');
});

module.exports = router;
