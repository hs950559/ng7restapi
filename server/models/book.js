const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create a schema
const bookSchema = new Schema({
    name: String,
    publishedDate: {
        type: Date,
        default: Date.now
    },
    author: String,
    price: Number
});

// search fields
bookSchema.index({'$**': 'text'});

// Create a model
const Book = mongoose.model('book', bookSchema);

// Export the model
module.exports = Book;