import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import FadeInSection from './FadeInSection';

const WhyChooseUs: React.FC = () => {
  const features = [
    {
      icon: 'fas fa-graduation-cap',
      title: 'Industry Expertise',
      description: 'With years of experience in the pharmaceutical sector, we possess in-depth knowledge of the industry\'s unique requirements and regulations.',
    },
    {
      icon: 'fas fa-shield-alt',
      title: 'Reliability',
      description: 'Our commitment to efficiency and reliability ensures that our clients\' shipments are handled with care and delivered on time.',
    },
    {
      icon: 'fas fa-heart',
      title: 'Customer Satisfaction',
      description: 'We prioritize customer satisfaction, offering personalized service and prompt communication to address our clients\' needs effectively.',
    },
  ];

  return (
    <section className="why-choose-us-section">
      <Container>
        <FadeInSection>
          <div className="text-center mb-5">
            <h2 className="section-title">Why Choose Us</h2>
            <p className="section-subtitle">
              We are committed to delivering excellence in every aspect of our service
            </p>
          </div>
        </FadeInSection>

        <Row>
          {features.map((feature, index) => (
            <Col md={4} className="mb-4" key={index}>
              <FadeInSection delay={index * 100}>
                <Card className="feature-card h-100">
                  <Card.Body>
                    <div className="feature-icon">
                      <i className={feature.icon}></i>
                    </div>
                    <Card.Title className="feature-title">{feature.title}</Card.Title>
                    <Card.Text className="feature-description">
                      {feature.description}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </FadeInSection>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default WhyChooseUs;

