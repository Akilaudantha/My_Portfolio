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
        gridTemplateColumns: 'repeat(auto-fit, minmax(clamp(300px, 80vw, 320px), 1fr))',
        gap: 'clamp(2rem, 4vw, 4rem)',
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
              <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: 'radial-gradient(circle at 30% 30%, rgba(0, 212, 255, 0.35), rgba(0, 212, 255, 0.12))', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-primary)', fontSize: '1.5rem', border: '2px solid rgba(0, 212, 255, 0.3)', boxShadow: '0 0 25px rgba(0, 212, 255, 0.2), inset 0 0 15px rgba(0, 212, 255, 0.08)', transition: 'all 0.3s ease' }} onMouseOver={(e) => { e.currentTarget.style.boxShadow = '0 0 40px rgba(0, 212, 255, 0.35), inset 0 0 15px rgba(0, 212, 255, 0.15)'; e.currentTarget.style.transform = 'scale(1.05)'; }} onMouseOut={(e) => { e.currentTarget.style.boxShadow = '0 0 25px rgba(0, 212, 255, 0.2), inset 0 0 15px rgba(0, 212, 255, 0.08)'; e.currentTarget.style.transform = 'scale(1)'; }}>
                <FaPhoneAlt />
              </div>
              <div>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', fontWeight: '600' }}>Phone</p>
                <p style={{ color: 'var(--text-primary)', fontWeight: '700', fontSize: '1.1rem' }}>+94 75 039 3013</p>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '1.3rem' }}>
              <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: 'radial-gradient(circle at 30% 30%, rgba(127, 57, 251, 0.35), rgba(127, 57, 251, 0.12))', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-secondary)', fontSize: '1.5rem', border: '2px solid rgba(127, 57, 251, 0.3)', boxShadow: '0 0 25px rgba(127, 57, 251, 0.2), inset 0 0 15px rgba(127, 57, 251, 0.08)', transition: 'all 0.3s ease' }} onMouseOver={(e) => { e.currentTarget.style.boxShadow = '0 0 40px rgba(127, 57, 251, 0.35), inset 0 0 15px rgba(127, 57, 251, 0.15)'; e.currentTarget.style.transform = 'scale(1.05)'; }} onMouseOut={(e) => { e.currentTarget.style.boxShadow = '0 0 25px rgba(127, 57, 251, 0.2), inset 0 0 15px rgba(127, 57, 251, 0.08)'; e.currentTarget.style.transform = 'scale(1)'; }}>
                <FaEnvelope />
              </div>
              <div>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', fontWeight: '600' }}>Email</p>
                <p style={{ color: 'var(--text-primary)', fontWeight: '700', fontSize: '1.1rem' }}>Akilaudantha09@gmail.com</p>
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '2rem', marginTop: '3rem', justifyContent: 'flex-start', flexWrap: 'wrap' }}>
            <a href="https://www.linkedin.com/in/akila-perera-43a830245" target="_blank" rel="noreferrer" style={{ width: '70px', height: '70px', borderRadius: '50%', background: 'radial-gradient(circle at 30% 30%, rgba(0, 212, 255, 0.4), rgba(0, 212, 255, 0.15))', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-primary)', fontSize: '1.8rem', transition: 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)', border: '2px solid rgba(0, 212, 255, 0.4)', boxShadow: '0 0 30px rgba(0, 212, 255, 0.25), inset 0 0 20px rgba(0, 212, 255, 0.1)' }} onMouseOver={e => { e.currentTarget.style.background = 'radial-gradient(circle at 30% 30%, rgba(0, 212, 255, 0.6), rgba(0, 212, 255, 0.25))'; e.currentTarget.style.transform = 'translateY(-8px) scale(1.1)'; e.currentTarget.style.boxShadow = '0 0 50px rgba(0, 212, 255, 0.5), inset 0 0 20px rgba(0, 212, 255, 0.2)'; }} onMouseOut={e => { e.currentTarget.style.background = 'radial-gradient(circle at 30% 30%, rgba(0, 212, 255, 0.4), rgba(0, 212, 255, 0.15))'; e.currentTarget.style.transform = 'translateY(0) scale(1)'; e.currentTarget.style.boxShadow = '0 0 30px rgba(0, 212, 255, 0.25), inset 0 0 20px rgba(0, 212, 255, 0.1)'; }}>
              <FaLinkedin />
            </a>
            <a href="https://github.com/Akilaudantha" target="_blank" rel="noreferrer" style={{ width: '70px', height: '70px', borderRadius: '50%', background: 'radial-gradient(circle at 30% 30%, rgba(127, 57, 251, 0.4), rgba(127, 57, 251, 0.15))', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-secondary)', fontSize: '1.8rem', transition: 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)', border: '2px solid rgba(127, 57, 251, 0.4)', boxShadow: '0 0 30px rgba(127, 57, 251, 0.25), inset 0 0 20px rgba(127, 57, 251, 0.1)' }} onMouseOver={e => { e.currentTarget.style.background = 'radial-gradient(circle at 30% 30%, rgba(127, 57, 251, 0.6), rgba(127, 57, 251, 0.25))'; e.currentTarget.style.transform = 'translateY(-8px) scale(1.1)'; e.currentTarget.style.boxShadow = '0 0 50px rgba(127, 57, 251, 0.5), inset 0 0 20px rgba(127, 57, 251, 0.2)'; }} onMouseOut={e => { e.currentTarget.style.background = 'radial-gradient(circle at 30% 30%, rgba(127, 57, 251, 0.4), rgba(127, 57, 251, 0.15))'; e.currentTarget.style.transform = 'translateY(0) scale(1)'; e.currentTarget.style.boxShadow = '0 0 30px rgba(127, 57, 251, 0.25), inset 0 0 20px rgba(127, 57, 251, 0.1)'; }}>
              <FaGithub />
            </a>
            <a href="mailto:Akilaudantha09@gmail.com" style={{ width: '70px', height: '70px', borderRadius: '50%', background: 'radial-gradient(circle at 30% 30%, rgba(255, 0, 110, 0.4), rgba(255, 0, 110, 0.15))', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-tertiary)', fontSize: '1.8rem', transition: 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)', border: '2px solid rgba(255, 0, 110, 0.4)', boxShadow: '0 0 30px rgba(255, 0, 110, 0.25), inset 0 0 20px rgba(255, 0, 110, 0.1)' }} onMouseOver={e => { e.currentTarget.style.background = 'radial-gradient(circle at 30% 30%, rgba(255, 0, 110, 0.6), rgba(255, 0, 110, 0.25))'; e.currentTarget.style.transform = 'translateY(-8px) scale(1.1)'; e.currentTarget.style.boxShadow = '0 0 50px rgba(255, 0, 110, 0.5), inset 0 0 20px rgba(255, 0, 110, 0.2)'; }} onMouseOut={e => { e.currentTarget.style.background = 'radial-gradient(circle at 30% 30%, rgba(255, 0, 110, 0.4), rgba(255, 0, 110, 0.15))'; e.currentTarget.style.transform = 'translateY(0) scale(1)'; e.currentTarget.style.boxShadow = '0 0 30px rgba(255, 0, 110, 0.25), inset 0 0 20px rgba(255, 0, 110, 0.1)'; }}>
              <FaEnvelope />
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
        <p>© {new Date().getFullYear()} Akila Udantha. All rights reserved.</p>
      </motion.footer>
    </section>
  );
};

export default Contact;
