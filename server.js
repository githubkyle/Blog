const path = require("path");
const express = require("express");
const session = require("express-session");
const exphbs = require("express-handlebars");
const routes = require("./controller");
const SequelizeStore = require("connect-session-sequelize")(session.Store);
// const mysql = require("mysql2");
const hbs = exphbs.create({});
const sequelize = require("./config/connection");

const app = express();
const PORT = process.env.PORT || 3003;

app.engine("handlebars", hbs.engine);

app.set("view engine", "handlebars");

const sess = {
  secret: process.env.SECRET,
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.get("/", (req, res) => {
  res.render("main", { layout: "index" });
});

app.use(
  session({
    secret: "Secretive",
    resave: false,
    saveUninitialized: true
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "view")));
app.use(express.static(path.join(__dirname, "public")));
app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log("Now listening"));
});
