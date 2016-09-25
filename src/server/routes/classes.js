const express = require('express');
const router = express.Router();
const knex = require('../db/knex');

//gets ALL class
router.get('/', function (req, res, next) {
  knex('class')
  .join('instructor', 'instructor.id', 'instructor_id')
  .select('*')
  .then((results) => {
    const renderObject = {};
    renderObject.class = results;
    res.render('classes/classes', renderObject);
  });
});

//gets ONE class
router.get('/:id/class', function (req, res, next) {
  res.render('classes/classes');
});

//gets ONE class so the admin can edit the class information
router.get('/:id/class/edit', function (req, res, next) {
  res.render('classes/editclasses');
});

module.exports = router;
