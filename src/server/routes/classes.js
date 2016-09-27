const express = require('express');
const router = express.Router();
const knex = require('../db/knex');

//gets ALL class
router.get('/', (req, res, next) => {
  function getAll(tableName) {return knex(tableName).select();}
  function getDay(days) {
    return knex('classes').select('*').where('classes.day', days
  );}
  let getClasses = getAll('classes');
  let getInstructors = getAll('instructors');

  Promise.all([
    getClasses,
    getInstructors
  ])
  .then((results) => {
    const renderObject = {};
    renderObject.classes = results[0];
    renderObject.instructors = results[1];
    res.render('classes/classes', renderObject);
    console.log(renderObject.instructors)
  });
});
//alias is above this line
///gina is below this line

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

  });
});

router.post('/new', (req, res, next) => {

});

//gets ONE class
router.get('/:id/class', function (req, res, next) {
  const id = parseInt(req.params.id);
  knex('class')
  .join('instructor', 'instructor.id', 'instructor_id')
  .select('*', 'class.id')
  .where('class.id', id)
  .then((results) => {
    const renderObject = {};
    if (results.length === 0) {
      console.log(results);
      renderObject.noclasses = 'There was no class found.';
      res.render('classes/classes', renderObject);
    } else {
      renderObject.classes = results;
      res.render('classes/class', renderObject);
    }
  })
  .catch((err) => {
    console.log(err);
    return next(err);
  });
});

//gets ONE class to delete using button
router.delete('/:id/class/delete', function (req, res, next) {
  const id = parseInt(req.params.id);
  knex('class')
  .del()
  .where('id', id)
  .returning('*')
  .then((result) => {
    console.log('item you deleted', result);
    const id = result[0].instructor_id;
    knex('class')
    .where('id', id)
    .then((result) => {
      if (result.length === 0) {
        return knex('instructor')
        .del()
        .where('id', id)
        .returning('*');
      }
    })
    .then(() => {
      console.log('delete!');
      res.send({
        message: 'Delete was successful.'
      });
    })
    .catch((err) => {
      console.log(err);
      return next(err);
    });
  });
});

//gets ONE class so the admin can edit the class information
router.get('/:id/class/edit', function (req, res, next) {
  const id = parseInt(req.params.id);
  const findClass = knex('class').distinct('name').select('name').orderBy('name', 'asc');
  const findInstructor = knex('class').distinct('instructor_id').select('instructor_id').orderBy('instructor_id', 'asc');
  var findDay = knex('class').distinct('day').select('day');
  var findStartTime = knex('class').distinct('start_time').select('start_time').orderBy('start_time', 'asc');
  var findEndTime = knex('class').distinct('end_time').select('end_time').orderBy('end_time', 'asc');
  var findSize = knex('class').distinct('size').select('size');
  var findDescription = knex('class').distinct('description').select('description').orderBy('description', 'asc');
  Promise.all([
    findClass,
    findInstructor,
    findDay,
    findStartTime,
    findEndTime,
    findSize,
    findDescription
  ])
  .then((results) => {
    const renderObject = {};
    console.log(results);
    renderObject.classes = results[0];
    renderObject.instructors = results[1];
    renderObject.days = results[2];
    renderObject.starts = results[3];
    renderObject.ends = results[4];
    renderObject.sizes = results[5];
    renderObject.descriptions = results[6];
    res.render('classes/editclass', renderObject);
  })
  .catch((err) => {
    console.log(err);
    return next(err);
  });
});

//post the one class so admin can
// knex('class')
// .insert({
//   name: req.body.class_name,
//   description: req.body.description,
//   instructor_id: req.body.instructor_id,
//   day: req.body.day,
//   start_time: req.body.start_time,
//   end_time: req.body.end_time,
//   size: req.body.size
// })
module.exports = router;
