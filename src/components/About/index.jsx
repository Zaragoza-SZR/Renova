import React from "react";
import "./About.scss";
import { Link } from "react-router-dom";
import logo from "../../assets/Logo_circle.png";

const About = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="hero visible" id="mainHero">
        <div className="container hero-content">
          <div className="hero-text">
            <h1>
              Мы — команда <span>"Реновация"</span>
            </h1>
            <p>
              Создаем будущее, обновляя настоящее. Инженерные решения,
              робототехника и инновации для завтрашнего дня.
            </p>
            <div className="hero-buttons">
              <Link to="#projects" className="btn btn-primary">
                Наши проекты
              </Link>
              <Link to="#about" className="btn btn-primary" id="primary-blue">
                Узнать больше
              </Link>
            </div>
          </div>
          <div className="hero-visual">
            <div className="robot-model">
              <div className="robot-inner">
                <div
                  className="robot-core"
                  style={{ animation: "rotate 8s linear infinite" }}
                >
                  <img
                    src={logo}
                    alt="Логотип Реновация"
                    style={{ height: "120px" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="about visible" id="about">
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
              <p>
                Мы не боимся сложных задач и ищем нестандартные пути для их
                решения. Наш подход сочетает творчество и техническую
                экспертизу.
              </p>
            </div>
            <div className="principle-card principle-2">
              <div className="principle-icon">
                <i className="fas fa-puzzle-piece"></i>
              </div>
              <h3>Команда</h3>
              <div className="principle-line"></div>
              <p>
                Сила — в нашем единстве. Каждый вклад важен для общего
                результата. Мы ценим разнообразие навыков и перспектив.
              </p>
            </div>
            <div className="principle-card principle-3">
              <div className="principle-icon">
                <i className="fas fa-flag-checkered"></i>
              </div>
              <h3>Результат</h3>
              <div className="principle-line"></div>
              <p>
                Мы нацелены на достижение измеримых и значимых целей в каждом
                проекте. Качество и эффективность — наши приоритеты.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="projects visible" id="projects">
        <div className="container">
          <div className="section-title">
            <h2>Наши разработки</h2>
          </div>
          <div className="project-cards">
            <div className="project-card">
              <div className="project-image">
                <img
                  src="https://avatars.mds.yandex.net/i?id=c00f06f4126fc93dd8a2956ddbc86209_l-5543540-images-thumbs&n=13"
                  alt="Автономный исследовательский робот"
                />
              </div>
              <div className="project-content">
                <div className="project-tags">
                  <span className="project-tag">#Робототехника</span>
                  <span className="project-tag">#Автономные системы</span>
                </div>
                <h3>Автономный исследовательский робот</h3>
                <p>
                  Разработка мобильной платформы для исследования труднодоступных территорий
                  с системой компьютерного зрения.
                </p>
                <a href="#" className="project-link">
                  Подробнее <i className="fas fa-arrow-right"></i>
                </a>
              </div>
            </div>

            <div className="project-card">
              <div className="project-image">
                <img
                  src="https://i.pinimg.com/originals/fc/ea/03/fcea0305c7ad91cb2f67c6b29a9a9e63.jpg"
                  alt="Система адаптивного управления"
                />
              </div>
              <div className="project-content">
                <div className="project-tags">
                  <span className="project-tag">#ИИ</span>
                  <span className="project-tag">#Машинное обучение</span>
                </div>
                <h3>Система адаптивного управления</h3>
                <p>
                  Интеллектуальная система управления промышленными процессами на основе
                  алгоритмов машинного обучения.
                </p>
                <a href="#" className="project-link">
                  Подробнее <i className="fas fa-arrow-right"></i>
                </a>
              </div>
            </div>

            <div className="project-card">
              <div className="project-image">
                <img
                  src="https://i.pinimg.com/originals/69/e0/da/69e0da5952980b76dabcc716497677bb.jpg"
                  alt="Платформа мониторинга городской среды"
                />
              </div>
              <div className="project-content">
                <div className="project-tags">
                  <span className="project-tag">#IoT</span>
                  <span className="project-tag">#Умный город</span>
                </div>
                <h3>Платформа мониторинга городской среды</h3>
                <p>
                  Комплексное решение для сбора и анализа данных о состоянии городской
                  инфраструктуры в реальном времени.
                </p>
                <a href="#" className="project-link">
                  Подробнее <i className="fas fa-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team visible" id="team">
        <div className="container">
          <div className="section-title">
            <h2>Энтузиасты своего дела</h2>
          </div>
          <div className="team-members">
            <div className="team-member">
              <div className="member-photo">
                <img
                  src="https://repository-images.githubusercontent.com/351213727/550a3600-8dbd-11eb-9c4a-c6b084778320"
                  alt="Алексей Петров"
                />
              </div>
              <h3 className="member-name">Алексей Петров</h3>
              <p className="member-role">Главный инженер</p>
            </div>
            <div className="team-member">
              <div className="member-photo">
                <img
                  src="https://nypost.com/wp-content/uploads/sites/2/2024/06/jordan-barrett-attends-amfar-cannes-82517478.jpg?resize=90"
                  alt="Мария Сидорова"
                />
              </div>
              <h3 className="member-name">Орцы Даудович</h3>
              <p className="member-role">(его фото честно)</p>
            </div>
            <div className="team-member">
              <div className="member-photo">
                <img
                  src="https://dit.urfu.ru/fileadmin/user_upload/site_15560/blog/programmer1.jpg"
                  alt="Дмитрий Иванов"
                />
              </div>
              <h3 className="member-name">Крутой человек очень</h3>
              <p className="member-role">Разработчик ПО</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;