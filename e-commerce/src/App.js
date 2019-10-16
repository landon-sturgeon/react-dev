import React from 'react';
import './App.css';
import { Route, Switch } from "react-router-dom";

import HomePage from "../src/pages/homepage/homepage.component";

const HatsPage = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
);

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={ HomePage } />
        <Route path="/shop/hats" component={ HatsPage} />
      </Switch>
    </div>
  );
}

export default App;
