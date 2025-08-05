// Typed.js animation
var typed2 = new Typed("#typed2", {
  strings: ["Frontend Developer", "Designer", "Coder", "UI/UX design"],
  typeSpeed: 50,
  backSpeed: 30,
  startDelay: 2000,
  backDelay: 1500,
  loop: true,
  showCursor: true,
  cursorChar: "|"
});

// AOS (Animate on Scroll) Initialization
AOS.init({
  duration: 1000,
  once: true
});

// Dark mode toggle
document.querySelector('#mode-toggle').addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

// Smooth scrolling for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// Scroll to top button behavior
const scrollTopBtn = document.getElementById("scrollTopBtn");
if (scrollTopBtn) {
  window.addEventListener("scroll", () => {
    scrollTopBtn.style.display = window.scrollY > 300 ? "block" : "none";
  });

  scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}
