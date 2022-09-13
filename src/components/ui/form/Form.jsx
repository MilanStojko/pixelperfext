import InputBox from "../inputBox/InputBox";
import Button from "../button/Button";
import Social from "../social/Social";

import "./form.scss";

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
        <Button />
        <Social />
      </div>
    </div>
  );
}

export default Form;
