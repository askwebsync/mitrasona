const mobileMenuToggle = document.getElementById("mobile-menu-toggle");
const menu = document.getElementById("menu");
const dropdown = document.getElementById("dropdown");
const dropdownMenu = document.getElementById("dropdown-menu");
const generalInsurance = document.getElementById("general-insurance");
const contractor = document.getElementById("contractor");
const generalInsuranceSubmenu = document.getElementById(
  "general-insurance-submenu"
);

// Get the current URL
const currentUrl = window.location.pathname;

// Find all your navigation links
const navLinks = document.querySelectorAll("nav a");

// Loop through the links to find the active one based on the URL
navLinks.forEach((link) => {
  const linkHref = link.getAttribute("href");

  // Check if the current URL contains the link's href
  if (
    currentUrl === linkHref ||
    (currentUrl.startsWith(linkHref) && linkHref !== "/")
  ) {
    link.classList.add("active-navbar"); // Add the 'active' class to the active link
  }
});

let isDropdownOpen = false; // Track if the dropdown menu is open

const mapIframePlaceholder = document.querySelector(".map-iframe-placeholder");
if (mapIframePlaceholder) {
  const mapSrc = mapIframePlaceholder.getAttribute("data-src");
  if (mapSrc) {
    const mapIframe = document.createElement("iframe");
    mapIframe.className = "map-iframe";
    mapIframe.src = mapSrc;
    mapIframe.frameborder = "0";
    mapIframe.scrolling = "no";
    mapIframe.allowfullscreen = true;
    mapIframePlaceholder.parentNode.replaceChild(
      mapIframe,
      mapIframePlaceholder
    );
  }
}

mobileMenuToggle.addEventListener("click", () => {
  menu.classList.toggle("hidden");
  const menuIcon = document.getElementById("menu-icon");
  const closeIcon = document.getElementById("close-icon");
  menuIcon.classList.toggle("hidden");
  closeIcon.classList.toggle("hidden");
});

dropdown.addEventListener("click", () => {
  dropdownMenu.classList.toggle("hidden");
  isDropdownOpen = !isDropdownOpen;
});

dropdown.addEventListener("mouseleave", () => {
  // Hide the dropdown menu only if the submenu is not open
  if (!isDropdownOpen) {
    dropdownMenu.classList.add("hidden");
  }
});

dropdownMenu.addEventListener("mouseenter", () => {
  isDropdownOpen = true;
});

dropdownMenu.addEventListener("mouseleave", () => {
  dropdownMenu.classList.add("hidden");
  isDropdownOpen = false;
});

generalInsurance.addEventListener("click", (event) => {
  event.stopPropagation(); // Prevent the click event from bubbling up to the dropdown
  generalInsuranceSubmenu.classList.toggle("hidden");
  isDropdownOpen = !isDropdownOpen;
});

generalInsuranceSubmenu.addEventListener("mouseleave", () => {
  generalInsuranceSubmenu.classList.add("hidden");
  isDropdownOpen = false;
});

javascriptBarcodeReader({
  /* Image ID || HTML5 Image || HTML5 Canvas || HTML5 Canvas ImageData || Image URL */
  image: source,
  barcode: "code-128",
  // barcodeType: 'industrial',
  options: {
    // useAdaptiveThreshold: true // for images with shaded/ gradient portions
    // singlePass: true
  },
})
  .then((code) => {
    console.log(code);
  })
  .catch((err) => {
    console.log(err);
  });
