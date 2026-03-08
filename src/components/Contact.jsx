import React, { useState, useEffect } from 'react';

function Contact() {
  const [visitorCount, setVisitorCount] = useState(null);

  useEffect(() => {
    const API_URL = 'https://zi9h95p1m9.execute-api.us-east-1.amazonaws.com/count';
    
    fetch(API_URL)
      .then(response => response.json())
      .then(data => setVisitorCount(data.count))
      .catch(error => console.error('Error fetching visitor count:', error));
  }, []);

  return (
    <section className="contact">
      <h2>Let's Connect</h2>
      <div className="contact-content">
        {visitorCount !== null && (
          <p style={{ color: '#e50914', fontSize: '1rem', marginBottom: '1rem' }}>
            👁️ Visitor Count: {visitorCount.toLocaleString()}
          </p>
        )}
        <p>
          I'm always interested in hearing about new opportunities, 
          collaborations, or just connecting with fellow developers.
        </p>
        <div className="contact-links">
          <a href="mailto:khanyile.siyanda@outlook.com" className="contact-link">
            📧 Email
          </a>
          <a href="https://linkedin.com/in/siyanda-khanyile-6b6896182" 
             target="_blank" 
             rel="noopener noreferrer" 
             className="contact-link">
            💼 LinkedIn
          </a>
          <a href="tel:+27742244993" className="contact-link">
            📱 +27 74 2244 993
          </a>
        </div>
        <p style={{ marginTop: '3rem', color: '#808080', fontSize: '0.9rem' }}>
          Somerset West, Cape Town | Open to Relocation
        </p>
      </div>
    </section>
  );
}

export default Contact;
