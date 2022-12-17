SELECT  a.employee_id,
        a.manager_id,
        a.first_name, 
        a.last_name,
        b.title,
        c.department_name,
        b.salary,
        CASE WHEN a.manager_id IS NULL THEN NULL ELSE concat(d.first_name," ",d.last_name) END AS manager_name
FROM employees a
LEFT JOIN roles b ON a.employee_id = b.role_id
LEFT JOIN departments c ON c.department_id = b.department_id

/* subquery to derive unique department name and manager crosswalk */
LEFT JOIN (
        SELECT c.department_name, 
               a.last_name,
               a.first_name
        FROM employees a
        LEFT JOIN roles b ON a.employee_id = b.role_id
        LEFT JOIN departments c ON c.department_id = b.department_id
        WHERE manager_id IS NULL
) d
ON c.department_name = d.department_name;



