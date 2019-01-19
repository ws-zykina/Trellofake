import React from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const CustomModal = (props, {children}) => {
	return (
		<Modal {...props}>
			{children}
		</Modal>
	)
}
export default CustomModal
