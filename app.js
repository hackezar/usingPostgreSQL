// app.js
const express = require('express')
const app = express();
const usersRouter = require('./routes/usersRouter');
CONNECTION_STRING=`postgresql://${process.env.USER}:${process.env.PASSWORD}@${process.env.HOST}:${process.env.PORT}/${process.env.DATABASE}`;

const dotenv = require('dotenv');
dotenv.config();
console.log(CONNECTION_STRING);

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use("/", usersRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Express app listening on port ${PORT}!`));

const { body, validationResult } = require('express-validator');
