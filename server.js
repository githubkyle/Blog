const path = require("path");
const express = require("express");
const session = require("express-session");
const exphbs = require("express-handlebars");
const routes = require("./controller");
// const sequelize = require("./config/connection");
const SequelizeStore = require("connect-session-sequelize")(session.Store);
const mysql = require("mysql2");

const app = express();
const PORT = process.env.PORT || 3003;

app.set("view engine", "handlebars");

app.engine(
  "handlebars",
  handlebars({
    layoutsDir: `${__dirname}/views/layouts`
  })
);

const sess = {
  secret: process.env.SECRET,
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

const db = mysql.createConnection(
  {
    host: "localhost",
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: "blogs_db"
  },
  console.log(`Connected to the blogs_db database.`)
);

// db.query("SELECT * FROM BlogPost", function(err, results) {
//   return results;
// });

app.get("/", (req, res) => {
  res.render("main", { layout: "index" });
});

app.use(session(sess));

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "view")));

app.use(routes);

// sequelize.sync({ force: false }).then(() => {
//   app.listen(PORT, () => console.log("Now listening"));
// });
