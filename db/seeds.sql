INSERT INTO departments (department_name)
VALUES  ("Product Development"),
        ("Finance and Accounting"),
        ("Sales and Marketing");

INSERT INTO roles (title, salary, department_id)
VALUES  ("Web Developer", 95000, 1),
        ("Mobile Developer", 90000, 1),
        ("Back-End Developer", 105000, 1),
        ("Q & A Specialist", 70000, 1),
        ("Financial Analyst", 85000, 2),
        ("AP Specialist", 69000, 2),
        ("AR Specialist", 69600, 2),
        ("Sales Analyst", 70000, 3),
        ("Marketing Analyst", 75000, 3),
        ("Social Media Coordinator", 65000, 3);

INSERT INTO employees (first_name, last_name, role_id)
VALUES  ("Justin", "Lee", 1),
        ("John", "Wright", 2),
        ("Thomas", "Mann", 3),
        ("Michael", "Lee", 4),
        ("Brian", "Ari", 5),
        ("Sam", "Fergin", 6),
        ("Liz", "Brown", 7),
        ("Cara", "Scaliste", 8),
        ("Mark", "Taylor", 9),
        ("Sarah", "Anani", 10);

INSERT INTO managers (first_name, last_name, department_id)
VALUES  ("Sai", "Patel", 1),
        ("Anna", "Smith", 2),
        ("Tamara", "Martinez", 3);
        
