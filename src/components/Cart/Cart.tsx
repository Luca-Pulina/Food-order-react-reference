import { Dispatch, SetStateAction, useContext, useState } from "react"
import { useTranslation } from "react-i18next"
import CartContext from "../../store/cart-context"
import { CheckoutForm } from "../../types/Checkout"
import Button from "../UI/Button"
import Modal from "../UI/Modal"
import Checkout from "./Checkout/Checkout"

interface Props {
	onClose: Dispatch<SetStateAction<boolean>>
}

const Cart = ({ onClose }: Props) => {
	const { t } = useTranslation()
	const cartCtx = useContext(CartContext)
	const [isCheckout, setCheckout] = useState(false)
	const [isSubmitting, setIsSubmitting] = useState(false)
	const cartItems = (
		<ul>
			{cartCtx.items.map((item) => (
				<li key={item.id}>
					x{item.amount} - {item.name}
				</li>
			))}
		</ul>
	)

	const orderHandler = () => {
		setCheckout(true)
	}

	const submitOrderHandler = async (userData: CheckoutForm) => {
		//const orderDate = new Date
		const orderDate = new Date()
		setIsSubmitting(true)
		const response: Response = await fetch(`${import.meta.env.VITE_BASE_URL}/orders`, {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({
				id: Math.random(), //very bad...
				user: userData,
				items: cartCtx.items,
				date: orderDate.toLocaleDateString("en-US"),
			}),
		})
		setIsSubmitting(false)
		if (!isSubmitting) {
			onClose(false)
			cartCtx.clearCart()
		}
	}
	return (
		<Modal>
			<div className='flex w-full h-full rounded-2xl flex-col gap-4 bg-gray-800 p-6'>
				{cartItems}
				<div className='px-2 pb-4 border-b-2 border-b-white  '>
					<span className='text-lg font-semibold '>{t("TOTAL_AMOUNT")}: </span>
					<span>
						{cartCtx.totalAmount.toFixed(2)} {t("CURRENCY")}
					</span>
				</div>
				{isCheckout && <Checkout onConfirm={submitOrderHandler} onClose={onClose} />}
				{!isCheckout && (
					<div className='w-full flex justify-end gap-2'>
						<Button design='secondary' onClick={() => onClose(false)}>
							{t("CLOSE")}
						</Button>
						{!!cartCtx.items.length && (
							<Button onClick={orderHandler} design='primary'>
								{t("ORDER")}
							</Button>
						)}
					</div>
				)}
			</div>
		</Modal>
	)
}

export default Cart
