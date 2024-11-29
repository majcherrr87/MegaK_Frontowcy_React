import { Fragment, ReactNode } from 'react'

export type TableProps<T> = {
	data: T[]
	headers: Required<{
		[key in keyof T]: string
	}>
	renderRow?: (item: T, index: number) => ReactNode
}

export const Table = <T extends Record<string, string | number>>({
	data,
	headers,
	renderRow,
}: TableProps<T>) => {
	return (
		<table>
			<thead>
				<tr>
					{Object.keys(headers).map((key) => (
						<th key={key}>{headers[key]}</th>
					))}
				</tr>
			</thead>
			<tbody>
				{data.map((element, index) => (
					<Fragment key={index}>
						{renderRow ? (
							renderRow(element, index)
						) : (
							<tr>
								{Object.keys(headers).map((key) => (
									<td key={key}>{element[key] || '-'}</td>
								))}
							</tr>
						)}
					</Fragment>
				))}
			</tbody>
			<tfoot></tfoot>
		</table>
	)
}
