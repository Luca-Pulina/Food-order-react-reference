import { useTranslation } from "react-i18next"
import { Dish } from "../../types/Meal"
import Card from "../UI/Card"
import MealItemForm from "./MealItemForm"

interface Props {
	item: Dish
}

const MealItem = ({ item }: Props) => {
	const { t } = useTranslation()
	const { name, description } = item
	const price = `${item.price.toFixed(2)} ${t("CURRENCY")}`
	return (
		<div className='p-2 bg-gray-700 m-1 rounded-2xl flex items-center justify-between'>
			<div>
				<h3 className='text-lg font-medium mb-2'>{name}</h3>
				<div>{description}</div>
				<div>{price}</div>
			</div>
			<div>
				<MealItemForm />
			</div>
		</div>
	)
}

export default MealItem
