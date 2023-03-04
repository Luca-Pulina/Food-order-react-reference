import { useTranslation } from "react-i18next"
import { Link } from "react-router-dom"
import Button from "../UI/Button"

const MealsSummary = () => {
	const { t } = useTranslation()
	return (
		<section className='w-full border border-purple-500 shadow-border shadow-purple-900 rounded-2xl p-2 text-white'>
			<h2 className='font-bold text-2xl pt-2 pb-4 text-center '>{t("APP_TITLE")}</h2>
			<div className='flex flex-col gap-4'>
				<p>{t("SUMMARY.P1")}</p>
				<p>{t("SUMMARY.P2")}</p>
				<Button>
					<Link to='/about-us'>
						<div className='w-full h-full border border-white rounded-xl '>
							About us
						</div>
					</Link>
				</Button>
			</div>
		</section>
	)
}

export default MealsSummary
