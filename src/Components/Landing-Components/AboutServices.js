import React from "react"

const AboutServices = () => {
  return (
    <div className="center-section paddingSpacebetwen">
      <div className="LandingServices-Container flexdirection-row ">
        <div className="LandingServices-Tittle">Our services</div>
        <div className="LandingServices-DivItem flexdirection-row">
          <div className="LandingServices-Item photo1">
            <h4>Shoes for men</h4>
          </div>
          <div className="LandingServices-Item photo2">
            <h4>Shoes for ladies</h4>
          </div>
          <div className="LandingServices-Item photo3">
            <h4>Cowboys boots</h4>
          </div>
        </div>
      </div>
      <div className="LandingServices">
        Not finding what you need ? <span> Check this out!</span> we do a lot.
      </div>
    </div>
  )
}

export default AboutServices
