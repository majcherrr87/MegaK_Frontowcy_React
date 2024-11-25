import { LightBulb } from './components/LightBulb'

export const App = () => {
	return (
		<>
			<LightBulb>
				<LightBulb.ContentOn>Light is On</LightBulb.ContentOn>
				<LightBulb.Switch />
				<LightBulb.ContentOff>Light is Off</LightBulb.ContentOff>
			</LightBulb>
		</>
	)
}
