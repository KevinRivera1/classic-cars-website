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

  menu.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      toggle.click();
    }
  });

});