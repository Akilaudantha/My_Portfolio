import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight, FaDownload, FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { HiOutlinePhone } from 'react-icons/hi';

const Contact = () => (
  <section id="contact" className="contact-section">
    <motion.div className="contact-orb" initial={{ scale: 0.7, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1 }} aria-hidden="true" />
    <div className="contact-inner">
      <p className="section-kicker">06 / Contact</p>
      <motion.h2 initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>Have an idea?<br /><span>Let’s make it real.</span></motion.h2>
      <p className="contact-lead">I’m open to software engineering roles, meaningful collaborations, and conversations about building useful products.</p>
      <a className="contact-email" href="mailto:Akilaudantha09@gmail.com">Akilaudantha09@gmail.com <FaArrowRight /></a>
      <div className="contact-meta">
        <a href="tel:+94750393013"><HiOutlinePhone /> +94 75 039 3013</a>
        <a href="/Akila_Perera_CV.pdf" download><FaDownload /> Download résumé</a>
        <a href="https://github.com/Akilaudantha" target="_blank" rel="noreferrer"><FaGithub /> GitHub</a>
        <a href="https://www.linkedin.com/in/akila-perera-43a830245" target="_blank" rel="noreferrer"><FaLinkedinIn /> LinkedIn</a>
      </div>
      <footer><span>© {new Date().getFullYear()} Akila Udantha</span><span>Designed & built with intent.</span><a href="#home">Back to top ↑</a></footer>
    </div>
  </section>
);

export default Contact;
