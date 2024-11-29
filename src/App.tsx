import { EvenRow } from './components/DataList/EvenRow'
import { OddRow } from './components/DataList/OddRow'
import { Table } from './components/DataList/Table'

export type SingleElement = {
	id: number
	name: string
	lastname: string
	age: number
	pesel?: string
}

const data: SingleElement[] = [
	{ id: 1, name: 'Adrian', lastname: 'Majcher', age: 37 },
	{ id: 2, name: 'Adrian2', lastname: 'Majcher2', age: 12 },
	{ id: 3, name: 'Adrian3', lastname: 'Majcher3', age: 45 },
	{ id: 4, name: 'Adrian4', lastname: 'Majcher4', age: 33 },
	{
		id: 5,
		name: 'Adrian5',
		lastname: 'Majcher5',
		age: 6,
		pesel: '11111111111',
	},
	{ id: 6, name: 'Adrian6', lastname: 'Majcher6', age: 23 },
	{ id: 7, name: 'Adrian7', lastname: 'Majcher7', age: 46 },
	{ id: 8, name: 'Adrian8', lastname: 'Majcher8', age: 36 },
]

export const App = () => {
	return (
		<>
			<Table
				data={data}
				headers={{
					id: 'ID',
					name: 'Name',
					lastname: 'LastName',
					age: 'Age',
					pesel: 'PESEL',
				}}
				renderRow={(item, index) =>
					index % 2 ? <EvenRow element={item} /> : <OddRow element={item} />
				}
			/>
		</>
	)
}
