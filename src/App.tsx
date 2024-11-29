import { DataList } from './components/DataList/DataList'
import { SinglDataElement } from './components/DataList/SinglDataElement'
import { SingleElement } from './types'

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
				RowComponent={SinglDataElement}
				RenderRow={(item, index) =>
					index % 2 === 0 ? (
						<SinglDataElement item={item} />
					) : (
						<p>
							{item.value} - {item.id}
						</p>
					)
				}
			/>
		</>
	)
}
