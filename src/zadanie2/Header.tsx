import { ReactNode } from 'react'

type Props = {
	title: string
	children: ReactNode
}

export const Header = ({ title, children }: Props) => (
	<header>
		<h1>{title}</h1>
		{/* <UserProfiler email={email} /> */}
		{children}
	</header>
)
