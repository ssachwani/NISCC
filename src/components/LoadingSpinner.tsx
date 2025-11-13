import React from 'react';
import { Spinner } from 'react-bootstrap';

const LoadingSpinner: React.FC = () => {
  return (
    <div className="loading-container">
      <Spinner animation="border" role="status" className="loading-spinner">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
      <p className="loading-text">Loading content...</p>
    </div>
  );
};

export default LoadingSpinner;

