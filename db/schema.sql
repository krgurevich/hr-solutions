DROP DATABASE IF EXISTS employee_db;
CREATE DATABASE employee_db;

USE employee_db;

CREATE TABLE departments (
  department_id INT NOT NULL AUTO_INCREMENT,
  department_name VARCHAR(45) NULL,
  PRIMARY KEY (department_id)
);

CREATE TABLE roles (
  role_id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(50) NOT NULL,
  salary DECIMAL NOT NULL,
  department_id INT NULL,
  PRIMARY KEY (role_id)
);

CREATE TABLE employees (
  employee_id INT NOT NULL AUTO_INCREMENT,
  first_name VARCHAR(30) NULL,
  last_name VARCHAR(30) NULL,
  role_id INT NOT NULL,
  manager_id INT NULL,
  PRIMARY KEY (employee_id)
);



