import React from "react"
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider"

import compare2 from "../../../static/images/Assets/compare2.jpg"
import compare1 from "../../../static/images/Assets/compare1.jpg"

import quote from "../../../static/images/Assets/icons/quote.png"
const AboutReview = () => {
  return (
    <div
      className="center-section paddingSpacebetwen "
      data-sal="slide-up"
      data-sal-delay="100"
      data-sal-easing="ease"
    >
      <div className="AboutReview-section">
        <h1>Our clients reviews</h1>
        <div className="AboutReview-imagetext">
          <div
            className="imagecompare"
            style={{ borderRadius: "15px 0px 0px 15px" }}
          >
            <ReactCompareSlider
              style={{ height: "100%" }}
              itemOne={
                <ReactCompareSliderImage
                  style={{
                    objectFit: "cover",
                    borderRadius: "15px 0px 0px 15px",
                  }}
                  src={compare1}
                  srcSet={compare1}
                  alt="Image one"
                />
              }
              itemTwo={
                <ReactCompareSliderImage
                  style={{
                    objectFit: "cover",
                    borderRadius: "15px 0px 0px 15px",
                  }}
                  src={compare2}
                  srcSet={compare2}
                  alt="Image two"
                />
              }
            />
          </div>
          <div className="reviewText">
            <div className="subReviewText">
              <div className="Quote">
                <img src={quote} />
              </div>
              <div className="textReview">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure
                </p>
              </div>

              <div className="CHANGE">
                <div className="leftbutton">
                  <button>LEFT</button>
                  <button>Right</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="AboutReview-Buttons">
          <div className="buttonReview">Shoes for men</div>
          <div className="buttonReview">Shoes for ladies</div>
          <div className="buttonReview">Luggage</div>
          <div className="buttonReview">Bag</div>
          <div className="buttonReview buttonMore">More</div>
        </div>
      </div>
    </div>
  )
}

export default AboutReview
