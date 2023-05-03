import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";


// import ImageSlider from './ImageSlider';
// import { motion } from "framer-motion";


// const Gallery = () => {
//     const slides = [
//             {url: 'https://images.unsplash.com/photo-1546768292-fb12f6c92568?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'},            
//             {url: 'https://images.unsplash.com/photo-1501446529957-6226bd447c46?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1489&q=80'},
//             {url: 'https://images.unsplash.com/photo-1483729558449-99ef09a8c325?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80'},            
//             {url: 'https://images.unsplash.com/photo-1475189778702-5ec9941484ae?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1351&q=80'},
//             {url: 'https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80'}        
//         ];

  

//     return (
//         <motion.div
//             initial={{opacity: 0}}
//             animate={{opacity: 1}}
//             exit={{opacity: 0, transition: {duration: .01}}}
//         >
//             <h1 class="slideTitle">Gallery</h1>
//             <ImageSlider slides={slides} />
//         </motion.div>
//     )
// }

// export default Gallery

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
