const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const path = require("path");
const hbs = require("hbs");

const templatePath = path.join(__dirname, "../template/views");
const particalsPath = path.join(__dirname, "../template/partials");

app.set("view engine", "hbs");

app.set("views", templatePath);

hbs.registerPartials(particalsPath);

app.use(express.static(templatePath));

app.get("/", (req, res) => {
  res.render("index", {
    style: "webstyle.css",
  });
});


app.get("*", (req, res) => {
  res.end("Page not Found");
});

app.listen(port, () => {
  console.log(`server is running at port no ${port}`);
});
