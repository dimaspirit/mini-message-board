const express = require("express");
const path = require("node:path");

const app = express();
const PORT = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
// app.set("views", path.join(__dirname, "views"));

let messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];

app.get('/', (req, res) => {
  res.render("index", {messages});
});

app.get('/new', (req, res) => {
  res.render("new");
});

app.post('/new', (req, res) => {
  let {text, user} = req.body;
  messages.push({ text, user, added: new Date() });
  res.redirect("/");
});

app.listen(PORT, () => {
  console.log(`Active port: ${PORT}`);
});