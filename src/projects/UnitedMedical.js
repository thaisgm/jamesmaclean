import React from 'react';
import ReactPageScroller from "react-page-scroller";
import './UnitedMedical.css';


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
    <div className="icon2">
      <i class="fa fa-arrow-circle-down fa-2x" aria-hidden="true" style={{color:'#e95301'}}></i>
    </div>
    </div>
  )
}


function PrideSlide3() {
  return (
    <div className="PrideSlide3">
    <div className="icon">
      <i class="fa fa-arrow-circle-down fa-2x fa-fw" aria-hidden="true" style={{color:'#e95301'}}></i>
    </div>
    </div>
  )
}

function PrideSlide4() {
  return (
    <div className="PrideSlide4">
    </div>
  )
}

export default UnitedMedical;
