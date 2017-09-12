import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = ({ children }) => (
	<div className="navbar">
		<Link to="/">
			<h1 id="logo">FooBar Shop</h1>
		</Link>
		{children}
	</div>
)

export default Navbar
