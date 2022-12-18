const connection = require("./config/connection");
const inquirer = require("inquirer");
const cTable = require("console.table");

// Launch application

const mainMenu = () => {
  inquirer
    .prompt([
      {
        type: "list",
        name: "mainMenu",
        message: "What would you like to do?",
        choices: [
          "View All Employees",
          "Add Employee",
          "Update Employee Role",
          "View All Roles",
          "Add Role",
          "View All Departments",
          "Add Department",
          "Exit App",
        ],
      },
    ])
    .then((answers) => {
      switch (answers.mainMenu) {
        case "View All Employees":
          viewAllEmployees();
          break;
        case "Add Employee":
          addEmployee();
          break;
        case "Update Employee Role":
          updateEmployee();
          break;
        case "View All Roles":
          viewAllRoles();
          break;
        case "Add Role":
          addRole();
          break;
        case "View All Departments":
          viewAllDepartments();
          break;
        case "Add Department":
          addDepartment();
          break;
        case "Exit App":
          connection.end();
          break;
      }
    });
};

/* === || View All Employees || === */

const viewAllEmployees = () => {
  const sql = `
  SELECT  a.employee_id,
        a.first_name, 
        a.last_name,
        b.title,
        c.department_name,
        b.salary,
        CASE WHEN a.manager_id IS NULL THEN NULL ELSE concat(d.first_name," ",d.last_name) END AS manager_name
FROM employees a
LEFT JOIN roles b ON a.employee_id = b.role_id
LEFT JOIN departments c ON c.department_id = b.department_id
LEFT JOIN (
        SELECT c.department_name, 
               a.last_name,
               a.first_name
        FROM employees a
        LEFT JOIN roles b ON a.employee_id = b.role_id
        LEFT JOIN departments c ON c.department_id = b.department_id
        WHERE manager_id IS NULL
) d
ON c.department_name = d.department_name`;
  connection.query(sql, (error, response) => {
    if (error) throw error;
    console.table(response);
    mainMenu();
  });
};

/* === || Add Employee || === */
const addEmployee = () => {
  inquirer
    .prompt([
      {
        name: "firstName",
        type: "input",
        message: "Please input the first name of the Employee",
      },
      {
        name: "lastName",
        type: "input",
        message: "Please input the first name of the Employee",
      },
      {
        name: "role",
        type: "input",
        message: "Please input the role of the Employee",
      },
      {
        name: "lastName",
        type: "input",
        message: "Please input the department name of the Employee",
      },
    ])
    .then((answer) => {
      let sql = `INSERT INTO employees (employees.first_name, employees.last_name) VALUES (?)`;
      connection.query(sql, answer.newEmployee, (error, response) => {
        if (error) throw error;
        console.log(answer.newEmployee + `record is successfully created`);
        viewAllDepartments();
      });
    });
};
/* === || Update Employee Role || === */

const updateEmployee = () => {
  const sql = `
  UPDATE 
  SET
  WHERE `;
  connection.promise().query(sql, (error, response) => {
    if (error) throw error;
    mainMenu();
  });
};

/* === || View All ROles || === */

const viewAllRoles = () => {
  const sql = `
  SELECT  roles.role_id,
  roles.title,
  roles.salary,
  departments.department_name
  FROM roles
  LEFT JOIN departments ON roles.department_id = departments.department_id;`;
  connection.query(sql, (error, response) => {
    if (error) throw error;
    console.table(response);
    mainMenu();
  });
};

/* === || Add Role || === */
const addRole = () => {
  inquirer
    .prompt([
      {
        name: "newRole",
        type: "list",
        message: "Please select the department that role is in",
        choices: deptArray,
      },
    ])
    .then((answer) => {
      let sql = `INSERT INTO departments (department_name) VALUES (?)`;
      connection.query(sql, answer.newDepartment, (error, response) => {
        if (error) throw error;
        console.log(answer.newDepartment + `successfully created`);
        viewAllDepartments();
      });
    });
};

/* === || View All Departments || === */
const viewAllDepartments = () => {
  const sql = `SELECT * FROM departments`;
  connection.query(sql, (error, response) => {
    if (error) throw error;
    console.table(response);
    mainMenu();
  });
};

/* === || Add Department || === */
const addDepartment = () => {
  inquirer
    .prompt([
      {
        name: "newDepartment",
        type: "input",
        message: "Please input the name of the new department",
      },
    ])
    .then((answer) => {
      let sql = `INSERT INTO departments (department_name) VALUES (?)`;
      connection.query(sql, answer.newDepartment, (error, response) => {
        if (error) throw error;
        console.log(answer.newDepartment + ` is successfully added`);
        viewAllDepartments();
      });
    });
};

mainMenu();
