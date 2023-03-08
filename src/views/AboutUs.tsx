import { useTranslation } from "react-i18next"
import { Link } from "react-router-dom"
import Button from "../components/UI/Button"
import Card from "../components/UI/Card"
import { useGetI18NData } from "../hooks/useGetData"
import { Employee } from "../types/Employee"

const AboutUs = () => {
	const { t, i18n } = useTranslation()

	const [staff, httpStatus] = useGetI18NData([] as Employee[], "staff")

	const staffContent: Record<string, JSX.Element> = {
		loading: <h2 className='text-white text-lg'>...{t("LOADING")}</h2>,
		error: <h2 className='text-white text-lg'>...{t("ERROR")}</h2>,
		success: (
			<section>
				{staff.map((employee) => (
					<div
						key={employee.id}
						className='p-2 w-30 bg-gray-700 m-1 rounded-2xl flex flex-col items-start justify-between gap-3'
					>
						<section>
							<h3 className='text-lg font-medium mb-2'>{employee.name}</h3>
							<div>{employee.role}</div>
						</section>
						<footer className='w-full flex justify-end'>
							<Button>
								<Link to={`/staff/${employee.id}`}>
									<div className='w-full h-full '>{t("DETAILS")}</div>
								</Link>
							</Button>
						</footer>
					</div>
				))}
			</section>
		),
	}

	return (
		<section className='w-full border border-purple-500 shadow-border shadow-purple-900 rounded-2xl p-2 text-white'>
			<h2 className='font-bold text-2xl pt-2 pb-4 text-center '>{t("OUR_STAFF")}</h2>
			<div className='flex items-center gap-4 justify-center'>
				<Card className='w-[60%] p-2'>{staffContent[httpStatus]}</Card>
			</div>
			<Button>
				<Link to='/'>
					<div className='w-full h-full  '>{t("GO_TO_HOME")}</div>
				</Link>
			</Button>
		</section>
	)
}

export default AboutUs
