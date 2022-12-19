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

/* === || Employee, Dept and Role Arrays || === */
// Department Array
const deptIdArray = [];
const deptNameArray = [];
function deptChoices() {
  connection.query("SELECT * FROM departments", function (error, response) {
    if (error) throw error;
    for (let i = 0; i < response.length; i++) {
      deptIdArray.push(response[i].department_id);
      deptNameArray.push(response[i].department_name);
    }
  });
  return { id: deptIdArray, name: deptNameArray };
}
// Employee Array
const empFirstName = [];
const empLastName = [];
function empChoices() {
  connection.query("SELECT * FROM employees", function (error, response) {
    if (error) throw error;
    for (let i = 0; i < response.length; i++) {
      empFirstName.push(response[i].first_name);
      empLastName.push(response[i].last_name);
    }
  });
  return { firstName: empFirstName, lastName: empLastName };
}
// Role Array
const roleIdArray = [];
const roleTitleArray = [];
function roleChoices() {
  connection.query("SELECT * FROM roles", function (error, response) {
    if (error) throw error;
    for (let i = 0; i < response.length; i++) {
      roleIdArray.push(response[i].role_id);
      roleTitleArray.push(response[i].title);
    }
  });
  return { id: roleIdArray, title: roleTitleArray };
}
// //Manager Array
const managerIdArray = [];
const managerNameArray = [];
function managerChoices() {
  connection.query(
    `SELECT * FROM employees WHERE manager_id IS NULL`,
    function (error, response) {
      if (error) throw error;
      for (let i = 0; i < response.length; i++) {
        managerIdArray.push(response[i].employee_id);
        managerNameArray.push(response[i].first_name + response[i].last_name);
      }
    }
  );
  return { id: managerIdArray, name: managerNameArray };
}

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
        name: "first_name",
        type: "input",
        message: "Please input the first name of the Employee",
      },
      {
        name: "last_name",
        type: "input",
        message: "Please input the last name of the Employee",
      },
      {
        name: "role",
        type: "list",
        message: "Please input the role of the Employee",
        choices: roleChoices().title,
      },
      {
        name: "manager",
        type: "list",
        message: "Please specify the Manager",
        choices: managerChoices().name,
      },
    ])
    .then(function (answer) {
      roleChoices();
      let roleId = 0;
      for (i = 0; i < roleTitleArray.length; i++) {
        if (roleTitleArray[i] === answer.role) {
          roleId = i;
        }
      }
      managerChoices();
      let managerId = 0;
      for (i = 0; i < managerNameArray.length; i++) {
        console.log(managerIdArray);
        if (managerNameArray[i] === answer.manager) {
          managerId =
            managerIdArray[managerNameArray.indexOf(managerNameArray[i])];
        }
      }
      console.log(managerId);
      connection.query(
        `INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES ('${answer.first_name}', '${answer.last_name}', ${roleId}, ${managerId})`,
        (error, response) => {
          if (error) throw error;
          console.log(response);
          console.log(`New Employee is successfully added`);
          mainMenu();
        }
      );
    })
    .catch(function (error) {
      throw new Error(error);
    });
};

/* === || Update Employee Role || === */

/* === || View All Roles || === */

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
        name: "title",
        type: "input",
        message: "What is the name of the role?",
      },
      {
        name: "salary",
        type: "input",
        message: "What is the salary of the role?",
      },
      {
        name: "department",
        type: "list",
        message: "Which department does the role belong to?",
        choices: deptChoices().name,
      },
    ])
    .then(function (answer) {
      deptChoices();
      let deptId = 0;
      for (i = 0; i < deptNameArray.length; i++) {
        if (deptNameArray[i] === answer.department) {
          deptId = deptIdArray[deptNameArray.indexOf(deptNameArray[i])];
        }
      }
      connection.query(
        `INSERT INTO roles (title, salary, department_id) VALUES ('${answer.title}', ${answer.salary}, ${deptId})`,
        (error, response) => {
          if (error) throw error;
          console.log(answer.title + ` is successfully created`);
        }
      );
      mainMenu();
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
