import { createSelector } from 'reselect';


const selectCart = state => state.cart; // data from state without memoization

export const selectCartItems = createSelector(
	[ selectCart ], // track data
	cart => cart.cartItems // call if state change
);

export const selectCartItemsCount = createSelector(
	[ selectCartItems ],
	cartItems =>
		cartItems.reduce(((accumulatedQuantity, cartItem) =>
			accumulatedQuantity + cartItem.quantity), 0
		)
);

export const selectCartHidden = createSelector(
	[ selectCart ],
	cart => cart.hidden
);

// total cart price
export const selectCartTotal = createSelector(
	[ selectCartItems ],
	cartItems => cartItems.reduce(((accumulatedQuantity, cartItem) =>
		accumulatedQuantity + cartItem.quantity * cartItem.price), 0
	)
);