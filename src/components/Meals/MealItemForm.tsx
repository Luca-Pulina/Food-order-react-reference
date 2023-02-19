import Input from "../UI/Input"

const MealItemForm = () => {
	return (
		<form className='flex flex-col' action=''>
			<Input
				type='number'
				id='amount'
				labelText='Amount'
				defaultValue={1}
				min={1}
				max={5}
				step={1}
			/>
			<br />
			<button>Confirm</button>
		</form>
	)
}

export default MealItemForm
