import React, { useState } from 'react';
import './JobBoard.css'; // Ensure you have this CSS file for styles
import jobBoardImage from '../Assets/images/job board.jpg'; // Ensure the correct path to your image

const jobData = [
  {
    category: "Web3",
    jobs: [
      { title: "Blockchain Developer", description: "Develop and maintain blockchain applications." },
      { title: "Smart Contract Auditor", description: "Audit smart contracts for security and functionality." },
      { title: "DeFi Product Manager", description: "Manage decentralized finance products." },
      { title: "Web3 Marketing Specialist", description: "Promote Web3 projects and products." },
      { title: "Blockchain Analyst", description: "Analyze blockchain data and trends." },
    ],
  },
  {
    category: "AI",
    jobs: [
      { title: "AI Research Scientist", description: "Conduct research on AI technologies." },
      { title: "Machine Learning Engineer", description: "Develop machine learning models and systems." },
      { title: "Data Scientist", description: "Analyze and interpret complex data." },
      { title: "AI Ethics Specialist", description: "Ensure ethical practices in AI development." },
      { title: "NLP Engineer", description: "Work on natural language processing projects." },
    ],
  },
  {
    category: "Cybersecurity",
    jobs: [
      { title: "Cybersecurity Analyst", description: "Monitor and protect networks from security breaches." },
      { title: "Penetration Tester", description: "Test systems for vulnerabilities." },
      { title: "Security Consultant", description: "Advise organizations on security measures." },
      { title: "Incident Response Specialist", description: "Respond to security incidents." },
      { title: "Security Architect", description: "Design security systems for organizations." },
    ],
  },
  {
    category: "Digital Marketing",
    jobs: [
      { title: "SEO Specialist", description: "Optimize website content for search engines." },
      { title: "Social Media Manager", description: "Manage social media accounts and campaigns." },
      { title: "Content Marketing Strategist", description: "Develop and execute content strategies." },
      { title: "PPC Specialist", description: "Manage pay-per-click advertising campaigns." },
      { title: "Email Marketing Manager", description: "Create and manage email marketing campaigns." },
    ],
  },
  {
    category: "Sales",
    jobs: [
      { title: "Sales Executive", description: "Engage with clients to sell products or services." },
      { title: "Account Manager", description: "Manage client accounts and relationships." },
      { title: "Business Development Representative", description: "Identify new business opportunities." },
      { title: "Sales Operations Analyst", description: "Optimize sales processes and workflows." },
      { title: "Regional Sales Manager", description: "Oversee sales activities in a specific region." },
    ],
  },
];

const JobBoard = () => {
  const [jobType, setJobType] = useState("");
  const [location, setLocation] = useState("");
  const [experienceLevel, setExperienceLevel] = useState("");

  return (
    <div className="job-board" style={{ backgroundImage: `url(${jobBoardImage})` }}>
      <div className="filters">
        <label>
          Job Type:
          <select value={jobType} onChange={(e) => setJobType(e.target.value)}>
            <option value="">Select Job Type</option>
            <option value="full-time">Full-Time</option>
            <option value="part-time">Part-Time</option>
            <option value="contract">Contract</option>
          </select>
        </label>
        <label>
          Location:
          <select value={location} onChange={(e) => setLocation(e.target.value)}>
            <option value="">Select Location</option>
            <option value="remote">Remote</option>
            <option value="hybrid">Hybrid</option>
            <option value="in-office">In-Office</option>
          </select>
        </label>
        <label>
          Level of Experience:
          <select value={experienceLevel} onChange={(e) => setExperienceLevel(e.target.value)}>
            <option value="">Select Experience Level</option>
            <option value="internship">Internship</option>
            <option value="junior">Junior</option>
            <option value="intermediate">Intermediate</option>
            <option value="senior">Senior</option>
          </select>
        </label>
      </div>
      
      <h1>Job Board</h1>
      {jobData.map((categoryData, index) => (
        <div className="job-category" key={index}>
          <h2>{categoryData.category}</h2>
          <ul>
            {categoryData.jobs.map((job, jobIndex) => (
              <li key={jobIndex}>
                <strong>{job.title}</strong>: {job.description}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default JobBoard;
