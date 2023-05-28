import React from 'react'
import Header from './Header'
import Main from './Main'
import { Outlet } from 'react-router'
import Footer from './Footer'

export default function Layout() {
	return (
		<>
			<Header />
			<Main>
				<Outlet />
			</Main>
			<Footer />
		</>
	)
}
