import React from 'react';
import './News.scss'; // Подключаем стили

const newsData = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    alt: "Победа в конкурсе",
    date: "15 июня 2023",
    title: "Победа в конкурсе инновационных проектов",
    description: "Наша команда заняла первое место в международном конкурсе RoboInnovate с проектом автономной системы мониторинга.",
    link: "#"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80",
    alt: "Запуск проекта",
    date: "2 мая 2023",
    title: "Запуск нового исследовательского проекта",
    description: "Мы начинаем сотрудничество с Техническим университетом в области разработки адаптивных роботизированных систем.",
    link: "#"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    alt: "Мастер-класс",
    date: "18 апреля 2023",
    title: "Мастер-класс по робототехнике для школьников",
    description: "Провели образовательное мероприятие для учащихся старших классов, интересующихся современными технологиями.",
    link: "#"
  }
];

const NewsSection = () => {
  return (
    <section className="news" id="news">
      <div className="container">
        <div className="section-title">
          <h2>Новости и события</h2>
        </div>
        <div className="news-articles">
          {newsData.map(item => (
            <article key={item.id} className="news-article">
              <div className="article-image">
                <img src={item.image} alt={item.alt} />
              </div>
              <div className="article-date">{item.date}</div>
              <div className="article-content">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <a href={item.link} className="read-more">
                  Читать далее <i className="fas fa-arrow-right"></i>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;