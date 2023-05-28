import React from 'react'
import CallToAction from './CallToAction'
import { useNavigate } from 'react-router'
export default function Chicago() {
	const navigate = useNavigate()
	return (
		<section className='w-full bg-black/10'>
			<div className='py-6 grid grid-flow-col container mx-auto justify-between'>
				<div>
					<h1 className='text-4xl font-extrabold mt-2'>Little Lemon</h1>
					<h3 className='text-2xl font-bold mt-2'>Chicago</h3>
					<p className='my-10 max-w-[20rem] '>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua.
					</p>
					<CallToAction onClick={() => navigate('/reservation')}>
						Reserve a table
					</CallToAction>
				</div>
				<div className='max-w-md'>
					<img src={'/icons/Mario and Adrian A.jpg'} />
				</div>
			</div>
		</section>
	)
}
