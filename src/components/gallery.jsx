import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Gallery = () => {
  const images = [
    { src: './pics/bjg.jpg' },
    { src: './pics/bjg-bg.jpg' },
    { src: './pics/rock.jpg' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      handleNextClick();
    }, 2000); // Change the interval duration (in milliseconds) as needed
    return () => clearInterval(intervalId);
  }, [currentIndex]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.01 } }}
      className="gallery-container"
    >
      <h1 className="slideTitle">Gallery</h1>
      <div className="imageWrapper">
        <img src={images[currentIndex].src} alt="" className="slideshowStyle" />
      </div>
      <button onClick={handlePrevClick} className="actionsLeft">
        ←
      </button>
      <button onClick={handleNextClick} className="actionsRight">
        →
      </button>
      <div className="gallery-dots">
        {images.map((_, index) => (
          <span
            key={index}
            className={`gallery-dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default Gallery;
