const express = require('express');
const router = express.Router();
const knex = require('../db/knex');

router.get('/', function (req, res, next) {
  knex('classes')
  .join('instructors', 'instructors.id', 'instructor_id')
  .select('*')
  .then((results) => {
    const renderObject = {};
    renderObject.classes = results;
    res.render('classes', renderObject);
  });
});

module.exports = router;
