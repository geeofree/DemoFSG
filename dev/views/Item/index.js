import React from 'react'
import { connect } from 'react-redux'
import './item.style.sass'

import ViewHOC from '../../HOC/view.hoc'
import Navbar from '../../components/Routings/Navbar'

const ItemView = ({ item }) => (
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

const Item = connect(mapStateToProps)(ItemView)

export default ViewHOC(Item)
