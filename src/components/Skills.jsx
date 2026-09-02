import React from 'react';
import { motion } from 'framer-motion';
import { FaDatabase, FaLayerGroup, FaServer, FaUsers } from 'react-icons/fa';

const groups = [
  { number: '01', title: 'Frontend', icon: FaLayerGroup, skills: ['React', 'TypeScript', 'JavaScript', 'Material UI', 'HTML5', 'CSS3', 'Flutter', 'Figma'] },
  { number: '02', title: 'Backend', icon: FaServer, skills: ['Spring Boot', 'Java', 'REST APIs', 'JSP', 'Servlets', 'PHP'] },
  { number: '03', title: 'Data', icon: FaDatabase, skills: ['MySQL', 'PostgreSQL', 'Firebase', 'Firestore', 'SQL'] },
  { number: '04', title: 'Practice', icon: FaUsers, skills: ['Git & GitLab', 'Postman', 'System Analysis', 'Software Testing', 'UAT', 'Debugging'] },
];

const Skills = () => (
  <section id="skills" className="section-container skills-section">
    <div className="section-heading split-heading"><div><p className="section-kicker">02 / Capabilities</p><h2>Tools are temporary.<br /><span>Craft is permanent.</span></h2></div><p>I use the right technology for the problem, backed by solid engineering principles and a quality-first mindset.</p></div>
    <div className="skills-board">
      {groups.map((group, index) => { const Icon = group.icon; return (
        <motion.article className="skill-row" key={group.title} initial={{ opacity: 0, x: index % 2 ? 35 : -35 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ delay: index * 0.08, duration: 0.6 }}>
          <span className="skill-index">{group.number}</span><div className="skill-name"><Icon /><h3>{group.title}</h3></div><div className="skill-cloud">{group.skills.map((skill) => <span key={skill}>{skill}</span>)}</div>
        </motion.article>
      ); })}
    </div>
    <div className="marquee" aria-hidden="true"><div>REACT · TYPESCRIPT · MATERIAL UI · SPRING BOOT · POSTGRESQL · REST APIs · REACT · TYPESCRIPT · MATERIAL UI · SPRING BOOT · POSTGRESQL · REST APIs ·</div></div>
  </section>
);

export default Skills;
