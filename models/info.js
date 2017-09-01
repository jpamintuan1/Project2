
// Dependencies
// =============================================================

// Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
var sequelize = require("../config/connection.js");

// Creates a "Character" model that matches up with DB
var Info = sequelize.define("info", {
  // the routeName gets saved as a string
  routeName: Sequelize.STRING,
  // the name of the character (a string)
  name: Sequelize.STRING,
  // the character's role (a string)
  email: Sequelize.STRING,
  // the character's age (a string)
  phone: Sequelize.STRING,
  // and the character's force points (an int)
  position: Sequelize.STRING,

  company: Sequelize.STRING,

  message: Sequelize.STRING

}, {
  timestamps: false
});

// Syncs with DB
Info.sync();

// Makes the Character Model available for other files (will also create a table)
module.exports = Info;
