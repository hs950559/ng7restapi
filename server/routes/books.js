const express = require('express');
const router = require('express-promise-router')();
const BooksController = require('../controllers/books');

router.route('/')
  .get((BooksController.getAll))
  .post(BooksController.create);

router.route('/:skip/:top')
  .get(BooksController.getFiltered);


router.route('/:id')
  .get(BooksController.getOne)
  .put(BooksController.update)
  .delete(BooksController.remove)


module.exports = router;