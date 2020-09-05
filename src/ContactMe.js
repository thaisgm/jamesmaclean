import React from 'react';
import './contactMe.css';

import Monster from './images/MonsterNoBckground.png';

function ContactMe() {
  return (
    <div className="appCONTACT">
      <div className="contactMePage">
        <div className="firstRowCONTACT">
          <div className="firstRowTextCONTACT">I'd <span className="bolder">love</span> to hear from you! Don't worry...</div>
        </div>
        <div className="secondRowCONTACT">
          <img className="monster" src={Monster} alt=""/>
        </div>
        <div className="thirdRowCONTACT">
          <div className="emailText">Email me at <a href="mailto: jamesmaclean@mac.com" style={{color:"gold"}}>jamesmaclean@mac.com</a>. Let's get <span className="bolderI">creative</span>.</div>
        </div>
      </div>
    </div>
  )
}



export default ContactMe;
