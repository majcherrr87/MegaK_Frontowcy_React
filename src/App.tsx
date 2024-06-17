import { useState } from 'react'
import { Child } from './NadmiernaRenderowanie/Child'

export const App = () => {
	const [counter, setCounter] = useState(0)
	const [arr, setArr] = useState([5])

	const inc = () => {
		setCounter((prev) => prev + 1)
	}
	const addToArr = () => {
		setArr((prevValue) => [...prevValue, Math.round(Math.random() * 10)])
	}

	return (
		<div>
			<button onClick={inc}> +1 </button>
			<button onClick={addToArr}>Add To Arr</button>
			<Child value={arr} counter={counter} />
		</div>
	)
}
