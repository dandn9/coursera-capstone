import React from 'react'

export default function Nav() {
	return (
		<nav>
			<img src={'/icons/Logo.svg'} />
			<ul>
				<li>
					<a href='/'>Home</a>
				</li>
				<li>
					<a href='/'>About</a>
				</li>
				<li>
					<a href='/'>Menu</a>
				</li>
				<li>
					<a href='/'>Reservations</a>
				</li>
				<li>
					<a href='/'>Order online</a>
				</li>
				<li>
					<a href='/'>Login</a>
				</li>
			</ul>
		</nav>
	)
}
