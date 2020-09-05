import React from 'react';
import ReactPlayer from "react-player";
import './ComicCon.css';



function ComicCon() {
  return (
    <div className="AppCOMIC">
      <h3 className="comicTitle">ComicCon 2019 - <a href="www.Ilovestanlee.com" style={{color:'darkred'}}>Stan Lee Forever</a></h3>
        <ReactPlayer
          url="https://www.youtube.com/watch?v=odzGo-RdrFY"
          width="70%"
          height='70vh'
          style={{'marginLeft': '15%', 'marginTop':'3%'}}

        />
    </div>
  )
}

export default ComicCon;
