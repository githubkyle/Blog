import { ConnectionAcquireTimeoutError } from "sequelize";
let connection = require("./config/connection");
let Finder = document.querySelector("#find-post").value;
let Found = document.querySelector("#finding");
Found.addEventListener(
  "submit",
  connection.query(`SELECT BlogPost FROM Posts WHERE Title =${Finder}`)
);
let Upper = document.querySelector("#up-post").value;
let UpText = document.querySelector("#up-post-text").value;

function updateBlogPost() {
  const query = "UPDATE BlogPost SET text = ? WHERE title = ?";
  const values = [blogPost.title, blogPost.text];
  connection.query(query, values, (error, results) => {
    if (error) throw error;

    results = console.log("Blog post updated successfully!");
  });
}

let Nuker = document.querySelector("#nuke-post").value;
let Found = document.querySelector("#nuking");
Found.addEventListener(
  "submit",
  connection.query(`DELETE FROM Posts WHERE Title =${Nuker}`)
);

module.exports = { updateBlogPost };
