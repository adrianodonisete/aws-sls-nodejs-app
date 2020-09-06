const createError = require('http-errors');
const express = require('express');
const helmet = require('helmet');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const db = require('./config/db');
const mongoose = require("mongoose");
const sls = require('serverless-http');

mongoose.connect(db.uri, { 
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const indexRouter = require('./routes/index');
const priceRouter = require('./routes/price');
const testedbRouter = require('./routes/testedb');

const app = express();

app.use(helmet());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/', indexRouter);
app.use('/price', priceRouter);
app.use('/db', testedbRouter);


const port = 3000;
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});

// catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });

module.exports.server = sls(app)