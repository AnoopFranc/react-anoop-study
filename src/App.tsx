import React, { ChangeEvent, ChangeEventHandler, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { CAROUSELDEMO } from './pages';
import { NestedLoopPoint, VideoPlayer } from './components';
import { demoLink } from './constant';
const reader = new FileReader();


function App() {
  const [video,setVideo] = useState<string[]>(["https://apd-75f0727fcc9bf32471480b65121c4976.v.smtcdns.com/wetvvlive.qqvideo.tc.qq.com/AhObK8botFCxQGkKM3QPDxZF7BIUQ1veVtdQFoHYoLuc/o0035voxre3.mp4?vkey=5F038925F79BD6C387A88DE735D21DEAD016B54EAB78B1B60EECE9919849467DE0967ABE94F81B62129A3BF1E3E640E917EA0AB8FC01BE2807FEDD5059A788C2F84B3E1883D694CD3E21997AA7974963425F7DCE0542F866BCB83DDF3C6B515D0C0338B0BF4D4087F9CB66FDED6CDF3491B75C6657F58416"]) 
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
        {video.map((vid,i)=> {
        return(
          <VideoPlayer
          src={vid}
          key={i+vid}
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
