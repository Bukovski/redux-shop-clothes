import React from 'react';
import PropTypes from 'prop-types';

import './cart-item.style.scss';


const CartItem = ({ item : { imageUrl, price, name, quantity } }) => (
  <div className='cart-item'>
    <img src={ imageUrl } alt={ name } loading="auto" width="70" height="100"/>
    <div className='item-details'>
      <span className='name'>{ name }</span>
      <span className='price'>{ quantity } x € { price }</span>
    </div>
  </div>
);


CartItem.propTypes = {
  item: PropTypes.shape({
    imageUrl: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.number,
    quantity: PropTypes.number
  })
};


export default CartItem;
