import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';

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
          fetch('/content/policies.md'),
          fetch('/content/vision.md'),
          fetch('/content/owner_message.md'),
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
    return <div>Loading...</div>;
  }

  if (error) {
    return <div className="text-danger">{error}</div>;
  }

  return (
    <div>
      <section className="mb-5">
        <ReactMarkdown>{policiesContent}</ReactMarkdown>
      </section>
      <section className="mb-5">
        <ReactMarkdown>{visionContent}</ReactMarkdown>
      </section>
      <section>
        <ReactMarkdown>{ownerMessageContent}</ReactMarkdown>
      </section>
    </div>
  );
};

export default Policies;

