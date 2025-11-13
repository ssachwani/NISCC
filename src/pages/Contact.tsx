import React from 'react';
import { Form, Button } from 'react-bootstrap';

const Contact: React.FC = () => {
  return (
    <div>
      <h1>Contact Us</h1>
      <p>We'd love to hear from you. Please reach out with any questions or inquiries.</p>
      
      <div className="row">
        <div className="col-md-6">
          <h3>Our Address</h3>
          <p>
            Room No. 616, 6th Floor, Park Avenue Building, P.E.C.H.S., Block-6, Shahrah-e-Faisal, Karachi.
          </p>
          
          <h3>Phone</h3>
          <p>
            <strong>Office:</strong> 92-21-34398020, 34398021, 34328070, 34326777, 34380585<br />
            <strong>Cell:</strong> 0345-8257766, 0301-8257766
          </p>

          <h3>Email</h3>
          <p>
            <a href="mailto:salman@nathanies.com">salman@nathanies.com</a><br />
            <a href="mailto:salman_merchant123@yahoo.com">salman_merchant123@yahoo.com</a>
          </p>
        </div>
        <div className="col-md-6">
          <h3>Send us a Message</h3>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Your Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicMessage">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={4} placeholder="Your message" />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

