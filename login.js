const loginTab = document.getElementById("loginTab");
const signupTab = document.getElementById("signupTab");

const loginForm = document.getElementById("loginForm");
const signupForm = document.getElementById("signupForm");

const goSignup = document.getElementById("goSignup");
const goLogin = document.getElementById("goLogin");

function showLogin() {
  loginForm.classList.remove("hidden");
  signupForm.classList.add("hidden");

  loginTab.classList.add("active");
  signupTab.classList.remove("active");
}

function showSignup() {
  signupForm.classList.remove("hidden");
  loginForm.classList.add("hidden");

  signupTab.classList.add("active");
  loginTab.classList.remove("active");
}

loginTab.addEventListener("click", showLogin);
signupTab.addEventListener("click", showSignup);
goSignup.addEventListener("click", showSignup);
goLogin.addEventListener("click", showLogin);

loginForm.addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Login successful");
  window.location.href = "index.html";
});

signupForm.addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Signup successful");
  window.location.href = "index.html";
});