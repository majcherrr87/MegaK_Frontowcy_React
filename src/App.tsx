import { BasicTooltip } from './component/BasicTooltip'

import { LabelWithTooltip } from './component/LabelWithTooltip'
import { Section } from './component/Section'

export const App = () => {
	return (
		// <>
		// 	<Foo>
		// 		<h1>Not in Portal</h1>
		// 	</Foo>
		// 	<FooPortal>
		// 		<h1>In Portal</h1>
		// 	</FooPortal>
		// </>
		<Section>
			<LabelWithTooltip text="lorem ipsum" tooltip="Dolor sit amet" />
			<BasicTooltip />
		</Section>
	)
}
