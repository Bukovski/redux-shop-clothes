import React, { Suspense, lazy } from 'react';
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { Switch, Route, Redirect } from 'react-router-dom';

import { checkUserSession } from "store/user/user.action";
import { selectCurrentUser } from "store/user/user.selectors";

import Header from 'components/header/header.component';
import Spinner from "components/spinner/spinner.component";
import ErrorBoundary from "components/error-boundary/error-boundary.component";

// import './Routes.css';
import { GlobalStyle } from './global.styles';


const HomePage = lazy(() => import('./pages/homepage/homepage.component'));
const ShopPage = lazy(() => import('./pages/shop/shop.component'));
const SignInAndSignUpPage = lazy(() => import('./pages/sign-in-sign-up/sign-in-and-sign-up.component'));
const CheckoutPage = lazy(() => import('./pages/checkout/checkout.component'));


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
          <ErrorBoundary>
            <Suspense fallback={ <Spinner /> }>
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
            </Suspense>
          </ErrorBoundary>
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
