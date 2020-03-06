export const addItemToCart = (cartItems, cartItemToAdd) => {
	const existingCartItem = cartItems.find(
		cartItem => cartItem.id === cartItemToAdd.id
	);
	
	if (existingCartItem) {
		return cartItems.map(cartItem =>
			cartItem.id === cartItemToAdd.id
				? { ...cartItem, quantity: cartItem.quantity + 1 } //change the quantity of goods
				: cartItem
		);
	}
	// if we are adding goods for the first time
	return [ ...cartItems, { ...cartItemToAdd, quantity: 1 } ];
};
