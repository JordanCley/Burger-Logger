const Sequelize = require("sequelize");
require("dotenv").config();

const sequelize = new Sequelize(
  "burgers_db",
  process.env.DB_USER || CLEARDB_USER,
  process.env.DB_PASS || CLEARDB_PASS,
  {
    host: process.env.DB_HOST || process.env.CLEARDB_HOST,
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
