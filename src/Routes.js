import React from 'react';
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { Switch, Route, Redirect } from 'react-router-dom';

import { auth, createUserProfileDocument } from 'firebase/firebase.utils';

import { setCurrentUser } from "store/user/user.action";
import { selectCurrentUser } from "store/user/user.selectors";
import { selectCollectionsForPreview } from "store/shop/shop.selectors";

import CheckoutPage from 'pages/checkout/checkout.component';
import Header from 'components/header/header.component';
import HomePage from 'pages/homepage/homepage.component';
import ShopPage from 'pages/shop/shop.component';
import SignInAndSignUpPage from "pages/sign-in-sign-up/sign-in-and-sign-up.component";

import './Routes.css';


class Routes extends React.Component {
  unsubscribeFromAuth = null;
  
  componentDidMount() {
    const { setCurrentUser } = this.props;
  
    // this triggered the observer when users were signed in, signed out
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        
        // get current contents of the data user
        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });
        });
      }
  
      setCurrentUser(userAuth);
    });
  }
  
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  
  render() {
    const { currentUser } = this.props;
    
    return (
      <div>
        <Header />
      
        <Switch>
          <Route exact path='/' component={ HomePage }/>
          <Route path='/shop' component={ ShopPage }/>
          <Route exact path='/checkout' component={ CheckoutPage } />
          <Route
            path='/signin'
            render={ () => currentUser
              ? ( <Redirect to='/' /> )
              : ( <SignInAndSignUpPage /> )
            }
          />
        </Switch>
      </div>
    );
  }
}


const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  collectionsArray: selectCollectionsForPreview
});

const mapDispatchToProps = dispatch =>({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});


export default connect(mapStateToProps, mapDispatchToProps)(Routes);
