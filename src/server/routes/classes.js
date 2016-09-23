const express = require('express');
const router = express.Router();
const knex = require('../db/knex');
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
});

module.exports = router;
