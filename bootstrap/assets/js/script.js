(function () {
  "use strict";

  var THEME_KEY = "portfolio-theme";
  var htmlEl = document.documentElement;
  var toggleBtn = document.getElementById("theme-toggle");
  var toggleIcon = toggleBtn ? toggleBtn.querySelector("i") : null;

  function applyTheme(theme) {
    htmlEl.setAttribute("data-bs-theme", theme);
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
      var currentTheme = htmlEl.getAttribute("data-bs-theme") === "dark" ? "dark" : "light";
      var newTheme = currentTheme === "dark" ? "light" : "dark";
      applyTheme(newTheme);
      localStorage.setItem(THEME_KEY, newTheme);
    });
  }

  var yearEl = document.getElementById("ano");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
})();
