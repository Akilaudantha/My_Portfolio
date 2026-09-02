import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaYoutube } from 'react-icons/fa';

const experience = [
  { period: 'JAN 2026 — PRESENT', role: 'Software Engineering Intern', company: 'EDCS · Education Co-operative Society', icon: FaBriefcase, points: ['Built an internal Complaint Management System with Spring Boot, React, and MySQL.', 'Contributed across requirements, development, REST API design, deployment, and maintenance.', 'Reviewed ERP documentation and prepared UAT test cases for core business workflows.'] },
  { period: '6-MONTH PROGRAM', role: 'IT Trainee', company: 'University of Sri Jayewardenepura', icon: FaBriefcase, points: ['Supported internal systems and software applications in the Landscape Management Division.', 'Built practical experience in operational IT environments and stakeholder support.'] },
  { period: '2019 — PRESENT', role: 'Founder & Content Creator', company: 'Coding Journey with Akila', icon: FaYoutube, points: ['Create accessible lessons for computing undergraduates across Java, mathematics, algorithms, web development, C, and statistics.', 'Translate difficult technical concepts into structured, student-friendly explanations.'] },
];

const Experience = () => (
  <section id="experience" className="section-container experience-section">
    <div className="section-heading"><p className="section-kicker">03 / Experience</p><h2>Learning by building.<br /><span>Leading by sharing.</span></h2></div>
    <div className="experience-list">
      {experience.map((item, index) => { const Icon = item.icon; return (
        <motion.article className="experience-row" key={item.role} initial={{ opacity: 0, y: 45 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.7 }}>
          <div className="experience-marker"><span>0{index + 1}</span><Icon /></div>
          <div className="experience-main"><p>{item.period}</p><h3>{item.role}</h3><h4>{item.company}</h4></div>
          <ul>{item.points.map((point) => <li key={point}>{point}</li>)}</ul>
        </motion.article>
      ); })}
    </div>
  </section>
);

export default Experience;
