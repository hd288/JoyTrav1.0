document.addEventListener("DOMContentLoaded", function () {
  // Define the constants for the elements
  const home = document.querySelector(".home"),
    formContainer = document.querySelector(".form-container"),
    signupBtn = document.querySelector("#signup"),
    loginBtn = document.querySelector("#login"),
    pwShowHide = document.querySelectorAll(".pw-hide"),
    signupForm = document.getElementById("signup-form"),
    loginForm = document.getElementById("login-form");

  // Add the "show" class to the home element (assuming it's used for hiding/showing the forms)
  home.classList.add("show");

  signupBtn.addEventListener("click", (e) => {
    e.preventDefault();
    formContainer.classList.add("active");
  });

  loginBtn.addEventListener("click", (e) => {
    e.preventDefault();
    formContainer.classList.remove("active");
  });

  pwShowHide.forEach((icon) => {
    icon.addEventListener("click", () => {
      let getPwInput = icon.previousElementSibling;
      if (getPwInput.type === "password") {
        getPwInput.type = "text";
        icon.classList.replace("uil-eye-slash", "uil-eye");
      } else {
        getPwInput.type = "password";
        icon.classList.replace("uil-eye", "uil-eye-slash");
      }
    });
  });

  // Function to generate a random user ID
  function createId() {
    return Math.floor(Math.random() * 99999999 + Date.now());
  }

  // Get users from localStorage or initialize an empty array
  let users = JSON.parse(localStorage.getItem("users")) || [];

  // Function to handle form submission for signup
  function signup(e) {
    e.preventDefault();
    let email = document.getElementById("signup-email").value;
    let password = document.getElementById("signup-password").value;
    let confirmPassword = document.getElementById(
      "signup-password-confirm"
    ).value;

    if (password != confirmPassword || password.length < 6) {
      alert(
        "There's a problem with the password :( It should be 6 or more characters!"
      );
      return;
    }

    let userInfo = {
      email: email,
      password: password,
      userID: createId(),
    };

    let checkSignup = users.find((item) => {
      return item.email === email;
    });

    if (checkSignup) {
      alert("The email is already registered");
      return;
    }

    users.push(userInfo);
    localStorage.setItem("users", JSON.stringify(users));
    alert("You're signed up! Let's Login!");
    formContainer.classList.remove("active");
  }

  // admin account
  const adminAccount = "admin@joytrav.com";
  const adminPw = "admin";
  // Function to handle form submission for login
  function login(e) {
    e.preventDefault();
    let email = document.getElementById("login-email").value;
    let password = document.getElementById("password").value;

    if (email === adminAccount && password === adminPw) {
      // window.location.href = "../Admin Dashboard Panel/index.html";
      window.open("../Admin Dashboard Panel/index.html");
      location.reload();
    } else {
      for (let i = 0; i < users.length; i++) {
        if (users[i].email === email && users[i].password === password) {
          alert(
            "You're now logged in. We're locating you back to the main page!"
          );
          localStorage.setItem("checkLogin", users[i].userID);
          window.location.href = "../index.html";
          return;
        }
      }

      alert(
        "The account doesn't exist. Please check the information again and retry"
      );
    }
  }

  // Add event listeners to the forms
  signupForm.addEventListener("submit", signup);
  loginForm.addEventListener("submit", login);
});
