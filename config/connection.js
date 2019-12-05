const Sequelize = require("sequelize");
require("dotenv").config();

const sequelize = new Sequelize(
  "heroku_d5bbb1a9560f796",
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST,
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
