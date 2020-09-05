import React from 'react';
import './contactMe.css';

import Monster from './images/MonsterNoBckground.png';

function ContactMe() {
  return (
    <div className="app">
      <div className="contactMePage">
        <div className="firstRow">
          <div className="firstRowText">I'd <span className="bolder">love</span> to hear from you! Don't worry...</div>
        </div>
        <div className="secondRow">
          <img className="monster" src={Monster} alt=""/>
        </div>
        <div className="thirdRow">
          <div className="emailText">Email me at <a href="mailto: jamesmaclean@mac.com" style={{color:"gold"}}>jamesmaclean@mac.com</a>. Let's get <span className="bolderI">creative</span>.</div>
        </div>
      </div>
    </div>
  )
}



export default ContactMe;
