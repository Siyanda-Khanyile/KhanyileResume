import React from 'react';

function Skills() {
  const skillCategories = [
    {
      category: "Languages",
      skills: ["C#", "Java", "JavaScript", "TypeScript", "Python", "SQL"]
    },
    {
      category: "Frameworks",
      skills: [".NET Core", "Blazor", "React", "React Native", "Angular", "Bootstrap"]
    },
    {
      category: "Cloud & DevOps",
      skills: ["AWS Lambda", "API Gateway", "DynamoDB", "S3", "CloudFront", "IAM", "CloudFormation", "Amazon QuickSight", "CloudWatch", "Azure DevOps", "Git"]
    },
    {
      category: "Tools & Testing",
      skills: ["Selenium", "Karma", "Jasmine", "Dynatrace", "PowerShell", "Linux"]
    },
    {
      category: "Practices",
      skills: ["Agile", "CI/CD", "Incident Management", "Production Support", "Code Review"]
    }
  ];

  return (
    <section className="skills">
      <h2>Technical Skills</h2>
      <div className="skills-grid">
        {skillCategories.map((category, index) => (
          <div key={index} className="skill-category">
            <h3>{category.category}</h3>
            <div className="skill-tags">
              {category.skills.map((skill, i) => (
                <span key={i} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
