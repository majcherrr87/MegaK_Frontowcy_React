import { useState } from 'react'
import { Light } from './Light'
import { Dark } from './Dark'

export const Switcher = () => {
	const [switcher, setSwitcher] = useState(false)

	return (
		<>
			<button onClick={() => setSwitcher((prev) => !prev)}>
				{switcher ? 'Turn Off' : 'Turn On'}
			</button>
			{switcher ? <Light /> : <Dark />}
		</>
	)
}
