import { Dish } from "./Meal"

type CartDish = Dish & { amount: number }

export type CartState = {
	items: CartDish[]
	totalAmount: number
}
