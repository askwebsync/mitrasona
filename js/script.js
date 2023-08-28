const mobileMenuToggle = document.getElementById("mobile-menu-toggle");
const menu = document.getElementById("menu");
const dropdown = document.getElementById("dropdown");
const dropdownMenu = document.getElementById("dropdown-menu");
const generalInsurance = document.getElementById("general-insurance");
const contractor = document.getElementById("contractor");
const generalInsuranceSubmenu = document.getElementById(
  "general-insurance-submenu"
);
const contractorSubmenu = document.getElementById("contractor-submenu");

let isDropdownOpen = false; // Track if the dropdown menu is open

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

contractor.addEventListener("click", (event) => {
  event.stopPropagation(); // Prevent the click event from bubbling up to the dropdown
  contractorSubmenu.classList.toggle("hidden");
  isDropdownOpen = !isDropdownOpen;
});

contractorSubmenu.addEventListener("mouseleave", () => {
  contractorSubmenu.classList.add("hidden");
  isDropdownOpen = false;
});
