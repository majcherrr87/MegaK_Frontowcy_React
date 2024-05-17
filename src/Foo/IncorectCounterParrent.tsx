import { FirstConter } from './FirstConter'
import { SecondConter } from './SecondConter'

export const IncorectCounterParrent = () => {
	return (
		<h1>
			<FirstConter />
			|
			<SecondConter />
		</h1>
	)
}
