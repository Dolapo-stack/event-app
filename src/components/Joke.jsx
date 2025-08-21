const Joke = (props) => {
  return (
    <div>
      {props.setup && (
        <div className="setup">
          <span>Setup: {props.setup} </span>
        </div>
      )}

      {props.punchline && (
        <div className="punchline">
          <span>Punchline: {props.punchline}</span>
        </div>
      )}
    </div>
  );
};

export default Joke;
