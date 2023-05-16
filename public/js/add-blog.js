// let XYZ = require("/model/User");
let text = document.querySelector("#new-post").value;
let title = document.querySelector("#new-title").value;
let db = require("./config/connection");
let email = User.email;
const BlogSubmit = document.querySelector("#submit-new-blog");
BlogSubmit.addEventListener(
  "submit",
  db.query(
    `INSERT INTO BlogPost (title, text, email) VALUES (${title},${text},${email}`
  )
);
