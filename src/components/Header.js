import React from 'react'
import Nav from './Nav'
import { Outlet } from 'react-router'

export default function Header() {
	return (
		<>
			<header className='flex container mx-auto my-10 gap-2 items-center md:flex-row flex-col'>
				<img src={'/icons/Logo.svg'} alt='logo' />
				<Nav />
			</header>
			<Outlet />
		</>
	)
}
