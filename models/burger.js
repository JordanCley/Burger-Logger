// var Sequelize = require("sequelize");
// // sequelize (lowercase) references our connection to the DB.
// var sequelize = require("../config/connection.js");
module.exports = function(sequelize, DataTypes) {
const Burger = sequelize.define("Burger", {
    devoured: {
        type: DataTypes.BOOLEAN,
        defaultValue: 0
    },
    burger_name: DataTypes.STRING
},{timestamps: false});

return Burger;
};
