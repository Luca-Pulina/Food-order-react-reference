import AvailableMeals from "./AvailableMeals"
import MealsSummary from "./MealsSummary"

const Meals = () => {
	return (
		<section className='flex flex-col gap-4 w-[50%]'>
			<MealsSummary />
			<AvailableMeals />
		</section>
	)
}

export default Meals
