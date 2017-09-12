import React from 'react'
import ViewHOC from '../../HOC/view.hoc'
import Navbar  from '../../components/Routings/Navbar'
import Link    from '../../components/Routings/Link'


const Page404 = () => (
	<div style={{ padding: '20px' }}>
		<Navbar>
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

		<h1>Page Not Found</h1>
	</div>
)

export default ViewHOC(Page404)
