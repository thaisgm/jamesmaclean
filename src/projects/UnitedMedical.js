import React from 'react';
import ReactPageScroller from "react-page-scroller";
import './UnitedMedical.css';

import Pride2 from '../images/pride2SMALL.png';
import Pride3 from '../images/pride3SMALL.png';
import Pride4 from '../images/pride4SMALL.png';


class UnitedMedical extends React.Component {
  render(){
    return (
        <React.Fragment>
          <ReactPageScroller>
          <PrideSlide1 />
          <PrideSlide2 />
          <PrideSlide3 />
          <PrideSlide4 />
          </ReactPageScroller>
        </React.Fragment>
    )
  }
}

function PrideSlide1() {
  return (
    <div className="PrideSlide1">
    <div className="icon">
      <i class="fa fa-arrow-circle-down fa-2x fa-fw" aria-hidden="true" style={{color:'#e95301'}}></i>
    </div>
    </div>
  )
}

function PrideSlide2() {
  return (
    <div className="PrideSlide2">
    <img className = "Pride2" src={Pride2} alt=""/>
    </div>
  )
}


function PrideSlide3() {
  return (
    <div className="PrideSlide3">
    <img className = "Pride3" src={Pride3} alt=""/>
    </div>
  )
}

function PrideSlide4() {
  return (
    <div className="PrideSlide4">
    <img className = "Pride4" src={Pride4} alt=""/>
    </div>
  )
}

export default UnitedMedical;
