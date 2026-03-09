document.addEventListener("DOMContentLoaded", function () {

  console.log("TripMate Loaded Successfully!");

  /* LOGIN FORM */

  const loginForm = document.getElementById("loginForm");

  if (loginForm) {
    loginForm.addEventListener("submit", function (e) {

      e.preventDefault(); // stops page reload

      alert("Login Successful! Welcome to TripMate");

      window.location.href = "index.html"; // redirect to homepage

    });
  }

  /* SIGNUP FORM */

  const signupForm = document.getElementById("signupForm");

  if (signupForm) {
    signupForm.addEventListener("submit", function (e) {

      e.preventDefault(); // stops page reload

      alert("Account Created Successfully!");

      window.location.href = "login.html"; // redirect to login page

    });
  }

});
/* Mobile Menu Toggle */

const toggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

toggle.addEventListener("click", () => {
  navLinks.style.display =
    navLinks.style.display === "flex" ? "none" : "flex";
});

/* Button Alert */

function showAlert() {
  alert("Welcome to TripMate!");
}