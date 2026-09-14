(function () {
  "use strict";

  var THEME_KEY = "portfolio-theme";
  var htmlEl = document.documentElement;
  var toggleBtn = document.getElementById("theme-toggle");
  var toggleIcon = toggleBtn ? toggleBtn.querySelector("i") : null;

  function applyTheme(theme) {
    htmlEl.setAttribute("data-theme", theme);
    if (toggleIcon) {
      toggleIcon.classList.toggle("fa-moon", theme === "light");
      toggleIcon.classList.toggle("fa-sun", theme === "dark");
    }
  }

  var savedTheme = localStorage.getItem(THEME_KEY);
  if (savedTheme) {
    applyTheme(savedTheme);
  }

  if (toggleBtn) {
    toggleBtn.addEventListener("click", function () {
      var currentTheme = htmlEl.getAttribute("data-theme") === "dark" ? "dark" : "light";
      var newTheme = currentTheme === "dark" ? "light" : "dark";
      applyTheme(newTheme);
      localStorage.setItem(THEME_KEY, newTheme);
    });
  }

  var burger = document.querySelector(".navbar-burger");
  if (burger) {
    burger.addEventListener("click", function () {
      var targetId = burger.dataset.target;
      var target = document.getElementById(targetId);
      var expanded = burger.getAttribute("aria-expanded") === "true";
      burger.classList.toggle("is-active");
      if (target) {
        target.classList.toggle("is-active");
      }
      burger.setAttribute("aria-expanded", String(!expanded));
    });
  }

  var yearEl = document.getElementById("ano");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
})();
