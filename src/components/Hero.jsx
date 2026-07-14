import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { FaArrowRight, FaDownload, FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import profileImg from '../assets/profile.jpeg';

const socialLinks = [
  {
    label: 'GitHub',
    href: 'https://github.com/Akilaudantha',
    icon: <FaGithub />,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/akila-perera-43a830245',
    icon: <FaLinkedin />,
  },
  {
    label: 'Email',
    href: 'mailto:Akilaudantha09@gmail.com',
    icon: <FaEnvelope />,
  },
];

const stats = [
  { value: '4th Year', label: 'Software Engineering Undergraduate' },
  { value: '3.64 GPA', label: 'Academic Performance' },
  { value: '2019+', label: 'Teaching & Content Creation' },
];

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-grid">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="hero-kicker">Full-Stack Developer / Software Engineering Intern</p>
          <h1>
            Akila Udantha builds practical, polished software for real users.
          </h1>
          <p className="hero-copy">
            I am a BSc (Hons) Software Engineering undergraduate focused on full-stack
            systems, QA-minded delivery, and clear technical teaching through Coding Journey
            with Akila.
          </p>

          <div className="hero-actions">
            <Link to="projects" smooth={true} duration={500} className="btn btn-primary">
              View Work <FaArrowRight aria-hidden="true" />
            </Link>
            <a className="btn btn-outline" href="/Akila_Perera_CV.pdf" download>
              Download CV <FaDownload aria-hidden="true" />
            </a>
          </div>

          <div className="hero-socials" aria-label="Social links">
            {socialLinks.map((link) => (
              <a key={link.label} href={link.href} target={link.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer" aria-label={link.label}>
                {link.icon}
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.15, duration: 0.55 }}
        >
          <div className="profile-card">
            <img src={profileImg} alt="Akila Udantha" />
            <div className="profile-card-content">
              <p>Currently at</p>
              <strong>EDCS</strong>
              <span>Spring Boot / React / MySQL</span>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="hero-stats"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35, duration: 0.55 }}
      >
        {stats.map((stat) => (
          <div key={stat.label}>
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default Hero;
