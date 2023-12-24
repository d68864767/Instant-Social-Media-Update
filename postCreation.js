```javascript
// postCreation.js

// This file contains the code to create a post for the Zapier automation

const config = require('./config.js');
const axios = require('axios');

// Function to create a post
function createPost() {
    // Get the social media APIs from the config
    const socialMediaAPIs = config.socialMediaAPIs;

    // Define the content of the post
    const postContent = 'This is a pre-defined message.';

    // Loop through each social media platform
    for (let platform in socialMediaAPIs) {
        // Get the API details for the platform
        const api = socialMediaAPIs[platform];

        // Set up the URL for the platform's API
        let url;
        switch (platform) {
            case 'twitter':
                url = `https://api.twitter.com/1.1/statuses/update.json?status=${encodeURIComponent(postContent)}`;
                break;
            case 'facebook':
                url = `https://graph.facebook.com/v10.0/me/feed?message=${encodeURIComponent(postContent)}&access_token=${api.access_token}`;
                break;
            case 'instagram':
                // Instagram API requires additional steps to post content
                // For simplicity, we'll just log a message here
                console.log('Posting to Instagram...');
                continue;
            case 'linkedin':
                url = `https://api.linkedin.com/v2/ugcPosts?author=${encodeURIComponent(api.client_id)}&lifecycleState=PUBLISHED&specificContent={ "com.linkedin.ugc.ShareContent": { "shareCommentary": { "text": "${postContent}" }, "shareMediaCategory": "NONE" } }&visibility={ "com.linkedin.ugc.MemberNetworkVisibility": "PUBLIC" }`;
                break;
        }

        // Set up the headers for the API request
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${api.access_token}`
        };

        // Make a POST request to the platform's API
        axios.post(url, {}, { headers: headers })
            .then(response => {
                // If the request was successful, log a message
                if (response.status === 200) {
                    console.log(`Post created on ${platform}.`);
                }
            })
            .catch(error => {
                // If there was an error, log it
                console.error(`Error creating post on ${platform}: ${error}`);
            });
    }
}

// Export the createPost function so it can be used in other files
module.exports = createPost;
```
