import { combineReducers } from 'redux'

import CartReducer      from './cart.reducer'
import InventoryReducer from './inventory.reducer'

export default combineReducers({
	cart:      CartReducer,
	inventory: InventoryReducer
})
