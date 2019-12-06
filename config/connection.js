const Sequelize = require("sequelize");
const PORT = process.env.PORT || 3306;
require("dotenv").config();



const sequelize = new Sequelize(
  process.env.JAWSDB_DATABASE,
  process.env.JAWSDB_USER,
  process.env.JAWSDB_PASS,
  {
    host: process.env.JAWSDB_HOST,
    port: PORT,
    dialect: "mysql2",
    pool: {maxIdleTime: 120000}
  }
);

sequelize.authenticate().then((result)=>{console.log(".then")}).catch((err) => {throw err})

module.exports = sequelize;
