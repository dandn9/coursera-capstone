import React from 'react'

export default function CallToAction({
	children,
	onClick,
	type,
	className,
	role,
	ariaLabel,
}) {
	return (
		<button
			type={type}
			aria-label={ariaLabel}
			onClick={onClick}
			role={role}
			className={`rounded-sm p-2 bg-mainYellow text-black hover:brightness-110 hover:-translate-y-2 transition-all ${
				className ?? ''
			}`}>
			{children}
		</button>
	)
}
