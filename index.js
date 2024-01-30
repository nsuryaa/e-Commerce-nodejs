//only for use hence declared as const
const express = require("express");
//calling top-level function in express
const app = express();

//Web server methods - get,post,put,delete,create

//creating route for home page

//Middleware for configuring static files

app.use(express.static("public"));
app.set("view engine", "ejs");
//get consist of two paramaters
app.get("/", (req, res) => {
  res.render("home");
});

app.get("/about", (req, res) => {
  res.send("About Page");
});

// default port:8080

//app will listen
// 0-65536--> 3000,8000,8080

app.listen(3000);
