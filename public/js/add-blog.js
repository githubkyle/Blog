const addBlog = async event => {
  // event.preventDefault();

  let text = document.querySelector("#new-post").value;
  let title = document.querySelector("#new-title").value;

  if (text && title) {
    const response = await fetch("/api", {
      method: "POST",
      body: JSON.stringify({ text, title }),
      headers: { "Content-Type": "application/json" }
    });

    if (response.ok) {
      document.location.replace("/");
    } else {
      alert("Failed to add that blog post.");
    }
  }
};

const BlogSubmit = document.querySelector("#submit-new-blog");
BlogSubmit.addEventListener("submit", addBlog());
