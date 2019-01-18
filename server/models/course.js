const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create a schema
const courseSchema = new Schema({
    id: Number,
    description: String,
    iconUrl: String,
    courseListIcon: String,
    longDescription: String,
    category: String,
    lessonsCount: Number
});

// search fields
courseSchema.index({'$**': 'text'});

// Create a model
const Course = mongoose.model('course', courseSchema);

// Export the model
module.exports = Course;