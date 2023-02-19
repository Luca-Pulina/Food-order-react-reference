import { HTMLInputTypeAttribute } from "react"

interface Props extends React.BaseHTMLAttributes<HTMLInputElement> {
	type?: HTMLInputTypeAttribute
	id?: string
	labelText?: string
	min?: number
	max?: number
	step?: number
}
const Input = ({ type = "text", id, labelText, min, max, step }: Props) => {
	return (
		<>
			{labelText && <label htmlFor={id}>{labelText}</label>}
			<input
				className=' border-b-2 border-purple-400  bg-gray-700'
				type={type}
				min={min}
				max={max}
				step={step}
				id={id}
			/>
		</>
	)
}

export default Input
