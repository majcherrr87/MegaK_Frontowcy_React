import { Link, useSubmit } from 'react-router-dom'
import { SingleInfo } from '../types'

type InfoProps = {
	info: SingleInfo
}

export const Info = ({ info }: InfoProps) => {
	const submit = useSubmit()

	const handleSubmit = () => {
		submit({ id: info.id }, { method: 'DELETE', action: '/' })
	}
	return (
		<li>
			<h2>{info.title}</h2>
			<button onClick={handleSubmit}>Delete</button>
			<Link to={info.id}>Edit</Link>
		</li>
	)
}
