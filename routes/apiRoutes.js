// ===============================================================================
// API ROUTING
// ===============================================================================


// MOVE TO ROUTE FOLDER

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


    // app.post("/api/notes", function(req, res) {
    //     dbNotes.push(req.body);
    // });

};