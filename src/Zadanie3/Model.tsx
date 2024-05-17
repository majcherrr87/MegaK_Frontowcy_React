import { ReactNode } from 'react'

type Props = {
	title: string
	text: string
	controls: ReactNode
}

export const Model = ({ text, title, controls }: Props) => (
	<div
		style={{
			borderRadius: 5,
			border: '1px solid #eee',
			maxWidth: 400,
			margin: '25px auto',
		}}
	>
		<header
			style={{
				padding: 20,
				borderBottom: '1px solid #f0f0f0',
			}}
		>
			<h2>{title}</h2>
		</header>
		<section
			style={{
				padding: 20,
			}}
		>
			{text}
		</section>
		<footer
			style={{
				padding: 20,
				borderBottom: '1px solid #f0f0f0',
			}}
		>
			{controls}
		</footer>
	</div>
)
