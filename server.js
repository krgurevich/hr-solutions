const inquirer = require("inquirer");
const mysql = require("mysql");
const consoleTable = require('console.table');

const db = mysql.createConnection(
  {
    host: "localhost",
    port: 3001,
    user: "root",
    password: "",
    database: employee_db,
  },
  console.log(`Connected to the employee_db database`)
);

// View
const viewAllEmployees = () => {
  
}
