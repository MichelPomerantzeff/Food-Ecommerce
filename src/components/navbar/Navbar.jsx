import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBagShopping,
  faCircleInfo,
  faListAlt,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

import "./Navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <section className="topbar-container">
        <div className="offer-highlight">
          Great Deal! Get 10% off for orders over €50
        </div>

        <div className="navbar">
          <div className="navbar-side nav-left">
            <Link className="logo" to={"/"}>
              LOGO
            </Link>

            <Link>
              <span className="about-link">About</span>
            </Link>

            <Link>
              <span className="about-link">Menu</span>
            </Link>
          </div>

          <div className="navbar-side nav-right">
            <Link className="log-in-icon-wrapper" to={"/sign-in"}>
              <FontAwesomeIcon className="log-in-icon" icon={faUser} />
            </Link>

            <div className="bag">
              <FontAwesomeIcon className="bag-icon" icon={faBagShopping} />
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
