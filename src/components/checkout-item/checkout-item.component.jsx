import React from 'react';
import { connect } from 'react-redux';

import { clearItemFromCart, addItem, removeItem } from 'store/cart/cart.actions';

import './checkout-item.styles.scss';


const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem }) => {
	const { name, imageUrl, price, quantity } = cartItem;
	
	return (
		<tr className='checkout-item'>
			<td className='image-container'>
				<img src={ imageUrl } alt='item' />
			</td>
			<td className='name'>{ name }</td>
			<td className='handler'>
				<div className='quantity'>
	        <span className='arrow' onClick={ () => removeItem(cartItem) }>
	          &#10094;
	        </span>
	        <span className='value'>{ quantity }</span>
	        <span className='arrow' onClick={ () => addItem(cartItem) }>
	          &#10095;
	        </span>
				</div>
      </td>
			<td className='price'>{ price }</td>
			<td className='remove-button' onClick={ () => clearItem(cartItem) }>
				&#10005;
			</td>
		</tr>
	);
};


const mapDispatchToProps = dispatch => ({
	clearItem: item => dispatch(clearItemFromCart(item)),
	addItem: item => dispatch(addItem(item)),
	removeItem: item => dispatch(removeItem(item))
});

export default connect(
	null,
	mapDispatchToProps
)(CheckoutItem);
