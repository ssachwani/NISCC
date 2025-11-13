import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const AppNavbar: React.FC = () => {
  return (
    <Navbar style={{ backgroundColor: '#4169E1' }} expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/" style={{ color: 'white' }}>NIS</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Button as={Link} to="/" variant="link" style={{ color: 'white', textDecoration: 'none' }}>Home</Button>
            <Button as={Link} to="/policies" variant="link" style={{ color: 'white', textDecoration: 'none' }}>Policies & Vision</Button>
            <Button as={Link} to="/contact" variant="link" style={{ color: 'white', textDecoration: 'none' }}>Contact Us</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AppNavbar;
