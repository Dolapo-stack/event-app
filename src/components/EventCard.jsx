import Methathesis from "../assets/methathesis.jpeg";

const EventCard = () => {
  return (
    <>
      <div className="event">
        <img src={Methathesis} alt="methathesis" />
        <div>
          <h2 className="title"> METHATHESIS</h2>
          <p className="date">20TH-24TH AUGUST, 2025</p>
          <p className="venue">Trem Int'l Hqtrs, Lagos</p>
        </div>
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
      ;
    </>
  );
};

export default EventCard;
