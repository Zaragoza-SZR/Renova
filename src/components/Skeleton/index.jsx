import React from 'react';

import './skeleton.scss';  // Импортируем стили для скелетона (код ниже)

const NewsEventCardSkeleton = () => {
  return (
    <article className="news-event-card skeleton-card">
      {/* Имитация картинки */}
      <div className="skeleton-card__image skeleton-pulse"></div>
      
      {/* Имитация плашки с датой */}
      <div className="skeleton-card__date skeleton-pulse"></div>
      
      <div className="news-event-card__content">
        {/* Имитация заголовка */}
        <div className="skeleton-card__title skeleton-pulse"></div>
        
        {/* Имитация описания (несколько строк) */}
        <div className="skeleton-card__text-line skeleton-pulse"></div>
        <div className="skeleton-card__text-line skeleton-pulse"></div>
        <div className="skeleton-card__text-line short skeleton-pulse"></div>
        
        {/* Имитация кнопки */}
        <div className="skeleton-card__button skeleton-pulse"></div>
      </div>
    </article>
  );
};

export default NewsEventCardSkeleton;