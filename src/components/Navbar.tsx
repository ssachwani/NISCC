import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const AppNavbar: React.FC = () => {
  return (
    <Navbar style={{ backgroundColor: '#4169E1' }} expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/" style={{ color: 'white' }}>NISCC</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/" style={{ color: 'white' }}>Home</Nav.Link>
            <Nav.Link as={Link} to="/policies" style={{ color: 'white' }}>Policies & Vision</Nav.Link>
            <Nav.Link as={Link} to="/contact" style={{ color: 'white' }}>Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AppNavbar;
