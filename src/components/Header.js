import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";
import {
  faMagnifyingGlass,
  faPercent,
  faHandshakeAngle,
  faSignIn,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";

import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import OfflineMsg from "./OfflineMsg";

const Header = () => {
  const [btnName, setBtnName] = useState("Sign In");

  const onlineStatus = useOnlineStatus();

  // console.log("Header Render");
  useEffect(() => {
    // console.log("useEffect called");
  }, [btnName]);

  const handleClick = () => {
    if (btnName == "Sign In") {
      setBtnName("Sign Out");
    } else {
      setBtnName("Sign In");
    }
  };

  return (
    <div className="header">
      <div className="header-container">
        <div className="logo-container">
          <Link to="/"><img className="logo" src={LOGO_URL} /></Link>
        </div>
        <div className="nav-items">
          <ul>
            <li>
              Online Status : {onlineStatus ? "🟩":"🔴"}
            </li>
            <li>
              <Link to="/Offer">
                <FontAwesomeIcon icon={faPercent} />
                Offers
              </Link>
            </li>
            <li>
              <Link to="/Help">
                <FontAwesomeIcon icon={faHandshakeAngle} />
                Help
              </Link>
            </li>
            <li>
              <Link to="#" onClick={handleClick}>
                <FontAwesomeIcon icon={faSignIn} /> {btnName}
              </Link>
            </li>
            <li>
              <Link to="/Cart">
                <FontAwesomeIcon icon={faCartShopping} /> Cart
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
