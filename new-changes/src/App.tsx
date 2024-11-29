import { useState } from 'react'
import { Foo } from './Foo'

export const App = () => {
	'use memo'
	const [count, setCount] = useState<number>(0)
	const [toggle, setToggle] = useState<boolean>(false)

	const increment = () => {
		setCount((prev) => prev + 1)
	}

	const switchToggle = () => {
		setToggle((prev) => !prev)
	}

	return (
		<>
			<div>
				<button onClick={increment}>+1</button>
				<button onClick={switchToggle}>Toggle</button>
				<Foo value={count} toggle={toggle} />
			</div>
		</>
	)
}
