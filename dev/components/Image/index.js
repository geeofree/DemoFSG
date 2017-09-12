import React from 'react'

const Image = ({ src, alt, ...props }) => (
	<div {...props} style={{
		background: `url('${src}') #F7F7F7 no-repeat center`,
		backgroundSize: 'cover',
		width: '100%',
		height: '100%'
	}}>
		{alt}
	</div>
)

export default Image
