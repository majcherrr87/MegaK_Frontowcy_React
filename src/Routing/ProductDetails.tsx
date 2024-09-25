import { useEffect } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'

export const ProductDetails = () => {
	const navigate = useNavigate()
	const disable = true

	// if (disable) return <Navigate relative="path" to=".." />

	useEffect(() => {
		setTimeout(() => {
			navigate('..', { relative: 'path' })
		}, 1000)
	}, [])
	return (
		<div>
			<h1>Product: ID 1234567890</h1>
			<Link relative="path" to="..">
				Go back to product overview
			</Link>
			<p>
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat,
				necessitatibus voluptatum. Id corrupti molestiae corporis dolores
				assumenda quos et delectus, tenetur dolor omnis saepe illum excepturi
				accusantium est sapiente labore?
			</p>
		</div>
	)
}
