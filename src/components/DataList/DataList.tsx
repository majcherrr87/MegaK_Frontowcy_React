import { FunctionComponent, ReactNode } from 'react'
import { nanoid } from 'nanoid'

export type DataListProps<T> = {
	items: T[]
	callback: (item: T) => void
	visibleKeys: (keyof T)[]
	RowComponent?: FunctionComponent<{ item: T }>
	RenderRow: (item: T, index: number) => ReactNode
}

export const DataList = <T extends Record<string, string | number>>({
	items,
	callback,
	visibleKeys,
	RenderRow,
}: DataListProps<T>) => {
	return (
		<div>
			<ul>
				{items.map((item, index) =>
					RenderRow ? (
						<li key={nanoid()}>{RenderRow(item, index)}</li>
					) : (
						<li key={nanoid()}>
							{Object.keys(item)
								.filter((key) => visibleKeys.includes(key))
								.map((key, subindex) => (
									<p key={subindex}>
										{key}: {item[key]}
									</p>
								))}
							<button onClick={() => callback(item)}>Click me</button>
						</li>
					),
				)}
			</ul>
		</div>
	)
}
