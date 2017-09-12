import React from 'react'
import './cart.style.sass'

import { connect } from 'react-redux'

import ViewHOC  from '../../HOC/view.hoc'
import Navbar   from '../../components/Routings/Navbar'
import Image    from '../../components/Image'
import { Link } from 'react-router-dom'

const CartView = ({ cart }) => (
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
						</div>
					))}
				</div>

				<div id="cart-summary">
					<div className="column">
						<h3>Total Items:</h3>
						<p>{cart.length}</p>
					</div>

					<div className="column">
						<h3>Total Amount:</h3>
						<p>{cart.map(item => item.price).reduce((a, b) => a + b)}</p>
					</div>
				</div>
			</div>
		) || (
			<h1>No item added in cart yet</h1>
		)}
	</div>
)

const mapStateToProps = ({ cart }) => ({ cart })

const Cart = connect(mapStateToProps)(CartView)

export default ViewHOC(Cart)
