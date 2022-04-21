// Dependencies
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

//.env variables
require('dotenv').config();

//Routes variables
const indexRouter = require('./routes/index');
const itTechnicianRouter = require('./routes/itTechnician')
const clientsRouter = require('./routes/clients');
const ticketsRouter = require('./routes/tickets');
const companiesRouter = require('./routes/companies');

const app = express();


//Middlewares
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//Routes
app.use('/', indexRouter);
app.use('/ittechnician', itTechnicianRouter);
app.use('/clients', clientsRouter);
app.use('/tickets', ticketsRouter);
app.use('/companies', companiesRouter);


module.exports = app;
