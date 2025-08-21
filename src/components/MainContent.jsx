import EventCard from "./EventCard";
import Methathesis from "../assets/methathesis.jpeg";
import WorldCelebration from "../assets/word_celebration.jpeg";
import KLWC from "../assets/kingdom_life_world_conference.jpeg";
import Joke from "./Joke";

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
            image={{ src: Methathesis, alt: "metathesis" }}
            title="Methathesis"
            date="20th-24th August, 2025"
            venue="Trem Int'l Hqtrs, Lagos"
          />
          <EventCard
            image={{ src: WorldCelebration, alt: "world celebration" }}
            title="Word Celebration"
            date="18th-21st April, 2026"
            venue="Trem Int'l Hqtrs, Lagos"
          />
          <EventCard
            image={{ src: KLWC, alt: "klwc" }}
            title="Kingdom Life World Conference"
            date="12th-16th November, 2024"
            venue="Trem Int'l Hqtrs, Lagos"
          />
          <Joke
            setup="Why don’t skeletons ever fight each other?"
            punchline="Because they don’t have the guts."
          />
          <Joke setup="Why did the scarecrow win an award?" />
          <Joke
            setup="Why can’t your nose be 12 inches long?"
            punchline="Because then it would be a foot."
          />
          <Joke
            setup="Why did the math book look so sad?"
            punchline="Because it had too many problems."
          />
          <Joke punchline="Because it had too many problems." />
        </div>
      </section>
    </main>
  );
};
export default MainContent;
