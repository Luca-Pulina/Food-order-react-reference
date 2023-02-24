import { ReactNode, useReducer } from "react"
import { CartDish, CartState } from "../types/Cart"
import CartContext from "./cart-context"

type ACTIONTYPE = { type: "ADD_ITEM"; item: CartDish } | { type: "REMOVE_ITEM"; id: string }
interface Props {
	children: ReactNode
}

const defaultCartState: CartState = {
	items: [] as CartDish[],
	totalAmount: 0,
}

const cartReducer = (state: typeof defaultCartState, action: ACTIONTYPE): CartState => {
	switch (action.type) {
		case "ADD_ITEM": {
			const existingItemIndex = state.items.findIndex((item) => item.id === action.item.id)
			const updateTotalAmount = state.totalAmount + action.item.price * action.item.amount

			let updateItems
			if (existingItemIndex !== -1) {
				const updateItem = {
					...state.items[existingItemIndex],
					amount: state.items[existingItemIndex].amount,
				}
				updateItems = [...state.items]
				updateItems[existingItemIndex] = updateItem
			} else {
				updateItems = state.items.concat(action.item)
			}
			return { items: updateItems, totalAmount: updateTotalAmount }
			break
		}
		case "REMOVE_ITEM":
			{
				const existingItemIndex = state.items.findIndex((item) => item.id === action.id)
				//TODO
			}
			break

		default:
			break
	}

	return defaultCartState
}

const CartProvider = ({ children }: Props) => {
	const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState)
	const addItemToCartHandler = (item: CartDish) => {
		dispatchCartAction({ type: "ADD_ITEM", item })
	}
	const removeItemToCartHandler = (id: string) => {
		dispatchCartAction({ type: "REMOVE_ITEM", id })
	}
	const cartContext = {
		items: cartState.items,
		totalAmount: cartState.totalAmount,
		addItem: addItemToCartHandler,
		removeItem: removeItemToCartHandler,
	}
	return <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
}

export default CartProvider
