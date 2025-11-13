import React, { useEffect, useRef } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

interface StatisticItem {
  value: number;
  label: string;
  icon: string;
  suffix?: string;
}

const Statistics: React.FC = () => {
  // Calculate years of experience dynamically from 1998
  const calculateYearsOfExperience = (): number => {
    const startYear = 1998;
    const currentYear = new Date().getFullYear();
    return currentYear - startYear;
  };

  // Update these values with your actual company statistics
  const stats: StatisticItem[] = [
    { value: calculateYearsOfExperience(), label: 'Years of Experience', icon: 'fas fa-calendar-alt', suffix: '+' },
    { value: 25, label: 'Pharmaceutical Clients', icon: 'fas fa-building', suffix: '+' },
    { value: 1000, label: 'Shipments Handled', icon: 'fas fa-shipping-fast', suffix: '+' },
    { value: 98, label: 'Client Satisfaction', icon: 'fas fa-star', suffix: '%' },
  ];

  const statRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.5,
      rootMargin: '0px',
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const target = entry.target as HTMLElement;
          const finalValue = parseInt(target.getAttribute('data-value') || '0');
          animateValue(target, 0, finalValue, 2000);
          observer.unobserve(target);
        }
      });
    }, observerOptions);

    statRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      statRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  const animateValue = (cardElement: HTMLElement, start: number, end: number, duration: number) => {
    const valueElement = cardElement.querySelector('.stat-value') as HTMLElement;
    if (!valueElement) return;
    
    const suffix = cardElement.getAttribute('data-suffix') || '';
    const range = end - start;
    const increment = end > start ? 1 : -1;
    const stepTime = Math.abs(Math.floor(duration / range));
    let current = start;

    const timer = setInterval(() => {
      current += increment;
      valueElement.textContent = current.toLocaleString() + suffix;
      if (current === end) {
        clearInterval(timer);
      }
    }, stepTime);
  };

  return (
    <section className="statistics-section">
      <Container>
        <Row>
          {stats.map((stat, index) => (
            <Col md={3} sm={6} className="mb-4 mb-md-0" key={index}>
              <div 
                className="stat-card"
                ref={(el) => {
                  statRefs.current[index] = el;
                }}
                data-value={stat.value}
                data-suffix={stat.suffix || ''}
              >
                <div className="stat-icon">
                  <i className={stat.icon}></i>
                </div>
                <div className="stat-value">
                  {stat.value.toLocaleString()}{stat.suffix}
                </div>
                <div className="stat-label">{stat.label}</div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Statistics;

