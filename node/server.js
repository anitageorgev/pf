const express = require("express");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 8080;

var index = require(".routes/index");

var app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(__dirname + "/docs"));

app.use("/", index);

app.get("/",(req,res) => {
    res.sendFile("index.html");
});

app.get("*", (req, res) => {
    res.status(404).send("404 Error: Resource requested does not exist.");
});

app.listen(PORT, () =>{
    console.log("Server started on port: "+ PORT);
});

module.exports= app;