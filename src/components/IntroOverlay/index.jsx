import React, { useState, useEffect } from "react";
import "./IntroOverlay.scss"; 
import logo from "../../assets/Logo_circle.png";

const IntroOverlay = ({ onComplete }) => {
  const [isLeaving, setIsLeaving] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLeaving(true);
    }, 3500);

    return () => clearTimeout(timer);
  }, []);

  const handleAnimationEnd = () => {
    if (isLeaving) {
      onComplete();
    }
  };

  return (
    <div
      className={`intro-overlay ${isLeaving ? "intro-exit" : ""}`}
      onAnimationEnd={handleAnimationEnd}
    >
      <div className="intro-container">
        <img
          src={logo}
          alt="Логотип Реновация"
          className="intro-logo"
        />
        <h1 className="intro-title">Реновация</h1>
        <p className="intro-subtitle">Инновации в робототехнике</p>
      </div>
    </div>
  );
};

export default IntroOverlay;
