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

router.get('/:id/class', function (req, res, next) {
  const id = parseInt(req.params.id);
  knex('classes')
  .join('instructors', 'instructors.id', 'instructor_id')
  .where('classes.id', id)
  .select('*', 'classes.id')
  .then((results) => {
    knex('users')
    .join('classes_users', 'classes_users.user_id', 'users.id')
    .join('classes', 'classes.id', 'classes_users.class_id')
    .where('classes.id', id)
    .select('*')
    .then((data) => {
      //console.log('DDDAAATTTTAA FROM PROMISE', data);
      const renderObject = {};
      renderObject.classes = results;
      renderObject.users = data;
      res.render('classes/class', renderObject);
    });
  })
  .catch((err) => {
    console.log(err);
    return next(err);
  });
});

//gets ONE class to delete using button
router.delete('/:id/class/delete', function (req, res, next) {
  const id = parseInt(req.params.id);
  knex('classes')
  .del()
  .where('id', id)
  .returning('*')
  .then((result) => {
    console.log('item you deleted', result);
    const id = result[0].instructor_id;
    knex('classes')
    .where('id', id)
    .then((result) => {
      if (result.length === 0) {
        return knex('instructors')
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
  console.log('YOUAREEDITINGCLASSNUMBER', id);
  const findClass = knex('classes').distinct('name').select('name').orderBy('name', 'asc');
  const findInstructor = knex('classes').distinct('instructor_id').select('instructor_id').orderBy('instructor_id', 'asc');
  var findDay = knex('classes').distinct('day').select('day');
  var findStartTime = knex('classes').distinct('start_time').select('start_time').orderBy('start_time', 'asc');
  var findEndTime = knex('classes').distinct('end_time').select('end_time').orderBy('end_time', 'asc');
  var findSize = knex('classes').distinct('size').select('size');
  var findDescription = knex('classes').distinct('description').select('description').orderBy('description', 'asc');
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
    //console.log(results);
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

router.put('/:id/class/edit', function (req, res, next) {
  const id = parseInt(req.params.id);
  console.log('you are editing class num: ', id);
  const updateName = req.body.name;
  const updateDescription = req.body.description;
  const updateInstructor_id = req.body.instructor_id;
  const updateDay = req.body.day;
  const updateStart_time = req.body.start_time;
  const updateEnd_time = req.body.end_time;
  const updateSize = req.body.size;

  knex('classes')
  .select('*')
  .where('classes.id', id)
  .update({
    name: updateName,
    description: updateDescription,
    instructor_id: updateInstructor_id,
    day: updateDay,
    start_time: updateStart_time,
    end_time: updateEnd_time,
    size: updateSize
  })
  .then((results) => {
    console.log('UPDATE: ', results);
    res.status(200).json({
      status: 'Update was sucessful.'
    });
  })
  .catch((err) => {
    console.log(err);
    return next(err);
  });
});

module.exports = router;
