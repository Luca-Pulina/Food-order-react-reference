import { ReactNode } from "react"

interface Props {
	type?: "button" | "submit" | "reset" | undefined
	textContent?: string
	children?: ReactNode
	onClick?: (params: any) => void
	color?: string
	textColor?: string
	design?: "primary" | "secondary"
}

const Button = ({
	type,
	textContent,
	onClick,
	children,
	color = "bg-purple-500",
	textColor = "text-white",
	design,
}: Props) => {
	const standardDesign: Record<string, string> = {
		primary: "rounded-xl bg-purple-500 py-2 px-4 text-white font-semibold",
		secondary: "rounded-xl bg-white py-2 px-4 text-purple-500 font-semibold",
	}

	const buttonDesign = design
		? standardDesign[design]
		: `rounded-xl ${color} py-2 px-4 ${textColor} font-semibold`

	return (
		<button className={buttonDesign} type={type ?? "button"} onClick={onClick}>
			{textContent ?? children}
		</button>
	)
}

export default Button
