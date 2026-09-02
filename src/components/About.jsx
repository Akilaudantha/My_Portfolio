import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight, FaCode, FaGraduationCap, FaRegLightbulb } from 'react-icons/fa';

const education = [
  { year: '2022—2026', title: 'BSc (Hons) Software Engineering', place: 'NSBM Green University', meta: '4th Year · GPA 3.64' },
  { year: 'Completed', title: 'Diploma in Computer Studies', place: 'Vocational Training Center, Dehiwala', meta: 'Computing foundations' },
  { year: '2020', title: 'G.C.E. Advanced Level', place: 'Sri Dharmaloka College, Kelaniya', meta: 'Physical Science' },
];

const About = () => (
  <section id="about" className="section-container about-section">
    <div className="section-heading">
      <motion.p className="section-kicker" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>01 / About</motion.p>
      <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>Engineering with<br /><span>clarity & purpose.</span></motion.h2>
    </div>

    <div className="about-bento">
      <motion.article className="bento-card about-story" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <FaRegLightbulb className="bento-icon" />
        <p className="large-copy">I care about the space where <strong>engineering, usability, and real-world impact</strong> meet.</p>
        <p>My experience spans full-stack development, quality assurance, IT operations, and technical education. At EDCS, I work across the complete software lifecycle—from understanding requirements to deployment and maintenance.</p>
        <a href="#experience" className="inline-arrow">See my journey <FaArrowRight /></a>
      </motion.article>

      <motion.article className="bento-card about-now" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
        <FaCode className="bento-icon" />
        <span className="card-label">What I do now</span>
        <h3>Build full-stack systems that solve operational problems.</h3>
        <div className="mini-stack"><span>Requirements</span><span>Architecture</span><span>Development</span><span>QA</span></div>
      </motion.article>

      <motion.article className="bento-card language-card" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.15 }}>
        <span className="card-label">Communication</span><h3>Sinhala <i>+</i> English</h3><p>Technical ideas, explained clearly.</p>
      </motion.article>

      <motion.div className="education-card bento-card" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
        <div className="education-title"><FaGraduationCap /><span>Education</span></div>
        {education.map((item) => <div className="education-row" key={item.title}><span>{item.year}</span><div><h3>{item.title}</h3><p>{item.place}</p><small>{item.meta}</small></div></div>)}
      </motion.div>
    </div>
  </section>
);

export default About;
