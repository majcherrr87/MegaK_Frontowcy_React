import { DataList } from './components/DataList/DataList'

type SingleElement = {
	id: number
	a: number
	b: number
	c: number
	value: string
	label?: string
}

export const App = () => {
	const handleClick = (element: SingleElement) => {
		console.log(element)
	}

	return (
		<>
			<DataList
				items={[
					{ id: 1, value: 'lorem', a: 1, b: 2, c: 3 },
					{ id: 2, value: 'ipsum', a: 1, b: 2, c: 3, label: 'lorem ipsum' },
				]}
				visibleKeys={['value', 'label']}
				callback={handleClick}
			/>
		</>
	)
}
