import { useShallow } from 'zustand/shallow'
import { useGlobalStore } from '../store/useGlobalStore'

export const GlobalStore = () => {
	const [a, b, setA, setB] = useGlobalStore(
		useShallow((state) => [state.a, state.b, state.setA, state.setB]),
	)
	const handleSetA = () => {
		setA(Math.round(Math.random() * 1000))
	}
	const handleSetB = () => {
		setB(Math.round(Math.random() * 1000))
	}

	return (
		<div>
			<h1>
				{a} | {b}
			</h1>
			<button onClick={handleSetA}>set A</button>
			<button onClick={handleSetB}>set B</button>
		</div>
	)
}
