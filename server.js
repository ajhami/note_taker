


var express = require("express");




var app = express();


var PORT = process.env.PORT || 8080;

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




// const express = require("express");
// const apiRoutes = require("./routes/apiRoutes");
// const htmlRoutes = require("./routes/htmlRoutes");
// // Initialize the app and create a port
// const app = express();
// const PORT = process.env.PORT || 3000;
// // Set up body parsing, static, and route middleware
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(express.static("public"));
// app.use("/api", apiRoutes);
// app.use("/", htmlRoutes);
// // Start the server on the port
// app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));