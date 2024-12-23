document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
  
    // Toggle menu visibility
    menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('show');
    });
  });
  