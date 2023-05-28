import { fireEvent, render, screen } from '@testing-library/react'
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
test('has correct guests validation', () => {
	render(<BookingForm availableTimes={['17:00']} />)

	const guests = screen.getByLabelText('Number of guests')
	fireEvent.change(guests, { target: { value: 100 } })
	const submitBtn = screen.getByRole('submit')

	expect(submitBtn).toHaveClass('pointer-events-none') // means its disabled
})
test('has correct date validation', () => {
	render(<BookingForm availableTimes={['17:00']} />)

	const guests = screen.getByLabelText('Choose date')
	fireEvent.change(guests, { target: { value: '1991-01-01' } })
	const submitBtn = screen.getByRole('submit')

	expect(submitBtn).toHaveClass('pointer-events-none') // means its disabled
})
