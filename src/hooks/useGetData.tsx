import { useEffect, useState } from "react"
import { useTranslation } from "react-i18next"
import { HttpStatus } from "../types/http"

export const useGetI18NData = <Item,>(
	initialValue: Item[],
	endPoint: string,
): [Item[], HttpStatus] => {
	const { i18n, t } = useTranslation()
	const [items, setItems] = useState<Item[]>([])

	const [httpStatus, setHttpStatus] = useState<HttpStatus>("start")

	useEffect(() => {
		const fetchMeal = async () => {
			setHttpStatus("loading")

			const response: Response = await fetch(
				`${import.meta.env.VITE_BASE_URL}/${i18n.language}-${endPoint}`,
			)

			if (!response.ok) {
				const errorMessage = t("ERRORS.HTTP_BAD_REQUEST")
				throw Error(errorMessage)
			}
			const responseData: Item[] = await response.json()
			setItems(responseData)
			setHttpStatus("success")
		}

		fetchMeal().catch((error) => {
			setHttpStatus("error")
		})
	}, [i18n.language])

	return [items, httpStatus]
}
