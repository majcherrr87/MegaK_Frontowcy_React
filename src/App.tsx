import { useRef } from 'react'
import { HomeWork2V2 } from './Referencje/HomeWork2V2'

export const App = () => {
	const formRef = useRef<HTMLFormElement>(null)
	const handleClick = () => {
		formRef.current?.requestSubmit()
	}

	return (
		<>
			{/* <HomeWork2 ref={formRef} /> */}
			<HomeWork2V2 formRef={formRef} />
			<button onClick={handleClick}>Sent</button>
		</>
	)
}
