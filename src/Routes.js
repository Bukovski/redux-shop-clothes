import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { auth, createUserProfileDocument } from 'firebase/firebase.utils';

import Header from 'components/header/header.component';
import HomePage from 'pages/homepage/homepage.component';
import ShopPage from 'pages/shop/shop.component';
import SignInAndSignUpPage from "pages/sign-in-sign-up/sign-in-and-sign-up.component";

import './Routes.css';


class Routes extends React.Component {
  state = {
    currentUser: null
  };
  
  unsubscribeFromAuth = null;
  
  componentDidMount() {
    // this triggered the observer when users were signed in, signed out
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        
        // get current contents of the data user
        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });
        });
      }
      
      this.setState({ currentUser: userAuth });
    });
  }
  
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  
  render() {
    const { currentUser } = this.state;
    
    return (
      <BrowserRouter>
        <Header currentUser={ currentUser } />
      
        <Switch>
          <Route exact path='/' component={ HomePage }/>
          <Route path='/shop' component={ ShopPage }/>
          <Route exact path='/signin' component={ SignInAndSignUpPage }/>
        </Switch>
      </BrowserRouter>
    );
  }
}


export default Routes;
