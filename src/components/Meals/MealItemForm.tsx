import { ChangeEvent, useState } from "react"
import { useTranslation } from "react-i18next"
import Button from "../UI/Button"
import Input from "../UI/Input"

interface Props {
	onAddToCart: (p: number) => void
	onRemoveToCart: () => void
}

const MealItemForm = ({ onAddToCart, onRemoveToCart }: Props) => {
	const { t } = useTranslation()
	const [amount, setAmount] = useState(0)

	const amountChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
		setAmount(+event.target.value)
	}

	const handleRemove = () => {
		onRemoveToCart()
		setAmount(0)
	}
	const handleAdd = () => {
		onAddToCart(amount)
		setAmount(0)
	}

	return (
		<div className='flex flex-col'>
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
			<div className='flex gap-2 items-center justify-center'>
				<Button design='secondary' onClick={handleRemove}>
					{t("REMOVE")}
				</Button>
				<Button onClick={handleAdd}>{t("ADD")}</Button>
			</div>
		</div>
	)
}

export default MealItemForm
