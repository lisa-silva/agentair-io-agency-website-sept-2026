const menuButton = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuButton && navLinks) {
  menuButton.addEventListener("click", () => {
    const isOpen = menuButton.getAttribute("aria-expanded") === "true";
    menuButton.setAttribute("aria-expanded", String(!isOpen));
    navLinks.classList.toggle("is-open", !isOpen);
  });
  navLinks.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      menuButton.setAttribute("aria-expanded", "false");
      navLinks.classList.remove("is-open");
    }
  });
}

const config = window.AGENT_AIR_SITE_CONFIG;
const pricingMessage = document.querySelector("[data-pricing-message]");
if (config && pricingMessage) pricingMessage.textContent = config.publicPricingMessage;

const form = document.querySelector("#agency-inquiry-form");
const submitButton = document.querySelector("#agency-submit");
if (form && submitButton) {
  form.addEventListener("submit", () => {
    submitButton.disabled = true;
    submitButton.textContent = "Sending request…";
  });
}

const year = document.querySelector("[data-year]");
if (year) year.textContent = String(new Date().getFullYear());
