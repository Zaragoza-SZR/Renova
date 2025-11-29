    import React, { useState, useEffect } from 'react';
    import './Team.css';

    const Team: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);
    const teamMembers = [
        {
        photo: "https://repository-images.githubusercontent.com/351213727/550a3600-8dbd-11eb-9c4a-c6b084778320", // Добавьте реальные фото или placeholder
        name: "Алексей Петров",
        role: "Главный инженер"
        },
        {
        photo: "https://nypost.com/wp-content/uploads/sites/2/2024/06/jordan-barrett-attends-amfar-cannes-82517478.jpg?resize=90",
        name: "Орцы Даудович", 
        role: "(его фото честно)"
        },
        {
        photo: "https://dit.urfu.ru/fileadmin/user_upload/site_15560/blog/programmer1.jpg",
        name: "Крутой человек очень",
        role: "Разработчик ПО"
        }
    ];

    useEffect(() => {
        const timer = setTimeout(() => {
        setIsVisible(true);
        }, 500);
        return () => clearTimeout(timer);
    }, []);

    return (
        <section className={`team ${isVisible ? 'visible' : ''}`} id="team">
        <div className="container">
            <div className="section-title">
            <h2>Энтузиасты своего дела</h2>
            </div>
            <div className="team-members">
            {teamMembers.map((member, index) => (
                <div className="team-member" key={index}>
                <div className="member-photo">
                    <img src={member.photo} alt={member.name} />
                    <div className="photo-placeholder">
                    <i className="fas fa-user"></i>
                    </div>
                </div>
                <h3 className="member-name">{member.name}</h3>
                <p className="member-role">{member.role}</p>
                </div>
            ))}
            </div>
        </div>
        </section>
    );
    };

    export default Team;