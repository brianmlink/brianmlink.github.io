// script.js - DevOps Cloud Engineer Portfolio

document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();
  document.getElementById('form-message').textContent = 'Thank you for reaching out! (Form submission is a placeholder.)';
  this.reset();
});
