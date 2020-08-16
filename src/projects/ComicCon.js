import React from 'react';
import ReactPlayer from "react-player";


function ComicCon() {
  return (
    <div className="App">
      <h3 style = {{'marginTop': '5%'}}>ComicCon 2019 - <a href="www.Ilovestanlee.com">Stan Lee Forever</a></h3>
        <ReactPlayer
          url="https://www.youtube.com/watch?v=odzGo-RdrFY"
          width="125vh"
          height='70vh'
          style={{'marginLeft': '15%', 'marginTop':'3%'}}

        />
    </div>
  )
}

export default ComicCon;
