import React, { useReducer, useState } from 'react'
import BookingForm from '../components/BookingForm'

export function updateTimes(state, action) {
	return state
}
export function initalizeTimes() {
	return []
}

export default function Reservation() {
	const [availableTimes, setAvailableTimes] = useReducer(
		updateTimes,
		undefined,
		initalizeTimes
	)
	return (
		<BookingForm
			availableTimes={availableTimes}
			onChangeAvailableTimes={setAvailableTimes}
		/>
	)
}
