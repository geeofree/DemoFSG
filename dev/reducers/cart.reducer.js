import {
	ADD_TO_CART,
	REMOVE_FROM_CART
} from '../constants/cart.constants'

const initialState = []

export default (state=initialState, action) => {
	switch(action.type) {
		case ADD_TO_CART:
			const newCartItem = {
				...action.payload.item,
				qty: 1,
				total: action.payload.item.price
			}

			const duplicateItem = state.find(item => item.id === newCartItem.id)

			if(duplicateItem) {
				return state.map(item => (
					item.id === newCartItem.id ? {
						...item,
						qty: item.qty + 1,
						total: item.price * (item.qty + 1)
					} : item
				))
			}
			return [...state, newCartItem]

		case REMOVE_FROM_CART:
			return state.filter(item => item.id !== action.payload.id)

		default:
			return state
	}
}
