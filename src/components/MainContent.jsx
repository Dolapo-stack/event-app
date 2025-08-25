import EventCard from "./EventCard";
import eventData from "../../data.js";

const MainContent = () => {
  const events = eventData.map((event) => {
    return (
      <EventCard
        image={event.image}
        title={event.title}
        date={event.date}
        venue={event.venue}
      />
    );
  });
  return (
    <main>
      <div className="next_event">
        <h1>METHATHESIS 2025</h1>
        <p>25 DAYS</p>
        <a href="./event_details" className="event_details">
          Click For Details
        </a>
      </div>

      <section className="event_list">
        <h2>Upcoming Events</h2>
        <div className="event-card-list">{events}</div>
      </section>
    </main>
  );
};
export default MainContent;
