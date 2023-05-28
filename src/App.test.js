import { render, screen } from '@testing-library/react'
import BookingForm from './components/BookingForm'
import { initalizeTimes, updateTimes } from './pages/BookingPage'

test('Renders the booking form heading', () => {
	render(<BookingForm availableTimes={[]} />)
	const headingElement = screen.getByText('Book Now')
	expect(headingElement).toBeInTheDocument()
})

test('initializeTimes Function', () => {
	window.fetchAPI = jest.fn(() => [1, 2, 3])

	const result = initalizeTimes()

	expect(result).toMatchObject([1, 2, 3])
})

test('updateTimes Function', () => {
	window.fetchAPI = jest.fn(() => [1, 2, 3])
	const state = initalizeTimes()

	const result = updateTimes(state, { date: new Date() })

	expect(result).toMatchObject([1, 2, 3])
})
