module.exports = (app) => {
  const employee = require("../controllers/employee.controller.js");

  var router = require("express").Router();

  // Create a new Tutorial
  router.post("/", employee.create);

  // Retrieve all employee
  router.get("/", employee.findAll);

  //Retrive an employee by id
  router.get("/:id", employee.findOne);

  // Update an Employee by id
  router.put("/:id", employee.update);

  // Delete Employee
  router.delete("/:id", employee.delete);
  

  app.use("/api/employee", router);
};
