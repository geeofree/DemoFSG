import React    from 'react'
import ReactDOM from 'react-dom'

import { Provider } from 'react-redux'
import AppState     from './app.state'
import Application  from './app.main'

const DemoFSG = () => (
	<Provider store={AppState}>
		<Application />
	</Provider>
)

const root = document.getElementById('root')
ReactDOM.render(<DemoFSG />, root)
