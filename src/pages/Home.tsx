import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import LoadingSpinner from '../components/LoadingSpinner';
import Statistics from '../components/Statistics';
import ClientLogos from '../components/ClientLogos';
import WhyChooseUs from '../components/WhyChooseUs';
import FadeInSection from '../components/FadeInSection';

const Home: React.FC = () => {
  const [content, setContent] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const response = await fetch(`${process.env.PUBLIC_URL}/content/home_introduction.md`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const markdownText = await response.text();
        setContent(markdownText);
      } catch (err) {
        setError('Failed to load content.');
        console.error('Error fetching home_introduction.md:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchContent();
  }, []);

  if (loading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return (
      <Container>
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      </Container>
    );
  }

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <Container>
          <Row className="align-items-center">
            <Col lg={6}>
              <h1 className="hero-title">Welcome to Nathanies International Services</h1>
              <p className="hero-subtitle">
                Your trusted partner for Customs Clearing and Forwarding services, 
                specializing in the pharmaceutical industry.
              </p>
              <div className="hero-buttons">
                <Link to="/contact" className="btn btn-primary btn-lg me-3">
                  Get in Touch
                </Link>
                <Link to="/policies" className="btn btn-outline-primary btn-lg">
                  Learn More
                </Link>
              </div>
            </Col>
            <Col lg={6} className="text-center">
              <div className="hero-image-container">
                <img 
                  src={require('../assets/images/custom-clearing-agent-500x500.webp')}
                  alt="Customs Clearing Services"
                  className="hero-image"
                  onError={(e) => {
                    // Fallback to icon if image fails to load
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const parent = target.parentElement;
                    if (parent) {
                      parent.innerHTML = '<i class="fas fa-shipping-fast" style="font-size: 8rem; color: #4169E1; opacity: 0.3;"></i>';
                    }
                  }}
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Statistics Section */}
      <Statistics />

      {/* Services Section */}
      <FadeInSection>
        <section className="services-section">
          <Container>
            <h2 className="section-title text-center mb-5">Our Services</h2>
            <Row>
            <Col md={4} className="mb-4">
              <Card className="service-card h-100">
                <Card.Body>
                  <div className="service-icon">
                    <i className="fas fa-file-alt"></i>
                  </div>
                  <Card.Title>Customs Clearance</Card.Title>
                  <Card.Text>
                    We handle all customs clearance procedures with precision and efficiency, 
                    ensuring that shipments are cleared without delay.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-4">
              <Card className="service-card h-100">
                <Card.Body>
                  <div className="service-icon">
                    <i className="fas fa-snowflake"></i>
                  </div>
                  <Card.Title>Cold Storage Transportation</Card.Title>
                  <Card.Text>
                    Best-in-class cold storage transportation services with strict quality control 
                    and adherence to temperature-sensitive requirements.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-4">
              <Card className="service-card h-100">
                <Card.Body>
                  <div className="service-icon">
                    <i className="fas fa-certificate"></i>
                  </div>
                  <Card.Title>DRAP NOC Support</Card.Title>
                  <Card.Text>
                    Expert assistance in obtaining No Objection Certificates from DRAP, 
                    ensuring compliance with all regulatory requirements.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
      </FadeInSection>

      {/* Why Choose Us Section */}
      <WhyChooseUs />

      {/* Client Logos Section */}
      <FadeInSection>
        <ClientLogos />
      </FadeInSection>

      {/* Content Section */}
      <section className="content-section">
        <Container>
          <div className="markdown-content">
            <ReactMarkdown>{content}</ReactMarkdown>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Home;

