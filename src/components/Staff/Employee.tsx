import { useTranslation } from "react-i18next"
import { useParams } from "react-router-dom"

const Employee = () => {
	const { t } = useTranslation()
	const { id } = useParams()
	return (
		<div className='text-white'>
			{t("EMPLOYEE")}: {id}
		</div>
	)
}

export default Employee
