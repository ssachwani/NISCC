import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, Card, Alert } from 'react-bootstrap';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [showAlert, setShowAlert] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setShowAlert(true);
      setIsSubmitting(false);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setShowAlert(false), 5000);
    }, 1000);
  };

  return (
    <Container className="contact-page">
      <div className="page-header text-center mb-5">
        <h1 className="page-title">Contact Us</h1>
        <p className="page-subtitle">We'd love to hear from you. Please reach out with any questions or inquiries.</p>
      </div>

      {showAlert && (
        <Alert variant="success" dismissible onClose={() => setShowAlert(false)}>
          Thank you for your message! We'll get back to you soon.
        </Alert>
      )}

      <Row>
        <Col lg={5} className="mb-4 mb-lg-0">
          <Card className="contact-info-card h-100">
            <Card.Body>
              <div className="contact-info-item mb-4">
                <div className="contact-icon">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <div>
                  <h4>Our Address</h4>
                  <p>
                    Room No. 616, 6th Floor, Park Avenue Building<br />
                    P.E.C.H.S., Block-6, Shahrah-e-Faisal<br />
                    Karachi, Pakistan
                  </p>
                </div>
              </div>

              <div className="contact-info-item mb-4">
                <div className="contact-icon">
                  <i className="fas fa-phone"></i>
                </div>
                <div>
                  <h4>Phone</h4>
                  <p>
                    <strong>Office:</strong><br />
                    92-21-34398020, 34398021<br />
                    34328070, 34326777, 34380585<br />
                    <strong>Cell:</strong> 0345-8257766, 0301-8257766
                  </p>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="contact-icon">
                  <i className="fas fa-envelope"></i>
                </div>
                <div>
                  <h4>Email</h4>
                  <p>
                    <a href="mailto:salman@nathanies.com">salman@nathanies.com</a><br />
                    <a href="mailto:salman_merchant123@yahoo.com">salman_merchant123@yahoo.com</a>
                  </p>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col lg={7}>
          <Card className="contact-form-card">
            <Card.Body>
              <h3 className="mb-4">Send us a Message</h3>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicName">
                  <Form.Label>Your Name <span className="text-danger">*</span></Form.Label>
                  <Form.Control 
                    type="text" 
                    name="name"
                    placeholder="Enter your name" 
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address <span className="text-danger">*</span></Form.Label>
                  <Form.Control 
                    type="email" 
                    name="email"
                    placeholder="Enter email" 
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicMessage">
                  <Form.Label>Message <span className="text-danger">*</span></Form.Label>
                  <Form.Control 
                    as="textarea" 
                    rows={5} 
                    name="message"
                    placeholder="Your message" 
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <Button 
                  variant="primary" 
                  type="submit" 
                  size="lg"
                  disabled={isSubmitting}
                  className="w-100"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;

