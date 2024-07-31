// script.js
function validateCaptcha() {
    const userInput = document.getElementById('captcha-input').value;
    const errorMessage = document.getElementById('error-message');

    // Replace with actual CAPTCHA validation logic
    const correctCaptcha = '1234'; // Example CAPTCHA value

    if (userInput === correctCaptcha) {
        errorMessage.textContent = 'CAPTCHA validated successfully!';
        errorMessage.style.color = 'green';
    } else {
        errorMessage.textContent = 'Invalid CAPTCHA. Please try again.';
    }
}
