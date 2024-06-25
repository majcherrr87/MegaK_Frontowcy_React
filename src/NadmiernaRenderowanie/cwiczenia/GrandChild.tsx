import { memo } from 'react'

type GrandChildProsps = {
	elements: number[]
}

export const GrandChild = memo(({ elements }: GrandChildProsps) => {
	console.log(`Grand Chlid`)
	return <h3>GrandChild {elements.join(', ')}</h3>
})
