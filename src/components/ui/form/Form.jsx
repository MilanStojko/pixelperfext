import InputBox from "../inputBox/InputBox";

function Form() {
  return (
    <div className="form">
      <span className="title">Login to continue</span>

      <InputBox />
      <InputBox />

      <div>
        <div>
          <label>
            <input type="checkbox"></input>
            Remember me
          </label>
        </div>
        <div>
          <a href="#">Forgot password?</a>
        </div>
      </div>
    </div>
  );
}

export default Form;
