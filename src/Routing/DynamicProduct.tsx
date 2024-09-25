import { useParams } from 'react-router-dom'

export const DynamicProduct = () => {
	const { productId, addtionnalParam } = useParams<{
		productId: string
		addtionnalParam?: string
	}>()
	return (
		<h1>
			Product {productId} {addtionnalParam ? ` - ${addtionnalParam}` : null}
		</h1>
	)
}
