import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Header.scss";
import logo from "../../assets/Logo_circle.png"

const Header = ({ isVisible }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest("nav") && !e.target.closest(".mobile-menu-btn")) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <header className={`header visible`}>
      <div className="container header-container">
        <Link to="/" className="logo">
          <div className="logo-img">
            <img
              src={logo}
              alt="Логотип"
              style={{ height: "50px" }}
            />
          </div>
          Рен<span>овация</span>
        </Link>

        <button
          className="mobile-menu-btn"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Меню"
        >
          <i className="fas fa-bars"></i>
        </button>

        <nav>
          <ul className={isMenuOpen ? "active" : ""}>
            <li>
              <Link to="/">Главная</Link>
            </li>
            <li>
              <Link to="/courses">Курсы</Link>
            </li>
             <li>
              <Link to="/events">Мероприятия</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
