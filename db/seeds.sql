INSERT INTO department (department_name)
VALUES  ("Product Development"),
        ("Finance"),
        ("Sales and Marketing"),

INSERT INTO roles (job_title, department_id, role_salary)
VALUES  
        ("Product Development Manager", 1, 13000),
        ("Web Developer", 1),
        ("Mobile Developer", 1, 90000,),
        ("Back-End Developer", 1, 105000),
        ("Quality Assurance and Testing Specialist", 1, 70000),
        ("Finance Manager", 2, 125000),
        ("Finance Analyst", 2, 75000),
        ("Budget Analyst", 2, $58600.00)
        ("Sales and Marketing Manager", 3, 120000),
        ("Sales Analyst", 3, 55000), ,
        ("Marketing Analyst", 3, 55000);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES  ("Nancy", "Thomas", 1, NULL),
        ("Justin", "Lee", 2, 1),
        ("John", "Wright", 3, 1),
        ("Thomas", "Mann", 4, 1),
        ("Anna", "Smith", 5, 1),
        ("Rebecca", "Donton", 6, NULL),
        ("Sam", "Fergin", 7, 6),
        ("Elizabeth", "Brown", 8, 6),
        ("Joseph", "Martinez", 9, NULL),
        ("Mark", "Taylor", 10, 9),
        ("Sarah", "Anani", 9);
