import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import NewsEventCard from '../components/EventCard';
import NewsEventCardSkeleton from '../components/Skeleton';
import { fetchNewsEvents } from '../redux/slices/news';

function Events() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { items, loading, error } = useSelector((state) => state.news);

  useEffect(() => {
    if (items.length === 0) {
      dispatch(fetchNewsEvents());
    }
  }, [dispatch, items.length]);

  const handleCardClick = (info) => {
    navigate(info.link);
  };

  // Ошибку оставляем как ранний возврат, тут всё отлично
  if (error) {
    return (
      <main className="events-page">
        <div className="container">
          <div className="section-title">
            <h2>Новости и мероприятия</h2>
          </div>
          <div className="error">Ошибка: {error}</div>
        </div>
      </main>
    );
  }

  return (
    <main className="events-page">
      <div className="container">
        <div className="section-title">
          <h2>Новости и мероприятия</h2>
        </div>
        
        <div className="events-grid">
          {loading
            ? // Пока идет загрузка, создаем массив из 6 скелетонов
              Array.from({ length: 6 }).map((_, index) => (
                <NewsEventCardSkeleton key={index} />
              ))
            : // Когда данные пришли, рендерим реальные карточки
              items.map((item) => (
                <NewsEventCard
                  key={item.id}
                  type={item.type}
                  imageUrl={item.imageUrl}
                  date={item.date}
                  title={item.title}
                  description={item.description}
                  link={item.link}
                  onActionClick={handleCardClick}
                />
              ))}
        </div>
      </div>
    </main>
  );
}

export default Events;