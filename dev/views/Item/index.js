import React from 'react'
import ViewHOC from '../../HOC/view.hoc'

const ItemView = (props) => (
	<h1>You are in the Item View {console.log(props)}</h1>
)

export default ViewHOC(ItemView)
