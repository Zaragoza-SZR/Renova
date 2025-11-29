import React, { useState, useEffect } from 'react';
import './Projects.css';

const Projects: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const projects = [
    {
      image: "../usefull.jpg", // Замените на реальные картинки
      title: "Автономный исследовательский робот",
      description: "Разработка мобильной платформы для исследования труднодоступных территорий с системой компьютерного зрения.",
      tags: ["#Робототехника", "#Автономные системы"]
    },
    {
      image: "../usefull2.jpg",
      title: "Система адаптивного управления",
      description: "Интеллектуальная система управления промышленными процессами на основе алгоритмов машинного обучения.",
      tags: ["#ИИ", "#Машинное обучение"]
    },
    {
      image: "../usefull.jpg",
      title: "Платформа мониторинга городской среды",
      description: "Комплексное решение для сбора и анализа данных о состоянии городской инфраструктуры в реальном времени.",
      tags: ["#IoT", "#Умный город"]
    }
  ];

  return (
    <section className={`projects ${isVisible ? 'visible' : ''}`} id="projects">
      <div className="container">
        <div className="section-title">
          <h2>Наши разработки</h2>
        </div>
        <div className="project-cards">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                {/* <div className="image-placeholder">
                  <i className="fas fa-image"></i>
                  <span>Изображение проекта</span>
                </div> */}
              </div>
              <div className="project-content">
                <div className="project-tags">
                  {project.tags.map((tag, tagIndex) => (
                    <span className="project-tag" key={tagIndex}>{tag}</span>
                  ))}
                </div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <a href="#" className="project-link">
                  Подробнее <i className="fas fa-arrow-right"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;