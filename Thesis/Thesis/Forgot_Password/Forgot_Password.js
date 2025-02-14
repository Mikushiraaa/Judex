
        // Para mapakita yung forgot password form
        function showForm(type) {
            document.getElementById('forgot-password').classList.add('hidden');
            if (type === 'sms') {
                document.getElementById('sms-form').classList.remove('hidden');
            } else {
                document.getElementById('email-form').classList.remove('hidden');
            }
        }

        // Para mapakita yung reset password form
        function showResetPasswordContainer() {
            document.getElementById('resetPasswordContainer').classList.remove('hidden');
            document.getElementById('email-form').classList.add('hidden');
            document.getElementById('sms-form').classList.add('hidden');
        }
        
        // Kung tama ang code, ipapakita ang reset password form
        function validatePasswords(event) {
            event.preventDefault();
            var newPassword = document.getElementById('newPassword').value;
            var confirmPassword = document.getElementById('confirmPassword').value;
            var errorMessage = document.getElementById('errorMessage');
    
            if (newPassword === confirmPassword) {
                document.getElementById('resetPasswordContainer').classList.add('hidden');
                document.getElementById('successMessageContainer').style.display = 'block';
            } else {
                errorMessage.textContent = 'Passwords do not match.';
            }
        }
    
        function togglePasswordVisibility(id) {
            var input = document.getElementById(id);
            if (input.type === 'password') {
                input.type = 'text';
            } else {
                input.type = 'password';
            }
        }
/*
// Example: Get the selected country code and phone number
function getPhoneNumber() {
    const countryCode = document.getElementById('country-code').value;
    const phoneNumber = document.getElementById('contact-no').value;
    const fullNumber = countryCode + phoneNumber;
    console.log("Full Phone Number:", fullNumber);
    return fullNumber;
}

// Call this function when the "Send Code" button is clicked
document.querySelector('#sms-form button').addEventListener('click', function() {
    const fullNumber = getPhoneNumber();
    alert("Sending code to: " + fullNumber);
});

// Function to handle sending the code
function sendCode() {
    // Kunin ang country code at phone number
    const countryCode = document.getElementById('country-code').value;
    const phoneNumber = document.getElementById('contact-no').value;

    // I-check kung may laman ang phone number
    if (!phoneNumber) {
        alert("Please enter your phone number.");
        return;
    }

    // Ipakita ang full phone number sa console (para sa testing)
    const fullNumber = countryCode + phoneNumber;
    console.log("Sending code to:", fullNumber);

    // Dito mo ilalagay ang logic para mag-send ng code (e.g., API call)
    // For now, magdi-display lang ng alert
    alert("Code sent to: " + fullNumber);
}

// I-attach ang sendCode function sa "Send Code" button
document.querySelector('#sms-form button').addEventListener('click', function(event) {
    event.preventDefault(); // Para hindi mag-refresh ang page
    sendCode(); // Tawagin ang sendCode function
});
*/
