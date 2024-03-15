// submit-function.js
const axios = require('axios');

const submitFunction = async () => {
  const FUNC_TOKEN =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJwd1NwSjhQbkZaUjhEZjJROVI2QVdZVDJuN2syIiwibWljcm9zZXJ2aWNlcyI6WyJ3YWtlZmxvdy1lbWFpbHMiLCJ3YWtlZmxvdy10aW1lciIsIndha2VmbG93LTJmYSIsIndha2VmbG93LXBheW1lbnRzIiwid2FrZWZsb3ctdHdpbGlvIiwid2FrZWZsb3ctbnVtYmVyNCJdLCJpYXQiOjE3MTA0OTc2OTAsImV4cCI6MTc0MjAzMzY5MH0.fcu95m5x219T4j1a5P_nUYor5KQcPY6L89fgnj5dZaQ'; // Replace with your func.live token
  const YOUR_FUNC_URL = 'https://fantastic-florentine-dfa0c7.netlify.app'; // Replace with your serverless function URL

  try {
    const response = await axios.post(
      'https://api.func.live/functions',
      {
        url: YOUR_FUNC_URL,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${FUNC_TOKEN}`,
        },
      }
    );
    console.log('Function submitted successfully:', response.data);
  } catch (error) {
    console.error('Error submitting function:', error.response.data);
  }
};

submitFunction();
