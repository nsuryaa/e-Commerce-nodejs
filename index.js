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
  res.render("home", {
    title: "Home",
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "About us",
  });
});

app.get("/shop", (req, res) => {
  res.render("shop", {
    title: "Shop here",
  });
});

app.get("/product/:id", (req, res) => {
  console.log(req.params.id);
  var data = [
    {
      id: 1,
      productName: "Shirt",
    },
    {
      id: 2,
      productName: "Pant",
    },
  ];
  var result;

  data.forEach((product) => {
    if (product.id == req.params.id) {
      result = product;
      return true;
    }
  });
  res.render("product.ejs", {
    title: "Product Details",
    product: result,
  });
  console.log(result);
});

app.get("/api", (req, res) => {
  res.json({
    name: "Surya",
  });
});
// default port:8080

//app will listen
// 0-65536--> 3000,8000,8080

app.listen(3000);
