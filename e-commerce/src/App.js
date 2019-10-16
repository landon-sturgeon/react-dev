import React from 'react';
import './App.css';
import { Route, Switch } from "react-router-dom";

import HomePage from "../src/pages/homepage/homepage.component";
import ShopPage from "../src/pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInAndSignUpPage from "../src/pages/sign-in-and-sign-up/sign-in-and-sign-up.component";


function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={ HomePage } />
        <Route path="/shop" component={ ShopPage } />
        <Route path="/sign-in" component= { SignInAndSignUpPage } />
      </Switch>
    </div>
  );
}

export default App;
