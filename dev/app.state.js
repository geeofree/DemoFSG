import { createStore, applyMiddleware } from 'redux'

import RootReducer from './reducers/root.reducer'
import ReduxThunk  from 'redux-thunk'
import ReduxLogger from 'redux-logger'

const Middleware = applyMiddleware(ReduxThunk, ReduxLogger)

export default createStore(RootReducer, Middleware)
