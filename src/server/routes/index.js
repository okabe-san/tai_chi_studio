const express = require('express');
const router = express.Router();
const knex = require('../db/knex');
<<<<<<< HEAD
=======
const indexController = require('../controllers/index');
>>>>>>> 76e85bbfbe0b5dec286f1d4ba3ffb3e85fafc28c

router.get('/', function (req, res, next) {
  res.render('index');
});

module.exports = router;
