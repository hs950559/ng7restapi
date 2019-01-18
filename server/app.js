const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

mongoose.Promise = global.Promise;
if (process.env.NODE_ENV === 'test') {
  mongoose.connect('mongodb://localhost/APIAuthenticationTEST');
} else {
  // mongoose.connect('mongodb://localhost/APIAuthentication');
  mongoose.connect('mongodb://hemant:123@ds255768.mlab.com:55768/apiauth').then(() => console.log('Connected to mLab'));
}

const app = express();

// Middlewares
app.use(cors());

if (!process.env.NODE_ENV === 'test') {
  app.use(morgan('dev'));
}

app.use(bodyParser.json());

// Use Routes
app.use('/users', require('./routes/users'));
app.use('/books', require('./routes/books'));
app.use('/courses', require('./routes/courses'));

// Global Error Handling
// Catch 404 errors and forword them to error handler
// app.use((req, res, next) => {
// 	const err = new Error('Not Found');
// 	err.status = 404;
// 	next(err);
// });

// // Error handler
// app.use((err, req, res, next) => {
// 	const error = app.get('env') === 'dev' ? err : {};
// 	const status = error.status || 500;

// 	res.status(status).json({
// 		error: {
// 			message: error.message
// 		}
// 	});
// });

module.exports = app;
