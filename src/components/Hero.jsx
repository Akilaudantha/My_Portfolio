import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { FaArrowRight, FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import profileImg from '../assets/profile.jpeg';

const reveal = { hidden: { opacity: 0, y: 35 }, visible: (delay = 0) => ({ opacity: 1, y: 0, transition: { delay, duration: 0.75, ease: [0.22, 1, 0.36, 1] } }) };

const Hero = () => (
  <section id="home" className="hero-section">
    <div className="hero-grid-lines" aria-hidden="true" />
    <div className="hero-layout">
      <div className="hero-copy-block">
        <motion.div className="availability" variants={reveal} initial="hidden" animate="visible" custom={0.05}>
          <span /><p>Available for software opportunities</p>
        </motion.div>
        <motion.p className="hero-overline" variants={reveal} initial="hidden" animate="visible" custom={0.12}>Full-stack developer · Colombo, Sri Lanka</motion.p>
        <motion.h1 variants={reveal} initial="hidden" animate="visible" custom={0.18}>
          <span>I build digital</span><span>products that feel</span><em>effortless.</em>
        </motion.h1>
        <motion.p className="hero-summary" variants={reveal} initial="hidden" animate="visible" custom={0.28}>
          Software Engineering undergraduate turning complex requirements into clear, reliable products—from thoughtful interfaces to production-ready APIs.
        </motion.p>
        <motion.div className="hero-actions" variants={reveal} initial="hidden" animate="visible" custom={0.36}>
          <Link className="btn btn-primary" to="projects" smooth duration={500}>Explore my work <FaArrowRight /></Link>
          <a className="text-link" href="mailto:Akilaudantha09@gmail.com">Let’s talk <HiOutlineMail /></a>
        </motion.div>
      </div>

      <motion.div className="hero-portrait-wrap" initial={{ opacity: 0, scale: 0.9, rotate: 3 }} animate={{ opacity: 1, scale: 1, rotate: 0 }} transition={{ delay: 0.2, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}>
        <div className="portrait-orbit" aria-hidden="true"><span>DESIGN · DEVELOP · DELIVER · </span></div>
        <div className="hero-portrait"><img src={profileImg} alt="Akila Udantha" /></div>
        <div className="portrait-chip chip-role"><small>Currently</small><strong>SE Intern @ EDCS</strong></div>
        <div className="portrait-chip chip-stack"><span>Spring Boot</span><span>React</span><span>MySQL</span></div>
      </motion.div>
    </div>

    <motion.div className="hero-footer" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8, duration: 0.8 }}>
      <div className="hero-metrics"><div><strong>3.64</strong><span>Current GPA</span></div><div><strong>4th</strong><span>Academic year</span></div><div><strong>2019</strong><span>Creating since</span></div></div>
      <div className="hero-socials">
        <a href="https://github.com/Akilaudantha" target="_blank" rel="noreferrer" aria-label="GitHub"><FaGithub /></a>
        <a href="https://www.linkedin.com/in/akila-perera-43a830245" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedinIn /></a>
        <a href="mailto:Akilaudantha09@gmail.com" aria-label="Email"><HiOutlineMail /></a>
      </div>
    </motion.div>
  </section>
);

export default Hero;
