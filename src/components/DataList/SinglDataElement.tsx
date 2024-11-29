import { SingleElement } from '../../types'

export type SinglDataElementProps = {
	item: SingleElement
}

export const SinglDataElement = ({ item }: SinglDataElementProps) => {
	return <h2>{item.value}</h2>
}
