const Course = require('../models/course');

module.exports = {
  index: async (req, res, next ) => {
    res.status(200).send('All Courses');
  },

  getAll: async (req, res, next) => {
    let queryParam = req.query.q ? {$text: {$search: req.query.q}} : (req.query || {});
    const courses = await Course.find(queryParam); 
    res.status(200).json(courses);
  },

  getFiltered: async (req, res, next) => {
    // const count = await Course.count(); // may be want to use this
    const filteredCourses =  await Course.find({})
                                .sort({ name: 1 })
                                .skip(+req.params.skip)
                                .limit(+req.params.top);

    res.status(200).json(filteredCourses);
  },

  getOne: async (req, res, next) => {
    const course = await Course.findOne({ _id: req.params.id });
    res.status(200).json(course);
  },

  create: async (req, res, next) => {
    const newCourse = new Course(req.body);
    await newCourse.save();
    res.status(200).json(newCourse);
  },

  update: async (req, res, next) => {
    const course = await Course.findByIdAndUpdate(req.params.id, req.body, {new: true}); 
    res.status(200).json(course); 
  },

  update: async (req, res, next) => {
    const course = await Course.findByIdAndUpdate(req.params.id, req.body, {new: true}); 
    res.status(200).json(course); 
  },

  remove: async (req, res, next) => {
    const course = await Course.remove({_id: req.params.id}); 
    res.status(200).json(course); 
  }
}