// Enquiry Form Submission Simulation
document.getElementById('enquiryForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const response = document.getElementById('formResponse');
  response.style.color = 'green';
  response.textContent = "Thank you for your enquiry! We will get back to you soon.";

  // Clear form fields after submission
  this.reset();

  // Optionally, you can add further logic like sending data to server here
});

  function toggleMenu() {
    const navList = document.querySelector("nav ul");
    navList.classList.toggle("show");
  }

