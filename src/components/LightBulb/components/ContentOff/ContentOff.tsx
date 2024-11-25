import { ReactNode } from 'react'
import { useLightBulbContext } from '../../hooks/useLightBulbContext'

export type ContentOffProps = {
	children: ReactNode
}

export const ContentOff = ({ children }: ContentOffProps) => {
	const { isOn } = useLightBulbContext()

	if (isOn) return null
	return <div>{children}</div>
}
