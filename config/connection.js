const Sequelize = require("sequelize");
require("dotenv").config();

const sequelize = new Sequelize(
  "burgers_db",
  process.env.CLEARDB_USER,
  process.env.CLEARDB_PASS,
  {
    host: process.env.CLEARDB_HOST,
    port: 3306,
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      idle: 10000
    }
  }
);

module.exports = sequelize;
