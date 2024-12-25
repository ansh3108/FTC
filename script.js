document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll(".nav-links a");
  const sections = document.querySelectorAll("section");
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");
  const photoCards = document.querySelectorAll(".photo-card");

  // Smooth scrolling for anchor links
  links.forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = link.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetId);
      window.scrollTo({
        top: targetSection.offsetTop - document.querySelector(".navbar").offsetHeight,
        behavior: "smooth"
      });
    });
  });

  // Active link highlighting on scroll
  window.addEventListener("scroll", () => {
    const scrollPosition = window.scrollY + document.querySelector(".navbar").offsetHeight + 10;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const id = section.getAttribute("id");
      const link = document.querySelector(`.nav-links a[href="#${id}"]`);

      if (scrollPosition >= sectionTop && scrollPosition <= sectionTop + sectionHeight) {
        links.forEach(link => link.classList.remove("active"));
        link.classList.add("active");
      }
    });
  });

  // Mobile menu toggle functionality
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });

  // Photo card fade-in effect
  let photoDelay = 0;
  photoCards.forEach(card => {
    setTimeout(() => {
      card.classList.add('visible');
    }, photoDelay);
    photoDelay += 200; // Increase delay for each card
  });
});
