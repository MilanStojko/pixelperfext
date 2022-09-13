
//import per ReactIcons, se non vi funziona usare npm install react-icons
import { ImFacebook } from "react-icons/im";
import { ImTwitter } from "react-icons/im";

function Social() {
  return (
    <div>
      <div>
        <span className="sign">Or sign up using</span>
      </div>
      <div className="social-icons">
        <a>
          <ImFacebook />
        </a>
        <a>
          <ImTwitter />
        </a>
      </div>
    </div>
  );
}

export default Social;
