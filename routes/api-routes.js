// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var Info = require("../models/info.js");

// Routes
// =============================================================
module.exports = function(app) {

  // Search for Specific Character (or all characters) then provides JSON
  app.get("/api/:infos?", function(req, res) {

    // If the user provides a specific character in the URL...
    if (req.params.infos) {

      // Then display the JSON for ONLY that character.
      // (Note how we're using the ORM here to run our searches)
      Info.findOne({
        where: {
          routeName: req.params.infos
        }
      }).then(function(result) {
        return res.json(result);
      });
    }

    // Otherwise...
    else {
      // Otherwise display the data for all of the characters.
      // (Note how we're using Sequelize here to run our searches)
      Info.findAll({})
        .then(function(result) {
          return res.json(result);
        });
    }

  });

  // If a user sends data to add a new character...
 // If a user sends data to add a new character...
  app.post("/api/new", function(req, res) {

    // Take the request...
    var info = req.body;
    console.log('info', info)

    // Create a routeName
    var routeName = info.name.replace(/\s+/g, "").toLowerCase();

    // Then add the character to the database using sequelize
    Info.create({
      routeName: routeName,
      name: info.name,
      email: info.email,
      phone: info.phone,
      position: info.position,
      company: info.company,
      message: info.message
    });
    res.send('inserted a record');

  });
};

