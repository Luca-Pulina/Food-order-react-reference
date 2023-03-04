import React from "react"
import { Link } from "react-router-dom"
import Header from "../components/Layout/Header"

const ErrorPage = () => {
	return (
		<div className='w-screen h-screen overflow-y-scroll'>
			<Header className='w-full h-[10%] border-b-2 border-purple-600  shadow-purple-800 shadow-md' />
			<main className='w-full py-10 flex flex-col items-center'>
				<p className='text-white'> Page not found</p>
				<p className='text-white'>
					<Link to='/' className=' hover:text-purple-500'>
						Return to Home
					</Link>
				</p>
			</main>
		</div>
	)
}

export default ErrorPage
