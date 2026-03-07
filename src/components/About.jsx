import React from 'react';

function About() {
  return (
    <section className="about">
      <h2>About Me</h2>
      <div className="about-content">
        <div className="about-image">SK</div>
        <div className="about-text">
          <p>
            Software Engineer with extensive experience building and supporting cloud-native 
            and enterprise applications across fintech and cloud marketplace environments. 
            Strong background in .NET, JavaScript/TypeScript, SQL, and AWS services.
          </p>
          <p>
            Proven track record of improving system efficiency through automation, achieving 
            99%+ time reduction in manual processes. Experienced in system integrations, 
            production troubleshooting, and collaborating cross-functionally in SLA-driven 
            environments.
          </p>
          <p>
            Based in Somerset West, Cape Town, I'm passionate about creating secure, scalable 
            solutions that make a real impact.
          </p>
          
          <div className="certifications">
            <h3>Certifications</h3>
            <div>
              <span className="cert-badge">AWS Certified Cloud Practitioner</span>
              <span className="cert-badge">Microsoft Azure Fundamentals (AZ-900)</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
