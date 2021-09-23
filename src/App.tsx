import React from 'react';
// import logo from './logo.svg';
import './App.css';

import {BrowserRouter as Router, Switch, Route} from "react-router-dom"

import { About, ArticlePage, CAROUSELDEMO } from './pages';

export const App:React.FunctionComponent = () => {
  return (
    <div className="App">
      <div className="app-body">
        <Router>
          <Switch>
          <Route exact path={"/"}>
            <CAROUSELDEMO/>
          </Route>
          <Route exact path={"/AboutUs"}>
            <About />
          </Route>
          <Route exact path={"/article/:id"}>
            <ArticlePage />
          </Route>
          </Switch>
        </Router>
    </div>
    </div>
  );
}

export default App;
