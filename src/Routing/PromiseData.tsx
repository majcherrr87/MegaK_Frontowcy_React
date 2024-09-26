import { useAsyncValue } from 'react-router-dom'

export const PromiseData = () => {
	const data = useAsyncValue() as string
	return <p>{data}</p>
}
