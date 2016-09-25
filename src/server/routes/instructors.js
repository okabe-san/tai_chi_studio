const express = require('express');
const router = express.Router();
const knex = require('../db/knex');

// all instructors
router.get('/', function (req, res, next) {
  knex('instructor')
  .select('*', 'instructor.id')
  .then(function(data) {
    knex('review')
    .avg('rating')
    .groupBy('instructor_id')
    .select('instructor_id')
    .then(function(rating) {
      data.map(function(el) {
        rating.forEach(function(el_rating) {
          if (el_rating.instructor_id === el.id) {
            el_rating.avg = parseInt(el_rating.avg);
            el.rating = '<i class="fa fa-smile-o fa-lg" aria-hidden="true"></i>'.repeat(el_rating.avg);
          }
        });
      });
      const renderObject = {};
      renderObject.instructor = data;
      console.log(renderObject);
      res.render('instructors', renderObject);
    });
  });
});

// single instructor
router.get('/:id', function (req, res, next) {
  const id = parseInt(req.params.id);
  knex('instructor')
  .join('review', 'review.instructor_id', 'instructor.id')
  .where('instructor.id', id)
  .select('*')
  .then(function(data) {
    data.map(function(el) {
      el.rating = '<i class="fa fa-smile-o fa-lg" aria-hidden="true"></i>'.repeat(el.rating);
    });
    const renderObject = {};
    renderObject.instructor = data;
    res.render('instructor', renderObject);
  });
});

module.exports = router;
