import React from 'react'
import { Route } from 'react-router-dom'

export default (WrappedComponent) => (props) => (
	<Route {...props} render={WrappedComponent} />
)
