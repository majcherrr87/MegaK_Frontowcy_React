import { Actions } from './component/InfoCard/components/Actions'
import { Description } from './component/InfoCard/components/Description'
import { Title } from './component/InfoCard/components/Title'
import { InfoCard } from './component/InfoCard/InfoCard'
import { InfoData } from './types'

const data: InfoData = {
	title: 'Lorem ipsum',
	description: 'Dolor sit ammet',
	label: 'Click me',
}

export const App = () => {
	return (
		<>
			<InfoCard item={data}>
				<Title />
				<Description />
				<Actions />
			</InfoCard>
			<InfoCard item={data}>
				<Title />
				<Description />
			</InfoCard>
			<InfoCard item={data}>
				<Description />
			</InfoCard>
			<InfoCard item={data}>
				<Title />
				<Actions />
			</InfoCard>
		</>
	)
}
//19:30
