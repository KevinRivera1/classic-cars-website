class MobileNav {
  private toggleButton: HTMLElement;
  private navElement: HTMLElement;
  private breakpoint: number;

  constructor(toggleId: string, navId: string, breakpoint: number = 1024) {
    this.toggleButton = document.getElementById(toggleId) as HTMLElement;
    this.navElement = document.getElementById(navId) as HTMLElement;
    this.breakpoint = breakpoint;

    this.init();
  }

  private init(): void {
    this.toggleButton.addEventListener("click", this.toggleNav.bind(this));
    window.addEventListener("resize", this.handleResize.bind(this));
  }

  private toggleNav(): void {
    const isOpen = this.navElement.classList.contains("left-0");

    this.navElement.classList.toggle("left-0");
    this.navElement.setAttribute("aria-hidden", isOpen ? "true" : "false");
    this.toggleButton.setAttribute("aria-expanded", isOpen ? "false" : "true");
  }

  private handleResize(): void {
    if (
      window.innerWidth > this.breakpoint &&
      this.navElement.classList.contains("left-0")
    ) {
      this.closeNav();
    }
  }

  private closeNav(): void {
    this.navElement.classList.remove("left-0");
    this.navElement.setAttribute("aria-hidden", "true");
    this.toggleButton.setAttribute("aria-expanded", "false");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  new MobileNav("toggle-mobile", "mobile-nav");
});
