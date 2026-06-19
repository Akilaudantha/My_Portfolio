import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  // Helper function to convert hex color to RGB
  const hexToRgb = (hex) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}` : '0, 212, 255';
  };
  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: ['Java', 'C', 'SQL', 'Dart'],
      color: 'var(--accent-primary)'
    },
    {
      title: 'Web Development',
      skills: ['HTML', 'CSS', 'JavaScript', 'PHP', 'JSP', 'Servlets'],
      color: 'var(--accent-secondary)'
    },
    {
      title: 'Database Technologies',
      skills: ['MySQL', 'Firebase'],
      color: '#00d4ff'
    },
    {
      title: 'UI/UX Design',
      skills: ['Figma'],
      color: '#7f39fb'
    },
    {
      title: 'Core Strengths',
      skills: ['Java web development', 'Mathematical Reasoning', 'Algorithms', 'Data Structures'],
      color: '#ff006e'
    },
    {
      title: 'Soft Skills',
      skills: ['Teaching', 'Leadership', 'Critical Thinking', 'Time Management', 'Team Collaboration', 'Project Management'],
      color: '#00d4ff'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="skills" className="section-container">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Professional <span className="gradient-text">Skills</span>
      </motion.h2>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem',
          marginTop: '2rem'
        }}
      >
        {skillCategories.map((category, index) => (
          <motion.div 
            key={index} 
            variants={itemVariants}
            className="glass-panel"
            style={{
              padding: '2rem',
              position: 'relative',
              overflow: 'hidden'
            }}
            whileHover={{ y: -5 }}
          >
            {/* Background glowing accent */}
            <div style={{
              position: 'absolute',
              top: '-50px',
              right: '-50px',
              width: '100px',
              height: '100px',
              background: category.color,
              opacity: '0.2',
              filter: 'blur(30px)',
              borderRadius: '50%'
            }} />

            <h3 style={{ fontSize: '1.3rem', marginBottom: '1.5rem', color: category.color }}>
              {category.title}
            </h3>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
              {category.skills.map((skill, sIndex) => (
                <span 
                  key={sIndex}
                  style={{
                    background: `rgba(${hexToRgb(category.color)}, 0.1)`,
                    border: `2px solid ${category.color}`,
                    padding: '0.7rem 1.2rem',
                    borderRadius: '12px',
                    fontSize: '0.95rem',
                    fontWeight: '600',
                    color: category.color,
                    transition: 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
                    cursor: 'default'
                  }}
                  onMouseOver={(e) => {
                    e.target.style.background = `rgba(${hexToRgb(category.color)}, 0.2)`;
                    e.target.style.boxShadow = `0 0 20px rgba(${hexToRgb(category.color)}, 0.4)`;
                    e.target.style.transform = 'translateY(-3px) scale(1.05)';
                  }}
                  onMouseOut={(e) => {
                    e.target.style.background = `rgba(${hexToRgb(category.color)}, 0.1)`;
                    e.target.style.boxShadow = 'none';
                    e.target.style.transform = 'translateY(0) scale(1)';
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;
