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
          Great Deal! Free delivery for orders over €50
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
            <Link className="log-in-icon-wrapper" to={"/signin"}>
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
