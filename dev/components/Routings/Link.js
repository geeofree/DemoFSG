import React from 'react'
import { Link as RouteLink } from 'react-router-dom'

const endpoint = false && '/DemoFSG' || ''

const Link = ({ to, ...props }) => (
	<RouteLink {...props} to={`${endpoint && endpoint || ''}${to}`} />
)

export default Link
