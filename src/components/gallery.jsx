import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";


const Gallery = () => {
  const images = [
    { src: '/pics/bjg.jpg' },
    { src: '/pics/bjg-bg.jpg' },
    { src: '/pics/rock.jpg' },
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
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0, transition: {duration: .01}}}
        class="gallery-container">
    <h1 class="slideTitle">Gallery</h1>
      <img src={images[currentIndex].src} alt="" class="slideshowStyle" />
      <button onClick={handlePrevClick} class="actionsLeft">←</button>
      <button onClick={handleNextClick} class="actionsRight">→</button>
      <div class="gallery-dots">
        {images.map((_, index) => (
          <span
            key={index}
            class={`gallery-dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default Gallery;
