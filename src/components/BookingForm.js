import React, { startTransition, useState } from 'react'
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
	const [isValid, setIsValid] = useState(true)
	const [errorState, setErrorState] = useState({})

	function addError(key, value) {
		setErrorState((prev) => ({ ...prev, [key]: value }))

		setIsValid(false)
	}
	console.log(errorState)
	function removeError(key) {
		setErrorState((prev) => {
			const newState = { ...prev, [key]: undefined }
			if (Object.values(newState).filter((e) => e).length === 0) setIsValid(true)
			return newState
		})
	}
	function onChangeGuests(e) {
		if (+e.target.value > 10 || +e.target.value < 1) {
			addError('guests', 'Guests can not be more than 10 or less than 1')
		} else {
			removeError('guests')
		}
		setGuests(e.target.value)
	}
	function onChangeData(e) {
		const selectedDate = new Date(e.target.value)

		if (selectedDate < new Date()) {
			addError('date', 'Can not reserve a Date from the past')
		} else {
			removeError('date')
			onChangeAvailableTimes({ date: selectedDate })
		}
		setDate(e.target.value)
	}

	return (
		<section className='w-full bg-black/10 py-10'>
			<div className='container mx-auto'>
				<h1 className=' font-extrabold text-4xl'>Book Now</h1>
				<form
					className='mt-4 grid max-w-[400px] gap-5'
					onSubmit={(e) => onSubmit(date, time, guests, occasion)}>
					<label htmlFor='res-date'>Choose date</label>
					<input
						type='date'
						id='res-date'
						onChange={onChangeData}
						value={date}
					/>
					{errorState?.date && (
						<p className='text-red-600'>{errorState?.date}</p>
					)}
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
						onChange={onChangeGuests}
						value={guests}
					/>
					{errorState?.guests && (
						<p className='text-red-600'>{errorState?.guests}</p>
					)}
					<label htmlFor='occasion'>Occasion</label>
					<select
						id='occasion'
						onChange={(e) => setOccasion(e.target.value)}
						value={occasion}>
						<option>Birthday</option>
						<option>Anniversary</option>
					</select>
					<CallToAction
						ariaLabel={'On Click'}
						type='submit'
						role='submit'
						className={
							isValid ? '' : 'pointer-events-none touch-none bg-gray-500'
						}>
						Make Your reservation
					</CallToAction>
				</form>
			</div>
		</section>
	)
}
