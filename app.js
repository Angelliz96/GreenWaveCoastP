//REQUIRE ALL THE DEPENDENCIES
const express = require("express"); //FRAMEWORK use for make apps in node.js
const morgan = require("morgan"); //register the information request HTTP 
const path = require("path"); // Its use to manipulate routes from files and documents Ex: app.js packet.json
//USE EXPRESS
const app = express(); //NOW ALL THE SERVER IS USING EXPRESS
const PORT = 3001; // CHANNEL TO TALK WITH MY SERVER
const cors = require("cors"); // Help with the safety when people from other services different that mine join to my page, people who want to see my front end from others domains different that mine
const path = require("node:path"); //help to handle the routes from my directory 
const { request } = require("node:http");

app.use(morgan("dev"));

//Middlware
//Help to handle the informationm filter the request HTTP
app.use(express.json()); // In charge to handle the request with J.son format
app.use(express.urlencoded({ extended: true })); // Request with URL HTML
app.use(express.static(path.join(__dirname + "/public"))); //Request that are in Public and are statics like CSS, HTML, img

//ROUTE TO THE HOME PAGE

app.get("/", (request, response, next) => {
  response
    .status(200)
    .json({
      success: { message: "This route points to the Home page" },
      statusCode: 200,
    });
});
