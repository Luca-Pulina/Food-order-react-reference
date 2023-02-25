import { CheckoutForm, CHECKOUT_ACTIONS } from "../../../types/Checkout"

export const defaultFormState: CheckoutForm = {
	name: "",
	street: "",
	cap: "",
	city: "",
}

export const formReducer = (
	state: typeof defaultFormState,
	action: CHECKOUT_ACTIONS,
): CheckoutForm => {
	switch (action.type) {
		case "ADD_FIELD": {
			const updateForm = { ...state, [action.item.fieldName]: action.item.value }
			return updateForm
		}

		default:
			break
	}

	return defaultFormState
}
