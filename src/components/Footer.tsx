import { useConfigContext } from '../context/useConfigContext'

export const Footer = () => {
	const {
		colors: { primary, secondary },
	} = useConfigContext()
	return (
		<footer
			style={{
				padding: 24,
				backgroundColor: secondary,
				color: primary,
			}}
		>
			Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi possimus
			veniam, obcaecati vel cupiditate nihil iure reprehenderit praesentium
			perspiciatis temporibus, voluptatibus repudiandae quis fugiat quos tempora
			commodi officia cum. Temporibus.
		</footer>
	)
}
