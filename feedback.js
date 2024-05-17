const feedbackModal = document.querySelector('.feedback-modal');
const feedbackLink = document.querySelector('.header-feedback');
const closeBtn = document.querySelector('.feedback-modal-close');
const form = document.getElementById('feedback-form');

feedbackLink.addEventListener('click', () => {
  feedbackModal.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
  feedbackModal.style.display = 'none';
});

window.addEventListener('click', (event) => {
  if (event.target === feedbackModal) {
    feedbackModal.style.display = 'none';
  }
});

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const messageInput = document.getElementById('message');
  const nameError = document.getElementById('name-error');
  const emailError = document.getElementById('email-error');
  const messageError = document.getElementById('message-error');

  nameError.textContent = nameInput.value ? '' : 'Please enter your name.';
  emailError.textContent = isValidEmail(emailInput.value) ? '' : 'Please enter a valid email address.';
  messageError.textContent = messageInput.value ? '' : 'Please enter a message.';

  nameInput.classList.toggle('invalid', !nameInput.value);
  emailInput.classList.toggle('invalid', !isValidEmail(emailInput.value));
  messageInput.classList.toggle('invalid', !messageInput.value);

  if (nameInput.value && isValidEmail(emailInput.value) && messageInput.value) {
    console.log('Form submitted successfully!');
    form.reset();
  }
});

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}