import { useShallow } from 'zustand/shallow'
import { useFooStore } from '../store/useFooStore'

export const Bar = () => {
	const [otherValue, increaseOtherValue] = useFooStore(
		useShallow((state) => [state.otherValue, state.increaseOtherValue]),
	)

	const increase = () => {
		increaseOtherValue()
	}

	return (
		<div>
			<div>{otherValue}</div>
			<button onClick={increase}>Increase</button>
		</div>
	)
}
