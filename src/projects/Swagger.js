import React from 'react';
import ReactPageScroller from "react-page-scroller";
import './Swagger.css';

import Slide2Swagger from "../images/Swagger2.jpg";
import Slide3Swagger from "../images/Swagger3.jpg";


class Swagger extends React.Component {
  render(){
    return (
        <React.Fragment>
          <ReactPageScroller>
          <Slide1 />
          <Slide2 />
          <Slide3 />
          </ReactPageScroller>
        </React.Fragment>
    )
  }
}

function Slide1() {
  return (
      <div className="firstContainerSwagger">
      <div className="titleRowSwagger">
        <div className="leftTitleSwagger">
          <h1 className="titleSwaggerArticle">James Maclean</h1>
          <p style={{color:'orange'}}>______________________________________________</p>
        </div>
        <h2 className="titleSwaggerArticle" style={{color:'orange'}}>What started the journey?</h2>
      </div>
        <div className="firstRowSwagger">
          <p className="swaggerParagraph">
          When I was asked by Swagger Magazine to contribute to their September “Back on Track” issue I began to consider how far “pff track” I’d drifted. Born on the east coast/ Boston MA and growing up on a working family farm in Nova Scotia my course was filled with family, nature, and purpose. Returning to Boston/ MA for high school and college, here my life became a lot more exciting but certainly veered of the nature trail.
          </p>
          <p className="swaggerParagraph">
          In reality, I wasn’t able to fix it while I had all these outside distractions and although I’d promise myself, tomorrow I’ll start yoga, read that book, or start a new path/direction I never did… SO given the times, the pandemic and unrest I have decided to take the opportunity of this feature on real change, in real time, and for real results. In the next 3 months I will do everything I’ve stockpiled over the years to create the change to be my best for this new re-opening world.
          </p>
        </div>
        <div className = "secondRowSwagger">
          <p className="swaggerParagraph">
          While attending university I got a nightclub / internment co. Giving me access to an international set and incredible opportunities to meet talented artists. Throughout these years, I chased happiness to Miami in winter, Nantucket, or Cape Cod in the summer , up-rounding myself with the “best” of everything. Leaving Boston in early 2001 for an obviously successful career in entertainment I arrived in Los Angeles, CA where I chased a multifaceted career in public relations and product placement for shows like the GRAMMY’s, MTV Awards, Video Game Awards, Latin GRAMMY’s , Golden Globes, LA Fashion Week, BET awards and cross country Comic Cons. Working with incredible shows, talent (Marvel’s late CEO Stan Lee/ family most recently) and national publications I was somehow still searching… The next show, opportunity or celebrity would fix it, then I’d be happy/fulfilled.
          </p>
          <p className="swaggerParagraph">
          Starting with a life audit, I will over-haul my diet and exercise routine. Consulting with the state of the art companies on anti-aging and best in care medicine and supplements for men looking to maximize their years and life. We will travel back to that farm and re-engage with family and roots. I’ll actively put more love and beauty in my life, chase joy and contentment. Release fear and hopefully create more than I consume.
          <span><br/></span>
          <span><br/></span>
          Please join me for this very personal journey while I take the time creating the best version of me to serve what I hope is the most beautiful future for us all.
          </p>
        </div>
      </div>
  )
}

function Slide2() {
  return (
    <div className="Slide2Swag">
      <img className= "swaggerslidepic" src = {Slide2Swagger} alt=""/>
    </div>
  )
}


function Slide3() {
  return (
    <div className="Slide3Swag">
      <img className= "swaggerslidepic" src = {Slide3Swagger} alt=""/>
    </div>
  )
}

export default Swagger;
