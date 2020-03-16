import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect';

import { selectCartItems, selectCartTotal } from 'store/cart/cart.selectors'
import CheckoutItem from "components/checkout-item/checkout-item.component";
import StripeCheckoutButton from "components/stripe-button/stripe-button.component";

import './checkout.styles.scss';


const CheckoutPage = ({ cartItems, total }) => (
	<div className='checkout-page'>
		<table className='checkout-header'>
			<thead>
			<tr>
				<th className='header-block header-block--product'>Product</th>
				<th className='header-block header-block--description'>Description</th>
				<th className='header-block header-block--quantity'>Quantity</th>
				<th className='header-block header-block--price'>Price</th>
				<th className='header-block header-block--remove'>Remove</th>
			</tr>
			</thead>
			<tbody>
				{
					cartItems.map(cartItem =>
						<CheckoutItem key={ cartItem.id } cartItem={ cartItem } /> )
				}
			</tbody>
		</table>
		
		<div className='total'>
			<span>TOTAL: ${ total }</span>
		</div>
		
		<div className='test-warning'>
			*Please use the following test credit card for payments*
			<br />
			4242 4242 4242 4242 - Exp: 12/28 - CVV: 123
		</div>
		
		<StripeCheckoutButton price={ total } />
	</div>
);


CheckoutPage.propTypes = {
	cartItems: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.number,
		imageUrl: PropTypes.string,
		name: PropTypes.string,
		price: PropTypes.number,
		quantity: PropTypes.number
	})),
	total: PropTypes.number.isRequired
};


const mapStateToProps = createStructuredSelector({
	cartItems: selectCartItems,
	total: selectCartTotal
});


export default connect(mapStateToProps)(CheckoutPage)
