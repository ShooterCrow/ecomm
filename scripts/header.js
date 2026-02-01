const headerFunction = () => {
  const hambuger = document.querySelector(".hambuger");
  const mobileNav = document.querySelector(".mobile-nav");
  const navTheme = document.querySelector(".nav-theme");
  const themeIcon = document.querySelector(".theme-icon");

  if (hambuger && mobileNav) {
    let hamburgerState = false;
    hambuger.addEventListener("click", () => {
      mobileNav.classList.toggle("show");
      if (hamburgerState === false) {
        hambuger.innerHTML = "❌";
        hamburgerState = true;
      } else {
        hambuger.innerHTML = `<div class="bar"></div>
          <div class="bar"></div>
          <div class="bar"></div>`;
        hamburgerState = false;
      }
    });
  }

  function toggleTheme(type) {
    console.log(type.value);
  }

  if (navTheme) {
    navTheme.addEventListener("change", () => toggleTheme(navTheme));
  }

  if (themeIcon) {
    themeIcon.addEventListener("change", () => toggleTheme(themeIcon));
  }
};
