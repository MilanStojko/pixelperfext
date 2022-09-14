import "./input.scss";

function InputBox(props) {
  const getValidate = (e) => {
    props.callback(e);
  };
  return (
    <div
      className={`input-wrap validate ${
        props.state === false && props.placeholder === "Email"
          ? "alertEmail"
          : "jammja"
      } ${
        props.state === false && props.placeholder === "Password"
          ? "alertPassword"
          : "jammja"
      }`}
    >
      <input type={props.type} name={props.name} onChange={getValidate}></input>

      {/* <span className="alert"></span> */}

      <span className="focus"></span>
      <span className="label">{props.placeholder}</span>
    </div>
  );
}

export default InputBox;
