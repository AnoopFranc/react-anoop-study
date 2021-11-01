import React, { ChangeEvent, ChangeEventHandler, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { CAROUSELDEMO } from './pages';
import { NestedLoopPoint, VideoPlayer } from './components';
import { demoLink } from './constant';


function App() {
  const [video,setVideo] = useState<string[]>(['https://bitmovin-a.akamaihd.net/content/sintel/sintel.mpd']) 
  const acceptVideo = (e:ChangeEvent<HTMLInputElement>) => {
    if(e.target.files !== null && e.target.files.length > 0){
      setVideo([URL.createObjectURL(e.target.files[0])])
    }
  }
  return (
    <div className="App">
      <div className="app-body">
        <CAROUSELDEMO/>

        <NestedLoopPoint
      links={demoLink.links}
      />

        <div className="full-bleed ash">
          aaaaaaa
        </div>
        {/* <NestedLoopPoint
        links={demoNestedLoop.links}
        /> */}
        <input
        type="file"
        accept="video/mp4,video/x-m4v,video/*"
        onChange = {acceptVideo}
        />


      </div>
      {video.map(vid => {
        return(
          <VideoPlayer
          src={vid}
          />
        )
      })}
    </div>
  );
}

export default App;
