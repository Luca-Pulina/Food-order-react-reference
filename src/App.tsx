import { useState } from "react"
import Cart from "./components/Cart/Cart"
import Header from "./components/Layout/Header"
import Meals from "./components/Meals/Meals"

function App() {
	const [isShownCart, setIsShownCart] = useState(false)

	return (
		<div className='w-screen h-screen bg-gray-900'>
			{isShownCart && <Cart onClose={setIsShownCart} />}
			<Header
				onShowCart={setIsShownCart}
				className='w-full h-[10%] border-b-2 border-purple-600  shadow-purple-800 shadow-md'
			/>
			<main className='w-full py-10 flex justify-center '>
				<Meals />
			</main>
		</div>
	)
}

export default App
