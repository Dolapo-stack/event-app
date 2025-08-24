const Repository = (props) => {
  return (
    <>
      <div className="container">
        <div className="top-layer">
          <h3>{props.title}</h3>
          <div>{props.visibility}</div>
        </div>
        <p className="description">{props.description || ""}</p>

        <p className="language">{props.language}</p>
      </div>
    </>
  );
};

export default Repository;
