import React, { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link, Navigate } from 'react-router-dom';
import Slider from 'react-slick';
import { fetchNewsEventById, clearCurrentItem } from '../../redux/slices/news';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './newsEvent.scss';

function NewsEventDetail() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { currentItem, loading, error } = useSelector((state) => state.news);

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const mainSliderRef = useRef(null);
  const lightboxSliderRef = useRef(null);

  useEffect(() => {
    if (id) {
      dispatch(fetchNewsEventById(id));
    }
    return () => {
      dispatch(clearCurrentItem());
    };
  }, [dispatch, id]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!lightboxOpen) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') goPrev();
      if (e.key === 'ArrowRight') goNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxOpen]);

  // Ранние возвраты (исправлено)
  if (loading) {
    return (
      <main className="detail-page">
        <div className="container">
          <div className="loading">Загрузка...</div>
        </div>
      </main>
    );
  }

  if (error) {
    return (
      <main className="detail-page">
        <div className="container">
          <div className="error">Ошибка: {error}</div>
        </div>
      </main>
    );
  }

  if (!currentItem) {
    return <Navigate to="/events" replace />;
  }

  const {
    type,
    title,
    date,
    imageUrl,
    fullDescription,
    location,
    time,
    gallery = []
  } = currentItem;

  const allImages = [imageUrl, ...gallery].filter(Boolean);

  const openLightbox = (index) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = '';
  };

  const goPrev = () => {
    if (lightboxSliderRef.current) lightboxSliderRef.current.slickPrev();
  };

  const goNext = () => {
    if (lightboxSliderRef.current) lightboxSliderRef.current.slickNext();
  };

  const goToSlide = (index) => {
    if (lightboxSliderRef.current) lightboxSliderRef.current.slickGoTo(index);
    setLightboxIndex(index);
  };

  // Кастомные стрелки для основного слайдера
  const SamplePrevArrow = (props) => (
    <div className={props.className} style={{ ...props.style, display: 'flex' }} onClick={props.onClick}>
      <i className="fas fa-chevron-left"></i>
    </div>
  );

  const SampleNextArrow = (props) => (
    <div className={props.className} style={{ ...props.style, display: 'flex' }} onClick={props.onClick}>
      <i className="fas fa-chevron-right"></i>
    </div>
  );

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    adaptiveHeight: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    customPaging: (i) => (
      <div className="custom-dot">
        <img src={allImages[i]} alt={`thumb-${i}`} />
      </div>
    ),
  };

  const lightboxSliderSettings = {
    initialSlide: lightboxIndex,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    beforeChange: (oldIndex, newIndex) => setLightboxIndex(newIndex),
  };

  return (
    <main className="detail-page">
      <div className="container">
        <div className="back-link">
          <Link to="/events">
            <i className="fas fa-arrow-left"></i> Назад к списку
          </Link>
        </div>

        <article className="detail-content">
          <div className="detail-header">
            <span className={`type-badge ${type === 'event' ? 'event' : 'news'}`}>
              {type === 'event' ? 'Мероприятие' : 'Новость'}
            </span>
            <h1>{title}</h1>
            <div className="meta">
              <span>
                <i className="fas fa-calendar-alt"></i> {date}
              </span>
              {location && (
                <span>
                  <i className="fas fa-map-marker-alt"></i> {location}
                </span>
              )}
              {time && (
                <span>
                  <i className="fas fa-clock"></i> {time}
                </span>
              )}
            </div>
          </div>

          {allImages.length > 0 && (
            <div className="main-slider-wrapper">
              <Slider ref={mainSliderRef} {...sliderSettings}>
                {allImages.map((img, idx) => (
                  <div key={idx} className="slider-image">
                    <img
                      src={img}
                      alt={`${title} - ${idx + 1}`}
                      onClick={() => openLightbox(idx)}
                    />
                  </div>
                ))}
              </Slider>
            </div>
          )}

          <div className="description">
            <p>{fullDescription}</p>
          </div>
        </article>
      </div>

      {/* Лайтбокс с миниатюрами справа */}
      {lightboxOpen && (
        <div className="lightbox" onClick={closeLightbox}>
          <div className="lightbox-container" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={closeLightbox}>&times;</button>

            <div className="lightbox-main">
              <Slider ref={lightboxSliderRef} {...lightboxSliderSettings}>
                {allImages.map((img, idx) => (
                  <div key={idx} className="lightbox-slide">
                    <img src={img} alt={`full-${idx}`} />
                  </div>
                ))}
              </Slider>
              <button className="lightbox-arrow prev" onClick={goPrev}>
                <i className="fas fa-chevron-left"></i>
              </button>
              <button className="lightbox-arrow next" onClick={goNext}>
                <i className="fas fa-chevron-right"></i>
              </button>
            </div>

            <div className="lightbox-thumbnails">
              {allImages.map((img, idx) => (
                <div
                  key={idx}
                  className={`thumbnail-item ${idx === lightboxIndex ? 'active' : ''}`}
                  onClick={() => goToSlide(idx)}
                >
                  <img src={img} alt={`thumb-${idx}`} />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

export default NewsEventDetail;