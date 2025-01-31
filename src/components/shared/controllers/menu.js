document.addEventListener("DOMContentLoaded", () => {
  const TOGGLE_ID = "#toggle-mobile";
  const MENU_ID = "#mobile-nav";
  const BREAKPOINT_WIDTH = 1024;
  const HIDDEN_MENU_POSITION = "-15.625rem";

  const toggle = document.querySelector(TOGGLE_ID);
  const menu = document.querySelector(MENU_ID);

  if (!toggle || !menu) return;

  const toggleMobileMenu = () => {
    const isExpanded = toggle.getAttribute("aria-expanded") === "true";

    toggle.setAttribute("aria-expanded", String(!isExpanded));
    menu.setAttribute("aria-hidden", String(isExpanded));

    if (isExpanded) {
      menu.style.left = '-15.625rem';
    } else {
      menu.setAttribute("aria-hidden", "false");
      menu.style.left = '0';
    }
  }

  const closeMenuOnResize = () => {
    if (window.innerWidth > BREAKPOINT_WIDTH) {
      toggle.setAttribute("aria-expanded", "false");
      menu.setAttribute("aria-hidden", "true");
      menu.style.left = '-15.625rem';
    }
  }

  const handleKeyDown = (event) => {
    if (event.key === "Escape") {
      toggle.click();
    }
  };

  toggle.addEventListener("click", toggleMobileMenu);
  window.addEventListener("resize", closeMenuOnResize);
  menu.addEventListener("keydown", handleKeyDown);

  closeMenuOnResize();

});