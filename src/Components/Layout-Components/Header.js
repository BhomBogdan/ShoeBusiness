import React, { useState } from "react"

import { Link } from "gatsby"
import logo from "../../../static/images/Assets/Logo-Blue.png"
const Header = () => {
  const windowSize = window.innerWidth

  console.log(windowSize)

  const [open, setOpen] = useState(true)
  const [render, setrender] = useState(true)
  const [heightmenu, setheightmenu] = useState(50)

  console.log(open)
  function height() {
    if (windowSize < 400) {
      setheightmenu(400)
      setrender(!render)
    } else {
      setheightmenu(50)
      setrender(!render)
    }
  }

  console.log(heightmenu)
  return (
    <header>
      <div className="center-section-header ">
        <nav>
          <ul className="Nav-Content" id="nav1" style={{ height: heightmenu }}>
            <div className="Logo-Header">
              {/*LOGO HERE*/}
              <img src={logo} alt="none" />
              {/*TEMPORAL !*/}
            </div>
            {open && render && (
              <li>
                <Link to="/">Home</Link>
              </li>
            )}
            {open && render && (
              <li>
                <Link to="/Contact/">Contact</Link>
              </li>
            )}
            {open && render && (
              <li>
                <Link to="/Services/">Services</Link>
              </li>
            )}
            {open && render && (
              <li>
                <Link to="/AboutUs/">About Us</Link>
              </li>
            )}
          </ul>
          <button
            className="hamburgerMenu"
            onClick={() => {
              setOpen(!open)
              height()
            }}
          >
            <div className="hamburgerLine"></div>
            <div className="hamburgerLine"></div>
            <div className="hamburgerLine"></div>
          </button>
        </nav>
      </div>
    </header>
  )
}

// About us Services - LOGO - Our Work Contact
export default Header
