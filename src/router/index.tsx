import { createBrowserRouter } from "react-router-dom"
import Meals from "../components/Meals/Meals"
import AboutUs from "../views/AboutUs"

export const router = createBrowserRouter([
	{ path: "/", element: <Meals /> },
	{ path: "/about-us", element: <AboutUs /> },
])
