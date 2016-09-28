const express = require('express');
const router = express.Router();
const knex = require('../db/knex');
const userFunctions = require('../controllers/index');
const chen = 'Chen style tai chi movements of the Chen Style\'s first level of training are done in slow motion. The Chen style alternates slow-motion movements with short, fast, explosive ones. It demands more physical coordination and may strain the lower back and knees more than other styles; consequently, it is difficult for the elderly or injured to learn. The complexity of its movements, which include fast releases combined with jumping kicks and stamping actions, makes it more athletic and physically difficult than most other tai chi styles and, as such, is often more appealing to young people or martial artists.';

const wu = 'Wu style tai chi is the second most popular style. It has three main variations with strong stylistic differences that derived from the founder, Chuan You, his son, Wu Jien Chuan, and his grandchildren. The Wu style was created directly from the Yang and, as such, is the largest variant of the Yang style. However, unlike most traditions in the Yang style, most Wu schools emphasize small, compact movements over large and medium-sized ones. The Yang and Wu, with all their variations, encompass the vast majority (80 percent or more) of all tai chi practitioners.';

const yang = 'Yang style tai chi is the most popular and widely practiced tai chi style worldwide. In England and America, at least 20 main variations of the Yang style exist and in China, there are even more. The various schools originated from the approach of a specific master or from a particular geographic region within China. Each variation has a distinct flavor, looks different from the others to a greater or lesser degree and may emphasize different technical points.';

const hao = 'Hao style tai chi is exceedingly rare in China and almost non-existent in the West. Its small-frame movements are extremely small. Its primary focus is on tai chi\'s more internal chi movements with physical motions being much less important. As such, it is considered an advanced style that is hard to appreciate for practitioners without significant background knowledge of tai chi.';

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
  });
});
//alias is above this line
///gina is below this line

//get class info for new class forms

//get class info for new class forms
router.get('/new',(req, res, next) => {
  function getUnique(tableName, column) {
    return knex(tableName).distinct(column).select(column).orderBy(column, 'asc');
  }
  let getClasses = knex('classes').select();
  let getInstructors = knex('instructors').select();
  let getClassNames = getUnique('classes', 'name');
  let getClassDays = getUnique('classes', 'day');

  Promise.all([
    getClasses,
    getInstructors,
    getClassNames,
    getClassDays
  ])
  .then((results) => {
    const renderObject = {};
    renderObject.classes = results[0];
    renderObject.instructors = results[1];
    renderObject.classNames = results[2];
    renderObject.classDays = results[3];
    res.render('classes/newclass', renderObject);
    console.log(results[3]);
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
    renderObject.id = id;
    //console.log(renderObject.id);
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
router.post('/:id/class/edit', (req, res, next) => {
    if (req.body.name === 'Chen style') {
      req.body.description = chen;
    }
    if (req.body.name === 'Wu style') {
      req.body.description = wu;
    }
    if (req.body.name === 'Yang style') {
      req.body.description = yang;
    }
    if (req.body.name === 'Hao style') {
      req.body.description = hao;
    }
    if (req.body.start_time === '05:00 am') {
      req.body.end_time = '06:00 am';
    }
    if (req.body.start_time === '06:00 am') {
      req.body.end_time = '07:00 am';
    }
    if (req.body.start_time === '07:00 am') {
      req.body.end_time = '08:00 am';
    }
    if (req.body.start_time === '08:00 am') {
      req.body.end_time = '09:00 am';
    }
    if (req.body.start_time === '09:00 am') {
      req.body.end_time = '10:00 am';
    }
    if (req.body.start_time === '10:00 am') {
      req.body.end_time = '11:00 am';
    }
    if (req.body.start_time === '11:00 am') {
      req.body.end_time = '12:00 pm';
    }
    if (req.body.start_time === '12:00 pm') {
      req.body.end_time = '01:00 pm';
    }
    if (req.body.start_time === '01:00 pm') {
      req.body.end_time = '02:00 pm';
    }
    if (req.body.start_time === '02:00 pm') {
      req.body.end_time = '03:00 pm';
    }
    if (req.body.start_time === '03:00 pm') {
      req.body.end_time = '04:00 pm';
    }
    if (req.body.start_time === '04:00 pm') {
      req.body.end_time = '05:00 pm';
    }
    if (req.body.start_time === '05:00 pm') {
      req.body.end_time = '06:00 pm';
    }
    if (req.body.start_time === '06:00 pm') {
      req.body.end_time = '07:00 pm';
    }
    if (req.body.start_time === '07:00 pm') {
      req.body.end_time = '08:00 pm';
    }
    if (req.body.start_time === '08:00 pm') {
      req.body.end_time = '09:00 pm';
    }
    if (req.body.start_time === '09:00 pm') {
      req.body.end_time = '10:00 pm';
    }

    const id = parseInt(req.params.id);
    knex('classes')
    .where('classes.id', id)
    .update({
      name: req.body.name,
      description: req.body.description,
      instructor_id: req.body.instructor_id,
      day: req.body.day,
      start_time: req.body.start_time,
      end_time: req.body.end_time,
      size: req.body.size
    })
    .returning('*')
    .then((results) => {
      console.log('UPDATE: ', results);
      res.redirect('/classes');
    })
    .catch((err) => {
      console.log(err);
      return next(err);
    });
  });

module.exports = router;
