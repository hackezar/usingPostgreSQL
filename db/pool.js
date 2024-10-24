const { Pool } = require("pg");


const dotenv = require('dotenv');
dotenv.config();

// All of the following properties should be read from environment variables
// Below is an example for a Connection URI

module.exports = new Pool({
    connectionString: process.env.CONNECTION_STRING,
  });


  // Different way example
/*
  module.exports = new Pool({
    host: process.env.HOST, //or wherever the db is hosted
    user: process.env.USER,
    database: process.env.DATABASE,
    password: process.env.PASSWORD,
    port: process.env.PORT // The default Port
})
    */