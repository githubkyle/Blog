const loginFormer = async event => {
  event.preventDefault();

  const email = document.querySelector("#email-login").value.trim();
  const password = document.querySelector("#pass-login").value.trim();

  if (email && password) {
    const response = await fetch("/api/users", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" }
    });

    if (response.ok) {
      document.location.replace("/");
    } else {
      alert("Failed to log in.");
    }
  }
};

const signupFormer = async event => {
  event.preventDefault();

  const username = document.querySelector("#username-signer").value.trim();
  const email = document.querySelector("#email-signer").value.trim();
  const password = document.querySelector("#password-signer").value.trim();

  if (username && email && password) {
    const response = await fetch("/api/user-routes", {
      method: "POST",
      body: JSON.stringify({ username, email, password }),
      headers: { "Content-Type": "application/json" }
    });

    if (response.ok) {
      document.location.replace("/");
    } else {
      alert("Failed to sign up.");
    }
  }
};

document.querySelector(".login-form").addEventListener("submit", loginFormer);

document.querySelector(".signup-form").addEventListener("submit", signupFormer);
