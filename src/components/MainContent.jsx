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
        <div className="event">
          <div>January 26 - January 30 2025</div>
          <div>METHATHESIS</div>
          <div>
            <input
              type="button"
              value="Click for details"
              className="details_button"
            />
          </div>
        </div>
        <div className="event">
          <div>January 26 - January 30 2025</div>
          <div>METHATHESIS</div>
          <div>
            <input
              type="button"
              value="Click for details"
              className="details_button"
            />
          </div>
        </div>
        <div className="event">
          <div>January 26 - January 30 2025</div>
          <div>METHATHESIS</div>
          <div>
            <input
              type="button"
              value="Click for details"
              className="details_button"
            />
          </div>
        </div>
      </section>
    </main>
  );
};
export default MainContent;
