// Countdown Timer
const countdown = document.getElementById('countdown');
const tripDate = new Date('2024-12-31T00:00:00').getTime();

setInterval(() => {
  const now = new Date().getTime();
  const timeLeft = tripDate - now;

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  countdown.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}, 1000);

// Reveal Button & Passcode
const revealButton = document.getElementById('reveal-button');
const passcodeInput = document.getElementById('passcode');
const submitPasscode = document.getElementById('submit-passcode');
const errorMessage = document.getElementById('error-message');

revealButton.addEventListener('click', () => {
  revealButton.style.display = 'none';
  passcodeInput.style.display = 'block';
  submitPasscode.style.display = 'block';
});

submitPasscode.addEventListener('click', () => {
  const passcode = passcodeInput.value;
  if (passcode === '40') {
    window.location.href = 'riddles.html';
  } else {
    errorMessage.style.display = 'block';
  }
});
