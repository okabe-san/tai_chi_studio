const express = require('express');
const router = express.Router();
const knex = require('../db/knex');

//gets ALL class
router.get('/', (req, res, next) => {
  let getClasses = knex('classes').select();
  let getInstructors = knex('instructors').select();
  Promise.all([
    getClasses,
    getInstructors
  ])
  .then((results) => {
    const renderObject = {};
    renderObject.classes = results[0];
    renderObject.instructors = results[1];
    res.send(renderObject);
  });
});

router.get('/new',(req, res, next) => {
  let getClasses = knex('classes').select();
  let getInstructors = knex('instructors').select();
  Promise.all([
    getClasses,
    getInstructors
  ])
  .then((results) => {
    const renderObject = {};
    renderObject.classes = results[0];
    renderObject.instructors = results[1];
    res.send(renderObject);
  });
});

router.post('/new', (req, res, next) => {

});

//gets ONE class
router.get('/:id/class', function (req, res, next) {
  res.render('classes/classes');
});

//gets ONE class so the admin can edit the class information
router.get('/:id/class/edit', function (req, res, next) {
  res.render('classes/editclass');
});

module.exports = router;
