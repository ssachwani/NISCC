import React from 'react';
import { Container } from 'react-bootstrap';

const ClientLogos: React.FC = () => {
  // Client list from your content
  const clients = [
    'B. Braun Pakistan (Private) Limited',
    'Haleon Pakistan Limited',
    'Glaxo Smithkline Pakistan Limited',
    'Lundbeck Pakistan (Private) Limited',
    'Novartis Pharma (Pakistan) Ltd',
    'Novo Nordisk Pharma Pvt Ltd',
    'Obs Pakistan (Private) Limited',
    'Pfizer Pakistan Limited',
    'The Searle Company Limited',
    'Wyeth Pakistan Limited',
    'Al Habib Pharmaceuticals',
    'Ali Gohar & Company (Private) Limited',
    'Aspin Pharma (Pvt.) Limited',
    'Barrett Hodgson Pakistan (Private) Limited',
    'Getz Pharma (Private) Limited',
    'IBL Healthcare (Private) Limited',
    'ICI Pakistan Limited',
    'Mafins Pharma',
    'Nawan Laboratories (Private) Limited',
    'Novins International (Pvt) Limited',
    'Otsuka Pakistan Limited',
    'Pakistan Specialty Chemicals (Pvt) Limited',
    'Pharmatec Pakistan (Private) Limited',
    'Ray Pharma (Private) Limited',
    'Sante (Private) Limited',
  ];

  // Duplicate clients for seamless infinite scroll
  const duplicatedClients = [...clients, ...clients];

  return (
    <section className="client-logos-section">
      <Container>
        <div className="text-center mb-4">
          <h2 className="section-title">Our Trusted Partners</h2>
          <p className="section-subtitle">
            We are proud to serve leading pharmaceutical companies in Pakistan
          </p>
        </div>
        <div className="client-marquee-wrapper">
          <div className="client-marquee">
            {duplicatedClients.map((client, index) => (
              <div key={index} className="client-marquee-item">
                <div className="client-marquee-icon">
                  <i className="fas fa-building"></i>
                </div>
                <span className="client-marquee-name">{client}</span>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ClientLogos;

