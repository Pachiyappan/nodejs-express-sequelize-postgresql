module.exports = {
  HOST: "localhost",
  USER: "postgres",
  PASSWORD: "user@123",
  DB: "tutorialDB",
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
