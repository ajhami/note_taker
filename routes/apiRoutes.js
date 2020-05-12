// ===============================================================================
// API ROUTING
// ===============================================================================

var path = require("path");
var dbNotes = require("./../db/db.json");


module.exports = function(app) {
    
    app.get("/api/notes", function(req, res) {
        res.json(dbNotes);
    });

    app.get("/api/notes/:search", function(req, res) {
        var noteSearched = req.params.search;
        for(let note of dbNotes) {
            if(note.title.toLowerCase() === noteSearched.toLowerCase()) {
                return res.json(note);
            }
            else if(note.id === noteSearched) {
                return res.json(note);
            }
        }

        return res.send("Note not found.")

    });


    app.post("/api/notes", function(req, res) {

        dbNotes.push(req.body);
        res.redirect(req.get('referer'));

    });

    app.delete("/api/notes/:noteID", function(req, res) {

        var idSearched = req.params.noteID;

        for(let i = 0; i < dbNotes.length; i++) {
            if(dbNotes[i].id === idSearched) {
                dbNotes.splice(i, 1);
                return res.sendFile(path.join(__dirname, "./../public/notes.html"));            }
        }

        return res.send("Note not found.");
    
    });

};