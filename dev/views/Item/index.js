import React from 'react'
import './item.style.sass'

import { connect } from 'react-redux'
import { addToCart } from '../../actions/cart.actions'

import ViewHOC from '../../HOC/view.hoc'
import Navbar from '../../components/Routings/Navbar'

const ItemView = ({ item, addToCart }) => (
	<div id="item">
		<Navbar />

		{ item && (
			<div id="item-details">
				<div className="item-img-container"></div>

				<div className="item-info-container">
					<h1 className="item-name">{item.name}</h1>
					<p className="item-price">
						<span style={{ fontWeight: 'bold' }}>Price: </span>
						&#8369;{item.price}
					</p>
					<p className="item-stock">
						<span style={{ fontWeight: 'bold' }}>In stock: </span>
						{item.stock}
					</p>
					<p className="item-description">{item.description}</p>

					<button
						className="add-item-button"
						onClick={() => addToCart(item)}>
						Add to Cart
					</button>
				</div>
			</div>
		) || (
			<h1>No item currently selected</h1>
		)}
	</div>
)


const mapStateToProps = ({ inventory }) => ({
	item: inventory.selectedItem
})

const mapDispatchToProps = (dispatch) => ({
	addToCart: (item) => dispatch(addToCart(item))
})

const Item = connect(mapStateToProps, mapDispatchToProps)(ItemView)

export default ViewHOC(Item)
