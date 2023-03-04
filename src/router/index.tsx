import { createBrowserRouter } from "react-router-dom"
import Meals from "../components/Meals/Meals"
import AboutUs from "../views/AboutUs"
import Home from "../views/Home"

export const router = createBrowserRouter([
	{
		path: "/",
		element: <Home />,
		children: [
			{ path: "/", element: <Meals /> },
			{ path: "/about-us", element: <AboutUs /> },
		],
	},
])
