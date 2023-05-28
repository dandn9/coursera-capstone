import React from 'react'

export default function CallToAction({ children, onClick }) {
	return (
		<button
			onClick={onClick}
			className='rounded-sm p-2 bg-mainYellow text-black hover:brightness-110 hover:-translate-y-2 transition-all'>
			{children}
		</button>
	)
}
