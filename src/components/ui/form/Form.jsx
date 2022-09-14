import InputBox from "../inputBox/InputBox";
import Button from "../button/Button";
import Social from "../social/Social";

import "./form.scss";

function Form() {
  return (
    <div className="form">
      <span className="title">Login to continue</span>

      <InputBox placeholder={"Email"} />
      <InputBox placeholder={"Password"} />

      <div className="flex-container">
        <div className="flex">
          <div className="checkbox">
            <label>
              <div className="double">
                <input type="checkbox"></input>
              </div>
              Remember me
            </label>
          </div>
          <div>
            <a href="#">Forgot password?</a>
          </div>
        </div>
        <Button label={"LOGIN"} />
        <Social />
      </div>
    </div>
  );
}

export default Form;
