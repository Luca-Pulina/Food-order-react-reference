import { Dispatch, SetStateAction } from "react"
import { useTranslation } from "react-i18next"
import mealsImage from "../../assets/buffetMonster.jpg"
import HeaderCartButton from "./HeaderCartButton"

interface Props extends React.BaseHTMLAttributes<HTMLDivElement> {
	onShowCart: Dispatch<SetStateAction<boolean>>
}

const Header = ({ className, onShowCart }: Props) => {
	const { t } = useTranslation()
	return (
		<>
			<header className={`flex justify-between items-center px-10 ${className}`}>
				<h1 className=' text-2xl text-purple-600'>{t("APP_TITLE")}</h1>
				<HeaderCartButton text={t("CART")} onShowCart={onShowCart} />
			</header>
			<div className='flex  justify-start items-center w-full max-h-[35%]  overflow-hidden'>
				{/* <img className='w-full' src={mealsImage} alt='A table full of monster food!' /> */}
			</div>
		</>
	)
}

export default Header
