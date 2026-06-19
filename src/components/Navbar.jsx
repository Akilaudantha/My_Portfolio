import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import { HiMenuAlt3, HiX } from 'react-icons/hi';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', to: 'home' },
    { name: 'About', to: 'about' },
    { name: 'Skills', to: 'skills' },
    { name: 'Experience', to: 'experience' },
    { name: 'Projects', to: 'projects' },
    { name: 'Videos', to: 'videos' },
    { name: 'Contact', to: 'contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: isScrolled ? '1rem 5%' : '1.5rem 5%',
        background: isScrolled ? 'linear-gradient(135deg, rgba(15, 15, 30, 0.9), rgba(26, 26, 46, 0.85))' : 'transparent',
        backdropFilter: isScrolled ? 'blur(20px)' : 'none',
        borderBottom: isScrolled ? '1px solid rgba(0, 212, 255, 0.1)' : 'none',
        transition: 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        boxShadow: isScrolled ? '0 10px 30px rgba(0, 212, 255, 0.05)' : 'none'
      }}
    >
      <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: '800', letterSpacing: '-1px' }}>
        <span className="gradient-text">AKILA</span>
      </div>

      {/* Desktop Menu */}
      <ul style={{
        display: 'none',
        listStyle: 'none',
        gap: '2rem',
        '@media (min-width: 768px)': {
          display: 'flex', // Fallback for vanilla css inline styles without media query support
        }
      }} className="desktop-nav">
        {navLinks.map((link) => (
          <li key={link.name}>
            <Link
              to={link.to}
              smooth={true}
              duration={500}
              spy={true}
              activeClass="active"
              style={{
                cursor: 'pointer',
                fontSize: '0.95rem',
                fontWeight: '600',
                color: 'var(--text-primary)',
                transition: 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
                position: 'relative',
                padding: '0.5rem 0'
              }}
              onMouseOver={(e) => {
                e.target.style.color = 'var(--accent-primary)';
                e.target.style.textShadow = '0 0 15px rgba(0, 212, 255, 0.4)';
              }}
              onMouseOut={(e) => {
                e.target.style.color = 'var(--text-primary)';
                e.target.style.textShadow = 'none';
              }}
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>

      {/* Mobile Menu Icon */}
      <div 
        className="mobile-icon" 
        style={{ cursor: 'pointer', zIndex: 101 }}
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        {mobileMenuOpen ? <HiX size={28} /> : <HiMenuAlt3 size={28} />}
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={mobileMenuOpen ? { x: 0 } : { x: '100%' }}
        transition={{ type: 'tween', duration: 0.3 }}
        style={{
          position: 'fixed',
          top: 0,
          right: 0,
          height: '100vh',
          width: '70vw',
          background: 'var(--bg-secondary)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '2rem',
          boxShadow: '-10px 0 30px rgba(0,0,0,0.5)',
        }}
      >
        {navLinks.map((link) => (
          <Link
            key={link.name}
            to={link.to}
            smooth={true}
            duration={500}
            onClick={() => setMobileMenuOpen(false)}
            style={{
              cursor: 'pointer',
              fontSize: '1.5rem',
              fontFamily: 'var(--font-display)',
              fontWeight: '600',
            }}
          >
            {link.name}
          </Link>
        ))}
      </motion.div>

      {/* Hacky way to inject basic media queries since we are inline-styling heavily for speed */}
      <style>{`
        .desktop-nav { display: none; }
        @media (min-width: 768px) {
          .desktop-nav { display: flex !important; }
          .mobile-icon { display: none !important; }
        }
      `}</style>
    </motion.nav>
  );
};

export default Navbar;
