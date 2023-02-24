import { Dispatch, SetStateAction, useContext } from "react"
import CartContext from "../../store/cart-context"
import Modal from "../UI/Modal"

interface Props {
	onClose: Dispatch<SetStateAction<boolean>>
}

const Cart = ({ onClose }: Props) => {
	const cartCtx = useContext(CartContext)
	const cartItems = (
		<ul>
			{cartCtx.items.map((item) => (
				<li key={item.id}>
					x{item.amount} - {item.name}
				</li>
			))}
		</ul>
	)

	return (
		<Modal>
			<div className='flex w-full h-full rounded-2xl flex-col gap-4 bg-gray-800'>
				{cartItems}
				<div>
					<span>Total Amount: </span>
					<span>{cartCtx.totalAmount.toFixed(2)} $</span>
				</div>
				<div className='w-full flex justify-end'>
					<button
						className='bg-white rounded-2xl text-purple-500 px-4 py-2'
						onClick={() => onClose(false)}
					>
						Close
					</button>
					<button className='bg-purple-500 rounded-2xl text-purple-white px-4 py-2'>
						Order
					</button>
				</div>
			</div>
		</Modal>
	)
}

export default Cart
