var Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
var sequelize = require("../config/config.json");

const Burger = sequelize.define("burger", {
    devoured: {
        type: Sequelize.BOOLEAN,
        defaultValue: 0
    },
    burger_name: Sequelize.STRING
},{timestamps: false});

Burger.sync();

module.exports = Burger;