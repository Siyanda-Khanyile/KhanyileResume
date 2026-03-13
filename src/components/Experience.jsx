import React from 'react';

function Experience() {
  const experiences = [
    {
      company: "Amazon Web Services (AWS)",
      role: "Support Engineer",
      duration: "June 2024 – Present",
      achievements: [
        "Engineered Python and AI-based automation tool reducing monthly manual processing from 5 hours to 1 minute (~260 hours saved annually)",
        "Automated >80% of manual AMI publishing validation workflows",
        "Validated 250+ Amazon Machine Images (AMIs) including CloudFormation-based deployments",
        "Resolved 700+ technical infrastructure and integration cases with 1-hour average resolution time",
        "Contributed to Tools & Scripts team developing internal automation tools for AWS Marketplace operations",
        "Maintained local development environment for writing, testing, and debugging automation scripts",
        "Implemented workflow enhancements that reduced manual effort across operations team",
        "Managed code changes through Git version control, including branching, code reviews, and deployment processes",
        "Created SOPs and delivered training sessions to 10 team members on automation tooling",
        "Participated in rotational 24/7 standby support"
      ]
    },
    {
      company: "Nedbank",
      role: "Software Developer / Application Support Engineer",
      duration: "July 2022 – June 2024",
      achievements: [
        "Led 5 Disaster Recovery (DR) simulation tests in 6 months within the 2-hour recovery time objective",
        "Delivered weekly identity and access management (IAM) support to ~500 Nedbank employees",
        "Developed and maintained enterprise banking application components on SailPoint Identity IQ using Java",
        "Configured TLS certificate encryption to secure communication between applications",
        "Monitored system performance using Dynatrace to prevent outages"
      ]
    },
    {
      company: "Silverbridge",
      role: "Front-End Developer",
      duration: "January 2020 – June 2022",
      achievements: [
        "Designed and implemented UI features using Blazor, .NET Core, and Bootstrap",
        "Developed 250+ Selenium automation tests to improve regression testing efficiency",
        "Conducted code reviews in Azure DevOps, ensuring adherence to coding standards",
        "Developed build and release pipeline policies to ensure a new build runs for every new commit"
      ]
    },
    {
      company: "immedia studio",
      role: "Front-End Developer",
      duration: "May 2018 – July 2019",
      achievements: [
        "Built Angular-based CMS components",
        "Developed ~50 automation tests using Karma and Jasmine",
        "Mentored students during seasonal internship programmes"
      ]
    }
  ];

  return (
    <section className="experience">
      <h2>Experience</h2>
      <div className="experience-grid">
        {experiences.map((exp, index) => (
          <div key={index} className="experience-card">
            <div className="experience-header">
              <div>
                <div className="company">{exp.company}</div>
                <h3>{exp.role}</h3>
              </div>
              <div className="duration">{exp.duration}</div>
            </div>
            <ul>
              {exp.achievements.map((achievement, i) => (
                <li key={i}>{achievement}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
