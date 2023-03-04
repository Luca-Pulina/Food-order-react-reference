import { ReactNode } from "react"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../reduxStore"
import { uiActions } from "../../reduxStore/ui-slice"

import CartIcon from "../Cart/CartIcon"

interface Props extends React.BaseHTMLAttributes<HTMLButtonElement> {
	text: string
	children?: ReactNode
	items?: number
}

const HeaderCartButton = ({ text, children, items = 0 }: Props) => {
	const cartItems = useSelector((state: RootState) => state.cart.items)
	const dispatch = useDispatch()

	const toggleCartHandle = () => {
		dispatch(uiActions.toggle())
	}

	const numberOfCartItems = cartItems.reduce((accumulator, item: any) => {
		return accumulator + item.amount
	}, 0)
	return (
		<button
			onClick={() => toggleCartHandle()}
			className='p-1 flex justify-between items-center bg-purple-500 rounded-2xl px-2 w-[9rem] h-8 text-white hover:bg-purple-600 hover:shadow-sm hover:shadow-purple-300'
		>
			<CartIcon />
			<span className='font-semibold'>{text ?? children}</span>
			<div className='w-8 h-6 px-2 rounded-full flex items-center justify-center bg-purple-800'>
				{numberOfCartItems}
			</div>
		</button>
	)
}

export default HeaderCartButton
