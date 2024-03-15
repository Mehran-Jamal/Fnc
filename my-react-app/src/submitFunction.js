const axios = require('axios');

const submitFunction = async () => {
  const FUNC_TOKEN = 'your_func_token_here';
  const YOUR_FUNC_URL =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJwd1NwSjhQbkZaUjhEZjJROVI2QVdZVDJuN2syIiwibWljcm9zZXJ2aWNlcyI6WyJ3YWtlZmxvdy1lbWFpbHMiLCJ3YWtlZmxvdy10aW1lciIsIndha2VmbG93LTJmYSIsIndha2VmbG93LXBheW1lbnRzIiwid2FrZWZsb3ctdHdpbGlvIiwid2FrZWZsb3ctbnVtYmVyNCJdLCJpYXQiOjE3MTA0OTMxNjcsImV4cCI6MTc0MjAyOTE2N30.PJI2sov-qTa8mvtRBRgoYlfYCVDSexsMPj7oLMC9tVU';

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
