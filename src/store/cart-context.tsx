import React from "react"
import { CartDish } from "../types/Cart"

const CartContext = React.createContext({
	items: [] as CartDish[],
	totalAmount: 0,
	addItem: (item: CartDish) => {
		return
	},
	removeItem: (id: string) => {
		return
	},
	clearCart: () => {
		return
	},
})

export default CartContext
