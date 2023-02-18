import { useTranslation } from "react-i18next"

function App() {
	const { t, i18n } = useTranslation()
	return (
		<div>
			<h1 className='text-2xl text-red-600'> {t("welcome")}</h1>
		</div>
	)
}

export default App
