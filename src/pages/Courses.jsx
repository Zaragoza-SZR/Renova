import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Pages.scss'; // стили
import logo from '../assets/Logo_circle.png'; // путь к логотипу (внутри src)

// Данные курсов с весами для подбора
const coursesData = [
  {
    id: 1,
    icon: 'fab fa-python',
    title: 'Программирование на Python',
    duration: '1 год',
    description:
      'Изучите один из самых популярных языков программирования. Начните с основ и перейдите к созданию сложных приложений, работая с данными, веб-разработкой и автоматизацией.',
    features: [
      'Основы синтаксиса Python',
      'Работа с данными и файлами',
      'Веб-разработка с Flask/Django',
      'Автоматизация задач',
    ],
    level: 'Для начинающих',
    weights: {
      age: { child: 0, teen: 8, young: 10, adult: 9 },
      experience: { none: 8, basic: 10, medium: 7, advanced: 5 },
      goal: { hobby: 6, career: 10, projects: 8, games: 9 },
    },
  },
  {
    id: 2,
    icon: 'fas fa-robot',
    title: 'Основы робототехники',
    duration: '1 год',
    description:
      'Погрузитесь в мир роботов: от сборки простых механизмов до программирования автономных систем. Практические проекты на основе Arduino и Raspberry Pi.',
    features: [
      'Принципы работы роботов',
      'Программирование микроконтроллеров',
      'Датчики и исполнительные механизмы',
      'Автономные системы навигации',
    ],
    level: 'Для начинающих',
    weights: {
      age: { child: 2, teen: 10, young: 8, adult: 6 },
      experience: { none: 5, basic: 10, medium: 8, advanced: 6 },
      goal: { hobby: 8, career: 7, projects: 10, games: 5 },
    },
  },
  {
    id: 3,
    icon: 'fas fa-microchip',
    title: 'Практическая электроника',
    duration: '1 год',
    description:
      'Научитесь работать с электронными компонентами, проектировать и собирать схемы. От простых цепей до программируемых устройств на микроконтроллерах.',
    features: [
      'Основы электроники и схемотехники',
      'Работа с паяльным оборудованием',
      'Проектирование печатных плат',
      'Создание собственных устройств',
    ],
    level: 'Для начинающих',
    weights: {
      age: { child: 1, teen: 6, young: 9, adult: 10 },
      experience: { none: 3, basic: 7, medium: 10, advanced: 8 },
      goal: { hobby: 7, career: 8, projects: 10, games: 4 },
    },
  },
  {
    id: 4,
    icon: 'fas fa-gamepad',
    title: 'Программирование в Scratch',
    duration: '1 год',
    description:
      'Визуальное программирование для детей и начинающих. Создавайте игры, анимации и интерактивные истории, изучая основы алгоритмического мышления.',
    features: [
      'Основы алгоритмического мышления',
      'Создание игр и анимаций',
      'Работа с переменными и циклами',
      'Разработка собственных проектов',
    ],
    level: 'Для детей 8-14 лет',
    weights: {
      age: { child: 10, teen: 5, young: 1, adult: 0 },
      experience: { none: 10, basic: 8, medium: 3, advanced: 1 },
      goal: { hobby: 9, career: 2, projects: 4, games: 10 },
    },
  },
  {
    id: 5,
    icon: 'fas fa-laptop-code',
    title: 'Цифровая грамотность',
    duration: '3 месяца',
    description:
      'Интенсивный курс по основам цифровых технологий. Навыки работы с офисными программами, безопасность в интернете, основы программирования и работа с данными.',
    features: [
      'Основы компьютерной грамотности',
      'Безопасность в интернете',
      'Офисные программы (Word, Excel, PowerPoint)',
      'Основы программирования и алгоритмов',
    ],
    level: 'Для всех возрастов',
    weights: {
      age: { child: 7, teen: 8, young: 7, adult: 9 },
      experience: { none: 10, basic: 8, medium: 5, advanced: 3 },
      goal: { hobby: 8, career: 5, projects: 6, games: 4 },
    },
  },
];

