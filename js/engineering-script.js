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

// Call the function for the specific elements you want to truncate
truncateText(".engineering-page-card-description", 80); // Adjust 100 to your desired maximum length
