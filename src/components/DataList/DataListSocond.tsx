import { ReactNode } from 'react'
import { nanoid } from 'nanoid'

export type DataListSecondProps<T> = {
	items: T[]
	children?: (items: T[]) => ReactNode
}

export const DataListSecond = <T extends Record<string, string | number>>({
	items,
	children,
}: DataListSecondProps<T>) => {
	if (children) {
		return children(items)
	}
	return (
		<div>
			<ul>
				{items.map((item) => (
					<li key={nanoid()}>
						{Object.keys(item).map((key, subindex) => (
							<p key={subindex}>
								{key}: {item[key]}
							</p>
						))}
					</li>
				))}
			</ul>
		</div>
	)
}
