import React from 'react'
import './item.style.sass'

import { connect } from 'react-redux'
import { addToCart } from '../../actions/cart.actions'

import ViewHOC     from '../../HOC/view.hoc'
import Navbar      from '../../components/Routings/Navbar'
import Image       from '../../components/Image'
import DialogModal from './DialogModal'
import { Link }    from 'react-router-dom'


class ItemView extends React.Component {
	constructor(...args) {
		super(...args)

		this.addItem = this.addItem.bind(this)

		this.state = {
			item: null,
			showModal: false
		}
	}

	componentDidUpdate() {
		const { item } = this.state
		const { addToCart } = this.props

		addToCart(item)
	}

	addItem(item) {
		this.setState({ item, showModal: true })
	}

	render() {
		const { showModal } = this.state
		const { item } = this.props
		const { addItem } = this

		return (
			<div id="item">
				<Navbar>
					<h1 style={{
						fontFamily: 'Roboto, sans-serif'
					}}>
						Item Details
					</h1>
					<Link
						to='/'
						style={{
						color: '#666',
						padding: '5px',
						border: '1px solid',
						margin: '0 4px'
					}}>
						← Browse Items
					</Link>
				</Navbar>


				{ item && (
					<div id="item-details">
						<div className="item-img-container">
							<Image src={item.image_url} />
						</div>

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
								onClick={() => addItem(item)}>
								Add to Cart
							</button>
						</div>
					</div>
				) || (
					<h1>No item currently selected</h1>
				)}

				<DialogModal show={showModal}/>
			</div>
		)
	}
}

const mapStateToProps = ({ inventory }) => ({
	item: inventory.selectedItem
})

const mapDispatchToProps = (dispatch) => ({
	addToCart: (item) => dispatch(addToCart(item))
})

const Item = connect(mapStateToProps, mapDispatchToProps)(ItemView)

export default ViewHOC(Item)
