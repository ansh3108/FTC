// Menu Toggle for Mobile View
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

// Toggle the navigation menu visibility
menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Add 'scrolled' class to navbar when user scrolls
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});
