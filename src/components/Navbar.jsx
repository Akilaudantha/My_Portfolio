import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { FaArrowDown } from 'react-icons/fa';
import { HiMenuAlt3, HiX } from 'react-icons/hi';

const links = ['About', 'Skills', 'Experience', 'Projects', 'Videos', 'Contact'];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <motion.header className={`nav-wrap ${scrolled ? 'is-scrolled' : ''}`} initial={{ y: -90 }} animate={{ y: 0 }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}>
      <nav className="nav-bar" aria-label="Main navigation">
        <Link className="brand" to="home" smooth duration={500} aria-label="Go to home">
          <span className="brand-mark">AU</span>
          <span className="brand-copy">Akila Udantha<small>Software Engineer</small></span>
        </Link>

        <div className="desktop-nav">
          {links.map((label) => (
            <Link key={label} to={label.toLowerCase()} smooth duration={500} spy activeClass="active">{label}</Link>
          ))}
        </div>

        <a className="nav-resume" href="/Akila_Perera_CV.pdf" download>Résumé <FaArrowDown aria-hidden="true" /></a>
        <button className="menu-button" onClick={() => setOpen((value) => !value)} aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open}>
          {open ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div className="mobile-menu" initial={{ opacity: 0, clipPath: 'circle(0% at 91% 5%)' }} animate={{ opacity: 1, clipPath: 'circle(150% at 91% 5%)' }} exit={{ opacity: 0, clipPath: 'circle(0% at 91% 5%)' }} transition={{ duration: 0.55, ease: [0.76, 0, 0.24, 1] }}>
            <span className="mobile-menu-label">Navigate / 01—06</span>
            {links.map((label, index) => (
              <Link key={label} to={label.toLowerCase()} smooth duration={500} onClick={() => setOpen(false)}>
                <span>0{index + 1}</span>{label}
              </Link>
            ))}
            <a className="btn btn-primary" href="/Akila_Perera_CV.pdf" download>Download résumé <FaArrowDown /></a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
