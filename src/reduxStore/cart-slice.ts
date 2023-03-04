import { createSlice } from "@reduxjs/toolkit"
import { CartDish } from "../types/Cart"

const cartSlice = createSlice({
	name: "cart",
	initialState: {
		items: [] as CartDish[],
		totalQuantity: 0,
		totalPrice: 0,
	},
	reducers: {
		addItemToCart(state, action: { payload: CartDish; type: string }) {
			const newItem = action.payload
			const existingItem = state.items.find((item) => item.id === newItem.id)

			!existingItem ? state.items.push({ ...newItem }) : existingItem.amount++

			state.totalPrice += newItem.price * newItem.amount
		},
		removeItemToCart(state, action: { payload: string; type: string }) {
			const id = action.payload
			const existingItemIndex = state.items.findIndex((item) => item.id === id)
			if (existingItemIndex !== -1) {
				if (state.items[existingItemIndex].amount === 1) {
					state.items.splice(existingItemIndex, 1)
				} else {
					state.items[existingItemIndex].amount--
				}
			}
			state.totalPrice -= state.items[existingItemIndex].price
		},
		clearCart(state) {
			state.items = [] as CartDish[]
			state.totalPrice = 0
		},
	},
})

export const cartActions = cartSlice.actions

export default cartSlice
