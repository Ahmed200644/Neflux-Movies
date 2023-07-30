import { Header } from "./header.js";
import { Home } from "./home.js";
import { Movies } from "./movies.js";
import { Details } from "./details.js";
import { Shows } from "./shows.js";
import { Footer } from "./footer.js";
import { Login } from "./login.js";
import { Register } from "./register.js";
import { setCookie } from "./helpers.js";

document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("header").innerHTML = Header();
  document.querySelector("footer").innerHTML = Footer();
  const navbarBurger = document.querySelector(".navbar-burger");
  if (navbarBurger) {
    navbarBurger.addEventListener("click", () => {
      document.querySelector("header").classList.toggle("is-active");
    });
  }

  function renderPage() {
    var ret;
    switch (window.location.hash) {
      case "#/":
        ret = Home();
        break;
      case "#/movies":
        ret = Movies();
        break;
      case "#/details":
        ret = Details();
        break;
      case "#/shows":
        ret = Shows();
        break;
      case "#/login":
        ret = Login();
        break;
      case "#/register":
        ret = Register();
        break;
      default:
        ret = "404";
        break;
    }
    if (
      window.location.hash !== "#/login" &&
      window.location.hash !== "#/register"
    ) {
      document.querySelector("header").innerHTML = Header();
      document.querySelector("body").classList.remove("is-loggedOut");
    } else {
      document.querySelector("header").innerHTML = null;
      document.querySelector("footer").innerHTML = null;
      document.querySelector("body").classList.add("is-loggedOut");
    }
    document.querySelector("#root").innerHTML = ret;
    return ret;
  }
  window.onhashchange = renderPage;
  renderPage();
  document.querySelector("#loginForm").addEventListener("submit", function () {
    event.preventDefault();
    const loginObj = {
      email: document.querySelector("#email").value,
      password: document.querySelector("#password").value,
    };
    if (loginObj) {
      fetch("https://netflux-api.barmej.com/api.users/sign-in", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: `email=${loginObj.email}&password=${loginObj.password}`,
      })
        .then((res) => res.json())
        .then((jsonResponse) => {
          setCookie("access Token", Response.token, 14);
          document.location.hash = "#/"
        });
    }
  });
});