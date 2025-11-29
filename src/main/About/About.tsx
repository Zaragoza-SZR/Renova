import React, { useState, useEffect } from 'react';
import './About.css';

const About: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300); // Задержка для последовательной анимации
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className={`about ${isVisible ? 'visible' : ''}`} id="about">
      <div className="container">
        <div className="section-title">
          <h2>Наша философия</h2>
        </div>
        <div className="principles">
          <div className="principle-card principle-1">
            <div className="principle-icon">
              <i className="fas fa-bolt"></i>
            </div>
            <h3>Инновации</h3>
            <div className="principle-line"></div>
            <p>Мы не боимся сложных задач и ищем нестандартные пути для их решения. Наш подход сочетает творчество и техническую экспертизу.</p>
          </div>
          <div className="principle-card principle-2">
            <div className="principle-icon">
              <i className="fas fa-puzzle-piece"></i>
            </div>
            <h3>Команда</h3>
            <div className="principle-line"></div>
            <p>Сила — в нашем единстве. Каждый вклад важен для общего результата. Мы ценим разнообразие навыков и перспектив.</p>
          </div>
          <div className="principle-card principle-3">
            <div className="principle-icon">
              <i className="fas fa-flag-checkered"></i>
            </div>
            <h3>Результат</h3>
            <div className="principle-line"></div>
            <p>Мы нацелены на достижение измеримых и значимых целей в каждом проекте. Качество и эффективность — наши приоритеты.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;