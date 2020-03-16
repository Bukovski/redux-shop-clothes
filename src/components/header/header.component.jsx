import React from 'react';
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { signOutStart } from "store/user/user.action";
import { selectCartHidden } from "store/cart/cart.selectors";
import { selectCurrentUser } from "store/user/user.selectors";

import CartIcon from "components/cart-icon/cart-icon.component";
import CartDropdown from "components/cart-dropdown/cart-dropdown.component";

import { ReactComponent as Logo } from 'assets/crown.svg';

import { HeaderContainer, LogoContainer, OptionsContainer, OptionLink } from './header.styles';
import './header.styles.scss'


const Header = ({ currentUser, hidden, signOutStart }) => {
  return (
    <HeaderContainer>
      <LogoContainer to='/'>
        <Logo className='logo' />
      </LogoContainer>
      
      <OptionsContainer>
        <OptionLink to='/shop' activeClassName='is-active'>SHOP</OptionLink>
        <OptionLink to='/about' activeClassName='is-active'>ABOUT</OptionLink>
        
        { currentUser ? (
            <OptionLink as='div' onClick={ signOutStart }>SIGN OUT</OptionLink>
          ) : (
            <OptionLink to='/signin' activeClassName='is-active'>SIGN IN</OptionLink>
          )
        }
  
        <CartIcon />
      </OptionsContainer>
      
      {/* show/hide dropdown top mini-menu */}
      { hidden ? null : <CartDropdown /> }
    </HeaderContainer>
  );
};


const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});

const mapDispatchToProps = dispatch => ({
  signOutStart: () => dispatch(signOutStart())
});


export default connect(mapStateToProps, mapDispatchToProps)(Header);
