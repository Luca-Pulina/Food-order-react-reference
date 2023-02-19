import { ReactNode } from "react"

interface Props extends React.BaseHTMLAttributes<HTMLDivElement> {
	children: ReactNode
}

const Card = ({ children, className }: Props) => {
	return (
		<div
			className={`rounded-lg shadow-border shadow-purple-500 p-2 border-1  text-white ${className}`}
		>
			{children}
		</div>
	)
}

export default Card
