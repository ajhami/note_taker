


var express = require("express");




var app = express();


var PORT = process.env.PORT || 3030;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// ROUTES
require("./htmlRoutes")(app);
require("./apiRoutes")(app);


// LISTENER
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});