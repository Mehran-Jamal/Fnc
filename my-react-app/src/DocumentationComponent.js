import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DocumentationComponent = () => {
  const [docs, setDocs] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchDocumentation = async () => {
      try {
        // Make a GET request to the endpoint that serves the documentation
        const response = await axios.get('/docs/base64Encode');
        setDocs(response.data);
        setError('');
      } catch (error) {
        setError('An error occurred while fetching documentation.');
        console.error('Error:', error);
      }
    };

    fetchDocumentation();
  }, []);

  return (
    <div>
      <h2>Documentation</h2>
      {docs ? (
        <div>
          <h3>Name: {docs.name}</h3>
          <p>Description: {docs.description}</p>
          <p>Input:</p>
          <ul>
            <li>Type: {docs.input.type}</li>
            <li>Description: {docs.input.description}</li>
            <li>Example: {docs.input.example}</li>
          </ul>
          <p>Output:</p>
          <ul>
            <li>Type: {docs.output.type}</li>
            <li>Description: {docs.output.description}</li>
            <li>Example: {docs.output.example}</li>
          </ul>
        </div>
      ) : (
        <p>Loading documentation...</p>
      )}
      {error && <div style={{ color: 'red' }}>{error}</div>}
    </div>
  );
};

export default DocumentationComponent;
