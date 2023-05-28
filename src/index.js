import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Homepage from './pages/Homepage'
import reportWebVitals from './reportWebVitals'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import BookingPage from './pages/BookingPage'
import Layout from './components/layout/Layout'
import ConfirmedBooking from './pages/ConfirmedBooking'
import NotFound from './pages/NotFound'

const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />, // layout route

		children: [
			{ path: '/', element: <Homepage /> },
			{ path: '/reservation', element: <BookingPage /> },
			{ path: '/confirmed', element: <ConfirmedBooking /> },
			{ path: '*', element: <NotFound /> },
		],
	},
])

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<React.StrictMode>
		<RouterProvider router={router}></RouterProvider>
	</React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
