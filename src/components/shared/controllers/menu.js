document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector("#toggle-mobile");
  const menu = document.querySelector("#mobile-nav");

  if (!toggle || !menu) return;

  toggle.addEventListener("click", () => {
    const isExpanded = toggle.getAttribute("aria-expanded") === "true";

    toggle.setAttribute("aria-expanded", String(!isExpanded));
    menu.classList.toggle("-left-96");
    menu.classList.toggle("left-0");

    menu.setAttribute("aria-hidden", String(isExpanded));
  });
});