import React, { useState } from 'react'

export default function BookingForm({ availableTimes, onChangeAvailableTimes }) {
	const [date, setDate] = useState('')
	const [time, setTime] = useState('')
	const [guests, setGuests] = useState('')
	const [occasion, setOccasion] = useState('')

	function onSubmitHandler(e) {
		e.preventDefault()
	}

	return (
		<>
			<h1>Book Now</h1>
			<form className='grid max-w-[200px] gap-5' onSubmit={onSubmitHandler}>
				<label htmlFor='res-date'>Choose date</label>
				<input
					type='date'
					id='res-date'
					onChange={(e) => setDate(e.target.value)}
					value={date}
				/>
				<label htmlFor='res-time'>Choose time</label>
				<select
					id='res-time'
					onChange={(e) => setTime(e.target.value)}
					value={time}>
					<option>17:00</option>
					<option>18:00</option>
					<option>19:00</option>
					<option>20:00</option>
					<option>21:00</option>
					<option>22:00</option>
				</select>
				<label htmlFor='guests'>Number of guests</label>
				<input
					type='number'
					placeholder='1'
					min='1'
					max='10'
					id='guests'
					onChange={(e) => setGuests(e.target.value)}
					value={guests}
				/>
				<label htmlFor='occasion'>Occasion</label>
				<select
					id='occasion'
					onChange={(e) => setOccasion(e.target.value)}
					value={occasion}>
					<option>Birthday</option>
					<option>Anniversary</option>
				</select>
				<input type='submit' value='Make Your reservation' />
			</form>
		</>
	)
}
