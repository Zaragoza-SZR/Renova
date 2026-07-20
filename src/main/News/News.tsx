import React, { useState, useEffect } from 'react';
import './News.css';

const News: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const newsArticles = [
    {
      image: "/usefull2.jpg", // Изменил путь - должно быть от корня public
      date: "15 июня 2023",
      title: "Победа в конкурсе инновационных проектов",
      description: "Наша команда заняла первое место в международном конкурсе RoboInnovate с проектом автономной системы мониторинга."
    },
    {
      image: "/usefull.jpg",
      date: "2 мая 2023", 
      title: "Запуск нового исследовательского проекта",
      description: "Мы начинаем сотрудничество с Техническим университетом в области разработки адаптивных роботизированных систем."
    },
    {
      image: "/usefull2.jpg",
      date: "18 апреля 2023",
      title: "Мастер-класс по робототехнике для школьников",
      description: "Провели образовательное мероприятие для учащихся старших классов, интересующихся современными технологиями."
    }
    
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 700);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className={`news ${isVisible ? 'visible' : ''}`} id="news">
      <div className="container">
        <div className="section-title">
          <h2>Новости и события</h2>
        </div>
        <div className="news-articles">
          {newsArticles.map((article, index) => (
            <div className="news-article" key={index}>
              <div className="article-image">
                <img src={article.image} alt={article.title} />
                <div className="image-placeholder">
                  <i className="fas fa-newspaper"></i>
                </div>
              </div>
              <div className="article-date">{article.date}</div>
              <div className="article-content">
                <h3>{article.title}</h3>
                <p>{article.description}</p>
                <a href="#!" className="read-more">
                  Читать далее <i className="fas fa-arrow-right"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;