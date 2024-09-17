import React from "react";
import "../styles/Eventcard.css";


const EventCards = ({eventsData , title}) => {
  return (
    <div>
      <section className="light ">
        <div className="relative mx-auto underline-offset-1 underline w-full items-center justify-center flex py-10 pt-10 font-medium p-20 text-5xl">
         {title}
        </div>

        <div className="container py-8 xl:px-40 px-4">
          {eventsData.map((event, index) => (
            <article key={index} className={`postcard light  ${event.color}`}>
              <a className="postcard__img_link" href="#">
                <img
                  className="postcard__img"
                  src={event.imageUrl}
                  alt={event.title}
                />
              </a>
              <div className="postcard__text t-dark">
                <h1 className={`postcard__title ${event.color}`}>
                  <a href="#">{event.title}</a>
                </h1>
                <div className="postcard__subtitle small">
                  <time dateTime={event.date}>
                    <i className="fas fa-calendar-alt mr-2"></i>
                    {event.date}
                  </time>
                  <br />
                  <i className="fas fa-clock mr-2"></i>
                  {event.time}
                </div>
                <div className="postcard__bar"></div>
                <div className="postcard__preview-txt">{event.previewText}</div>
                <ul className="postcard__tagbox">
                  <li className="tag__item">
                    <i className="fas fa-map-marker-alt mr-2"></i>
                    {event.location}
                  </li>
                  <li className="tag__item">
                    <a href="#">
                      <i className="fas fa-arrow-right mr-2"></i>
                      {event.cta}
                    </a>
                  </li>
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default EventCards;
