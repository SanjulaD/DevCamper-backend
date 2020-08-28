const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const colors =  require('colors'); 
const connectDB = require('./config/db');

//Lode env vars
dotenv.config({ path: './config/config.env' });

//Connect MongoDB
connectDB();

//Get bootcamp routes
const bootcamps = require('./routes/bootcamps');

const app = express();

//Dev Login middleware
if(process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

//Mount routers
app.use('/api/v1/bootcamps', bootcamps);

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold));

//Handle Unhandled Promise Rejection
process.on('unhandledRejection', (err, promise) => {
    console.log(`Error: ${err.message}`.red);
    //Close server
    server.close(() => process.exit(1));
})