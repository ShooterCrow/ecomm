document.addEventListener("DOMContentLoaded", function() {
  const hambuger = document.querySelector(".hambuger");
  console.log(hambuger);
  const mobileNav = document.querySelector(".mobile-nav");
  const navTheme = document.querySelector(".nav-theme");
  const themeIcon = document.querySelector(".theme-icon");

  let hamburgerState = false;
  hambuger.addEventListener("click", () => {
    mobileNav.classList.toggle("show");
    if (hamburgerState === false) {
      hambuger.innerHTML = "❌";
      hamburgerState = true;
      return;
    }
    if (hamburgerState === true) {
      hambuger.innerHTML = `<div class="bar"></div>
        <div class="bar"></div>
        <div class="bar"></div>`;
      hamburgerState = false;
      return;
    }
  });

  function toggleTheme(type) {
    console.log(type.value);
  }

  navTheme.addEventListener("change", () => toggleTheme(navTheme));
  themeIcon.addEventListener("change", () => toggleTheme(themeIcon));
});
