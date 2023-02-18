const DUMMY_DEALS = [
	{
		id: "m1",
		name: "Monster Burger",
		description: "Ugly hamburger with toxic substances",
		price: 16.26,
	},
	{
		id: "m2",
		name: "Fried Fingers",
		description: "Crispy breaded chicken fingers that look like severed fingers",
		price: 12.99,
	},
	{
		id: "m3",
		name: "Spider Soup",
		description: "Thick, hearty soup with spider-shaped noodles",
		price: 9.99,
	},
	{
		id: "m3",
		name: "Ghostly Grilled Cheese",
		description: "Melted cheese sandwich with spooky ghost-shaped bread",
		price: 8.49,
	},
	{
		id: "m5",
		name: "Bat Wings",
		description: "Spicy buffalo chicken wings shaped like bat wings",
		price: 14.99,
	},
]

const AvailableMeals = () => {
	const mealList = DUMMY_DEALS.map((meal) => <li key={meal.id}>{meal.name}</li>)
	return (
		<section>
			<ul>{mealList}</ul>
		</section>
	)
}

export default AvailableMeals
