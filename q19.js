db.employyes.find(
    {department: "HR" }
);

db.employees.find(
    {department: { $eq: "HR" }}
);