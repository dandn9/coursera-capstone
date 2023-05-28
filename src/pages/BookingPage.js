import React, { useReducer } from 'react'
import BookingForm from '../components/BookingForm'
import { useNavigate } from 'react-router'

export function updateTimes(state, action) {
	// eslint-disable-next-line no-undef
	return fetchAPI(action.date)
}
export function initalizeTimes() {
	// eslint-disable-next-line no-undef
	return fetchAPI(new Date())
}

export default function Reservation() {
	const [availableTimes, setAvailableTimes] = useReducer(
		updateTimes,
		undefined,
		initalizeTimes
	)
	const navigation = useNavigate()
	function onSubmitHandler(date, time, guests, occasion) {
		// eslint-disable-next-line no-undef
		submitAPI({ date, time, guests, occasion })
		navigation('/confirmed')
	}
	return (
		<BookingForm
			availableTimes={availableTimes}
			onSubmit={onSubmitHandler}
			onChangeAvailableTimes={setAvailableTimes}
		/>
	)
}
