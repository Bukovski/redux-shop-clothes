import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from 'components/header/header.component';
import HomePage from 'pages/homepage/homepage.component';
import ShopPage from 'pages/shop/shop.component';
import SignInAndSignUpPage from "pages/sign-in-sign-up/sign-in-and-sign-up.component";

import './Routes.css';


function Routes() {
  return (
    <BrowserRouter>
      <Header />
      
      <Switch>
        <Route exact path='/' component={ HomePage } />
        <Route path='/shop' component={ ShopPage } />
        <Route exact path='/signin' component={ SignInAndSignUpPage } />
      </Switch>
    </BrowserRouter>
  );
}


export default Routes;
