import Methathesis from "../assets/methathesis.jpeg";

const EventCard = () => {
  return (
    <>
      <div className="event-card-list">
        <div className="event">
          <img src={Methathesis} alt="methathesis" />
          <h2 className="title"> METHATHESIS</h2>
          <p className="date">20th-24th August, 2025</p>
          <p className="venue">Trem Int'l Hqtrs, Lagos</p>
          <input
            type="button"
            value="Click for details"
            className="details_button"
          />
        </div>

        <div className="event">
          <img src={Methathesis} alt="methathesis" />
          <h2 className="title"> METHATHESIS</h2>
          <p className="date">20th-24th August, 2025</p>
          <p className="venue">Trem Int'l Hqtrs, Lagos</p>
          <input
            type="button"
            value="Click for details"
            className="details_button"
          />
        </div>
        <div className="event">
          <img src={Methathesis} alt="methathesis" />
          <h2 className="title"> METHATHESIS</h2>
          <p className="date">20th-24th August, 2025</p>
          <p className="venue">Trem Int'l Hqtrs, Lagos</p>
          <input
            type="button"
            value="Click for details"
            className="details_button"
          />
        </div>
      </div>
    </>
  );
};

export default EventCard;
