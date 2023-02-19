import { Dispatch, SetStateAction } from "react"
import Modal from "../UI/Modal"

interface Props {
	onClose: Dispatch<SetStateAction<boolean>>
}

const Cart = ({ onClose }: Props) => {
	const cartItems = (
		<ul>
			{[
				{
					id: "m1",
					name: "Monster Burger",
					description: "Ugly hamburger with toxic substances",
					price: 16.26,
				},
			].map((item) => (
				<li key={item.id}>{item.name}</li>
			))}
		</ul>
	)

	return (
		<Modal>
			{cartItems}
			<div>
				<span>Total Amount</span>
				<span>55.65</span>
			</div>
			<div>
				<button onClick={() => onClose(false)}>Close</button>
				<button>Order</button>
			</div>
		</Modal>
	)
}

export default Cart
