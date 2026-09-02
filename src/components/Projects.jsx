import React, { useCallback, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FaChevronLeft, FaChevronRight, FaFigma, FaGithub } from 'react-icons/fa';

const projects = [
  {
    title: 'Student Management System',
    category: 'Web application',
    description: 'A web application for managing student registration, marks, attendance, and academic records in one place.',
    tech: ['HTML', 'CSS', 'PHP', 'JavaScript'],
    icon: FaGithub,
  },
  {
    title: 'E-Commerce Website',
    category: 'Java web application',
    description: 'An online shopping experience with product listings, cart management, and order processing, built for the DEA module.',
    tech: ['Java', 'JSP', 'Servlets', 'MySQL'],
    icon: FaGithub,
  },
  {
    title: 'Class Attendance System',
    category: 'Education platform',
    description: 'A streamlined system that helps teachers record classroom attendance and monitor student participation.',
    tech: ['Java', 'JSP', 'Servlets', 'MySQL'],
    icon: FaGithub,
  },
  {
    title: 'ReadkX',
    category: 'Accessible reading app',
    description: 'A mobile-first reading experience for people with visual and cognitive impairments, guided by inclusive typography, contrast, and UX.',
    tech: ['Dart', 'Flutter', 'Figma'],
    icon: FaFigma,
  },
  {
    title: 'Air Quality Monitoring',
    category: 'Monitoring dashboard',
    description: 'A web system for retrieving and monitoring air-quality data, with administration tools and alert management.',
    tech: ['PHP', 'JavaScript', 'HTML', 'SQL Server'],
    icon: FaGithub,
  },
  {
    title: 'UNIVISION',
    category: 'University guidance app',
    description: 'A Flutter app that helps students compare universities, explore degree programmes, and discover career paths using Z-scores.',
    tech: ['Dart', 'Flutter', 'Firebase', 'Firestore'],
    icon: FaGithub,
  },
];

const Projects = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const touchStart = useRef(null);

  const selectProject = useCallback((nextIndex) => {
    setActiveIndex((currentIndex) => {
      const normalizedIndex = (nextIndex + projects.length) % projects.length;
      if (normalizedIndex !== currentIndex) setDirection(normalizedIndex > currentIndex ? 1 : -1);
      return normalizedIndex;
    });
  }, []);

  const move = useCallback((step) => {
    setDirection(step);
    setActiveIndex((currentIndex) => (currentIndex + step + projects.length) % projects.length);
  }, []);

  const handleTouchEnd = (event) => {
    if (touchStart.current === null) return;
    const distance = event.changedTouches[0].clientX - touchStart.current;
    if (Math.abs(distance) > 45) move(distance > 0 ? -1 : 1);
    touchStart.current = null;
  };

  const project = projects[activeIndex];
  const ProjectIcon = project.icon;

  return (
    <section
      id="projects"
      className="section-container projects-section"
      tabIndex={0}
      onKeyDown={(event) => {
        if (event.key === 'ArrowLeft') {
          event.preventDefault();
          move(-1);
        }
        if (event.key === 'ArrowRight') {
          event.preventDefault();
          move(1);
        }
      }}
    >
      <motion.div className="projects-heading" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
        <p className="projects-eyebrow">04 / Selected work</p>
        <h2 className="section-title">Featured <span className="gradient-text">Projects</span></h2>
        <p className="projects-intro">Explore my work one project at a time. Swipe or use the arrows to rotate the cube.</p>
      </motion.div>

      <div className="project-showcase" onTouchStart={(event) => { touchStart.current = event.touches[0].clientX; }} onTouchEnd={handleTouchEnd}>
        <button className="project-arrow project-arrow--left" onClick={() => move(-1)} aria-label="Previous project"><FaChevronLeft aria-hidden="true" /></button>

        <div className="project-cube-scene" aria-live="polite">
          <AnimatePresence mode="wait" initial={false}>
            <motion.article
              key={project.title}
              className="project-cube-card"
              initial={{ opacity: 0, rotateY: direction * 82, scale: 0.88 }}
              animate={{ opacity: 1, rotateY: 0, scale: 1 }}
              exit={{ opacity: 0, rotateY: direction * -82, scale: 0.88 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
            <span className="cube-edge cube-edge--top" aria-hidden="true" />
            <span className="cube-edge cube-edge--right" aria-hidden="true" />
            <div className="project-number">{String(activeIndex + 1).padStart(2, '0')}</div>
            <div className="project-icon"><ProjectIcon aria-hidden="true" /></div>
            <p className="project-category">{project.category}</p>
            <h3>{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <div className="project-tags" aria-label="Technologies used">
              {project.tech.map((technology) => <span key={technology}>{technology}</span>)}
            </div>
            <a className="project-link" href="https://github.com/Akilaudantha" target="_blank" rel="noreferrer">View GitHub profile <FaGithub aria-hidden="true" /></a>
            </motion.article>
          </AnimatePresence>
        </div>

        <button className="project-arrow project-arrow--right" onClick={() => move(1)} aria-label="Next project"><FaChevronRight aria-hidden="true" /></button>
      </div>

      <div className="project-pagination" aria-label="Choose a project">
        {projects.map((item, index) => (
          <button key={item.title} className={index === activeIndex ? 'is-active' : ''} onClick={() => selectProject(index)} aria-label={`Show project ${index + 1}: ${item.title}`} aria-current={index === activeIndex ? 'true' : undefined}>
            <span>{String(index + 1).padStart(2, '0')}</span>
          </button>
        ))}
      </div>
    </section>
  );
};

export default Projects;
