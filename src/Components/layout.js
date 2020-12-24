import React from "react"

import Header from "./Layout-Components/Header"
import Footer from "./Layout-Components/Footer"

import "../styles/app.scss"

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <main>{children}</main>

      <Footer />
    </div>
  )
}
export default Layout
