import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="section-container">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        About <span className="gradient-text">Me</span>
      </motion.h2>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(clamp(280px, 80vw, 300px), 1fr))',
        gap: 'clamp(1.5rem, 4vw, 3rem)',
        marginTop: '2rem'
      }}>
        {/* Profile Summary */}
        <motion.div
          className="glass-panel"
          style={{ padding: '2rem' }}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3 style={{ fontSize: '1.6rem', marginBottom: '1.3rem', color: 'var(--accent-primary)', fontWeight: '800', letterSpacing: '-0.5px' }}>Profile Summary</h3>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '1.2rem', lineHeight: '1.8', fontSize: '1.05rem' }}>
            Motivated Software Engineering undergraduate currently in the 4th year, 2nd semester, working as an IT Intern at EDCS (Education Co-operative Society).
          </p>
          <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8', fontSize: '1.05rem' }}>
            Currently completing a 6-month internship, with 4 months already completed, gaining practical experience in software development, QA, and overall IT operations.
          </p>
          
          <h4 style={{ marginTop: '2rem', marginBottom: '0.8rem', color: 'var(--accent-primary)', fontSize: '1.1rem', fontWeight: '700' }}>Languages</h4>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <span style={{ background: 'rgba(0, 212, 255, 0.1)', border: '2px solid var(--accent-primary)', color: 'var(--accent-primary)', padding: '0.7rem 1.2rem', borderRadius: '10px', fontSize: '0.95rem', fontWeight: '600', transition: 'all 0.3s ease' }} onMouseOver={(e) => { e.currentTarget.style.boxShadow = '0 0 15px rgba(0, 212, 255, 0.3)'; }} onMouseOut={(e) => { e.currentTarget.style.boxShadow = 'none'; }}>Sinhala</span>
            <span style={{ background: 'rgba(0, 212, 255, 0.1)', border: '2px solid var(--accent-primary)', color: 'var(--accent-primary)', padding: '0.7rem 1.2rem', borderRadius: '10px', fontSize: '0.95rem', fontWeight: '600', transition: 'all 0.3s ease' }} onMouseOver={(e) => { e.currentTarget.style.boxShadow = '0 0 15px rgba(0, 212, 255, 0.3)'; }} onMouseOut={(e) => { e.currentTarget.style.boxShadow = 'none'; }}>English</span>
          </div>
        </motion.div>

        {/* Education */}
        <motion.div
          style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: 'var(--accent-secondary)' }}>Education</h3>
          
          <div className="glass-panel" style={{ padding: '2rem', borderLeft: '5px solid var(--accent-primary)', position: 'relative' }}>
            <h4 style={{ fontSize: '1.3rem', marginBottom: '0.7rem', fontWeight: '800', color: 'var(--text-primary)' }}>BSc (Hons) in Software Engineering</h4>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', marginBottom: '0.8rem' }}>National School of Business Management (NSBM), Homagama, Sri Lanka</p>
            <p style={{ color: 'var(--accent-primary)', fontWeight: 'bold', fontSize: '1.05rem' }}>📚 Currently in 4th Year, 2nd Semester | GPA: 3.64</p>
          </div>

          <div className="glass-panel" style={{ padding: '2rem', borderLeft: '5px solid var(--accent-secondary)', position: 'relative' }}>
            <h4 style={{ fontSize: '1.3rem', marginBottom: '0.7rem', fontWeight: '800', color: 'var(--text-primary)' }}>Diploma in Computer Studies</h4>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1rem' }}>Vocational Training Center, Dehiwala</p>
          </div>

          <div className="glass-panel" style={{ padding: '2rem', borderLeft: '5px solid var(--accent-tertiary)', position: 'relative' }}>
            <h4 style={{ fontSize: '1.3rem', marginBottom: '0.7rem', fontWeight: '800', color: 'var(--text-primary)' }}>G.C.E. Advanced Level (A/L) - 2020</h4>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', marginBottom: '0.7rem' }}>Sri Dharmaloka College, Kelaniya</p>
            <p style={{ color: 'var(--accent-primary)', fontSize: '1rem', fontWeight: '600' }}>🔬 Stream: Physical Science</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
