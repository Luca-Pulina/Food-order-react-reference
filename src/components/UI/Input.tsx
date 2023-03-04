import { ChangeEventHandler, HTMLInputTypeAttribute } from "react"

interface Props extends React.BaseHTMLAttributes<HTMLInputElement> {
	type?: HTMLInputTypeAttribute
	id?: string
	labelText?: string | null
	min?: number
	max?: number
	step?: number
	value?: string | number
	onChange?: ChangeEventHandler<HTMLInputElement>
}
const Input = ({ type = "text", id, labelText, min, max, step, value, onChange }: Props) => {
	return (
		<>
			{labelText && <label htmlFor={id}>{labelText}</label>}
			<input
				className=' border-b-2 border-purple-400  bg-gray-700 text-center'
				type={type}
				min={min}
				max={max}
				step={step}
				id={id}
				value={value}
				onChange={onChange}
			/>
		</>
	)
}

export default Input
