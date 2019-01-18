const express = require('express');
const router = require('express-promise-router')();
const CoursesController = require('../controllers/courses');

router.route('/')
  .get((CoursesController.getAll))
  .post(CoursesController.create);

router.route('/:skip/:top')
  .get(CoursesController.getFiltered);


router.route('/:id')
  .get(CoursesController.getOne)
  .put(CoursesController.update)
  .delete(CoursesController.remove)


module.exports = router;