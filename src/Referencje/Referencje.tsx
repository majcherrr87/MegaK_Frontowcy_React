// import { useRef } from 'react'
// import { PartialHTMLInputElement } from './LimitedForwardRefInput'
import { CounterRef } from './CounterRef'

export const Referencje = () => {
	// const LimitedInputRef = useRef<PartialHTMLInputElement>(null)

	// const handelClick = () => {
	// 	document.querySelector('input')?.select()

	// 	LimitedInputRef.current?.focus()
	// }

	return (
		<>
			<CounterRef />
		</>
	)
}
