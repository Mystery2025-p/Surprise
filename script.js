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
        // Correct passcode, navigate to the next page (riddles page)
        window.location.href = 'riddles.html'; // Adjust as needed for your riddle page URL
    } else {
        // Incorrect passcode, display the error message and keep the user on the current page
        errorMessage.style.display = 'block';
    }
});
