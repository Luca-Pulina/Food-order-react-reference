import { ReactNode } from "react"
import ReactDOM from "react-dom"
import Card from "./Card"

interface Props {
	children?: ReactNode
}

const BackDrop = ({ children }: Props) => {
	return (
		<div className='flex justify-center items-center w-screen h-screen z-10 fixed top-0 left-0 backdrop-blur-sm bg-white/30'>
			<ModalOverlay>{children}</ModalOverlay>
		</div>
	)
}

const ModalOverlay = ({ children }: Props) => {
	return <Card>{children}</Card>
}

const portalElement = document.getElementById("overlays")

const Modal = ({ children }: Props) => {
	return (
		<>
			{portalElement && ReactDOM.createPortal(<BackDrop>{children}</BackDrop>, portalElement)}
		</>
	)
}

export default Modal
