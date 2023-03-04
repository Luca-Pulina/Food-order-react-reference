import { useSelector } from "react-redux"
import { RouterProvider } from "react-router-dom"
import Cart from "./components/Cart/Cart"
import Header from "./components/Layout/Header"
import Meals from "./components/Meals/Meals"
import { RootState } from "./reduxStore"
import { router } from "./router"

function App() {
	const showCart = useSelector((state: RootState) => state.ui.cartIsVisible)

	return (
		<div className='w-screen h-screen overflow-y-scroll'>
			{showCart && <Cart />}
			<Header className='w-full h-[10%] border-b-2 border-purple-600  shadow-purple-800 shadow-md' />
			<main className='w-full py-10 flex justify-center'>
				<RouterProvider router={router} />
			</main>
		</div>
	)
}

export default App
