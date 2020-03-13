import React from 'react';
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { Switch, Route, Redirect } from 'react-router-dom';

import { checkUserSession } from "store/user/user.action";
import { selectCurrentUser } from "store/user/user.selectors";

import CheckoutPage from 'pages/checkout/checkout.component';
import Header from 'components/header/header.component';
import HomePage from 'pages/homepage/homepage.component';
import ShopPage from 'pages/shop/shop.component';
import SignInAndSignUpPage from "pages/sign-in-sign-up/sign-in-and-sign-up.component";

// import './Routes.css';
import { GlobalStyle } from './global.styles';


class Routes extends React.Component {
  componentDidMount() {
    const { checkUserSession } = this.props;
    
    checkUserSession();
  }
  
  
  render() {
    const { currentUser } = this.props;
    
    return (
      <div>
        <GlobalStyle />
        
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
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch =>({
  checkUserSession: () => dispatch(checkUserSession())
});


export default connect(mapStateToProps, mapDispatchToProps)(Routes);
