import { useEffect, useState } from "react"
import { useTranslation } from "react-i18next"
import { Dish } from "../../types/Meal"
import Card from "../UI/Card"
import MealItem from "./MealItem"

const AvailableMeals = () => {
	const { t, i18n } = useTranslation()
	const [meals, setMeals] = useState<Dish[]>([])

	const [httpStatus, setHttpStatus] = useState<"success" | "loading" | "error" | "start">("start")

	useEffect(() => {
		//TODO: Refactor....maybe with axios
		const fetchMeal = async () => {
			setHttpStatus("loading")

			const response: Response = await fetch(
				`${import.meta.env.VITE_BASE_URL}/${i18n.language}-meals`,
			)

			if (!response.ok) {
				const errorMessage = t("ERRORS.HTTP_BAD_REQUEST")
				throw Error(errorMessage)
			}
			const responseData: Dish[] = await response.json()
			setMeals(responseData)
			setHttpStatus("success")
		}

		fetchMeal().catch((error) => {
			setHttpStatus("error")
		})
	}, [i18n.language])

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
