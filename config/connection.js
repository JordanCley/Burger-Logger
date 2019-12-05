const Sequelize = require("sequelize");
const PORT = process.env.PORT || 3306;
require("dotenv").config();
const sequelize = new Sequelize("mysql://e1vx2396pdv9f1o8:np8un0ycsxj58zi1@hcm4e9frmbwfez47.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/gdpoc1dmi11tk7ql");

// const sequelize = new Sequelize(
//   "burgers_db",
//   process.env.DB_USER,
//   process.env.DB_PASS,
//   {
//     host: process.env.DB_HOST,
//     port: PORT,
//     dialect: "mysql",
//     pool: {
//       max: 5,
//       min: 0,
//       idle: 10000
//     }
//   }
// );

module.exports = sequelize;
