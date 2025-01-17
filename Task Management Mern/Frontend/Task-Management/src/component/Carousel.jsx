import { useEffect, useRef } from "react";
import './Carousel.css';
 


function carousel() {
   const carouselRef = useRef(null);
    let position = 0;
    const speed = useRef(0.5);
  
    const moveCarousel = () => {
      position -= speed.current;
      if (position < -320) {
        position = 0;
        carouselRef.current.appendChild(carouselRef.current.firstElementChild);
      }
      carouselRef.current.style.transform = `rotate(-5deg) translateX(${position}px)`;
      requestAnimationFrame(moveCarousel);
    };
  
    useEffect(() => {
      moveCarousel();
      const carousel = carouselRef.current;
      const handleMouseEnter = () => speed.current = 0;
      const handleMouseLeave = () => speed.current = 0.5;
      carousel.addEventListener('mouseenter', handleMouseEnter);
      carousel.addEventListener('mouseleave', handleMouseLeave);
      return () => {
        carousel.removeEventListener('mouseenter', handleMouseEnter);
        carousel.removeEventListener('mouseleave', handleMouseLeave);
      };
    }, []);
  
    return (
      <div className="carousel-wrapper mt-16">
        <div className="carousel-container">
          <div className="carousel-track" ref={carouselRef}>
            <div className="carousel-card">
              <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80" alt="Business" />
            </div>
            <div className="carousel-card">
              <img src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&q=80" alt="Creative" />
            </div>
            <div className="carousel-card">
              <img src="https://images.unsplash.com/photo-1554774853-aae0a22c8aa4?w=800&q=80" alt="Outdoor" />
            </div>
            <div className="carousel-card">
              <img src="https://images.unsplash.com/photo-1542744094-24638eff58bb?w=800&q=80" alt="Wellness" />
            </div>
            <div className="carousel-card">
              <img src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=800&q=80" alt="Technology" />
            </div>
            <div className="carousel-card">
              <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&q=80" alt="Lifestyle" />
            </div>
          </div>
        </div>
      </div>
    );
}

export default carousel
