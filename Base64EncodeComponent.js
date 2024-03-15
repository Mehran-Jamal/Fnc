import React, { useState } from 'react';
import axios from 'axios';

const Base64EncodeComponent = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [error, setError] = useState('');

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const handleEncode = async () => {
    try {
      // Make a POST request to the server endpoint
      const response = await axios.post('/base64Encode', { input });
      setOutput(response.data.output);
      setError('');
    } catch (error) {
      setError('An error occurred. Please try again.');
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <h2>Base64 Encode</h2>
      <div>
        <label htmlFor='input'>Input:</label>
        <input
          type='text'
          id='input'
          value={input}
          onChange={handleInputChange}
        />
      </div>
      <button onClick={handleEncode}>Encode</button>
      {output && <div>Output: {output}</div>}
      {error && <div style={{ color: 'red' }}>{error}</div>}
    </div>
  );
};

export default Base64EncodeComponent;
