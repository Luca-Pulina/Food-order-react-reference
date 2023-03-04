import { useState } from "react"
import { useTranslation } from "react-i18next"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../reduxStore"
import { cartActions } from "../../reduxStore/cart-slice"
import { uiActions } from "../../reduxStore/ui-slice"
import { CheckoutForm } from "../../types/Checkout"
import Button from "../UI/Button"
import Modal from "../UI/Modal"
import Checkout from "./Checkout/Checkout"

const Cart = () => {
	const { t } = useTranslation()
	const dispatch = useDispatch()
	const [isCheckout, setCheckout] = useState(false)
	const [isSubmitting, setIsSubmitting] = useState(false)
	const cartItems = useSelector((state: RootState) => state.cart.items)
	const totalPriceCart = useSelector((state: RootState) => state.cart.totalPrice)
	const mappedcartItems = (
		<ul>
			{cartItems.map((item) => (
				<li key={item.id}>
					x{item.amount} - {item.name} - {item.price}
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
				items: cartItems,
				date: orderDate.toLocaleDateString("en-US"),
			}),
		})
		setIsSubmitting(false)
		if (!isSubmitting) {
			dispatch(uiActions.toggle())
			dispatch(cartActions.clearCart())
		}
	}
	return (
		<Modal>
			<div className='flex w-full h-full rounded-2xl flex-col gap-4 bg-gray-800 p-6'>
				{mappedcartItems}
				<div className='px-2 pb-4 border-b-2 border-b-white  '>
					<span className='text-lg font-semibold '>{t("TOTAL_AMOUNT")}: </span>
					<span>
						{" "}
						{totalPriceCart.toFixed(2)} {t("CURRENCY")}{" "}
					</span>
				</div>
				{isCheckout && <Checkout onConfirm={submitOrderHandler} />}
				{!isCheckout && (
					<div className='w-full flex justify-end gap-2'>
						<Button design='secondary' onClick={() => dispatch(uiActions.toggle())}>
							{t("CLOSE")}
						</Button>
						{!!cartItems.length && (
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
