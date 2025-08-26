const EventCard = (props) => {
  return (
    <>
      <div className="event">
        <img src={props.image.src} alt={props.image.alt} />
        <h2 className="title"> {props.title}</h2>
        <div>
          <p className="date">{props.date}</p>
          <p className="venue">{props.venue}</p>
        </div>
        {/* <input
          type="button"
          value="Click for details"
          className="details_button"
        /> */}
      </div>
    </>
  );
};

export default EventCard;
