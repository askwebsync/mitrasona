// Event Listeners
const mobileMenuToggle = document.getElementById("mobile-menu-toggle");
const dropdown = document.getElementById("dropdown");
const dropdownMenu = document.getElementById("dropdown-menu");
const generalInsurance = document.getElementById("general-insurance");
// const generalInsuranceSubmenu = document.getElementById(
//   "general-insurance-submenu"
// );

mobileMenuToggle.addEventListener("click", toggleMobileMenu);
dropdown.addEventListener("click", toggleDropdown);
// dropdown.addEventListener("mouseleave", handleDropdownMouseLeave);
dropdownMenu.addEventListener("mouseenter", handleDropdownMouseEnter);
// dropdownMenu.addEventListener("mouseleave", handleDropdownMouseLeave);
// generalInsurance.addEventListener("click", toggleGeneralInsuranceSubmenu);

// Function to toggle the mobile menu
function toggleMobileMenu() {
  const menu = document.getElementById("menu");
  menu.classList.toggle("hidden");

  const menuIcon = document.getElementById("menu-icon");
  const closeIcon = document.getElementById("close-icon");
  menuIcon.classList.toggle("hidden");
  closeIcon.classList.toggle("hidden");
}

// Function to toggle the dropdown menu
function toggleDropdown() {
  const dropdownMenu = document.getElementById("dropdown-menu");
  dropdownMenu.classList.toggle("hidden");
}

// Function to handle mouse leave on the dropdown menu
// function handleDropdownMouseLeave() {
//   if (!isDropdownOpen) {
//     const dropdownMenu = document.getElementById("dropdown-menu");
//     dropdownMenu.classList.add("hidden");
//   }
// }

// Function to handle mouse enter on the dropdown menu
function handleDropdownMouseEnter() {
  isDropdownOpen = true;
}
// Function to direct link page section
document.addEventListener("DOMContentLoaded", function () {
  // Smooth scroll to anchor links
  const anchorLinks = document.querySelectorAll('a[href^="#"]');

  anchorLinks.forEach(function (link) {
    link.addEventListener("click", function (e) {
      const href = this.getAttribute("href");
      if (href.startsWith("#")) {
        e.preventDefault();

        const targetId = href.substring(1); // Remove the "#" symbol
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
          // Calculate the offset of the target element
          const offset = targetElement.getBoundingClientRect().top;

          // Scroll smoothly to the target element with offset
          window.scrollBy({
            top: offset,
            behavior: "smooth",
          });
        }
      }
    });
  });
});

// Function to toggle the general insurance submenu
// function toggleGeneralInsuranceSubmenu(event) {
//   event.stopPropagation(); // Prevent the click event from bubbling up
//   const generalInsuranceSubmenu = document.getElementById(
//     "general-insurance-submenu"
//   );
//   generalInsuranceSubmenu.classList.toggle("hidden");
//   isDropdownOpen = !isDropdownOpen;
// }

// Function to truncate text
function truncateText(selector, maxLength) {
  const elements = document.querySelectorAll(selector);

  elements.forEach((element) => {
    const text = element.textContent;
    if (text.length > maxLength) {
      const truncatedText = text.substring(0, maxLength - 3) + "...";
      element.textContent = truncatedText;
    }
  });
}

// Function to highlight the active navigation link
function highlightActiveNavLink() {
  const currentUrl = window.location.pathname;
  const navLinks = document.querySelectorAll("nav a");

  navLinks.forEach((link) => {
    const linkHref = link.getAttribute("href");

    if (
      currentUrl === linkHref ||
      (currentUrl.startsWith(linkHref) && linkHref !== "/")
    ) {
      link.classList.add("active-navbar");
    }
  });
}

// Initial actions when the page loads
truncateText(".engineering-page-card-description", 100);
highlightActiveNavLink();
