import React from 'react'
import './app.style.sass'

import { Switch } from 'react-router-dom'
import Router from './components/Routings/Router'

import Cart      from './views/Cart'
import Item      from './views/Item'
import Inventory from './views/Inventory'
import Page404   from './views/Page404'

const Application = () => (
	<Router>
		<Switch>
			<Inventory path='/DemoFSG' exact />
			<Item path='/DemoFSG/item' />
			<Cart path='/DemoFSG/cart' />
			<Page404 />
		</Switch>
	</Router>
)

export default Application
