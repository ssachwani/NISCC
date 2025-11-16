import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { Container, Card } from 'react-bootstrap';
import LoadingSpinner from '../components/LoadingSpinner';

const Policies: React.FC = () => {
  const [policiesContent, setPoliciesContent] = useState<string>('');
  const [visionContent, setVisionContent] = useState<string>('');
  const [ownerMessageContent, setOwnerMessageContent] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAllContent = async () => {
      try {
        const [policiesRes, visionRes, ownerMessageRes] = await Promise.all([
          fetch(`${process.env.PUBLIC_URL}/content/policies.md`),
          fetch(`${process.env.PUBLIC_URL}/content/vision.md`),
          fetch(`${process.env.PUBLIC_URL}/content/owner_message.md`),
        ]);

        if (!policiesRes.ok || !visionRes.ok || !ownerMessageRes.ok) {
          throw new Error('Failed to fetch one or more content files.');
        }

        const policiesMd = await policiesRes.text();
        const visionMd = await visionRes.text();
        const ownerMessageMd = await ownerMessageRes.text();

        setPoliciesContent(policiesMd);
        setVisionContent(visionMd);
        setOwnerMessageContent(ownerMessageMd);
      } catch (err) {
        setError('Failed to load policies and vision content.');
        console.error('Error fetching policies content:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchAllContent();
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
    <Container className="policies-page">
      <div className="page-header text-center mb-5">
        <h1 className="page-title">Policies & Vision</h1>
        <p className="page-subtitle">Our commitment to excellence and our vision for the future</p>
      </div>

      {policiesContent && (
        <Card className="content-card mb-4">
          <Card.Body>
            <div className="markdown-content">
              <ReactMarkdown>{policiesContent}</ReactMarkdown>
            </div>
          </Card.Body>
        </Card>
      )}

      {visionContent && (
        <Card className="content-card mb-4">
          <Card.Body>
            <div className="markdown-content">
              <ReactMarkdown>{visionContent}</ReactMarkdown>
            </div>
          </Card.Body>
        </Card>
      )}

      {ownerMessageContent && (
        <Card className="content-card">
          <Card.Body>
            <div className="markdown-content">
              <ReactMarkdown>{ownerMessageContent}</ReactMarkdown>
            </div>
          </Card.Body>
        </Card>
      )}
    </Container>
  );
};

export default Policies;

