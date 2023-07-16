const getBlog = async event => {
  event.preventDefault();

  let title = document.querySelector("#new-title").value;

  if (title) {
    const response = await fetch("/", {
      method: "GET",
      body: JSON.stringify({ title }),
      headers: { "Content-Type": "application/json" }
    });

    if (response.ok) {
      res.render(response);
    } else {
      alert("Failed to get that blog post.");
    }
  }
};

function updateBlogPost() {
  // const query = `UPDATE BlogPost SET text = ${UpText} WHERE title = ${Upper}`;
  // const values = [blogPost.title, blogPost.text];
  // connection.query(query, values, (error, results) => {
  // if (error) throw error;

  //DO A FETCH HERE
  // const response = await fetch("/", {
  //   method: "PUT",
  //   body: JSON.stringify({ title }),
  //   headers: { "Content-Type": "application/json" }
  // });

  // if (response.ok) {
  //   res.render(response);
  // } else {
  //   alert("Failed to update that blog post.");
  // }

  results = console.log("Blog post updated successfully!");
}

let Nuker = document.querySelector("#nuke-post").value;
let Founded = document.querySelector("#nuking");
// Founded.addEventListener(
//   "submit",
//   connection.query(`DELETE FROM Posts WHERE Title =${Nuker}`)
// );

const nukeBlog = async event => {};
