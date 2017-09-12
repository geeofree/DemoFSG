import React from 'react'
import './inventory.style.sass'

import { connect }  from 'react-redux'
import { showItem } from '../../actions/inventory.actions'

import ViewHOC from '../../HOC/view.hoc'
import Navbar  from '../../components/Routings/Navbar'
import Link    from '../../components/Routings/Link'
import Image   from '../../components/Image'


const InventoryView = ({ items, cartLength, showItem }) => (
	<div id="inventory">
		<Navbar>
			<h1 style={{
				fontFamily: 'Roboto, sans-serif'
			}}>
				Inventory
			</h1>

			<Link
				to='/cart'
				style={{
				color: '#666',
				padding: '5px',
				border: '1px solid'
			}}>
				My Cart({cartLength})
			</Link>
		</Navbar>

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

const mapStateToProps = ({ inventory, cart }) => ({
	items: inventory.items,
	cartLength: cart.length
})

const mapDispatchToProps = (dispatch) => ({
	showItem: (id) => dispatch(showItem(id))
})

const Inventory = connect(mapStateToProps, mapDispatchToProps)(InventoryView)

export default ViewHOC(Inventory)
