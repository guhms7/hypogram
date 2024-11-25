const express = require("express");
const expressSession = require("express-session");
const path = require("path");
const routes = require("./routes");

const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "../public")));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  expressSession({
    secret: "bbdcd940-927e-4784-adec-ae1bc9055616",
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false },
  })
);

app.get("/", (req, res) => {
  res.redirect("/home");
});

app.use("/", routes);

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
