import Header from "./components/Layout/Header"
import Meals from "./components/Meals/Meals"

function App() {
	return (
		<div className='w-screen h-screen bg-gray-900'>
			<Header className='w-full h-[10%] border-b-2 border-purple-600  shadow-purple-800 shadow-md  ' />
			<main className='w-full py-10 flex  justify-center '>
				<Meals />
			</main>
		</div>
	)
}

export default App
