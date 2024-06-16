require("dotenv").config();
require("./config/connection");
require("./config/adminStrategy");
const express = require("express");
const morgan = require("morgan");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 8080 ;
const cors = require("cors");
const helmet = require("helmet");
const session = require("express-session");
const passport = require("passport");
app.use(morgan("dev"));
const siteRoutes = require("./routes/siteRoutes");
const adminRoutes = require("./routes/adminRoutes");
const subscribeRoutes = require("./routes/subscribeRoute")

app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "/public")));
app.use(
  session({
    secret: process.env.SECRET_KEY,
    resave: false,
    saveUninitialized: false,
  })
);
app.use(passport.initialize());
app.use(passport.session());
//GET routes

app.get("/", (request, response, next) => {
  response.status(200).json({
    success: { message: "This route points to the Home page" },
    statusCode: 200,
  });
});

app.use("/api/resources", siteRoutes);
app.use("/api/admin", adminRoutes);
app.use("api/subscribe", subscribeRoutes)
// app.use(contactRoutes);

//ROUTE TO THE HOME PAGE

app.listen(PORT, () => {
  //SEND A MESSAGE
  console.log(`The server is listening on port ${PORT}`);
  console.log(`http://localhost:${PORT}`);
});
