import React from 'react';
import { motion } from 'framer-motion';
import { FaPhoneAlt, FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="section-container" style={{ minHeight: 'auto', paddingBottom: '2rem' }}>
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Get In <span className="gradient-text">Touch</span>
      </motion.h2>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '4rem',
        marginTop: '2rem',
        marginBottom: '4rem'
      }}>
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: 'var(--text-primary)', fontWeight: '800', letterSpacing: '-0.5px' }}>Let's Connect</h3>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', lineHeight: '1.8', fontSize: '1.05rem' }}>
            I'm currently looking for new opportunities and collaborations. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.8rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.3rem' }}>
              <div style={{ width: '52px', height: '52px', borderRadius: '50%', background: 'rgba(0, 212, 255, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-primary)', fontSize: '1.4rem', border: '2px solid rgba(0, 212, 255, 0.2)', transition: 'all 0.3s ease' }} onMouseOver={(e) => { e.currentTarget.style.boxShadow = '0 0 20px rgba(0, 212, 255, 0.3)'; }} onMouseOut={(e) => { e.currentTarget.style.boxShadow = 'none'; }}>
                <FaPhoneAlt />
              </div>
              <div>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', fontWeight: '600' }}>Phone</p>
                <p style={{ color: 'var(--text-primary)', fontWeight: '700', fontSize: '1.1rem' }}>+94 75 039 3013</p>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '1.3rem' }}>
              <div style={{ width: '52px', height: '52px', borderRadius: '50%', background: 'rgba(127, 57, 251, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-secondary)', fontSize: '1.4rem', border: '2px solid rgba(127, 57, 251, 0.2)', transition: 'all 0.3s ease' }} onMouseOver={(e) => { e.currentTarget.style.boxShadow = '0 0 20px rgba(127, 57, 251, 0.3)'; }} onMouseOut={(e) => { e.currentTarget.style.boxShadow = 'none'; }}>
                <FaEnvelope />
              </div>
              <div>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', fontWeight: '600' }}>Email</p>
                <p style={{ color: 'var(--text-primary)', fontWeight: '700', fontSize: '1.1rem' }}>Akilaudantha09@gmail.com</p>
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '1.2rem', marginTop: '3rem' }}>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" style={{ width: '50px', height: '50px', borderRadius: '50%', background: 'rgba(0, 212, 255, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-primary)', fontSize: '1.3rem', transition: 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)', border: '2px solid rgba(0, 212, 255, 0.2)' }} onMouseOver={e => { e.currentTarget.style.background = 'rgba(0, 212, 255, 0.2)'; e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.boxShadow = '0 0 20px rgba(0, 212, 255, 0.3)'; }} onMouseOut={e => { e.currentTarget.style.background = 'rgba(0, 212, 255, 0.1)'; e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}>
              <FaLinkedin />
            </a>
            <a href="https://github.com" target="_blank" rel="noreferrer" style={{ width: '50px', height: '50px', borderRadius: '50%', background: 'rgba(127, 57, 251, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-secondary)', fontSize: '1.3rem', transition: 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)', border: '2px solid rgba(127, 57, 251, 0.2)' }} onMouseOver={e => { e.currentTarget.style.background = 'rgba(127, 57, 251, 0.2)'; e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.boxShadow = '0 0 20px rgba(127, 57, 251, 0.3)'; }} onMouseOut={e => { e.currentTarget.style.background = 'rgba(127, 57, 251, 0.1)'; e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}>
              <FaGithub />
            </a>
          </div>
        </motion.div>

        
      </div>

      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.6 }}
        style={{
          borderTop: '1px solid var(--glass-border)',
          paddingTop: '2rem',
          textAlign: 'center',
          color: 'var(--text-secondary)',
          fontSize: '0.9rem'
        }}
      >
        <p>© {new Date().getFullYear()} Akila Udantha. Built with React & Framer Motion.</p>
      </motion.footer>
    </section>
  );
};

export default Contact;
