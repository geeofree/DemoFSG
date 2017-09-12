import React from 'react'
import { Redirect } from 'react-router-dom'

class CartSummary extends React.Component {
	constructor(...args) {
		super(...args)

		const { cart } = this.props

		this.handleChange = this.handleChange.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)

		this.state = {
			payment: 0,
			amount: cart.map(item => item.total).reduce((a, b) => a + b)
		}
	}

	handleChange({ target }) {
		const { name, value } = target
		const isDigit = /^\d*$/.test(value)

		if(isDigit === false) return

		this.setState({ [name]: value < 0 ? 0 : value })
	}

	handleSubmit(event) {
		event.preventDefault()

		const { amount, payment } = this.state
		const { removeStock, clearCart, cart } = this.props
		const change = payment - amount

		if(change < 0) {
			alert('Insufficient Payment Amount')
			return
		}

		cart.forEach(({ id, qty }) => removeStock(id, qty))
		alert('Transaction complete. Thank you for shopping!')
		clearCart()
	}

	render() {
		const { handleChange, handleSubmit, props, state } = this
		const { amount, payment, redirect } = state
		const { cart } = props
		const change = payment - amount

		return redirect && <Redirect to='/' /> || (
			(
				<form id="cart-summary" onSubmit={handleSubmit}>
					<div className="column">
						<h2>Cart Summary</h2>
					</div>

					<div className="column">
						<p>Total Items:</p>
						<p>{cart.map(item => item.qty).reduce((a, b) => a + b)}</p>
					</div>

					<div className="column">
						<p>Total Amount:</p>
						<p>&#8369;{amount}</p>
					</div>

					<div className="column">
						<p>Payment:</p>
						<div>
							&#8369;
							<input
								name='payment'
								value={payment}
								onChange={handleChange}/>
						</div>
					</div>

					<div className="column">
						<p>Change:</p>
						<p>&#8369;{change}</p>
					</div>

					<div className="column">
						<button>Tender</button>
					</div>
				</form>
			)
		)
	}
}

export default CartSummary
