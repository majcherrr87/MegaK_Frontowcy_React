type Props = {
	title: string
}

export const ButtonDander = ({ title }: Props) => (
	<button style={{ backgroundColor: 'red' }}>{title}</button>
)
