import { ReactNode } from 'react'
import { createPortal } from 'react-dom'

export type FooPortalProps = {
	children: ReactNode
}

export const FooPortal = ({ children }: FooPortalProps) => {
	return createPortal(<div>{children}</div>, document.getElementById('portal')!)
}
