import React from "react"

import { Link } from "gatsby"
import logo from "../../../static/images/Assets/Logo-Blue.png"
const Header = () => {
  return (
    <header>
      <div className="center-section-header ">
        <nav>
          <ul className="Nav-Content">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/">Contact</Link>
            </li>
            <div className="Logo-Header">
              {/*LOGO HERE*/}
              <img src={logo} alt="none" />
              {/*TEMPORAL !*/}
            </div>
            <button className="hamburgerMenu">
              <div className="hamburgerLine"></div>
              <div className="hamburgerLine"></div>
              <div className="hamburgerLine"></div>
            </button>
            <li>
              <Link to="/">Services</Link>
            </li>
            <li>
              <Link to="/">About Us</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

// About us Services - LOGO - Our Work Contact
export default Header
