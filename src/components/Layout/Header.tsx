import { Dispatch, SetStateAction } from "react"
import { useTranslation } from "react-i18next"
import mealsImage from "../../assets/buffetMonster.jpg"
import Button from "../UI/Button"
import HeaderCartButton from "./HeaderCartButton"

const Header = ({ className }: React.BaseHTMLAttributes<HTMLDivElement>) => {
	const { t, i18n } = useTranslation()
	const handleSwitchLanguage = () => {
		i18n.language === "en" ? i18n.changeLanguage("it") : i18n.changeLanguage("en")
	}
	return (
		<>
			<header className={`flex justify-between items-center px-10 ${className}`}>
				<h1 className=' text-2xl text-purple-600'>{t("APP_TITLE")}</h1>
				<div className='flex justify-between items-center gap-2'>
					<HeaderCartButton text={t("CART")} />
					<Button design='secondary' onClick={handleSwitchLanguage}>
						{i18n.language.toUpperCase()}
					</Button>
				</div>
			</header>
			<div className='flex  justify-start items-center w-full max-h-[35%]  overflow-hidden'>
				{/* <img className='w-full' src={mealsImage} alt='A table full of monster food!' /> */}
			</div>
		</>
	)
}

export default Header
