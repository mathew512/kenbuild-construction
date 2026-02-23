// ========== Mobile Menu Toggle ==========
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("open");
  });
}

// ========== Contact Form (on index.html) ==========
const contactForm = document.getElementById("contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Thank you for reaching out to KenBuild Construction Ltd!");
    contactForm.reset();
  });
}

// ========== Featured Projects Slideshow ==========
window.addEventListener("load", () => {
  const slides = document.getElementsByClassName("project-slide");
  let projectIndex = 0;

  // Show the first image right away
  if (slides.length > 0) {
    slides[0].style.display = "block";
  }

  function showProjectSlides() {
    // hide all
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }

    // show next
    projectIndex++;
    if (projectIndex > slides.length) projectIndex = 1;
    slides[projectIndex - 1].style.display = "block";

    setTimeout(showProjectSlides, 4000); // every 4 seconds
  }

  if (slides.length > 1) {
    showProjectSlides();
  }
});

// ========== Request Form Submission (on contact.html) ==========
const requestForm = document.getElementById("requestForm");
if (requestForm) {
  requestForm.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Thank you for contacting KenBuild Construction Ltd! We'll reach out soon.");
    requestForm.reset();
  });
}
