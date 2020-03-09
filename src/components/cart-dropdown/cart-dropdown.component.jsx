import React from 'react';
import { withRouter } from 'react-router-dom'
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { toggleCartHidden } from "store/cart/cart.actions";
import { selectCartItems } from "store/cart/cart.selectors";

import CartItem from 'components/cart-item/cart-item.component';
import CustomButton from 'components/custom-button/custom-button.component';

import './cart-dropdown.styles.scss';


const CartDropdown = ({ cartItems, history, dispatch }) => {
  const handleClickButton = () => {
    history.push('/checkout');
    dispatch(toggleCartHidden())
  };
  
  return (
    <div className='cart-dropdown'>
    <div className='cart-items'>
      {
        cartItems.length
          ? cartItems.map(cartItem => (
            <CartItem key={ cartItem.id } item={ cartItem }/>
          ))
          : (<span className='empty-message'>Your cart is empty</span>)
      }
    </div>
    <CustomButton onClick={ handleClickButton }>GO TO CHECKOUT</CustomButton>
    </div>
  )
};


const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});


export default withRouter(connect(mapStateToProps)(CartDropdown));
