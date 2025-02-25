const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.set("view engine", "ejs");
app.set("views", "views");

app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.setHeader("Content-Type", "text/html");
  next();
});

app.use((req, res, next) => {
  const userName = req.body.username || "Unknown user";
  // res.send(
  //   `<h1>Hi, ${userName}</h1><form method="POST" action="/"><input name="username" type="text"/><button>Submit</button></form>`
  // );
  ////Using template engine
  res.render("index", {
    user: userName,
  });
});

app.listen(3000, () => {
  console.log("Listening on 3000");
});
