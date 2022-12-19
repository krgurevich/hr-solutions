const mysql = require("mysql2");
require("dotenv").config();

const connection = mysql.createConnection(
  {
    host: "localhost",
    user: "root",
    password: process.env.PASSWORD,
    database: "employee_db",
  },
  console.log(`Connected to the employees_db database.`)
);

module.exports = connection;
