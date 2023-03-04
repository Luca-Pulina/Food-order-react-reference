import React from "react"
import { Link } from "react-router-dom"
import Button from "../components/UI/Button"

const AboutUs = () => {
	return (
		<section className='w-full border border-purple-500 shadow-border shadow-purple-900 rounded-2xl p-2 text-white'>
			<h2 className='font-bold text-2xl pt-2 pb-4 text-center '>Prova</h2>
			<div className='flex flex-col gap-4'>
				<p>Prova prova prova</p>
			</div>
			<Button>
				<Link to='/'>
					<div className='w-full h-full border border-white rounded-xl '>Go to Meals</div>
				</Link>
			</Button>
		</section>
	)
}

export default AboutUs
