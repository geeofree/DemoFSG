import React from 'react'
import './cart.style.sass'

import { connect } from 'react-redux'
import { removeStock } from '../../actions/inventory.actions'

import ViewHOC     from '../../HOC/view.hoc'
import Navbar      from '../../components/Routings/Navbar'
import Link        from '../../components/Routings/Link'
import Image       from '../../components/Image'
import CartSummary from './CartSummary'

const CartView = ({ cart, removeStock }) => (
	<div id="cart">
		<Navbar>
			<h1 style={{
				fontFamily: 'Roboto, sans-serif'
			}}>
				My Cart
			</h1>

			<Link
				to='/'
				style={{
				color: '#666',
				padding: '5px',
				border: '1px solid'
			}}>
				← Browse Items
			</Link>
		</Navbar>


		{cart.length && (
			<div id="cart-content">
				<div id="cart-item-list">
					{cart.map((item, i) => (
						<div className="cart-item" key={i}>
							<div className="img-item-container">
								<Image src={item.image_url} />
							</div>

							<h1 className="item-name">{item.name}</h1>
							<p className="item-price">&#8369;{item.price}</p>
							<p className="item-qty">{item.qty}</p>
							<p className="item-total">&#8369;{item.total}</p>
						</div>
					))}
				</div>

				<CartSummary cart={cart} removeStock={removeStock} />
			</div>
		) || (
			<h1>No item added in cart yet</h1>
		)}
	</div>
)

const mapStateToProps = ({ cart }) => ({ cart })

const mapDispatchToProps = (dispatch) => ({
	removeStock: (id, qty) => dispatch(removeStock(id, qty))
})

const Cart = connect(mapStateToProps, mapDispatchToProps)(CartView)

export default ViewHOC(Cart)
