import React, { useState, useEffect } from 'react';
import './Header.css';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(false);

  // Показываем header после загрузки страницы
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsHeaderVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Функция для плавного скролла
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    closeMenu();
    
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <header id="mainHeader" className={isHeaderVisible ? 'visible' : ''}>
      <div className="container header-container">
        <a href="#" className="logo" onClick={(e) => handleSmoothScroll(e, '#mainHero')}>
          <div className="logo-img">
            {/* ИСПРАВЛЕННЫЙ ПУТЬ */}
            <img src="/Logo_circle.png" alt="Логотип" />
          </div>
          Рен<span>овация</span>
        </a>
        
        <button className="mobile-menu-btn" onClick={toggleMenu}>
          <i className="fas fa-bars"></i>
        </button>
        
        <nav>
          <ul className={isMenuOpen ? 'active' : ''}>
            <li><a href="#" onClick={(e) => handleSmoothScroll(e, '#mainHero')}>Главная</a></li>
            <li><a href="#about" onClick={(e) => handleSmoothScroll(e, '#about')}>О нас</a></li>
            <li><a href="#projects" onClick={(e) => handleSmoothScroll(e, '#projects')}>Проекты</a></li>
            <li><a href="#team" onClick={(e) => handleSmoothScroll(e, '#team')}>Команда</a></li>
            <li><a href="#news" onClick={(e) => handleSmoothScroll(e, '#news')}>Новости</a></li>
            <li><a href="#contact" className="btn btn-primary" onClick={(e) => handleSmoothScroll(e, '#contact')}>Связаться</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;