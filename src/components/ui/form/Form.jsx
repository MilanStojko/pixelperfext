import InputBox from "../inputBox/InputBox";
import Button from "../button/Button";
import Social from "../social/Social";
import { useEffect, useState } from "react";

import "./form.scss";

function Form() {
  const [state, setState] = useState({
    email: true,
    password: true,
  });

  const PATTERN = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
  let email = "";
  let password = "";
  let validatedEmail = true;
  let validatedPassword = true;

  function getEmail(e) {
    email = e.target.value;
  }

  function getPassword(e) {
    password = e.target.value;
  }

  function validateEmail() {
    if (!email.match(PATTERN)) {
      validatedEmail = false;
    }
  }
  function validatePassword() {
    if (password === "") {
      validatedPassword = false;
    }
  }

  function handleClick() {
    console.log(email, password, "click");
    validateEmail();
    validatePassword();
    setState({
      ...state,
      email: validatedPassword,
      password: validatedPassword,
    });
    console.log(state.email, state.password);
  }

  return (
    <div className="form">
      <span className="title">Login to continue</span>

      <InputBox
        placeholder={"Email"}
        type={"email"}
        callback={getEmail}
        state={state.email}
      />
      <InputBox
        placeholder={"Password"}
        type={"password"}
        callback={getPassword}
        state={state.password}
      />

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
          <div className="link">
            <a href="#">Forgot password?</a>
          </div>
        </div>
        <Button label={"LOGIN"} callback={handleClick} />
        <Social />
      </div>
    </div>
  );
}

export default Form;
