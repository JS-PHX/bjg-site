import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

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
      setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    }, 2000);
    return () => clearInterval(intervalId);
  // eslint-disable-next-line react-hooks/exhaustive-deps
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
  {images.map((image, index) => (
    <img
      key={index}
      src={image.src}
      alt=""
      className={`slideshowStyle ${index === currentIndex ? 'active' : ''}`}
    />
  ))}
      <button onClick={handlePrevClick} className="actionsLeft">
        <ChevronLeft size={36} strokeWidth={1.5} />
      </button>
      <button onClick={handleNextClick} className="actionsRight">
        <ChevronRight size={36} strokeWidth={1.5} />
      </button>
</div>
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