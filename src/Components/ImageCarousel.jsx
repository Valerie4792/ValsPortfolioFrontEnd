import React from 'react'
import { Carousel } from 'react-bootstrap';
import { useState } from 'react';


const ImageCarousel = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
  
    const handleSelect = (selectedIndex) => {
      setCurrentIndex(selectedIndex);
    };
  
    return (
      <div className="carousel-container">
        <Carousel activeIndex={currentIndex} onSelect={handleSelect}>
          {images.map((image, index) => (
            <Carousel.Item key={index} onClick={()=> window.open(images[currentIndex].imageLink)}>
              <img className="d-block w-100" style={{ height: '400px', width:'600px' }}src={image.image} alt={`Slide ${index}`} />
            </Carousel.Item>
          ))}
        </Carousel>
        <div className="description-container">
          <h3 className='description-text'>{images[currentIndex].description}</h3>
        </div>
      </div>
    );
  };
  export default ImageCarousel;