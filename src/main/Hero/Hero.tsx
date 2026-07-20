import React, { useState, useEffect } from 'react';
import './Hero.css';

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  // Функция для плавного скролла
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section className={`hero ${isVisible ? 'visible' : ''}`} id="mainHero">
      <div className="container hero-content">
        <div className="hero-text">
          <h1>Мы — команда <span>"Реновация"</span></h1>
          <p>Создаем будущее, обновляя настоящее. Инженерные решения, робототехника и инновации для завтрашнего дня.</p>
          <div className="hero-buttons">
            <a 
              href="#projects" 
              className="btn btn-primary"
              onClick={(e) => handleSmoothScroll(e, '#projects')}
            >
              Наши проекты
            </a>
            <a 
              href="#about" 
              className="btn btn-secondary"
              onClick={(e) => handleSmoothScroll(e, '#about')}
            >
              Узнать больше
            </a>
          </div>
        </div>
        <div className="hero-visual">
          <div className="robot-model">
            <div className="robot-inner">
              <div className="robot-core">
                <img src="/Logo_circle.png" alt="Робот" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;