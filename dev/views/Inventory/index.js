import React from 'react'
import './inventory.style.sass'

import { connect }  from 'react-redux'
import { showItem } from '../../actions/inventory.actions'

import ViewHOC  from '../../HOC/view.hoc'
import Navbar   from '../../components/Routings/Navbar'
import Image    from '../../components/Image'
import { Link } from 'react-router-dom'


const InventoryView = ({ items, showItem }) => (
	<div id="inventory">
		<Navbar />

		{items.map((item, i) => (
			<Link to="/item" key={i} onClick={() => showItem(item.id)}>
				<div className="item">
					<div className="item-img-container">
						<Image src={item.image_url} />
					</div>

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
			</Link>
		))}
	</div>
)

const mapStateToProps = ({ inventory }) => ({
	items: inventory.items
})

const mapDispatchToProps = (dispatch) => ({
	showItem: (id) => dispatch(showItem(id))
})

const Inventory = connect(mapStateToProps, mapDispatchToProps)(InventoryView)

export default ViewHOC(Inventory)
