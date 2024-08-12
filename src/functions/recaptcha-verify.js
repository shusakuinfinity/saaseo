const fetch = require('node-fetch');

exports.handler = async (event, context) => {
    // Only allow POST requests
    if (event.httpMethod !== 'POST') {
        return {
            statusCode: 405,
            body: JSON.stringify({ message: 'Method Not Allowed' }),
        };
    }

    const { token } = JSON.parse(event.body);
    const secretKey = process.env.RECAPTCHA_SECRET_KEY; // Use environment variable for the secret key

    // Send the verification request to Google's reCAPTCHA API
    const response = await fetch(`https://www.google.com/recaptcha/api/siteverify`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: `secret=${secretKey}&response=${token}`,
    });

    const data = await response.json();

    if (data.success) {
        // Verification successful
        return {
            statusCode: 200,
            body: JSON.stringify({ success: true }),
        };
    } else {
        // Verification failed
        return {
            statusCode: 400,
            body: JSON.stringify({ success: false, error: data['error-codes'] }),
        };
    }
};
