import React from 'react';
import ReactPageScroller from "react-page-scroller";
import './Swagger.css';


class Swagger extends React.Component {
  render(){
    return (
        <React.Fragment>
          <ReactPageScroller>
          <Slide1 />
          <Slide2 />
          <Slide4 />
          </ReactPageScroller>
        </React.Fragment>
    )
  }
}

function Slide1() {
  return (
    <div className="Slide1">
    <div className="icon">
      <i class="fa fa-arrow-circle-down fa-2x fa-fw" aria-hidden="true" style={{color:'#e95301'}}></i>
    </div>
    </div>
  )
}

function Slide2() {
  return (
    <div className="Slide2">
    <div className="icon2">
      <i class="fa fa-arrow-circle-down fa-2x" aria-hidden="true" style={{color:'#e95301'}}></i>
    </div>
    </div>
  )
}


function Slide4() {
  return (
    <div className="Slide4">
    </div>
  )
}

export default Swagger;
