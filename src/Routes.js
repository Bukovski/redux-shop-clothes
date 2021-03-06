import React, { useEffect, Suspense, lazy } from 'react';
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { Switch, Route, Redirect } from 'react-router-dom';

import { checkUserSession } from "store/user/user.action";
import { selectCurrentUser } from "store/user/user.selectors";

import AboutPage from './pages/about/about.component';
import NotFound from './pages/not-found/not-found.component';
import Header from 'components/header/header.component';
import Spinner from "components/spinner/spinner.component";
import ErrorBoundary from "components/error-boundary/error-boundary.component";

import { GlobalStyle } from './global.styles';


const HomePage = lazy(() => import('./pages/homepage/homepage.component'));
const ShopPage = lazy(() => import('./pages/shop/shop.component'));
const SignInAndSignUpPage = lazy(() => import('./pages/sign-in-sign-up/sign-in-and-sign-up.component'));
const CheckoutPage = lazy(() => import('./pages/checkout/checkout.component'));


const Routes = ({ checkUserSession, currentUser }) => {
  useEffect(() => {
    checkUserSession();
  }, [ checkUserSession ]);
  
  
  return (
    <div>
      <GlobalStyle />
      
      <Header />
      
      <ErrorBoundary>
        <Suspense fallback={ <Spinner /> }>
          <Switch>
            <Route exact path='/' component={ HomePage }/>
            <Route path='/shop' component={ ShopPage }/>
            <Route path='/checkout' component={ CheckoutPage } />
            <Route
              path='/signin'
              render={ () => currentUser
                ? ( <Redirect to='/' /> )
                : ( <SignInAndSignUpPage /> )
              }
            />
            
            <Route path='/about' component={ AboutPage }/>
            <Route component={ NotFound } />
          </Switch>
        </Suspense>
      </ErrorBoundary>
    </div>
  );
};



const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch =>({
  checkUserSession: () => dispatch(checkUserSession())
});


export default connect(mapStateToProps, mapDispatchToProps)(Routes);
