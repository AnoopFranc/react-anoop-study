import React from 'react';
import logo from './logo.svg';
import './App.css';
import { CAROUSELDEMO } from './pages';
import { NestedLoopPoint } from './components';
import { demoLink } from './constant';


function App() {
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
      </div>

    </div>
  );
}

export default App;
