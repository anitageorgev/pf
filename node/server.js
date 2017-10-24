const express = require("express");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 8080;

var app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(__dirname + "/docs"));

