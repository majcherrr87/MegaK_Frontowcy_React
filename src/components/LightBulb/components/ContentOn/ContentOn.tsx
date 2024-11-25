import { ReactNode } from 'react'
import { useLightBulbContext } from '../../hooks/useLightBulbContext'

export type ContentOnProps = {
	children: ReactNode
}

export const ContentOn = ({ children }: ContentOnProps) => {
	const { isOn } = useLightBulbContext()

	if (!isOn) return null
	return <div>{children}</div>
}
