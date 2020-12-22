import React from "react"

import testshoe from "../../../static/images/shoe.png"
import testshoewoman from "../../../static/images/womanshoe.png"
import bags from "../../../static/images/bags.png"
import check from "../../../static/images/Assets/icons/check_bold.png"
//import testluggage from "../../../images/testbag1.png"
const ServicesGrid = () => {
  return (
    <div className="center-section textaligncenter">
      <h1>Services</h1>

      <div className="ServicesGRID">
        <div className="SubServicesGRID">
          <div className="overtest">
            <div className="exit">x</div>
            <div className="relativetest">
              <div className="flextestst">
                <div className="Photo">
                  <img src={bags} />
                </div>
                <div className="textx">
                  <div className="DescriptionT">
                    <h1>Bags, Luggage and more </h1>
                    <p>
                      We use only top quality materials to repair all shoes. Our
                      expert cobblers' repair work will provide you with very
                      comfortable, better-than-new condition shoes and boots.{" "}
                    </p>
                  </div>

                  <div className="checkDo">
                    <div className="firstrow">
                      <div className="checkItem">
                        <div className="iconCheck">
                          <img src={check} />
                        </div>
                        Retractable Handles
                      </div>
                      <div className="checkItem">
                        <div className="iconCheck">
                          <img src={check} />
                        </div>
                        Wheel replacement
                      </div>
                      <div className="checkItem">
                        <div className="iconCheck">
                          <img src={check} />
                        </div>
                        Carry Handles
                      </div>
                    </div>
                    <div className="second">
                      <div className="checkItem">
                        <div className="iconCheck">
                          <img src={check} />
                        </div>
                        Zipper repair/replacement
                      </div>
                      <div className="checkItem">
                        <div className="iconCheck">
                          <img src={check} />
                        </div>
                        Rips in any material
                      </div>

                      <div className="checkItem">
                        <div className="iconCheck">
                          <img src={check} />
                        </div>
                        Retractable Handles
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="photoss">
                <div className="photoelement"></div>
                <div className="photoelement"></div>
                <div className="photoelement"></div>
                <div className="photoelement"></div>
              </div>
            </div>
          </div>
          <div className="Services-Item testshoe">
            <img src={testshoe} />
          </div>
          <div className="Services-Item">
            <img src={testshoewoman} />
          </div>
          <div className="Services-Item testbag">
            <img src={bags} />
          </div>
          <div className="Services-Item"></div>
          <div className="Services-Item"></div>
          <div className="Services-Item"></div>
        </div>
      </div>
    </div>
  )
}

export default ServicesGrid
