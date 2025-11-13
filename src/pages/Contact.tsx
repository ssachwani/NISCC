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

      <Row className="mb-4">
        <Col lg={12} className="mb-4">
          <Card className="map-card">
            <Card.Body className="p-0">
              <div className="google-map-container">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3619.5!2d67.065!3d24.89!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDUzJzI0LjAiTiA2N8KwMDMnNTQuMCJF!5e0!3m2!1sen!2s!4v1234567890!5m2!1sen!2s"
                  width="100%"
                  height="400"
                  style={{ border: 0, borderRadius: '12px' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="NIS Office Location - Park Avenue Building, P.E.C.H.S., Block-6, Shahrah-e-Faisal, Karachi"
                ></iframe>
                <div className="map-note">
                  <p className="small text-muted mb-0">
                    <i className="fas fa-info-circle me-2"></i>
                    To get the exact map location, search for "Park Avenue Building, P.E.C.H.S., Block-6, Shahrah-e-Faisal, Karachi" on Google Maps, 
                    click Share → Embed a map, and replace the iframe src above.
                  </p>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

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

