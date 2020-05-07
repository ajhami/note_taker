// ===============================================================================
// API ROUTING
// ===============================================================================


// MOVE TO ROUTE FOLDER

var dbNotes = require("./../db/db.json");


module.exports = function(app) {
    
    app.get("/api/notes", function(req, res) {
        res.json(dbNotes);
    });

    app.post("/api/notes", function(req, res) {
        dbNotes.push(req.body);
    });

};
