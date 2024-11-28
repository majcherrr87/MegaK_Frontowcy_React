import { useReducer } from 'react'

type CounterState = {
	counter: number
	clicks: number
}

type IncreaseAction = {
	type: 'INCREASE'
}
type DecreaseAction = {
	type: 'DECREASE'
}
type ResetAction = {
	type: 'RESET'
	payload: number
}
type CounterAction = IncreaseAction | DecreaseAction | ResetAction

const counterReducer = (state: CounterState, action: CounterAction) => {
	switch (action.type) {
		case 'INCREASE':
			return {
				...state,
				counter: state.counter + 1,
				clicks: state.clicks + 1,
			}
		case 'DECREASE':
			return {
				...state,
				counter: state.counter - 1,
				clicks: state.clicks + 1,
			}
		case 'RESET':
			return {
				...state,
				counter: action.payload,
			}
	}
}

const initialState: CounterState = {
	counter: 0,
	clicks: 0,
}

export const Counter = () => {
	const [data, dispatch] = useReducer(counterReducer, initialState)

	const increase = () => {
		dispatch({ type: 'INCREASE' })
	}
	const decrease = () => {
		dispatch({ type: 'DECREASE' })
	}
	const reset = () => {
		dispatch({ type: 'RESET', payload: 0 })
	}

	return (
		<div>
			<h1>
				{data.counter} - {data.clicks}
			</h1>
			<button onClick={increase}>+1</button>
			<button onClick={decrease}>-1</button>
			<button onClick={reset}>Reset</button>
		</div>
	)
}
