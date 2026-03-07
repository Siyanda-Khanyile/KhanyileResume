import React from 'react';

function Hero() {
  const scrollToContact = () => {
    document.querySelector('.contact').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero">
      <div className="hero-content">
        <h1>SIYANDA KHANYILE</h1>
        <p className="title">Software Engineer | Cloud & Automation Focus</p>
        <p>
          Building scalable cloud-native applications and engineering automation solutions
          that drive efficiency across AWS, .NET, and enterprise systems.
        </p>
        <button className="cta-button" onClick={scrollToContact}>
          Get In Touch
        </button>
      </div>
    </section>
  );
}

export default Hero;
