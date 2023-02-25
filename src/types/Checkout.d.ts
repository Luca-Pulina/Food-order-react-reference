export type CheckoutForm = {
	name: string
	street: string
	cap: string
	city: string
}

export type CHECKOUT_ACTIONS_TYPES = "ADD_NAME" | "ADD_STREET" | "ADD_CAP" | "ADD_CITY"
export type CHECKOUT_ACTIONS = {
	type: "ADD_FIELD"

	item: { fieldName: keyof CheckoutForm; value: string }
}
