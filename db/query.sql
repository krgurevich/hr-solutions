SELECT  employees.employee_id, 
        employees.first_name, 
        employees.last_name,
        roles.title,
        departments.department_name,
        roles.salary,
        CONCAT(managers.first_name, " ", managers.last_name) as manager_name
FROM employees  
LEFT JOIN roles ON employees.employee_id = roles.role_id
LEFT JOIN departments ON departments.department_id = roles.department_id
LEFT JOIN managers ON managers.department_id = departments.department_id;

