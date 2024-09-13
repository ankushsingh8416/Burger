import React from 'react';
import "./download.css"
function Download() {
  return (
    <div className="getApp-sec-main cntnt-section">
      <img src="/images/des-elem-img-3.png" alt="Sketch Burger" className="abs-img abs-img-left" />
      <img src="/images/des-elem-img-4.png" alt="Delivery Boy Image" className="abs-img getApp-abs-img2 abs-img-right" />
      <div className="page-center">
        <div className="getApp-cntnt-main">
          <div className="section-head getApp-sec-head">
            <div className="item-head">get the</div>
            <div className="item-span-head">
              <img src="/images/getapp-sec-head-img.png" alt="App Download Heading Image" className="left-img" />
              mcdonald's app
              <img src="/images/getapp-sec-head-img.png" alt="App Download Heading Image" className="right-img" />
            </div>
            <div className="line"></div>
            <div className="head-des">Enjoy exclusive deals and the best of McDonald's right at your fingertips</div>
          </div>

          <div className="getApp-inner-cntnt">
            <div className="getApp-btn-contain">
              <div className="getApp-btn">
                <a href="#"><img src="/images/playstore-icon.png" alt="Playstore icon" /></a>
              </div>
              or
              <div className="getApp-btn">
                <a href="#"><img src="/images/app-store-icon.png" alt="App Store icon" /></a>
              </div>
            </div>

            <div className="getApp-main-img-contain">
              <img src="/images/get-app-img.png" alt="Get App Section Image" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Download;
