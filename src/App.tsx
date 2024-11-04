import { Bar } from './component/Bar'
import { Foo } from './component/Foo'
import { GlobalStore } from './component/GlobalStore'
import { MyIp } from './component/MyIp'
import { Result } from './component/Result'

export const App = () => {
	return (
		<>
			<Foo />
			<Bar />
			<Result />
			<MyIp />
			<GlobalStore />
		</>
	)
}
