import {
	SELECT_ITEM,
	REMOVE_ITEM_STOCK
} from '../constants/inventory.constants'

export const showItem = (id) => ({
	type: SELECT_ITEM,
	payload: { id }
})

export const removeStock = (id, qty) => ({
	type: REMOVE_ITEM_STOCK,
	payload: { id, qty }
})
