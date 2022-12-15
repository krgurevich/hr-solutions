DROP DATABASE IF EXISTS employee_db;
CREATE DATABASE employee_db;

USE employee_db;

CREATE TABLE department (
    department_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    department_name VARCHAR(30) NOT NULL
);

CREATE TABLE roles (
    role_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    job_title VARCHAR(30) NOT NULL,
    department_id INT NOT NULL,
    role_salary DECIMAL(7,2) NOT NULL,
    FOREIGN KEY (department_id)
    REFERENCES department(department_id)
    ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE employee (
    employee_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    role_id INT NOT NULL,
    FOREIGN KEY (role_id)
    REFERENCES roles(role_id)
    ON DELETE RESTRICT ON UPDATE CASCADE,
    manager_id INT NULL,
    FOREIGN KEY (manager_id)
    REFERENCES employee(employee_id)
    ON DELETE SET NULL
    ON UPDATE CASCADE
);



