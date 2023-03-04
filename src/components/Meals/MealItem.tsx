import { useTranslation } from "react-i18next"
import { Dish } from "../../types/Meal"

import MealItemForm from "./MealItemForm"
import { useDispatch } from "react-redux"
import { cartActions } from "../../reduxStore/cart-slice"

interface Props {
	item: Dish
}

const MealItem = ({ item }: Props) => {
	const { t } = useTranslation()
	const dispatch = useDispatch()
	const { name, description } = item
	const price = `${item.price.toFixed(2)} ${t("CURRENCY")}`
	const addToCartHandler = (amount: number) => {
		dispatch(cartActions.addItemToCart({ ...item, amount }))
	}
	const removeToCartHandler = () => {
		dispatch(cartActions.removeItemToCart(item.id))
	}
	return (
		<div className='p-2 bg-gray-700 m-1 rounded-2xl flex items-center justify-between'>
			<div>
				<h3 className='text-lg font-medium mb-2'>{name}</h3>
				<div>{description}</div>
				<div>{price}</div>
			</div>
			<div>
				<MealItemForm onAddToCart={addToCartHandler} onRemoveToCart={removeToCartHandler} />
			</div>
		</div>
	)
}

export default MealItem
