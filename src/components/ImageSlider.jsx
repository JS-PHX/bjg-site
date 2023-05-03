// import React, { useCallback, useEffect, useRef, useState } from 'react';


// const ImageSlider = ({ slides }) => {
//     const timerRef = useRef(null)
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const divStyles = {
//     height: `90%`,
//     width: `100%`, 
//     padding: `1rem`,
//     marginBottom: `3rem`,
//   }  
    
//   const slideStyles = {
//     // width: `75%`,
//     // height: `100%`,
//     // backgroundPosition: `center`,
//     // backgroundSize: `cover`, 
//     // margin: `auto`,
//     backgroundImage: `url(${slides[currentIndex].url})`,
//     // zIndex: `-1`,
//     // borderRadius: `10px`
//   }


//   const goToPrevious = () => {
//     const isFirstSlide = currentIndex === 0;
//     const newIndex = isFirstSlide ? slides.length - 1: currentIndex - 1
//     setCurrentIndex(newIndex)
    
//   }

//   const goToNext = useCallback(() => {
//     const isLastSlide = currentIndex === slides.length -1
//     const newIndex = isLastSlide ? 0: currentIndex + 1
//     setCurrentIndex(newIndex)
//   }, [currentIndex, slides])

//   const goToSlide = (slideIndex) => {
//     setCurrentIndex(slideIndex)
//   }

// useEffect(() => {
//     if (timerRef.current) {
//         clearTimeout(timerRef.current)
//     }
//     timerRef.current = setTimeout(() => {
//         goToNext()
//     }, 3000)
    
//     return () => clearTimeout(timerRef.current)
// }, [goToNext])


// return(
//     <div style={divStyles}>
//         <div class='actionsLeft' onClick={goToPrevious}>◄</div>
//         <div class='actionsRight' onClick={goToNext}>►</div>
//         <div class="slideshowStyle" style={slideStyles}></div>
//         <div class='dotContainer'>
//             {slides.map((slide, slideIndex) => (
//                 <div class='dotStyles' key={slideIndex} onClick={() => goToSlide(slideIndex)}>•</div>
//                 ))}
//         </div>
//     </div>
// )
// }
// export default ImageSlider;
