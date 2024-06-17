import { useCallback } from 'react'
import { ChildWithFunction } from './ChildWithFunction'

type AppProps = {
	id: number
}

export const App_NadmierneRenderowanie = ({ id }: AppProps) => {
	const foo = useCallback((value: number) => {
		const url = `https://api.test.com/${id}?value=${value}`
		console.log(`Calling`, url)
	}, [])

	return (
		<div>
			<ChildWithFunction callback={foo} />
		</div>
	)
}

// import { useState } from 'react'
// import { Child } from './Child'

// export const App_NadmierneRenderowanie = () => {
// 	const [counter, setCounter] = useState(0)
// 	const [arr, setArr] = useState([5])

// 	const inc = () => {
// 		setCounter((prev) => prev + 1)
// 	}
// 	const addToArr = () => {
// 		setArr((prevValue) => [...prevValue, Math.round(Math.random() * 10)])
// 	}

// 	return (
// 		<div>
// 			<button onClick={inc}> +1 </button>
// 			<button onClick={addToArr}>Add To Arr</button>
// 			<Child value={arr} counter={counter} />
// 		</div>
// 	)
// }
