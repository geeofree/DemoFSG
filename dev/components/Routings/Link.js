import React from 'react'
import { Link as RouteLink } from 'react-router-dom'

// For production/dev routes
const endpoint = true && '/DemoFSG' || ''

const Link = ({ to, ...props }) => (
	<RouteLink {...props} to={`${endpoint && endpoint || ''}${to}`} />
)

export default Link
