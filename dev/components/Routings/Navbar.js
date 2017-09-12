import React from 'react'

const Navbar = ({ children }) => (
	<div className="navbar">
		<h1 id="logo">FooBar Shop</h1>
		{children}
	</div>
)

export default Navbar
