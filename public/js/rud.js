import { ConnectionAcquireTimeoutError } from "sequelize";

let Finder = document.querySelector("#find-post").value;
let Found = document.querySelector("#finding");
Found.addEventListener(
  "submit",
  db.query(`SELECT BlogPost FROM Posts WHERE Title =${Finder}`)
);
let Upper = document.querySelector("#up-post").value;
let UpText = document.querySelector("#up-post-text").value;

function updateBlogPost(blogPost) {
  const query = "UPDATE BlogPost SET text = ? WHERE title = ?";
  const values = [blogPost.title, blogPost.text];
  connection.query(query, values, (error, results) => {
    if (error) throw error;

    console.log("Blog post updated successfully!");
  });
}

const query = `SELECT BlogPost FROM Posts WHERE Title =${Upper}`;
connection.query(query, Upper, (error, results) => {
  if (error) throw error;

  const blogUp = results[0];
  blogUp.text = UpText;
  updateBlogPost(blogUp);
  connection.end();
});

let Nuker = document.querySelector("#nuke-post").value;
let Found = document.querySelector("#nuking");
Found.addEventListener(
  "submit",
  db.query(`DELETE FROM Posts WHERE Title =${Nuker}`)
);