const Courses = () => {
  const [menuActive, setMenuActive] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [answers, setAnswers] = useState({
    age: null,
    experience: null,
    goal: null,
  });
  const [selectedOption, setSelectedOption] = useState(null);
  const [recommendedCourse, setRecommendedCourse] = useState(null);

  const toggleMenu = () => setMenuActive(!menuActive);
  const handleLinkClick = () => setMenuActive(false);

  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    const target = document.querySelector(targetId);
    if (target) {
      window.scrollTo({ top: target.offsetTop - 80, behavior: 'smooth' });
    }
  };

  const handleOptionClick = (value) => setSelectedOption(value);

  const nextStep = () => {
    if (!selectedOption) {
      alert('Пожалуйста, выберите вариант ответа');
      return;
    }

    if (currentStep === 1) {
      setAnswers({ ...answers, age: selectedOption });
    } else if (currentStep === 2) {
      setAnswers({ ...answers, experience: selectedOption });
    } else if (currentStep === 3) {
      setAnswers({ ...answers, goal: selectedOption });
    }

    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
      setSelectedOption(null);
    } else {
      setCurrentStep(4);
    }
  };

  const prevStep = () => {
    setCurrentStep(currentStep - 1);
    setSelectedOption(null);
  };

  const restartQuiz = () => {
    setAnswers({ age: null, experience: null, goal: null });
    setCurrentStep(1);
    setSelectedOption(null);
    setRecommendedCourse(null);
  };

  // Логика подбора курса на основе весов
  useEffect(() => {
    if (currentStep === 4) {
      const { age, experience, goal } = answers;

      // Функция подсчёта рейтинга для курса
      const calculateRating = (course) => {
        const ageWeight = course.weights.age[age] || 0;
        const expWeight = course.weights.experience[experience] || 0;
        const goalWeight = course.weights.goal[goal] || 0;
        return ageWeight + expWeight + goalWeight;
      };

      // Находим курс с максимальным рейтингом
      let bestCourse = null;
      let maxRating = -1;

      coursesData.forEach((course) => {
        const rating = calculateRating(course);
        if (rating > maxRating) {
          maxRating = rating;
          bestCourse = course;
        }
      });

      setRecommendedCourse(bestCourse);

      // Плавный скролл к результату
      setTimeout(() => {
        const resultElement = document.getElementById('quizResult');
        if (resultElement) {
          resultElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 300);
    }
  }, [currentStep, answers]);

  // Intersection Observer для анимации появления
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const elements = document.querySelectorAll(
      '.course-card, .courses-section, .quiz-section'
    );
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const progressWidth = ((currentStep - 1) / 3) * 100;

  return (
    <>

      {/* Hero */}
      <section className="courses-hero">
        <div className="container">
          <h1>Курсы по <span>робототехнике</span> и программированию</h1>
          <p>Практическое обучение от команды "Реновация". Получите современные навыки в робототехнике, программировании и электронике, которые будут востребованы в будущем.</p>
          <a href="#quiz" className="btn btn-primary" onClick={(e) => handleSmoothScroll(e, '#quiz')}>
            Пройти тест и подобрать курс
          </a>
        </div>
      </section>

      {/* Секция курсов */}
      <section className="courses-section" id="courses">
        <div className="container">
          <div className="section-title">
            <h2>Наши курсы</h2>
            <p>Выберите направление, которое вас интересует</p>
          </div>

          <div className="courses-grid">
            {coursesData.map((course) => (
              <div className="course-card" key={course.id}>
                <div className="course-header">
                  <div className="course-icon">
                    <i className={course.icon}></i>
                  </div>
                  <div className="course-title">
                    <h3>{course.title}</h3>
                    <div className="course-duration">
                      <i className="far fa-clock"></i> {course.duration}
                    </div>
                  </div>
                </div>
                <div className="course-content">
                  <p className="course-description">{course.description}</p>
                  <div className="course-features">
                    <h4>Что вы изучите:</h4>
                    <ul>
                      {course.features.map((feature, idx) => (
                        <li key={idx}><i className="fas fa-check"></i> {feature}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="course-level">{course.level}</div>
                </div>
                <div className="course-footer">
                  <a href="#quiz" className="btn btn-primary" onClick={(e) => handleSmoothScroll(e, '#quiz')}>
                    Подобрать курс
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Тест-подбор */}
      <section className="quiz-section" id="quiz">
        <div className="container">
          <div className="section-title">
            <h2>Подбор подходящего курса</h2>
            <p>Ответьте на 3 вопроса, и мы подберем для вас оптимальный курс</p>
          </div>

          <div className="quiz-container">
            <div className="quiz-header">
              <h3>Тест по подбору курса</h3>
              <p>Ответьте на вопросы, чтобы мы могли порекомендовать курс, который подходит именно вам</p>
            </div>

            <div className="quiz-progress">
              <div className="quiz-progress-bar" style={{ width: `${progressWidth}%` }}></div>
            </div>

            {/* Шаг 1: Возраст */}
            {currentStep === 1 && (
              <div className="quiz-step active">
                <div className="quiz-question">1. Сколько вам лет?</div>
                <div className="quiz-options">
                  {[
                    { value: 'child', label: 'До 12 лет' },
                    { value: 'teen', label: '13-17 лет' },
                    { value: 'young', label: '18-25 лет' },
                    { value: 'adult', label: 'Старше 25 лет' },
                  ].map((opt) => (
                    <div
                      key={opt.value}
                      className={`quiz-option ${selectedOption === opt.value ? 'selected' : ''}`}
                      onClick={() => handleOptionClick(opt.value)}
                    >
                      {opt.label}
                    </div>
                  ))}
                </div>
                <div className="quiz-navigation">
                  <button className="btn btn-secondary" onClick={nextStep}>Далее →</button>
                </div>
              </div>
            )}

            {/* Шаг 2: Опыт */}
            {currentStep === 2 && (
              <div className="quiz-step active">
                <div className="quiz-question">2. Какой у вас опыт в программировании или робототехнике?</div>
                <div className="quiz-options">
                  {[
                    { value: 'none', label: 'Нет опыта, начинаю с нуля' },
                    { value: 'basic', label: 'Немного знаком с основами' },
                    { value: 'medium', label: 'Имею опыт в одном из направлений' },
                    { value: 'advanced', label: 'Уже имею опыт в нескольких проектах' },
                  ].map((opt) => (
                    <div
                      key={opt.value}
                      className={`quiz-option ${selectedOption === opt.value ? 'selected' : ''}`}
                      onClick={() => handleOptionClick(opt.value)}
                    >
                      {opt.label}
                    </div>
                  ))}
                </div>
                <div className="quiz-navigation">
                  <button className="btn btn-secondary" onClick={prevStep}>← Назад</button>
                  <button className="btn btn-secondary" onClick={nextStep}>Далее →</button>
                </div>
              </div>
            )}

            {/* Шаг 3: Цели */}
            {currentStep === 3 && (
              <div className="quiz-step active">
                <div className="quiz-question">3. Какова ваша основная цель обучения?</div>
                <div className="quiz-options">
                  {[
                    { value: 'hobby', label: 'Для общего развития и хобби' },
                    { value: 'career', label: 'Для будущей профессии и карьеры' },
                    { value: 'projects', label: 'Для решения конкретных задач и проектов' },
                    { value: 'games', label: 'Хочу научиться создавать игры и приложения' },
                  ].map((opt) => (
                    <div
                      key={opt.value}
                      className={`quiz-option ${selectedOption === opt.value ? 'selected' : ''}`}
                      onClick={() => handleOptionClick(opt.value)}
                    >
                      {opt.label}
                    </div>
                  ))}
                </div>
                <div className="quiz-navigation">
                  <button className="btn btn-secondary" onClick={prevStep}>← Назад</button>
                  <button className="btn btn-primary" onClick={nextStep}>Получить результат</button>
                </div>
              </div>
            )}

            {/* Результат */}
            {currentStep === 4 && recommendedCourse && (
              <div className="quiz-result" id="quizResult" style={{ display: 'block' }}>
                <div className="result-icon">
                  <i className="fas fa-robot"></i>
                </div>
                <div className="result-title">Мы подобрали для вас курс!</div>
                <div className="result-course">
                  <h4>{recommendedCourse.title}</h4>
                  <p>{recommendedCourse.description}</p>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
                    <div><strong>Длительность:</strong> {recommendedCourse.duration}</div>
                    <div><strong>Уровень:</strong> {recommendedCourse.level}</div>
                  </div>
                </div>

                <div className="result-phone">+7 (495) 123-45-67</div>
                <p>Позвоните нашему оператору для консультации и записи на курс</p>

                <a href="tel:+74951234567" className="btn btn-call">
                  <i className="fas fa-phone-alt"></i> Позвонить оператору
                </a>

                <div className="call-info">
                  <h5><i className="fas fa-clock"></i> Время работы оператора:</h5>
                  <p>Пн-Пт: 9:00-20:00<br />Сб-Вс: 10:00-18:00</p>
                </div>

                <button className="btn btn-secondary" onClick={restartQuiz}>
                  Пройти тест еще раз
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

    </>
  );
};

export default Courses;