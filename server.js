const connection = require("./config/connection");
const inquirer = require("inquirer");
const cTable = require("console.table");

// Launch application

// mainMenu();

// function mainMenu() {
//   inquirer.prompt(prompt.mainMenu).then(function ({ items }) {
//     switch (items) {
//       case "View All Employees":
//         viewAllEmployees();
//         break;
//       case "Add Employee":
//         addEmployee();
//         break;
//       case "Update Employee Role":
//         updateEmployee();
//         break;
//       case "View All Roles":
//         viewAllRoles();
//         break;
//       case "Add a Role":
//         addRole();
//         break;
//       case "View All Departments":
//         viewAllDepartments();
//         break;
//       case "Add a Department":
//         addDepartment();
//         break;
//     }
//   });
// }

/* === || VIEW ALL EMPLOYEES || === */

/* === || VIEW ALL ROLES || === */

const viewAllRoles = () => {
  const sql = `SELECT * FROM roles`;
  connection.promise().query(sql, (error, response) => {
    if (error) throw error;
    response.forEach((role) => {
      console.log(role.title);
    });
  });
};
/* === || VIEW ALL DEPARTMENTS || === */

/* === || VIEW EMPLOYEE BY MANAGER || === */
