const cards = document.querySelectorAll(".card");

window.addEventListener("scroll", () => {
  cards.forEach((card) => {
    const cardTop = card.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (cardTop < windowHeight - 100) {
      card.style.opacity = "1";
      card.style.transform = "translateY(0)";
    }
  });
});

const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {
  link.addEventListener("mouseenter", () => {
    link.style.color = "red";
  });

  link.addEventListener("mouseleave", () => {
    link.style.color = "white";
  });
});

window.addEventListener("load", () => {
  document.querySelector(".hero-text h1").style.opacity = "1";
  document.querySelector(".hero-text p").style.opacity = "1";
  document.querySelector(".hero-img").style.opacity = "1";
});

const authBox = document.getElementById("authBox");
const signupBtn = document.getElementById("signupBtn");
const orderBtn = document.getElementById("orderBtn");
const closeBtn = document.getElementById("closeBtn");

const showLogin = document.getElementById("showLogin");
const showSignup = document.getElementById("showSignup");

const loginForm = document.getElementById("loginForm");
const signupForm = document.getElementById("signupForm");

const orderBox = document.getElementById("orderBox");
const closeOrderBtn = document.getElementById("closeOrderBtn");

const orderForm = document.getElementById("orderForm");
const selectedFood = document.getElementById("selectedFood");

const orderCardBtns = document.querySelectorAll(".order-card-btn");

let isLoggedIn = false;

signupBtn.addEventListener("click", function(e) {
  e.preventDefault();

  authBox.classList.add("show");

  loginForm.classList.add("hidden");
  signupForm.classList.remove("hidden");

  showSignup.classList.add("active");
  showLogin.classList.remove("active");
});

orderBtn.addEventListener("click", function(e) {
  e.preventDefault();

  if (isLoggedIn === false) {

    authBox.classList.add("show");

    loginForm.classList.remove("hidden");
    signupForm.classList.add("hidden");

    showLogin.classList.add("active");
    showSignup.classList.remove("active");

  } else {

    orderBox.classList.add("show");

  }
});

closeBtn.addEventListener("click", function() {
  authBox.classList.remove("show");
});

showLogin.addEventListener("click", function() {

  loginForm.classList.remove("hidden");
  signupForm.classList.add("hidden");

  showLogin.classList.add("active");
  showSignup.classList.remove("active");

});

showSignup.addEventListener("click", function() {

  signupForm.classList.remove("hidden");
  loginForm.classList.add("hidden");

  showSignup.classList.add("active");
  showLogin.classList.remove("active");

});

loginForm.addEventListener("submit", function(e) {

  e.preventDefault();

  isLoggedIn = true;

  authBox.classList.remove("show");

  alert("Login Successful");

});

signupForm.addEventListener("submit", function(e) {

  e.preventDefault();

  isLoggedIn = true;

  authBox.classList.remove("show");

  alert("Signup Successful");

});

if (closeOrderBtn) {

  closeOrderBtn.addEventListener("click", function() {

    orderBox.classList.remove("show");

  });

}

orderCardBtns.forEach(function(button) {

  button.addEventListener("click", function() {

    const foodName =
      button.parentElement.querySelector("h3").innerText;

    if (isLoggedIn === false) {

      authBox.classList.add("show");

      loginForm.classList.remove("hidden");
      signupForm.classList.add("hidden");

      showLogin.classList.add("active");
      showSignup.classList.remove("active");

    } else {

      selectedFood.value = foodName;

      orderBox.classList.add("show");

    }

  });

});

if (orderForm) {

  orderForm.addEventListener("submit", function(e) {

    e.preventDefault();

    alert("Order Placed Successfully");

    orderBox.classList.remove("show");

    orderForm.reset();

  });

}