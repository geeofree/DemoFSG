import {
	ADD_TO_CART,
	REMOVE_FROM_CART
} from '../constants/cart.constants'

const initialState = []

export default (state=initialState, action) => {
	switch(action.type) {
		case ADD_TO_CART:
			return [...state, action.payload.item]

		case REMOVE_FROM_CART:
			return state.filter(item => item.id !== action.payload.id)

		default:
			return state
	}
}
