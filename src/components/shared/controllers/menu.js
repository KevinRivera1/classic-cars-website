document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector("#toggle-mobile");
  const menu = document.querySelector("#mobile-nav");

  if (!toggle || !menu) return;

  toggle.addEventListener("click", () => {
    const isExpanded = toggle.getAttribute("aria-expanded") === "true";

    toggle.setAttribute("aria-expanded", String(!isExpanded));

    if (isExpanded) {
      menu.style.left = '-15.625rem';
      menu.setAttribute("aria-hidden", "true");
    } else {
      menu.setAttribute("aria-hidden", "false");
      menu.style.left = '0';
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 1024) {
      toggle.setAttribute("aria-expanded", "false");
      menu.setAttribute("aria-hidden", "true");
      menu.style.left = '-15.625rem';
    }
  });

  menu.addEventListener("keydown", (e) => {
    if (e.key === "scape") {
      toggle.click();
    }
  });

});