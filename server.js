var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
var logger = require('morgan');
var cors = require("cors");
const mongoose = require('mongoose');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var testAPIRouter = require("./routes/testAPI");
var messagesRouter = require("./routes/messagesRouter");

var app = express();
app.use(express.static(path.join(__dirname, 'client/build')));

const dbRoute = 'mongodb+srv://m001-student:m001-mongodb-basics@sandbox-wrjir.mongodb.net/test?retryWrites=true&w=majority';

// connects our back end code with the database
mongoose.connect(process.env.MONGODB_URI||dbRoute,{dbName: 'messageList'})

let db = mongoose.connection;

db.once('open', () => console.log('connected to the database'));

// checks if connection with the database is successful
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger('dev'));

// view engine setup
app.set('views', path.join(__dirname, 'views'));

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use("/testAPI", testAPIRouter);
app.use('/messages', messagesRouter);

app.use(express.static(path.resolve(__dirname, '../client/build')));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
app.get('/', (req, res) => {
  res.json({ message: 'Hello world' })
})
module.exports = app;


// var createError = require('http-errors');
// var express = require('express');
// var path = require('path');
// var cookieParser = require('cookie-parser');
// var logger = require('morgan');
// var cors = require("cors");
// var mongoose = require('mongoose');
// const dbRoute = 'mongodb+srv://m001-student:m001-mongodb-basics@sandbox-wrjir.mongodb.net/test?retryWrites=true&w=majority';



// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');
// var testAPIRouter = require("./routes/testAPI");
// var messagesRouter = require('./routes/messagesRouter');


// var app = express();
// app.use(express.static(path.join(__dirname, "client", "build")))


// // view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');

// app.use(cors());
// app.use(logger('dev'));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', indexRouter);
// app.use('/users', usersRouter);
// app.use("/testAPI", testAPIRouter);
// app.use('/messages', messagesRouter);

// mongoose.connect(process.env.MONGODB_URI||dbRoute,{dbName: 'messageList'})
// let db = mongoose.connection;

// //db.once('open', () => console.log('connected to the database'));

// if(process.env.NODE_ENV === 'production'){
//   app.use(express.static('../client/build'));
//   app.get('*',(req,res)=> {
//     res.sendFile(path.join(__dirname,'client','build','index.html')); //relative path
//   });
// }

// // catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });

// // error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "client", "build", "index.html"));
// });


// module.exports = app;
