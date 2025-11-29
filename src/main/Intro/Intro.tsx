// main/Intro/Intro.tsx
import React, { useEffect, useState } from 'react';
import './Intro.css';

const Intro: React.FC = () => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(false);
        }, 3500);

        return () => clearTimeout(timer);
    }, []);

    if (!isVisible) return null;

    return (
        <div className="intro-overlay">
            <div className="intro-container">
                <img src="/Logo_circle.png" alt="Логотип Реновация" className="intro-logo" />
                <h1 className="intro-title">Реновация</h1>
                <p className="intro-subtitle">Инновации в робототехнике</p>
            </div>
        </div>
    );
};

export default Intro;