import { ChangeEvent, useState } from "react"
import { useTranslation } from "react-i18next"
import Input from "../UI/Input"

interface Props {
	onAddToCart: (p: number) => void
}

const MealItemForm = ({ onAddToCart }: Props) => {
	const { t } = useTranslation()
	const [amount, setAmount] = useState(0)
	const submitHandler = (event: React.FormEvent) => {
		event.preventDefault()
		onAddToCart(amount)
	}

	const amountChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
		setAmount(+event.target.value)
	}

	return (
		<form className='flex flex-col' onSubmit={submitHandler}>
			<Input
				type='number'
				id='amount'
				labelText={t("AMOUNT")}
				defaultValue={1}
				min={1}
				max={5}
				step={1}
				value={amount}
				onChange={amountChangeHandler}
			/>
			<br />
			<button type='submit'>+ {t("ADD")}</button>
		</form>
	)
}

export default MealItemForm
