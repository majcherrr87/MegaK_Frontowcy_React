import { Suspense, useCallback, useState } from 'react'
import { Use } from './components/Use'
import { ErrorBoundary } from 'react-error-boundary'

export const App = () => {
	const [visible, setVisible] = useState(true)
	const promise = useCallback(
		() =>
			new Promise<number[]>((resolve, reject) => {
				setTimeout(() => {
					const random = Math.random()
					if (random > 0.5) {
						resolve([1, 2, 3, 4, 5])
					} else {
						reject()
					}
				}, 500)
			}),
		[],
	)

	return (
		<>
			<ErrorBoundary fallback={<p>Something wrong happened!</p>}>
				<button onClick={() => setVisible((prev) => !prev)}>Click</button>
				<Suspense fallback={<p>Loading data...</p>}>
					<Use dataPromise={promise()} visible={visible} />
				</Suspense>
			</ErrorBoundary>
		</>
	)
}
