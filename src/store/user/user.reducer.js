import UserActionTypes from  './user.types'


const InitialState = {
	currentUser: null,
	error: null
};

const userReducer  = (state = InitialState, action) =>{
	switch (action.type) {
		case UserActionTypes.SIGN_IN_SUCCESS:
			return { ...state, currentUser: action.payload, error: null };
		
		case UserActionTypes.SIGN_IN_FAILURE:
			return { ...state, error: action.payload };
			
		default:
			return state;
	}
};


export default userReducer;
