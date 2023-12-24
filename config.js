```javascript
// config.js

// This file contains the configuration details for the Zapier automation

module.exports = {
    // API keys for the social media platforms
    socialMediaAPIs: {
        twitter: {
            consumer_key: 'YOUR_CONSUMER_KEY',
            consumer_secret: 'YOUR_CONSUMER_SECRET',
            access_token_key: 'YOUR_ACCESS_TOKEN_KEY',
            access_token_secret: 'YOUR_ACCESS_TOKEN_SECRET'
        },
        facebook: {
            app_id: 'YOUR_APP_ID',
            app_secret: 'YOUR_APP_SECRET',
            access_token: 'YOUR_ACCESS_TOKEN'
        },
        instagram: {
            client_id: 'YOUR_CLIENT_ID',
            client_secret: 'YOUR_CLIENT_SECRET',
            access_token: 'YOUR_ACCESS_TOKEN'
        },
        linkedin: {
            client_id: 'YOUR_CLIENT_ID',
            client_secret: 'YOUR_CLIENT_SECRET',
            access_token: 'YOUR_ACCESS_TOKEN'
        }
    },

    // Details for the IoT button
    button: {
        id: 'YOUR_BUTTON_ID',
        secret: 'YOUR_BUTTON_SECRET'
    },

    // Details for the confirmation message
    confirmation: {
        email: 'YOUR_EMAIL',
        phone: 'YOUR_PHONE_NUMBER'
    }
};
```
