import React, { useEffect, useState } from "react"

import { Link } from "gatsby"
import logo from "../../../static/images/Assets/Logo-Blue.png"
const Header = () => {
  const [open, setOpen] = useState(false)
  const [render, setrender] = useState("none")
  const [heightmenu, setheightmenu] = useState(50)

  const OnEventClick = element => {
    console.log(element.target.parentElement.parentElement.firstElementChild)
  }
  useEffect(() => {
    if (open) {
      setheightmenu(400)
      setrender("block")
    } else {
      setrender("none")
      setheightmenu(50)
    }
  }, [open])
  console.log(render)
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

            <li style={{ display: render }}>
              <Link to="/">Home</Link>
            </li>

            <li style={{ display: render }}>
              <Link to="/Contact/">Contact</Link>
            </li>

            <li style={{ display: render }}>
              <Link to="/Services/">Services</Link>
            </li>

            <li style={{ display: render }}>
              <Link to="/AboutUs/">About Us</Link>
            </li>
          </ul>
          <button
            className="hamburgerMenu"
            onClick={element => {
              setOpen(!open)
              OnEventClick(element)
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
