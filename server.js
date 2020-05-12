// ===============================================================================
// SERVER.JS
// ===============================================================================


var express = require("express");
var app = express();
const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'))


// ROUTES
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

// LISTENER
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});