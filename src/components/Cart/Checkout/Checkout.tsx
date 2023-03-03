import { ChangeEvent, Dispatch, SetStateAction, useState, useReducer } from "react"
import { useTranslation } from "react-i18next"
import { CheckoutForm } from "../../../types/Checkout"
import Button from "../../UI/Button"
import Input from "../../UI/Input"
import { defaultFormState, formReducer } from "./FormReducer"

interface Props {
	onClose: Dispatch<SetStateAction<boolean>>
	onConfirm: (userData: CheckoutForm) => void
}

const formInputs = Object.keys(defaultFormState) as Array<keyof typeof defaultFormState>
const isEmpty = (value: string) => value.trim() === ""

const Checkout = ({ onClose, onConfirm }: Props) => {
	const { t } = useTranslation()

	const [emptyFieldError, setEmptyFieldError] = useState("")

	const submitHandler = (event: React.FormEvent) => {
		event.preventDefault()

		const invalidField = formInputs.find((field) => isEmpty(checkoutFormState[field]))
		if (invalidField) {
			setEmptyFieldError(` ${t(invalidField.toUpperCase())} -  is Empty`)
		} else {
			setEmptyFieldError("")
			console.log({ checkoutFormState })
			onConfirm(checkoutFormState)
		}
	}

	const [checkoutFormState, dispatchCheckoutFormAction] = useReducer(
		formReducer,
		defaultFormState,
	)
	const nameChangeHandler = (event: ChangeEvent<HTMLInputElement>, field: keyof CheckoutForm) => {
		dispatchCheckoutFormAction({
			type: "ADD_FIELD",
			item: { fieldName: field, value: event.target.value },
		})
	}

	const formInputDivs = formInputs.map((formInput) => (
		<div key={formInput} className='p-2 flex justify-between gap-2 '>
			<label htmlFor='formInput'>{t(formInput.toUpperCase())}</label>
			<Input
				id='formInput'
				type='text'
				value={checkoutFormState[formInput]}
				onChange={(event) => nameChangeHandler(event, formInput)}
			/>
		</div>
	))

	return (
		<form onSubmit={submitHandler}>
			{formInputDivs}
			{emptyFieldError && <div className='text-red-500'>{emptyFieldError}</div>}
			<footer className='flex py-4 px-2 gap-2 justify-end '>
				<Button type='button' design='secondary' onClick={() => onClose(false)}>
					{t("CANCEL")}
				</Button>
				<Button type='submit' design='primary'>
					{t("CONFIRM")}
				</Button>
			</footer>
		</form>
	)
}

export default Checkout
