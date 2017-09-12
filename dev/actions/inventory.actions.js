import { SELECT_ITEM } from '../constants/inventory.constants'

export const showItem = (id) => ({
	type: SELECT_ITEM,
	payload: { id }
})
