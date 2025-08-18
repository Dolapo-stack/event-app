import EventCard from "./EventCard";

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
        <EventCard />
      </section>
    </main>
  );
};
export default MainContent;
