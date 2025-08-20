import EventCard from "./EventCard";
import Methathesis from "../assets/methathesis.jpeg";
import WorldCelebration from "../assets/word_celebration.jpeg";
import KLWC from "../assets/kingdom_life_world_conference.jpeg";

const MainContent = () => {
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
        <div className="event-card-list">
          <EventCard
            image={Methathesis}
            title="Methathesis"
            date="20th-24th August, 2025"
            venue="Trem Int'l Hqtrs, Lagos"
          />
          <EventCard
            image={WorldCelebration}
            title="Word Celebration"
            date="18th-21st April, 2026"
            venue="Trem Int'l Hqtrs, Lagos"
          />
          <EventCard
            image={KLWC}
            title="Kingdom Life World Conference"
            date="12th-16th November, 2024"
            venue="Trem Int'l Hqtrs, Lagos"
          />
        </div>
      </section>
    </main>
  );
};
export default MainContent;
