// ===============================================================================
// HTML PAGE ROUTING
// ===============================================================================

// MOVE TO ROUTE FOLDER

// var app = require("express").Router();

var path = require("path");

module.exports = function(app) {
    
    app.get("/notes", function(req, res) {
        res.sendFile(path.join(__dirname, "./../public/notes.html"));
    });

    // app.get("/assets/js/index.js", function(req, res) {
    //     res.sendFile(path.join(__dirname, "./../public/assets/js/index.js"));
    // });

    app.get("*", function(req, res) {
        res.sendFile(path.join(__dirname, "./../public/index.html"));
    });

};

// NOTE: SEARCH HOW TO SERVE UP A PUBLIC FOLDER IN EXPRESS
// SERVING STATIC FILES!!