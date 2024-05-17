import { Exercise2Child } from './Execise2_Child'

export const Exercise2Parent = () => {
	const handleClick = (name: string) => {
		console.log(`Hello from ${name}`)
	}
	return (
		<>
			<button onClick={() => handleClick('Parrent')}>Click me </button>
			<Exercise2Child callback={handleClick} />
		</>
	)
}
