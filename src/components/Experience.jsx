import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaVideo } from 'react-icons/fa';

const Experience = () => {
  const experiences = [
    {
      type: 'internship',
      title: 'Software Engineering Intern',
      company: 'EDCS (Education Co-operative Society)',
      duration: 'January 2026 – Present',
      description: 'Independently developed an internal Complaint Management System using Spring Boot, React.js, and MySQL. Involved in complete SDLC including requirement analysis, development, deployment, and maintenance. Reviewed ERP documentation, prepared UAT test cases, and developed RESTful APIs for business processes.',
      icon: <FaBriefcase />,
    },
    {
      type: 'internship',
      title: 'IT Trainee – Landscape Management Division',
      company: 'University of Sri Jayewardenepura',
      duration: 'Completed 6-month program',
      description: 'Completed a practical IT related training program in the Landscape Management Division, supporting internal systems and software applications.',
      icon: <FaBriefcase />,
    },
    {
      type: 'content',
      title: 'Founder & Content Creator',
      company: 'YouTube Channel: Coding Journey with Akila',
      duration: 'Since 2019',
      description: 'Created educational videos supporting undergraduates with university modules (e.g., Mathematics, coding tutorials, subject explanations). Focus areas: Java, Mathematics for computing, Algorithms and Data structures, web development, C language, Statistics.',
      icon: <FaVideo />,
    }
  ];

  return (
    <section id="experience" className="section-container">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Experience & <span className="gradient-text">Leadership</span>
      </motion.h2>

      <div style={{ maxWidth: '900px', margin: '0 auto', position: 'relative', paddingRight: '1rem' }}>
        {/* Vertical Line */}
        <div style={{
          position: 'absolute',
          left: 'clamp(14px, 3vw, 24px)',
          top: 0,
          bottom: 0,
          width: '3px',
          background: 'linear-gradient(180deg, var(--accent-primary), var(--accent-secondary))',
          zIndex: 0,
          boxShadow: '0 0 30px rgba(0, 212, 255, 0.3)'
        }} />

        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            style={{
              position: 'relative',
              paddingLeft: 'clamp(60px, 12vw, 80px)',
              marginBottom: 'clamp(2rem, 5vw, 3.5rem)',
              zIndex: 1
            }}
          >
            {/* Timeline Dot/Icon */}
            <div style={{
              position: 'absolute',
              left: 'clamp(-4px, 1vw, 0px)',
              top: '0',
              width: 'clamp(42px, 10vw, 50px)',
              height: 'clamp(42px, 10vw, 50px)',
              borderRadius: '50%',
              background: exp.type === 'internship' ? 'var(--accent-primary)' : 'var(--accent-secondary)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--bg-primary)',
              fontSize: 'clamp(1.1rem, 4vw, 1.5rem)',
              boxShadow: `0 0 30px ${exp.type === 'internship' ? 'rgba(0, 212, 255, 0.6)' : 'rgba(127, 57, 251, 0.6)'}`,
              border: '4px solid var(--bg-primary)',
              fontWeight: '800',
              transition: 'all 0.3s ease'
            }}>
              {exp.icon}
            </div>

            <div className="glass-panel" style={{ padding: '2.2rem', transition: 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)' }} onMouseOver={e => { e.currentTarget.style.transform = 'translateX(10px)'; e.currentTarget.style.boxShadow = '0 0 30px rgba(0, 212, 255, 0.2)'; }} onMouseOut={e => { e.currentTarget.style.transform = 'translateX(0)'; e.currentTarget.style.boxShadow = 'none'; }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: '800', color: 'var(--text-primary)', marginBottom: '0.5rem', letterSpacing: '-0.5px' }}>{exp.title}</h3>
              <h4 style={{ fontSize: '1.15rem', color: exp.type === 'internship' ? 'var(--accent-primary)' : 'var(--accent-secondary)', marginBottom: '0.7rem', fontWeight: '700' }}>{exp.company}</h4>
              <p style={{ fontSize: '0.95rem', color: 'var(--accent-primary)', marginBottom: '1.2rem', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.5px' }}>⏰ {exp.duration}</p>
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8', fontSize: '1rem' }}>{exp.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
