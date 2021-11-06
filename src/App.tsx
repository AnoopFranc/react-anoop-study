import React, { ChangeEvent, ChangeEventHandler, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { CAROUSELDEMO } from './pages';
import { NestedLoopPoint, VideoPlayer } from './components';
import { demoLink } from './constant';
const reader = new FileReader();


function App() {
  const [video,setVideo] = useState<string[]>([]) 
  const acceptVideo = (e:ChangeEvent<HTMLInputElement>) => {
    if(e.target.files !== null && e.target.files.length > 0){
      const selectedFile = e.target.files[0];
      if (selectedFile) {
          addListeners(reader);
          reader.readAsDataURL(selectedFile);
      }
    }
  }

  function handleEvent(event:ProgressEvent<FileReader>) {

    if (event.type === "load") {
        setVideo([reader.result as string]) ;
    }
}

function addListeners(reader:FileReader) {
    reader.addEventListener('loadstart', handleEvent);
    reader.addEventListener('load', handleEvent);
    reader.addEventListener('loadend', handleEvent);
    reader.addEventListener('progress', handleEvent);
    reader.addEventListener('error', handleEvent);
    reader.addEventListener('abort', handleEvent);
}

  return (
    <div className="App">
      <div className="app-body">
        <CAROUSELDEMO/>
        {video.map(vid => {
        return(
          <VideoPlayer
          src={vid}
          />
        )
      })}
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

    </div>
  );
}

export default App;
