import { Dispatch, SetStateAction, ReactNode } from "react"
import CartIcon from "../Cart/CartIcon"

interface Props extends React.BaseHTMLAttributes<HTMLButtonElement> {
	text: string
	children?: ReactNode
	items?: number
	onShowCart: Dispatch<SetStateAction<boolean>>
}

const HeaderCartButton = ({ text, children, items = 0, onShowCart }: Props) => {
	return (
		<button
			onClick={() => onShowCart(true)}
			className='p-1 px-3 flex justify-between items-center bg-purple-500 rounded-2xl px-2 w-[9rem] h-8 text-white hover:bg-purple-600 hover:shadow-sm hover:shadow-purple-300'
		>
			<CartIcon />
			<span className='font-semibold'>{text ?? children}</span>
			<div className='w-8 h-6 px-2 rounded-full flex items-center justify-center bg-purple-800'>
				{items}
			</div>
		</button>
	)
}

export default HeaderCartButton
