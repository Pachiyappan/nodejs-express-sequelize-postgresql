const db = require("../models");
const Employee = db.employees;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
  // Validate request
  if (!req.body.firstName) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }

  // Create a Employee
  const employee = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    phoneNo: req.body.phoneNo,
    mailId: req.body.mailId,
    gender: req.body.gender,
    profilePic: req.body.profilePic,
    isDeleted: req.body.isDeleted,
    comm_address: req.body.comm_address,
    per_address: req.body.profilePic,
  };

  // Save Employee in the database
  Employee.create(employee)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tutorial.",
      });
    });
};

exports.findAll = (req, res) => {
  Employee.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials.",
      });
    });
};

exports.findOne = (req, res) => {
  const id = req.params.id;
  Employee.findByPk(id)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving Employee with id=" + id,
      });
    });
};

exports.update = (req, res) => {
  const id = req.params.id;
  Employee.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Tutorial was updated successfully.",
        });
      } else {
        res.send({
          message: "Cannot update the Employee.",
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error on updateing Employee",
      });
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;
  Employee.destroy({ where: { id: id } })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Employee Deleted Successfully",
        });
      } else {
        res.send({
          message: "Cannot delete the EMployee",
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete",
      });
    });
};
