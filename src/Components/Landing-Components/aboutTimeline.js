import React from "react"

//DE ADAUGAT POZA CU GRAPHQL
import landingFoto from "../../../static/images/test.jpg"

const AboutTimeline = () => {
  return (
    <div className="center-section  ">
      <div className="LandingWelcome-Container space-section flexdirection-row">
        <div className="LandingWelcome-Text">
          It's time <br />
          to get your <br />
          shoe a <span>refresh</span> <br />
          <div className="LandingWelcome-TextCompany">
            Gus and Company A Better Shoe Repair
            <br /> And A Family Tradition Since 1904
          </div>
          <div className="ButtonArea">
            <div className="button1">Our work</div>
            <div className="button2">Or discover about us </div>
          </div>
        </div>

        <div className="LandingWelcome-DivPhoto">
          <div className="LandingWelcome-Photo">
            <img src={landingFoto} alt="none" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutTimeline
