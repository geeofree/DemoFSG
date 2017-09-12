import {
	ADD_TO_CART,
	REMOVE_FROM_CART
} from '../constants/cart.constants'

export const addToCart = (item) => ({
	type: ADD_TO_CART,
	payload: { item }
})
