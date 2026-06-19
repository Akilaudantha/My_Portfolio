import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaFigma, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      title: 'Student Management System',
      description: 'A web-based application designed to manage student records, including registration, marks, and attendance. Developed for academic administrative use.',
      tech: ['HTML', 'CSS', 'PHP', 'JavaScript'],
      link: '#',
      icon: <FaGithub />
    },
    {
      title: 'E-Commerce Web Site',
      description: 'Designed as part of the DEA module, this Java-based project simulates basic online shopping experience including product listings, cart features, and order processing.',
      tech: ['Java', 'JSP', 'Servlets', 'MySQL'],
      link: '#',
      icon: <FaGithub />
    },
    {
      title: 'Class Attendance System',
      description: 'A system to record and monitor student attendance to the teacher, designed for easily mark and track classroom presence.',
      tech: ['Java', 'JSP', 'Servlets', 'MySQL'],
      link: '#',
      icon: <FaGithub />
    },
    {
      title: 'ReadLK – Accessible Reading App',
      description: 'A mobile-friendly reading platform designed to improve content accessibility for users with visual and cognitive impairments. Focused on inclusive typography and user-centric design.',
      tech: ['Figma'],
      link: '#',
      icon: <FaFigma />
    },
    {
      title: 'Air Quality Monitoring Web App',
      description: 'Developed a web-based system to monitor and manage air quality data with real-time data fetching and admin panel functionality. Includes features for data retrieval and alert management.',
      tech: ['PHP', 'JavaScript', 'HTML', 'SQL Server'],
      link: '#',
      icon: <FaGithub />
    },
    {
      title: 'UNIVISION – University Guidance App',
      description: 'Flutter-based mobile app to help students search universities, explore degree programs, and discover career paths based on Z-scores.',
      tech: ['Dart', 'Flutter', 'Firebase', 'Firestore'],
      link: '#',
      icon: <FaGithub />
    }
  ];

  return (
    <section id="projects" className="section-container">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Featured <span className="gradient-text">Projects</span>
      </motion.h2>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: '2rem',
        marginTop: '2rem'
      }}>
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -10 }}
            className="glass-panel"
            style={{
              padding: '2rem',
              display: 'flex',
              flexDirection: 'column',
              height: '100%',
              position: 'relative',
              overflow: 'hidden',
              group: 'true'
            }}
          >
            {/* Top decorative gradient line */}
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: '3px',
              background: 'var(--accent-gradient)'
            }} />

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
              <div style={{
                width: '56px',
                height: '56px',
                borderRadius: '14px',
                background: 'linear-gradient(135deg, rgba(0, 212, 255, 0.2), rgba(127, 57, 251, 0.2))',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.6rem',
                color: 'var(--accent-primary)',
                border: '2px solid rgba(0, 212, 255, 0.2)',
                transition: 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.borderColor = 'var(--accent-primary)';
                e.currentTarget.style.boxShadow = '0 0 20px rgba(0, 212, 255, 0.3)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.borderColor = 'rgba(0, 212, 255, 0.2)';
                e.currentTarget.style.boxShadow = 'none';
              }}>
                <FaExternalLinkAlt />
              </div>
              <a href={project.link} target="_blank" rel="noreferrer" style={{ 
                fontSize: '1.8rem', 
                color: 'var(--text-secondary)', 
                transition: 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
                cursor: 'pointer'
              }} 
              onMouseOver={e=>{
                e.currentTarget.style.color='var(--accent-primary)';
                e.currentTarget.style.transform='scale(1.2)';
              }} 
              onMouseOut={e=>{
                e.currentTarget.style.color='var(--text-secondary)';
                e.currentTarget.style.transform='scale(1)';
              }}>
                {project.icon}
              </a>
            </div>

            <h3 style={{ fontSize: '1.5rem', fontWeight: '800', color: 'var(--text-primary)', marginBottom: '1rem', letterSpacing: '-0.5px' }}>{project.title}</h3>
            
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7', marginBottom: '1.5rem', flexGrow: 1, fontSize: '1rem' }}>
              {project.description}
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.7rem' }}>
              {project.tech.map((tech, tIndex) => (
                <span 
                  key={tIndex}
                  style={{
                    fontSize: '0.85rem',
                    color: 'var(--accent-primary)',
                    fontFamily: 'monospace',
                    fontWeight: '700',
                    background: 'rgba(0, 212, 255, 0.1)',
                    border: '1px solid rgba(0, 212, 255, 0.2)',
                    padding: '0.5rem 0.9rem',
                    borderRadius: '8px',
                    transition: 'all 0.3s ease',
                    cursor: 'default'
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.background = 'rgba(0, 212, 255, 0.2)';
                    e.currentTarget.style.borderColor = 'var(--accent-primary)';
                    e.currentTarget.style.boxShadow = '0 0 15px rgba(0, 212, 255, 0.2)';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.background = 'rgba(0, 212, 255, 0.1)';
                    e.currentTarget.style.borderColor = 'rgba(0, 212, 255, 0.2)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
