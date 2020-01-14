// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var Charity = require("../models/charities.js");

// Routes
// =============================================================
module.exports = function (app) {
    // Get all charities
    app.get("/api/my-charities", function (req, res) {
        Charity.findAll({}).then(function (results) {
            res.json(results);
        });
    });

    // Get all charities of a specific category
    app.get("/api/category/:category", function (req, res) {
        Charity.findAll({
            where: {
                //Change value end to match
                category: req.params.category
            }
        }).then(function (results) {
            res.json(results);
        });
    });

    // Get all charities from a specific cause
    app.get("/api/cause/:cause", function (req, res) {
        Charity.findAll({
            where: {
                cause: req.params.cause
            }
        }).then(function (results) {
            res.json(results);
        });
    });

    // Get all books from a specific author
    app.get("/api/location/:location", function (req, res) {
        Charity.findAll({
            where: {
                location: req.params.location
            }
        }).then(function (results) {
            res.json(results);
        });
    });



    // Add a charity
    app.post("/api/new", function (req, res) {
        console.log("Charity Data:");
        console.log(req.body);
        Charity.create({
            //Change last value to match wtih key titles.  Currently has book values
            name: req.body.name,
            category: req.body.category,
            cause: req.body.cause,
            location: req.body.location
        }).then(function (results) {
            res.json(results);
        });
    });

    // Delete a charity
    app.delete("/api/charities/:id", function (req, res) {
        console.log("Charity ID:");
        console.log(req.params.id);
        Charity.destroy({
            where: {
                id: req.params.id
            }
        }).then(function () {
            res.end();
        });
    });
};
