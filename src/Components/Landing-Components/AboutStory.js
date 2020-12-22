import React, { useState } from "react"

import cobbler from "../../../static/images/Assets/cobbler.jpg"
const AboutStory = () => {
  const handleclick = event => {
    const selectedControl = event.target
    console.log(selectedControl)
    const parentDiv = event.target.parentNode.id
    const elementslist = document.getElementById(parentDiv)
    console.log(elementslist)
    console.log(event.target.parentNode.id)
  }
  return (
    <div className="center-section teste paddingSpacebetwen ">
      <div className="AboutS space-section">
        <div className="AboutS-Text">
          <h1>Our Story</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="button1"> Contact </div>
        </div>
        <div className="AboutS-History">
          <div className="AboutS-Bg">
            <div className="JS-History">
              <div
                className="Control-History"
                id="controlButtons"
                onClick={handleclick}
              >
                <div className="circle-H red show-Control"></div>
                <div className="line-H red"></div>
                <div className="circle-H red"></div>
                <div className="line-H red"></div>
                <div className="circle-H red"></div>
                <div className="line-H red"></div>
                <div className="circle-H red"></div>
              </div>

              <div className="Show-History">
                <div className="years">
                  <div className="arrows"></div>
                  <div className="years-items show-Years">1900</div>
                  <div className="years-items">1920</div>
                  <div className="years-items">1940</div>
                  <div className="years-items">1960</div>
                </div>

                <div className="text">
                  <div className="text2">
                    <h1>Our start</h1>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing
                      elit, sed eiusmod tempor incididunt ut labore et dolore
                      magna aliqua.
                    </p>
                  </div>
                  <div className="image-text">
                    <img src={cobbler} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="f"></div>
        </div>
      </div>
    </div>
  )
}

export default AboutStory
