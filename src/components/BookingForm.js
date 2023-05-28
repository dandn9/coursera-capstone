import React, { useState } from 'react'
import CallToAction from './CallToAction'

export default function BookingForm({
	availableTimes,
	onChangeAvailableTimes,
	onSubmit,
}) {
	const [date, setDate] = useState('')
	const [time, setTime] = useState('')
	const [guests, setGuests] = useState('')
	const [occasion, setOccasion] = useState('')

	function onChangeData(e) {
		setDate(e.target.value)

		// console.log(new Date(e.target.value))
		onChangeAvailableTimes({ date: new Date(e.target.value) })
	}

	return (
		<section className='w-full bg-black/10 py-10'>
			<div className='container mx-auto'>
				<h1 className=' font-extrabold text-4xl'>Book Now</h1>
				<form
					className='mt-4 grid max-w-[200px] gap-5'
					onSubmit={(e) => onSubmit(date, time, guests, occasion)}>
					<label htmlFor='res-date'>Choose date</label>
					<input
						type='date'
						id='res-date'
						onChange={onChangeData}
						value={date}
					/>
					<label htmlFor='res-time'>Choose time</label>
					<select
						id='res-time'
						onChange={(e) => setTime(e.target.value)}
						value={time}>
						{availableTimes.map((time) => (
							<option key={time} value={time}>
								{time}
							</option>
						))}
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
					<CallToAction type='submit'>Make Your reservation</CallToAction>
				</form>
			</div>
		</section>
	)
}
