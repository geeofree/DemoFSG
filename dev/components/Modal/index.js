import React from 'react'
import './modal.style.sass'

const Modal = ({ children, show }) => (
	<div className={ show ? "modal show" : "modal" }>
		<div className="modal-content">
			{children}
		</div>
	</div>
)

export default Modal
