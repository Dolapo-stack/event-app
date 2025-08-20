const EventCard = (props) => {
  return (
    <>
      <div className="event">
        <img src={props.image} alt="methathesis" />
        <h2 className="title"> {props.title}</h2>
        <p className="date">{props.date}</p>
        <p className="venue">{props.venue}</p>
        <input
          type="button"
          value="Click for details"
          className="details_button"
        />
      </div>
    </>
  );
};

export default EventCard;
