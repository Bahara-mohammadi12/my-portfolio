const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

// Open and close the mobile menu
menuBtn.addEventListener("click", function () {
  navLinks.classList.toggle("open");
});

// Close menu after clicking a navigation link
const links = document.querySelectorAll(".nav-links a");

links.forEach(function (link) {
  link.addEventListener("click", function () {
    navLinks.classList.remove("open");
  });
});

// Contact form
const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (name === "" || email === "" || message === "") {
    formMessage.textContent = "Please fill in all fields.";
    return;
  }

  formMessage.textContent =
    "Thank you, " + name + "! Your message is ready.";

  // Prepare an email in the visitor's email application.
  // Replace this address with your real email.
  const myEmail = "hello@example.com";

  const subject = encodeURIComponent(
    "Portfolio message from " + name
  );

  const body = encodeURIComponent(
    "Name: " + name +
    "\nEmail: " + email +
    "\n\nMessage: " + message
  );

  window.location.href =
    "mailto:" + myEmail +
    "?subject=" + subject +
    "&body=" + body;

  contactForm.reset();
});

// Show the current year in the footer
document.getElementById("year").textContent =
  new Date().getFullYear();