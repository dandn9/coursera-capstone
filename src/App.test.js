import { render, screen } from '@testing-library/react'
import BookingForm from './components/BookingForm'
import { initalizeTimes, updateTimes } from './pages/BookingPage'

test('Renders the booking form heading', () => {
	render(<BookingForm />)
	const headingElement = screen.getByText('Book Now')
	expect(headingElement).toBeInTheDocument()
})

test('initializeTimes Function', () => {
	const result = initalizeTimes()

	expect(result).toMatchObject([])
})

test('updateTimes Function', () => {
	const state = initalizeTimes()

	const result = updateTimes(state)

	expect(result).toMatchObject([])
})
