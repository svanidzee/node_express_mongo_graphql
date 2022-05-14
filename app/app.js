const express = require('express');
const morgan = require('morgan');

const tourRouter = require('./routes/tourRoutes');
const userRouter = require('./routes/userRoutes');

const app = express();

// app.use is a special function to increase functionality with Express by adding
// a function to our application ’ s middleware stack
app.use(morgan('dev'));

app.use(express.json());
// When talking about express.json() and express.urlencoded() think specifically about POST requests
// (i.e. the .post request object) and PUT Requests (i.e. the .put request object)
// You DO NOT NEED express.json() and express.urlencoded() for GET Requests or DELETE Requests
// You NEED express.json() and express.urlencoded() for POST and PUT requests, because in both
// these requests you are sending data (in the form of some data object) to the server and you
// are asking the server to accept or store that data (object), which is enclosed in the body
// (i.e. req.body) of that (POST or PUT) Request
// Express provides you with middleware to deal with the (incoming) data (object) in the body of the request
// a. express.json() is a method inbuilt in express to recognize the incoming Request Object as a JSON Object
// This method is called as a middleware in your application using the code: app.use(express.json())
// b. express.urlencoded() is a method inbuilt in express to recognize the incoming Request Object
// as strings or arrays. This method is called as a middleware in your application
// using the code: app.use(express.urlencoded());
app.use((req, res, next) => {
  console.log('wfefef');
  next();
});

app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);

module.exports = app;
