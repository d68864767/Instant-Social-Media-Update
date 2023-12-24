```javascript
// confirmationMessage.js

// This file contains the code to send a confirmation message after the post has been made

const config = require('./config.js');
const axios = require('axios');

// Function to send a confirmation message
function sendConfirmation() {
    // Get the confirmation details from the config
    const confirmation = config.confirmation;

    // Define the content of the confirmation message
    const messageContent = 'Your post has been successfully created and posted on all platforms.';

    // Set up the URL for the email API
    const emailUrl = `https://api.mailgun.net/v3/your-domain.com/messages?from=YOUR_EMAIL&to=${confirmation.email}&subject=Confirmation%20Message&text=${encodeURIComponent(messageContent)}`;

    // Set up the headers for the email API request
    const emailHeaders = {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': 'Basic ' + Buffer.from('api:YOUR_MAILGUN_API_KEY').toString('base64')
    };

    // Make a POST request to the email API
    axios.post(emailUrl, {}, { headers: emailHeaders })
        .then(response => {
            // If the request was successful, log a message
            if (response.status === 200) {
                console.log('Confirmation email sent.');
            }
        })
        .catch(error => {
            // If there was an error, log it
            console.error(`Error sending confirmation email: ${error}`);
        });

    // Set up the URL for the SMS API
    const smsUrl = `https://api.twilio.com/2010-04-01/Accounts/YOUR_ACCOUNT_SID/Messages.json?From=YOUR_TWILIO_PHONE_NUMBER&To=${confirmation.phone}&Body=${encodeURIComponent(messageContent)}`;

    // Set up the headers for the SMS API request
    const smsHeaders = {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': 'Basic ' + Buffer.from('YOUR_ACCOUNT_SID:YOUR_AUTH_TOKEN').toString('base64')
    };

    // Make a POST request to the SMS API
    axios.post(smsUrl, {}, { headers: smsHeaders })
        .then(response => {
            // If the request was successful, log a message
            if (response.status === 200) {
                console.log('Confirmation SMS sent.');
            }
        })
        .catch(error => {
            // If there was an error, log it
            console.error(`Error sending confirmation SMS: ${error}`);
        });
}

// Export the sendConfirmation function so it can be used in other files
module.exports = sendConfirmation;
```
