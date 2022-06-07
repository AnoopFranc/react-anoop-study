import React from 'react';
import './App.css';
import {RerenderPage } from './pages';



function App() {
  return (
    <div className="App">
      <div className="app-body">
        <RerenderPage/>
        {/* <NestedLoopPoint
        links={demoNestedLoop.links}
        /> */}
      </div>

    </div>
  );
}

export default App;
