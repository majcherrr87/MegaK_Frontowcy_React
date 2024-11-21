import { Section } from './component/section/Section'
import { Tooltip } from './component/Tooltip/Tooltip'

export const App = () => {
	return (
		<>
			<Section>
				<Tooltip text="Lorem Ipsum">
					<div>lorem Ipsum</div>
				</Tooltip>
			</Section>
		</>
	)
}
