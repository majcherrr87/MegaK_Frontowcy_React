import { SecondTooltip } from './component/secondTooltip/SecondTooltip'
import { Section } from './component/section/Section'
import { Tooltip } from './component/Tooltip/Tooltip'

export const App = () => {
	return (
		<>
			<Section>
				<Tooltip text="Lorem Ipsum">
					<div>Element 1</div>
				</Tooltip>
				<SecondTooltip text="Dolor sit amet">
					<div>Element 2</div>
				</SecondTooltip>
			</Section>
		</>
	)
}
