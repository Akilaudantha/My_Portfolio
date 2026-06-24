import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import profileImg from '../assets/profile.jpeg';

const Hero = () => {
  return (
    <section id="home" className="section-container" style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Background glowing orbs - Responsive */}
      <div style={{
        position: 'absolute',
        top: '-5%',
        left: '10%',
        width: 'clamp(200px, 60vw, 600px)',
        height: 'clamp(200px, 60vw, 600px)',
        background: 'radial-gradient(circle, #00d4ff 0%, transparent 70%)',
        opacity: '0.2',
        filter: 'blur(80px)',
        zIndex: -1,
        animation: 'float 6s ease-in-out infinite'
      }} />
      <div style={{
        position: 'absolute',
        bottom: '0%',
        right: '5%',
        width: 'clamp(150px, 50vw, 500px)',
        height: 'clamp(150px, 50vw, 500px)',
        background: 'radial-gradient(circle, #7f39fb 0%, transparent 70%)',
        opacity: '0.2',
        filter: 'blur(80px)',
        zIndex: -1,
        animation: 'float 7s ease-in-out infinite'
      }} />
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '-10%',
        width: 'clamp(150px, 45vw, 400px)',
        height: 'clamp(150px, 45vw, 400px)',
        background: 'radial-gradient(circle, #ff006e 0%, transparent 70%)',
        opacity: '0.15',
        filter: 'blur(80px)',
        zIndex: -1,
        animation: 'float 8s ease-in-out infinite'
      }} />

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          style={{
            width: 'clamp(140px, 35vw, 220px)',
            height: 'clamp(140px, 35vw, 220px)',
            borderRadius: '50%',
            background: 'var(--accent-gradient)',
            padding: '4px',
            marginBottom: '2rem',
            boxShadow: '0 0 50px rgba(0, 212, 255, 0.4), 0 0 100px rgba(127, 57, 251, 0.2)',
            animation: 'glow-pulse 4s ease-in-out infinite'
          }}
        >
          <div style={{
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            background: 'var(--bg-primary)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
            border: '3px solid rgba(0, 212, 255, 0.2)'
          }}>
            <img src={profileImg} alt="Akila Udantha" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          style={{ color: 'var(--text-secondary)', fontSize: 'clamp(0.9rem, 3vw, 1.3rem)', marginBottom: '0.5rem', letterSpacing: '3px', fontWeight: '600', textTransform: 'uppercase' }}
        >
          Welcome to my portfolio
        </motion.h2>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          style={{ fontSize: 'clamp(2.5rem, 10vw, 6rem)', marginBottom: '1rem', lineHeight: '1.1', fontWeight: '900', letterSpacing: '-2px' }}
        >
          <span className="gradient-text">AKILA</span> <br/> UDANTHA
        </motion.h1>

        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          style={{ fontSize: 'clamp(1rem, 3.5vw, 1.3rem)', fontWeight: '500', color: 'var(--text-secondary)', marginBottom: '2rem', maxWidth: '650px', lineHeight: '1.6' }}
        >
          Full-Stack Developer & BSc (Hons) Software Engineer
        </motion.h3>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          style={{ display: 'flex', gap: 'clamp(0.8rem, 3vw, 1.5rem)', marginBottom: '3rem', flexWrap: 'wrap', justifyContent: 'center', maxWidth: '100%' }}
        >
          <Link to="projects" smooth={true} duration={500} className="btn btn-primary">
            View My Work
          </Link>
          <Link to="contact" smooth={true} duration={500} className="btn btn-outline">
            Contact Me
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 1 }}
          style={{ display: 'flex', gap: 'clamp(1rem, 4vw, 2rem)', fontSize: 'clamp(1.5rem, 5vw, 1.8rem)', justifyContent: 'center', flexWrap: 'wrap' }}
        >
          <a href="https://github.com" target="_blank" rel="noreferrer" style={{ 
            color: 'var(--text-secondary)', 
            transition: 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
            padding: '0.8rem',
            borderRadius: '50%',
            background: 'rgba(0, 212, 255, 0.05)',
            border: '2px solid transparent'
          }} 
          onMouseOver={e => {
            e.currentTarget.style.color = 'var(--accent-primary)';
            e.currentTarget.style.border = '2px solid var(--accent-primary)';
            e.currentTarget.style.background = 'rgba(0, 212, 255, 0.15)';
            e.currentTarget.style.boxShadow = '0 0 20px rgba(0, 212, 255, 0.3)';
          }} 
          onMouseOut={e => {
            e.currentTarget.style.color = 'var(--text-secondary)';
            e.currentTarget.style.border = '2px solid transparent';
            e.currentTarget.style.background = 'rgba(0, 212, 255, 0.05)';
            e.currentTarget.style.boxShadow = 'none';
          }}>
            <FaGithub />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" style={{ 
            color: 'var(--text-secondary)', 
            transition: 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
            padding: '0.8rem',
            borderRadius: '50%',
            background: 'rgba(127, 57, 251, 0.05)',
            border: '2px solid transparent'
          }} 
          onMouseOver={e => {
            e.currentTarget.style.color = 'var(--accent-secondary)';
            e.currentTarget.style.border = '2px solid var(--accent-secondary)';
            e.currentTarget.style.background = 'rgba(127, 57, 251, 0.15)';
            e.currentTarget.style.boxShadow = '0 0 20px rgba(127, 57, 251, 0.3)';
          }} 
          onMouseOut={e => {
            e.currentTarget.style.color = 'var(--text-secondary)';
            e.currentTarget.style.border = '2px solid transparent';
            e.currentTarget.style.background = 'rgba(127, 57, 251, 0.05)';
            e.currentTarget.style.boxShadow = 'none';
          }}>
            <FaLinkedin />
          </a>
          <a href="mailto:Akilaudantha09@gmail.com" style={{ 
            color: 'var(--text-secondary)', 
            transition: 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
            padding: '0.8rem',
            borderRadius: '50%',
            background: 'rgba(255, 0, 110, 0.05)',
            border: '2px solid transparent'
          }} 
          onMouseOver={e => {
            e.currentTarget.style.color = 'var(--accent-tertiary)';
            e.currentTarget.style.border = '2px solid var(--accent-tertiary)';
            e.currentTarget.style.background = 'rgba(255, 0, 110, 0.15)';
            e.currentTarget.style.boxShadow = '0 0 20px rgba(255, 0, 110, 0.3)';
          }} 
          onMouseOut={e => {
            e.currentTarget.style.color = 'var(--text-secondary)';
            e.currentTarget.style.border = '2px solid transparent';
            e.currentTarget.style.background = 'rgba(255, 0, 110, 0.05)';
            e.currentTarget.style.boxShadow = 'none';
          }}>
            <FaEnvelope />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
