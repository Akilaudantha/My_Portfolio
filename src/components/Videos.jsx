import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FaArrowLeft, FaArrowRight, FaYoutube } from 'react-icons/fa';

const videos = ['BRcFEWH73Uw', '7lyfu5g96kw', '5EQ1eGblRY0', 'bU8YaxhniV8', 'RBBFD_iMzW8'];

const Videos = () => {
  const [index, setIndex] = useState(0);
  const move = (step) => setIndex((current) => (current + step + videos.length) % videos.length);

  return (
    <section id="videos" className="section-container videos-section">
      <div className="section-heading split-heading"><div><p className="section-kicker">05 / Knowledge</p><h2>Code explained.<br /><span>Ideas shared.</span></h2></div><div className="video-heading-copy"><p>Tutorials and coding guides for the next generation of developers.</p><a href="https://youtube.com/@cjwakila?si=p5ZhhhscvpFTOt80" target="_blank" rel="noreferrer">Visit the channel <FaYoutube /></a></div></div>
      <div className="video-stage">
        <div className="video-count"><strong>{String(index + 1).padStart(2, '0')}</strong><span>/ {String(videos.length).padStart(2, '0')}</span></div>
        <AnimatePresence mode="wait">
          <motion.div className="video-frame" key={videos[index]} initial={{ opacity: 0, y: 30, scale: 0.97 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: -20, scale: 0.98 }} transition={{ duration: 0.45 }}>
            <iframe src={`https://www.youtube.com/embed/${videos[index]}`} title={`Coding Journey with Akila video ${index + 1}`} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen loading="lazy" />
          </motion.div>
        </AnimatePresence>
        <div className="video-controls"><button onClick={() => move(-1)} aria-label="Previous video"><FaArrowLeft /></button><button onClick={() => move(1)} aria-label="Next video"><FaArrowRight /></button></div>
      </div>
    </section>
  );
};

export default Videos;
