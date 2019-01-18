const Book = require('../models/book');

module.exports = {
  index: async (req, res, next ) => {
    res.status(200).send('Books');
  },

  getAll: async (req, res, next) => {
    let queryParam = req.query.q ? {$text: {$search: req.query.q}} : (req.query || {});
    const books = await Book.find(queryParam); 
    res.status(200).json(books);
  },

  getFiltered: async (req, res, next) => {
    // const count = await Book.count(); // may be want to use this
    const filteredBooks =  await Book.find({})
                                .sort({ name: 1 })
                                .skip(+req.params.skip)
                                .limit(+req.params.top);

    res.status(200).json(filteredBooks);
  },

  getOne: async (req, res, next) => {
    const book = await Book.findOne({ _id: req.params.id });
    res.status(200).json(book);
  },

  create: async (req, res, next) => {
    const newBook = new Book(req.body);
    console.log(newBook);
    console.log(req);
    await newBook.save();
    res.status(200).json(newBook);
  },

  update: async (req, res, next) => {
    const book = await Book.findByIdAndUpdate(req.params.id, req.body, {new: true}); 
    res.status(200).json(book); 
  },

  update: async (req, res, next) => {
    const book = await Book.findByIdAndUpdate(req.params.id, req.body, {new: true}); 
    res.status(200).json(book); 
  },

  remove: async (req, res, next) => {
    const book = await Book.remove({_id: req.params.id}); 
    res.status(200).json(book); 
  }
}