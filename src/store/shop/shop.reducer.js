import ShopActionTypes from './shop.types';


const InitialState = {
	collections: null
};

const shopReducer = (state = InitialState, action) => {
	switch (action.type) {
		case ShopActionTypes.UPDATE_COLLECTIONS:
			return {
				...state,
				collections: action.payload
			};
			
		default:
			return state;
	}
};


export default shopReducer;