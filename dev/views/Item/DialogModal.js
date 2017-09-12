import React from 'react'
import Modal from '../../components/Modal'
import { Link } from 'react-router-dom'

const DialogModal = (props) => (
	<Modal {...props}>
		<h1>
			Successfully added to cart!
			<span style={{ color: '#2ed253' }}>✔</span>
		</h1>
		<div className="redirect-choice">
			<Link to="/" className="redirect-btn home">← Browse Items</Link>
			<Link to="/cart" className="redirect-btn cart">Check Cart →</Link>
		</div>
	</Modal>
)

export default DialogModal
