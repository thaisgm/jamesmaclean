import React from 'react';
import TextLoop from "react-text-loop";
import './aboutMe.css';

import JamesPic from './images/JimmyPortrait.png';

function AboutMe() {
  return (
    <div className="App-About">
      <div className="containerABOUT">
        <div className="firstRowABOUT">
        <div className="textGroup">
          <span className="noLoopText"> I'm </span>
          <TextLoop interval="3000">
              <div className="loopText1"> James Maclean</div>
              <div className="loopText"> Innovative</div>
              <div className="loopText"> Resourceful</div>
              <div className="loopText"> Motivated</div>
          </TextLoop>
          <span className="noLoopText">. </span>
        </div>
        </div>
        <div className="secondRowContainerABOUT">
          <div className="secondRowA">
            <p className="aboutMeTEXT">About Me</p>
            <div>___________________</div>
          </div>
          <div className="secondRowB">
            <p className="aboutMeText">Born in Boston, raised on a family farm in heart of Nova Scotia and
            inspiring collaboration ever since. With incredible perseverance comes amazing
            opportunity and we've had the great fortune to work with some of our countries
            best brands. Visit my experience page to see my favorites and ask for letters of recommendation!
            </p>
          </div>
        </div>
        <div className="thirdRowABOUT">
          <img className="jamesPic" src={JamesPic} alt=""/>
        </div>
      </div>
    </div>

  )
}

export default AboutMe;
