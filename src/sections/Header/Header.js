import { Link } from "react-router-dom";

import "./Header.css";
import logo from "../../assets/images/logo.png";
import NavItem, { NavItemDropDown } from "../../Componnents/NavItem/NavItem";

const Header = (props) => {
  return (
    <nav className="navbar navbar-expand-md navbar-dark" id="navbar-cyborg">
      <div className="container">
        <Link to="/" className="navbar-brand">
          <img src={logo} alt="Cyborg logo" />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainmenu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="mainmenu">
          <ul className="navbar-nav ms-auto">
            <NavItem>
              <Link to="/" className="nav-link activeT">
                Home
              </Link>
            </NavItem>

            <NavItem>
              <a href="#" className="nav-link">
                Details
              </a>
            </NavItem>

            <NavItemDropDown>
              <a
                href="#"
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
              >
                Browse
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a href="#learn" className="dropdown-item">
                    Fortnite
                  </a>
                </li>
                <li>
                  <a href="#next" className="dropdown-item">
                    Call of duty
                  </a>
                </li>
              </ul>
            </NavItemDropDown>

            <NavItem>
              <a href="/#" className="nav-link">
                Streams
              </a>
            </NavItem>

            <NavItem>
              <Link to="/Profile" className="nav-link">
                Profile
              </Link>
            </NavItem>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
