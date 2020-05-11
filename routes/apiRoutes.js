// ===============================================================================
// API ROUTING
// ===============================================================================


// MOVE TO ROUTE FOLDER

var app = require("express").Router();

var path = require("path");


var dbNotes = require("./../db/db.json");


module.exports = function(app) {
    
    app.get("/api/notes", function(req, res) {
        res.json(dbNotes);
    });

    app.get("/api/notes/:noteTitle", function(req, res) {
        var noteSearched = req.params.noteTitle;
        for(let note of dbNotes) {
            if(note.title === noteSearched) {
                return res.json(note);
            }
        }

        return res.send("Note not found.")

    });


    app.post("/api/notes", function(req, res) {

        console.log("Saving test!");
        console.log("Value = ");
        console.log(req.body);


        // var addingNote = req.body;
        dbNotes.push(req.body);

        res.redirect(req.get('referer'));
    });

    app.delete("/api/notes/:noteID", function(req, res) {
        
        console.log("Testing delete!");

        var noteSearched = req.params.noteID;

        console.log("req = ");
        console.log(noteSearched);

        // var noteSearched = req.params.noteTitle;
        // for(let note of dbNotes) {
        //     if(note.title === noteSearched) {
        //         return res.json(note);
        //     }
        // }

        // return res.send("Note not found.")

    });

};