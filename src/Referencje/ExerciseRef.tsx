import { MutableRefObject } from 'react'

type Props = {
	passedRef: MutableRefObject<HTMLInputElement | null>
}

export const ExerciseRef = ({ passedRef }: Props) => {
	return <input type="text" ref={passedRef} />
}
