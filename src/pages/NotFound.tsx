import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => {
  return (
    <Container className="not-found-page">
      <div className="not-found-content text-center">
        <div className="not-found-icon">
          <i className="fas fa-exclamation-triangle"></i>
        </div>
        <h1 className="not-found-title">404</h1>
        <h2 className="not-found-subtitle">Page Not Found</h2>
        <p className="not-found-text">
          Oops! The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="not-found-buttons">
          <Link to="/">
            <Button variant="primary" size="lg" className="me-3">
              <i className="fas fa-home me-2"></i>
              Go to Home
            </Button>
          </Link>
          <Link to="/contact">
            <Button variant="outline-primary" size="lg">
              <i className="fas fa-envelope me-2"></i>
              Contact Us
            </Button>
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default NotFound;

