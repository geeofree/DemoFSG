import React from 'react'
import { connect } from 'react-redux'

import ViewHOC from '../../HOC/view.hoc'
import Navbar from '../../components/Routings/Navbar'

const ItemView = () => (
	<div id="item-details">
		<Navbar />
	</div>
)

export default ViewHOC(ItemView)
