

document.addEventListener("DOMContentLoaded", () => {
  const pdfPaths = ["/assets/assignment_1.pdf", "/assets/assignment_2.pdf"];
  const currentPath = window.location.pathname;

  if (pdfPaths.includes(currentPath)) {
    window.location.href = currentPath; // Open the requested PDF file
  }

  const links = document.querySelectorAll(".nav-links a");
  const sections = document.querySelectorAll("section");
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");
  const photoCards = document.querySelectorAll(".photo-card");

  // Smooth scrolling
  links.forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = link.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetId);
      window.scrollTo({
        top: targetSection.offsetTop - document.querySelector(".navbar").offsetHeight,
        behavior: "smooth",
      });
    });
  });

  // Navbar Toggle (for smaller screens)
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });

  // Handle active class change for navbar
  window.addEventListener("scroll", () => {
    let currentSection = null;
    sections.forEach((section) => {
      if (window.scrollY >= section.offsetTop - 50) {
        currentSection = section;
      }
    });
    links.forEach(link => {
      if (link.getAttribute("href").substring(1) === currentSection?.id) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });
  });

  // Hover effect for photo cards
  photoCards.forEach(card => {
    card.addEventListener("mouseenter", () => {
      card.style.transform = "scale(1.05)";
      card.style.boxShadow = "0px 10px 20px rgba(0, 0, 0, 0.5)";
    });
    card.addEventListener("mouseleave", () => {
      card.style.transform = "scale(1)";
      card.style.boxShadow = "0px 6px 12px rgba(0, 0, 0, 0.3)";
    });
  });
});
