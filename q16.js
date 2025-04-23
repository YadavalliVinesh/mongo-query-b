db.employees.updateMany(
    {},
    {$set:{points:0}}
);

db.employees.updateMany(
    {department:"HR"},
    {$set:{points:5}}
);

db.employees.updateMany(
    {},
    {$inc:{points:20}}
);

db.employees.updateMany(
    {email:"amysam@gmail.com"},
    {$inc:{points:1}}
);