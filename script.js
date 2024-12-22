// Reveal Button & Passcode Logic
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
        window.location.href = 'riddles.html'; // Change this to the next page you want to navigate to
    } else {
        errorMessage.style.display = 'block';
    }
});

// Fade-out effect when navigating to the next page
document.querySelectorAll('button').forEach(button => {
  button.addEventListener('click', (e) => {
    document.body.style.animation = "fadeOut 1s ease-in";
    setTimeout(() => {
      if (button.id === "submit-passcode") {
        window.location.href = "riddles.html"; // Adjust as necessary
      }
    }, 1000);
  });
});
