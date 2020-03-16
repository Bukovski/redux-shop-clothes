import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from "reselect";

import { toggleCartHidden } from 'store/cart/cart.actions';
import { selectCartItemsCount } from "store/cart/cart.selectors";

import { ReactComponent as ShoppingIcon } from 'assets/shopping-bag.svg';

import './cart-icon.styles.scss';


const CartIcon = ({ toggleCartHidden, itemCount }) => (
  <div className='cart-icon' onClick={ toggleCartHidden }>
    <ShoppingIcon className='shopping-icon' />
    <span className='item-count'>{ itemCount }</span>
  </div>
);


CartIcon.propTypes = {
  itemCount: PropTypes.number.isRequired,
  toggleCartHidden: PropTypes.func.isRequired
};


const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount
});


export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
