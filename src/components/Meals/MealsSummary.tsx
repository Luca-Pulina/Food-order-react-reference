import { useTranslation } from "react-i18next"

const MealsSummary = () => {
	const { t } = useTranslation()
	return (
		<section className='w-full border border-purple-500 shadow-border shadow-purple-900 rounded-2xl p-2 text-white'>
			<h2 className='font-bold text-2xl pt-2 pb-4 text-center '>{t("APP_TITLE")}</h2>
			<div className='flex flex-col gap-4'>
				<p>
					Check out the Unrealistic Food Delivery Website, a spooky restaurant that offers
					a wide range of Monser-themed dishesd
				</p>
				<p>
					Each plate is designed to give you a spooky yet delicious experience. With easy
					online ordering and delivery options, you can enjoy these scary treats in the
					comfort of your own home
				</p>
			</div>
		</section>
	)
}

export default MealsSummary
