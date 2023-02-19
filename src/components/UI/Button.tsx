import { ReactNode } from "react"

interface Props {
	type?: "button" | "submit" | "reset" | undefined
	textContent?: string
	children?: ReactNode
	onClick: (params: any) => void
	color?: string
}

const Button = ({ type, textContent, onClick, children, color = "bg-purple-500" }: Props) => {
	return (
		<button
			className={`rounded-xl ${color} py-2 px-4 text-white font-semibold`}
			type={type ?? "button"}
			onClick={onClick}
		>
			{textContent ?? children}
		</button>
	)
}

export default Button
