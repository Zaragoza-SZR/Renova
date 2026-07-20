import React from "react";
import PropTypes from "prop-types";
import "./eventCard.scss";
import { Link } from "react-router-dom";

const NewsEventCard = ({
  type = "news",
  imageUrl,
  date,
  title,
  description,
  link = "#",
  onActionClick,
}) => {
  const isEvent = type === "event";
  const actionText = isEvent ? "Подробнее о мероприятии" : "Читать далее";
  const buttonClass = isEvent ? "event-button" : "news-button";

  return (
    <article className="news-event-card">
      <div className="news-event-card__image-wrapper">
        <img src={imageUrl} alt={title} className="news-event-card__image" />
      </div>
      <Link to={link} className="news-event-card__link">
        <div className="news-event-card__date">{date}</div>
        <div className="news-event-card__content">
          <h3 className="news-event-card__title">{title}</h3>
          <p className="news-event-card__description">{description}</p>
          <button
            className={`news-event-card__action ${buttonClass}`}
            onClick={() => onActionClick?.({ type, title, link })}
          >
            {actionText}
            <i className="fas fa-arrow-right" aria-hidden="true" />
          </button>
        </div>{" "}
      </Link>
    </article>
  );
};

NewsEventCard.propTypes = {
  type: PropTypes.oneOf(["news", "event"]),
  imageUrl: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string,
  onActionClick: PropTypes.func,
};

export default NewsEventCard;
