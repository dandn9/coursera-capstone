import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

function Link({ to, children }) {
	return (
		<NavLink
			to={to}
			className={({ isActive }) => (isActive ? 'text-mainYellow underline' : '')}>
			{children}
		</NavLink>
	)
}

export default function Nav() {
	return (
		<nav className='w-full'>
			<ul className='grid grid-flow-col justify-stretch items-center text-center grow w-full'>
				<li>
					<Link to='/'>Home</Link>
				</li>
				<li>
					<Link to='/about'>About</Link>
				</li>
				<li>
					<Link to='/menu'>Menu</Link>
				</li>
				<li>
					<Link to='/reservation'>Reservations</Link>
				</li>
				<li>
					<Link to='/order'>Order online</Link>
				</li>
				<li>
					<Link to='/login'>Login</Link>
				</li>
			</ul>
		</nav>
	)
}
