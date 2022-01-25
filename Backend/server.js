const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const connection = require("./connection");
require("./controllers/controllers");

const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));

port = process.env.PORT || 8080;

//Connecting to postgres database
connection.connect(function(err) {
    if(err){
        throw err;
    }
    console.log("Successfully connected to the database.");
});

app.listen(port, () => {
    console.log(`Express server up and running on port ${port}`);
});