// Slider.jsx
import React, { useState, useEffect, useRef } from "react";

import "./Slider.scss";

const slides = [
  {
    image:
      "https://avatars.mds.yandex.net/i?id=c00f06f4126fc93dd8a2956ddbc86209_l-5543540-images-thumbs&n=13",
    title: "Промышленные роботы",
    description: "Автоматизация производственных процессов",
  },
  {
    image:
      "https://avatars.mds.yandex.net/i?id=c00f06f4126fc93dd8a2956ddbc86209_l-5543540-images-thumbs&n=13",
    title: "Искусственный интеллект",
    description: "Системы машинного обучения",
  },
  {
    image:
      "https://avatars.mds.yandex.net/i?id=c00f06f4126fc93dd8a2956ddbc86209_l-5543540-images-thumbs&n=13",
    title: "Интернет вещей",
    description: "Умные устройства и сети",
  },
  {
    image:
      "https://avatars.mds.yandex.net/i?id=c00f06f4126fc93dd8a2956ddbc86209_l-5543540-images-thumbs&n=13",
    title: "Инновации",
    description: "Современные технологические решения",
  },
];

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const intervalRef = useRef(null);

  // Анимация появления
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  // Авто-слайд
  useEffect(() => {
    startAutoSlide();
    return () => clearInterval(intervalRef.current);
  }, []);

  const startAutoSlide = () => {
    intervalRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
  };

  const resetAutoSlide = () => {
    clearInterval(intervalRef.current);
    startAutoSlide();
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
    resetAutoSlide();
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    resetAutoSlide();
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    resetAutoSlide();
  };

  return (
    <section className={`slider-section visible`}>
      <div className="container">
        <div className="section-header">
          <h2>Наши технологии</h2>
          <p>Современные решения для будущего</p>
        </div>
      </div>

      <div className="slider-container">
        <div className="slider-main">
          {/* Основной слайд */}
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

          {/* Миниатюры */}
          <div className="slider-thumbnails">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`thumbnail ${index === currentSlide ? "active" : ""}`}
                onClick={() => goToSlide(index)}
              >
                <img src={slide.image} alt={slide.title} />
                <div className="thumbnail-overlay">
                  <span>{slide.title}</span>
                </div>
              </div>
            ))}
          </div>


          <div className="slider-arrows">
            <button className="arrow prev" onClick={prevSlide}>
              <i className="fas fa-chevron-left"></i>
            </button>
            <button className="arrow next" onClick={nextSlide}>
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>


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
