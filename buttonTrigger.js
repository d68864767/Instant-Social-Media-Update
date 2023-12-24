```javascript
// buttonTrigger.js

// This file contains the code to trigger the Zapier automation when the IoT button is pressed

const config = require('./config.js');
const axios = require('axios');

// Function to handle the button press
function handleButtonPress() {
    // Get the button details from the config
    const button = config.button;

    // Set up the URL for the button API
    const url = `https://api.button.com/v1/buttons/${button.id}/press`;

    // Set up the headers for the API request
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${button.secret}`
    };

    // Make a POST request to the button API
    axios.post(url, {}, { headers: headers })
        .then(response => {
            // If the request was successful, trigger the Zap
            if (response.status === 200) {
                console.log('Button pressed, triggering Zap...');
                triggerZap();
            }
        })
        .catch(error => {
            // If there was an error, log it
            console.error(`Error pressing button: ${error}`);
        });
}

// Function to trigger the Zap
function triggerZap() {
    // This function will be implemented in another file
    // For now, we'll just log a message
    console.log('Zap triggered!');
}

// Export the handleButtonPress function so it can be used in other files
module.exports = handleButtonPress;
```
