import React from 'react';

function Projects() {
  const projects = [
    {
      title: "Cloud Resume Challenge",
      description: "A serverless portfolio website built as part of the AWS Cloud Resume Challenge, demonstrating cloud engineering skills and modern DevOps practices.",
      technologies: ["React", "AWS Lambda", "DynamoDB", "API Gateway", "S3", "CloudFront", "GitHub Actions"],
      achievements: [
        "Built serverless visitor counter with Lambda and DynamoDB",
        "Implemented CI/CD pipeline with GitHub Actions for automated deployments",
        "Configured CloudFront CDN for global content delivery with HTTPS",
        "Designed Netflix-inspired responsive UI with React"
      ],
      links: [
        { label: "Live Site", url: "https://d12oebvwwgddu.cloudfront.net" },
        { label: "GitHub", url: "https://github.com/Siyanda-Khanyile/KhanyileResume" }
      ]
    }
  ];

  return (
    <section className="projects">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p className="project-description">{project.description}</p>
            
            <div className="project-tech">
              <h4>Technologies:</h4>
              <div className="tech-tags">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>

            <div className="project-achievements">
              <h4>Key Achievements:</h4>
              <ul>
                {project.achievements.map((achievement, i) => (
                  <li key={i}>{achievement}</li>
                ))}
              </ul>
            </div>

            <div className="project-links">
              {project.links.map((link, i) => (
                <a 
                  key={i}
                  href={link.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  {link.label} →
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
