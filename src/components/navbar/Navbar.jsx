import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBagShopping,
  faCircleInfo,
  faListAlt,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

import "./Navbar.css";

export default function Navbar() {
  return (
    <>
      <section className="topbar-container">
          <div className="offer-highlight"> Great Deal! Free delivery for orders over €50 </div>

          <div className="navbar">
            <h1 className="logo">THE ONE</h1>

            <div className="nav-links">
              <a>
                <span>About</span>
              </a>
              <a>
                <span>Menu</span>
              </a>
            </div>

            <div className="log-in">
              <div className="log-in-wrapper">
                <FontAwesomeIcon className="log-in-icon" icon={faUser} />
              </div>
            </div>

            <div className="bag">
              <FontAwesomeIcon className="bag-icon" icon={faBagShopping} />
            </div>
          </div>
      </section>
    </>
  );
}
