import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaYoutube, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Videos = () => {
  // Add your YouTube video direct links here
  // Examples: https://www.youtube.com/watch?v=dQw4w9WgXcQ OR https://youtu.be/dQw4w9WgXcQ
  const videoLinks = [
    'https://youtu.be/BRcFEWH73Uw',
    'https://youtu.be/7lyfu5g96kw',
    'https://youtu.be/5EQ1eGblRY0',
    'https://youtu.be/bU8YaxhniV8',
    'https://youtu.be/RBBFD_iMzW8'
  ];

  // Helper function to extract the video ID from any standard YouTube URL
  const getYouTubeId = (url) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  };

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    // Auto-slide every 5 seconds, unless the user is hovering over the videos
    if (isHovered) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % videoLinks.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [isHovered, videoLinks.length]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % videoLinks.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + videoLinks.length) % videoLinks.length);
  };

  return (
    <section id="videos" className="section-container">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        My <span className="gradient-text">YouTube</span> Videos
      </motion.h2>

      <div style={{ textAlign: 'center', marginBottom: '3rem', padding: '0 clamp(1rem, 5vw, 2rem)' }}>
        <p style={{ color: 'var(--text-secondary)', fontSize: 'clamp(0.95rem, 4vw, 1.1rem)', maxWidth: 'clamp(280px, 90vw, 700px)', margin: '0 auto 1rem auto', lineHeight: '1.6' }}>
          Check out my latest tutorials and coding guides on my channel <strong style={{ whiteSpace: 'nowrap' }}>Coding Journey with Akila</strong>.
        </p>
        <a
          href="https://youtube.com/@cjwakila?si=p5ZhhhscvpFTOt80"
          target="_blank"
          rel="noreferrer"
          className="btn btn-outline"
          style={{ display: 'inline-flex', gap: '0.5rem', borderColor: '#ff0000', color: '#ff0000', padding: 'clamp(0.7rem, 2vw, 1rem) clamp(1rem, 3vw, 1.5rem)' }}
        >
          <FaYoutube size={20} /> Subscribe to Channel
        </a>
      </div>

      <div
        style={{
          position: 'relative',
          maxWidth: '1600px',
          margin: '0 auto',
          padding: '0 clamp(20px, 5vw, 40px)' // Space for arrows, responsive
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Left Arrow */}
        <button
          onClick={handlePrev}
          style={{
            position: 'absolute',
            left: 0,
            top: '50%',
            transform: 'translateY(-50%)',
            background: 'var(--glass-bg)',
            border: '1px solid var(--glass-border)',
            color: 'white',
            width: 'clamp(32px, 8vw, 40px)',
            height: 'clamp(32px, 8vw, 40px)',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            zIndex: 10,
            transition: 'all 0.3s',
            fontSize: 'clamp(14px, 4vw, 18px)'
          }}
          onMouseOver={e => e.currentTarget.style.background = 'var(--accent-primary)'}
          onMouseOut={e => e.currentTarget.style.background = 'var(--glass-bg)'}
        >
          <FaChevronLeft />
        </button>

        {/* Carousel Viewport */}
        <div style={{ overflow: 'hidden', borderRadius: '16px' }}>
          <motion.div
            style={{
              display: 'flex',
              width: `${videoLinks.length * 100}%`
            }}
            animate={{ x: `-${currentIndex * (100 / videoLinks.length)}%` }}
            transition={{ type: 'tween', duration: 0.6, ease: 'easeInOut' }}
          >
            {videoLinks.map((link, index) => {
              const videoId = getYouTubeId(link);
              return (
                <div
                  key={index}
                  style={{
                    width: `${100 / videoLinks.length}%`,
                    padding: 'clamp(10px, 3vw, 25px)'
                  }}
                >
                  <div className="glass-panel" style={{ padding: '1.5rem', borderRadius: '16px', boxShadow: '0 10px 30px rgba(0,0,0,0.3)' }}>
                    <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', borderRadius: '8px' }}>
                      {videoId ? (
                        <iframe
                          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                          src={`https://www.youtube.com/embed/${videoId}`}
                          title={`YouTube video player ${index + 1}`}
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        ></iframe>
                      ) : (
                        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#333', color: 'white' }}>
                          Invalid YouTube Link
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>

        {/* Right Arrow */}
        <button
          onClick={handleNext}
          style={{
            position: 'absolute',
            right: 0,
            top: '50%',
            transform: 'translateY(-50%)',
            background: 'var(--glass-bg)',
            border: '1px solid var(--glass-border)',
            color: 'white',
            width: 'clamp(32px, 8vw, 40px)',
            height: 'clamp(32px, 8vw, 40px)',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            zIndex: 10,
            transition: 'all 0.3s',
            fontSize: 'clamp(14px, 4vw, 18px)'
          }}
          onMouseOver={e => e.currentTarget.style.background = 'var(--accent-primary)'}
          onMouseOut={e => e.currentTarget.style.background = 'var(--glass-bg)'}
        >
          <FaChevronRight />
        </button>

        {/* Dots */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginTop: '1.5rem' }}>
          {videoLinks.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              style={{
                width: '10px',
                height: '10px',
                borderRadius: '50%',
                border: 'none',
                background: currentIndex === index ? 'var(--accent-primary)' : 'var(--glass-border)',
                cursor: 'pointer',
                transition: 'background 0.3s'
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Videos;
