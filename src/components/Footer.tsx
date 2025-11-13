import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="custom-footer">
      <Container>
        <Row>
          <Col md={4} className="mb-4 mb-md-0">
            <h5 className="footer-title">Nathanies International Services</h5>
            <p className="footer-text">
              Leading Customs Clearing and Forwarding Agency specializing in pharmaceutical industry services.
            </p>
          </Col>
          <Col md={4} className="mb-4 mb-md-0">
            <h5 className="footer-title">Quick Links</h5>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/policies">Policies & Vision</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </Col>
          <Col md={4}>
            <h5 className="footer-title">Contact Info</h5>
            <p className="footer-text">
              <strong>Address:</strong><br />
              Room No. 616, 6th Floor, Park Avenue Building<br />
              P.E.C.H.S., Block-6, Shahrah-e-Faisal, Karachi
            </p>
            <p className="footer-text">
              <strong>Phone:</strong> 92-21-34398020<br />
              <strong>Email:</strong> <a href="mailto:salman@nathanies.com">salman@nathanies.com</a>
            </p>
          </Col>
        </Row>
        <hr className="footer-divider" />
        <Row>
          <Col className="text-center">
            <p className="footer-copyright">
              &copy; {currentYear} Nathanies International Services. All rights reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;

