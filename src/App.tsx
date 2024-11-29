import { DataListSecond } from './components/DataList/DataListSocond'

export const App = () => {
	return (
		<>
			<DataListSecond
				items={[
					{ id: 1, value: 'lorem', a: 1, b: 2, c: 3 },
					{ id: 2, value: 'ipsum', a: 1, b: 2, c: 3, label: 'lorem ipsum' },
				]}
			>
				{(items) => <p>{items.map((item) => item.value).join(', ')}</p>}
			</DataListSecond>
		</>
	)

	// return (
	// 	<>
	// 		<DataList
	// 			items={[
	// 				{ id: 1, value: 'lorem', a: 1, b: 2, c: 3 },
	// 				{ id: 2, value: 'ipsum', a: 1, b: 2, c: 3, label: 'lorem ipsum' },
	// 			]}
	// 			visibleKeys={['value', 'label']}
	// 			callback={handleClick}
	// 			RowComponent={SinglDataElement}
	// 			RenderRow={(item, index) =>
	// 				index % 2 === 0 ? (
	// 					<SinglDataElement item={item} />
	// 				) : (
	// 					<p>
	// 						{item.value} - {item.id}
	// 					</p>
	// 				)
	// 			}
	// 		/>
	// 	</>
	// )
}
