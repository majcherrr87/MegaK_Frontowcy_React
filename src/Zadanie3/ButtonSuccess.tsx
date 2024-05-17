type Props = {
	title: string
}

export const ButtonSuccess = ({ title }: Props) => (
	<button style={{ backgroundColor: 'green' }}>{title}</button>
)
