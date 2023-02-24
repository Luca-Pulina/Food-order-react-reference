import { useTranslation } from "react-i18next"
import { Dish } from "../../types/Meal"
import { useContext } from "react"

import MealItemForm from "./MealItemForm"
import CartContext from "../../store/cart-context"

interface Props {
	item: Dish
}

const MealItem = ({ item }: Props) => {
	const { t } = useTranslation()
	const cartCtx = useContext(CartContext)
	const { name, description } = item
	const price = `${item.price.toFixed(2)} ${t("CURRENCY")}`
	const addToCartHandler = (amount: number) => {
		console.log("amount", amount)
		cartCtx.addItem({ ...item, amount })
	}
	return (
		<div className='p-2 bg-gray-700 m-1 rounded-2xl flex items-center justify-between'>
			<div>
				<h3 className='text-lg font-medium mb-2'>{name}</h3>
				<div>{description}</div>
				<div>{price}</div>
			</div>
			<div>
				<MealItemForm onAddToCart={addToCartHandler} />
			</div>
		</div>
	)
}

export default MealItem
