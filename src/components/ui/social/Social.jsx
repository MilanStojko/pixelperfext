//import per ReactIcons, se non vi funziona usare npm install react-icons
import { ImFacebook } from "react-icons/im";
import { ImTwitter } from "react-icons/im";

import "./social.scss";

function Social() {
  return (
    <div>
      <div className="text-login">
        <span className="sign">Or sign up using</span>
      </div>
      <div className="social-icons">
        <a>
          <ImFacebook className="facebook"/>
        </a>
        <a className="twitterBc">
          <ImTwitter className="twitter"/>
        </a>
      </div>
    </div>
  );
}

export default Social;
