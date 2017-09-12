import React from 'react'
import { connect } from 'react-redux'
import './inventory.style.sass'

import ViewHOC from '../../HOC/view.hoc'
import Navbar  from '../../components/Routings/Navbar'

const InventoryView = ({ items }) => (
	<div id="inventory">
		<Navbar />

		{items.map((item, i) => (
			<div className="item" key={i}>
				<div className="item-img-container" />

				<div className="item-detail-container">
					<h1 className="item-name">{item.name}</h1>

					<div className="item-price-stock">
						<p className="item-price">&#8369;{item.price}</p>

						<p className="item-stock">
							<span style={{ fontWeight: 'bold' }}>In stock: </span>
							{item.stock}
						</p>
					</div>
				</div>
			</div>
		))}
	</div>
)

const mapStateToProps = ({ inventory }) => ({
	items: inventory.items
})

const Inventory = connect(mapStateToProps)(InventoryView)

export default ViewHOC(Inventory)
