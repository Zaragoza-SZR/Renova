import React, { useState, useEffect } from 'react';
import './Slider.css';

const Slider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const slides = [
    {
      image: "../usefull.jpg",
      title: "Промышленные роботы",
      description: "Автоматизация производственных процессов"
    },
    {
      image: "../usefull2.jpg", 
      title: "Искусственный интеллект",
      description: "Системы машинного обучения"
    },
    {
      image: "../usefull.jpg",
      title: "Интернет вещей",
      description: "Умные устройства и сети"
    },
    {
      image: "../usefull2.jpg",
      title: "Инновации",
      description: "Современные технологические решения"
    },
    {
      image: "../usefull.jpg",
      title: "Интернет вещей",
      description: "Умные устройства и сети"
    },
    {
      image: "../usefull2.jpg",
      title: "Инновации",
      description: "Современные технологические решения"
    },{
      image: "../usefull.jpg",
      title: "Интернет вещей",
      description: "Умные устройства и сети"
    },
    {
      image: "../usefull2.jpg",
      title: "Инновации",
      description: "Современные технологические решения"
    }
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className={`slider-section ${isVisible ? 'visible' : ''}`}>
      <div className="container">
        <div className="section-header">
          <h2>Наши технологии</h2>
          <p>Современные решения для будущего</p>
        </div>
      </div>

      <div className="slider-container">
        <div className="slider-main">
          {/* Основной слайдер с большой картинкой */}
          <div className="main-slide">
            <img 
              src={slides[currentSlide].image} 
              alt={slides[currentSlide].title}
              className="main-image"
            />
            <div className="slide-info">
              <h3>{slides[currentSlide].title}</h3>
              <p>{slides[currentSlide].description}</p>
            </div>
          </div>

          {/* Миниатюры для навигации */}
          <div className="slider-thumbnails">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`thumbnail ${index === currentSlide ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
              >
                <img src={slide.image} alt={slide.title} />
                <div className="thumbnail-overlay">
                  <span>{slide.title}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Навигационные стрелки */}
          <div className="slider-arrows">
            <button className="arrow prev" onClick={prevSlide}>
              <i className="fas fa-chevron-left"></i>
            </button>
            <button className="arrow next" onClick={nextSlide}>
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>

          {/* Индикатор слайдов */}
          <div className="slider-indicator">
            <span className="current-slide">{currentSlide + 1}</span>
            <span className="divider">/</span>
            <span className="total-slides">{slides.length}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Slider;