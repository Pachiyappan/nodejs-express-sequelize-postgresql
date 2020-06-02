// import { QueryInterface } from "sequelize";

module.exports = (sequelize, Sequelize) => {
  const Employee = sequelize.define("employees", {
    id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
    firstName: { type: Sequelize.STRING, allowNull: false },
    lastName: { type: Sequelize.STRING, allowNull: true },
    phoneNo: { type: Sequelize.STRING, allowNull: false },
    mailId: { type: Sequelize.STRING, allowNull: false },
    gender: { type: Sequelize.INTEGER, allowNull: false },
    profilePic: { type: Sequelize.STRING, allowNull: true },
    isDeleted: {
      type: Sequelize.BOOLEAN,
      allowNull: true,
      defaultValue: false,
    },
    comm_address: { type: Sequelize.STRING, allowNull: true },
    per_address: { type: Sequelize.STRING, allowNull: true },
  });

  return Employee;
};
