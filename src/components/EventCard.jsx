const EventCard = (props) => {
  return (
    <>
      <div className="event">
        <img
          src={props.image.src}
          alt={props.image.alt}
          className="card-item"
        />
        <h2 className="title card-item"> {props.title}</h2>
        <div>
          <p className="venue card-item">
            <i class="fa-solid fa-location-dot"></i> {props.venue}
          </p>

          <p className="date card-item">
            <i class="fa-solid fa-calendar-days"></i> {props.date}
          </p>
        </div>
      </div>
    </>
  );
};

export default EventCard;
