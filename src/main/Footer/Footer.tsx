    import React, { useState, useEffect } from 'react';
    import './Footer.css';

    const Footer: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [email, setEmail] = useState('');

    useEffect(() => {
        const timer = setTimeout(() => {
        setIsVisible(true);
        }, 100);
        return () => clearTimeout(timer);
    }, []);

    // Функция для плавного скролла
    const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
        e.preventDefault();
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
        targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
        }
    };

    // Обработка формы подписки
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (email) {
        alert(`Спасибо за подписку! Мы отправили подтверждение на ${email}`);
        setEmail('');
        }
    };

    return (
        <footer id="contact" className={isVisible ? 'visible' : ''}>
        <div className="orange-line"></div>
        <div className="container">
            <div className="footer-content">
            <div className="footer-column footer-about">
                <h3>О команде</h3>
                <p>Команда "Реновация" — это коллектив энтузиастов, работающих на стыке инженерии, робототехники и искусственного интеллекта. Мы создаем инновационные решения для сложных задач будущего.</p>
                <div className="social-links">
                <a href="#"><i className="fab fa-vk"></i></a>
                <a href="#"><i className="fab fa-telegram"></i></a>
                <a href="#"><i className="fab fa-youtube"></i></a>
                <a href="#"><i className="fab fa-github"></i></a>
                </div>
            </div>
            <div className="footer-column footer-links">
                <h3>Быстрые ссылки</h3>
                <ul>
                <li><a href="#" onClick={(e) => handleSmoothScroll(e, '#mainHero')}><i className="fas fa-chevron-right"></i> Главная</a></li>
                <li><a href="#about" onClick={(e) => handleSmoothScroll(e, '#about')}><i className="fas fa-chevron-right"></i> О нас</a></li>
                <li><a href="#projects" onClick={(e) => handleSmoothScroll(e, '#projects')}><i className="fas fa-chevron-right"></i> Проекты</a></li>
                <li><a href="#team" onClick={(e) => handleSmoothScroll(e, '#team')}><i className="fas fa-chevron-right"></i> Команда</a></li>
                <li><a href="#news" onClick={(e) => handleSmoothScroll(e, '#news')}><i className="fas fa-chevron-right"></i> Новости</a></li>
                </ul>
            </div>
            <div className="footer-column footer-links">
                <h3>Проекты</h3>
                <ul>
                <li><a href="#projects" onClick={(e) => handleSmoothScroll(e, '#projects')}><i className="fas fa-chevron-right"></i> Автономный робот</a></li>
                <li><a href="#projects" onClick={(e) => handleSmoothScroll(e, '#projects')}><i className="fas fa-chevron-right"></i> Система управления</a></li>
                <li><a href="#projects" onClick={(e) => handleSmoothScroll(e, '#projects')}><i className="fas fa-chevron-right"></i> Платформа мониторинга</a></li>
                <li><a href="#projects" onClick={(e) => handleSmoothScroll(e, '#projects')}><i className="fas fa-chevron-right"></i> Все проекты</a></li>
                </ul>
            </div>
            <div className="footer-column footer-contact">
                <h3>Контакты</h3>
                <p><i className="fas fa-envelope"></i> info@renovation-team.ru</p>
                <p><i className="fas fa-phone"></i> +7 (495) 123-45-67</p>
                <p><i className="fas fa-map-marker-alt"></i> Москва, ул. Техническая, 15</p>
                
                <div className="footer-subscribe">
                <p>Подпишитесь на нашу рассылку</p>
                <form className="subscribe-form" onSubmit={handleSubmit}>
                    <input 
                    type="email" 
                    placeholder="Ваш email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    />
                    <button type="submit"><i className="fas fa-paper-plane"></i></button>
                </form>
                </div>
            </div>
            </div>
            <div className="footer-bottom">
            <p>&copy; 2023 Команда "Реновация". Все права защищены.</p>
            </div>
        </div>
        </footer>
    );
    };

    export default Footer;