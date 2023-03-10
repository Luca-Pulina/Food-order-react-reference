import { createBrowserRouter } from "react-router-dom"
import Meals from "../components/Meals/Meals"
import Employee from "../components/Staff/Employee"
import AboutUs from "../views/AboutUs"
import ErrorPage from "../views/ErrorPage"
import Home from "../views/Home"

export const router = createBrowserRouter([
	{
		path: "/",
		element: <Home />,
		errorElement: <ErrorPage />,
		children: [
			{ path: "/", element: <Meals /> },
			{ path: "/about-us", element: <AboutUs /> },
			{ path: "/staff/:id", element: <Employee /> },
		],
	},
])
