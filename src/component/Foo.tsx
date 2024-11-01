import { useShallow } from 'zustand/shallow'
import { useFooStore } from '../store/useFooStore'

export const Foo = () => {
	const { value, setValue } = useFooStore(
		useShallow((state) => ({ value: state.value, setValue: state.setValue })),
	)

	const handleRandomValue = () => {
		setValue(Math.round(Math.random() * 100))
	}

	return (
		<div>
			<button onClick={handleRandomValue}>Set random value</button>
			<div>{value}</div>
		</div>
	)
}
