import React from 'react'
import { BrowserRouter } from 'react-router-dom'

const Router = ({ children }) => (
	<BrowserRouter>
		<div id="router">
			{children}
		</div>
	</BrowserRouter>
)

export default Router
