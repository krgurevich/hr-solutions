INSERT INTO departments (department_name)
VALUES  ("Product Development"),
        ("Finance and Accounting"),
        ("Sales and Marketing");

INSERT INTO roles (title, salary, department_id)
VALUES  ("Product Development Manager", 130000, 1),
        ("Web Developer", 95000, 1),
        ("Mobile Developer", 90000, 1),
        ("Back-End Developer", 105000, 1),
        ("Q & A Specialist", 70000, 1),
        ("Finance and Accounting Manager", 130000, 2),
        ("Financial Analyst", 85000, 2),
        ("AP Specialist", 69000, 2),
        ("AR Specialist", 69600, 2),
        ("Sales & Marketing Manager", 130000, 3),
        ("Sales Analyst", 70000, 3),
        ("Marketing Analyst", 75000, 3),
        ("Social Media Coordinator", 65000, 3);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES  ("Sai", "Patel", 1, NULL),
        ("Justin", "Lee", 2, 1),
        ("John", "Wright", 3, 1),
        ("Thomas", "Mann", 4, 1),
        ("Michael", "Lee", 5, 1),
        ("Anna", "Smith", 6, NULL),
        ("Brian", "Ari", 7, 2),
        ("Sam", "Fergin", 8, 2),
        ("Liz", "Brown", 9, 2),
        ("Tamara", "Martinez", 10, NULL),
        ("Cara", "Scaliste", 11, 3),
        ("Mark", "Taylor", 12, 3),
        ("Sarah", "Anani", 13, 3);

