import React from "react";
import EventCards from "../components/EventCards";
import EventHero from "../components/EventHero";
import EventBenifits from "../components/EventBenifits";
import EventNewsletter from "../components/EventNewsletter";
import {eventsData , event_highlights} from "../db/db.js"
import {newsletter} from "../db/db.js"
function Events() {
  return (
    <div>
      <EventHero />
      <EventCards eventsData={eventsData} title="Explore Upcoming Events" />
      <EventBenifits />
      <EventCards
        eventsData={event_highlights}
        title="Explore Past Events Highlights"
      />
      <EventNewsletter
        title={newsletter.title}
        description={newsletter.description}
        placeholder={newsletter.placeholder}
        buttonText={newsletter.buttonText}
      />
    </div>
  );
}

export default Events;
