import { useTranslation } from "react-i18next"
import { useGetI18NData } from "../../hooks/useGetData"
import { Dish } from "../../types/Meal"
import Card from "../UI/Card"
import MealItem from "./MealItem"

const AvailableMeals = () => {
	const { t, i18n } = useTranslation()
	const [meals, httpStatus] = useGetI18NData([] as Dish[], "meals")

	const cardContent: Record<string, JSX.Element> = {
		loading: <h2 className='text-white text-lg'>...{t("LOADING")}</h2>,
		error: <h2 className='text-white text-lg'>...{t("ERROR")}</h2>,
		success: (
			<ul>
				{meals.map((meal) => (
					<li key={meal.id} className='my-2'>
						{<MealItem item={meal} />}
					</li>
				))}
			</ul>
		),
	}

	return (
		<section>
			<Card className='p-2'>{cardContent[httpStatus]}</Card>
		</section>
	)
}

export default AvailableMeals
