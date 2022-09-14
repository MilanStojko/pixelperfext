import "./button.scss";

function Button(props) {
  function handleClick() {
    props.callback();
  };
  return (
    <div className="button-container">
      <button className="button" onClick={handleClick}>
        {props.label}
      </button>
    </div>
  );
}

export default Button;
