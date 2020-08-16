import React from 'react';
import TextLoop from "react-text-loop";
import './aboutMe.css';

import Monster from './images/monster.png';

function AboutMe() {
  return (
    <div className="App-About">
      <div className="first-container">
        <div className="column-container">
          <div className="textGroup">
            <span className="noLoopText"> Hi, I'm </span>
            <TextLoop interval="3000">
                <div className="loopText"> James Maclean</div>
                <div className="loopText"> Innovative</div>
                <div className="loopText"> Resourceful</div>
                <div className="loopText"> Motivated</div>
            </TextLoop>
            <span className="noLoopText">. </span>
          </div>
          <div className="second-container">
            <div className="aboutMeTitle">
                <h2>About Me</h2>
                <div>___________________</div>
            </div>
            <div className="aboutMeText">
              <p>Hi, my name is James and I live in LA. Since graduating from Northeastern University
              with BA in Business, I have had the opportunity to work with multiple brands on national projects.
              Review my experience page for more information!
              </p>
            </div>
          </div>
        </div>
        <div className="jamesPortrait">
          <img className="jamesPic" src={Monster} alt=""/>
        </div>
      </div>
    </div>

  )
}

export default AboutMe;
