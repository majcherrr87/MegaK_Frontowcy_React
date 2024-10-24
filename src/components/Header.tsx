import { useConfigContext } from '../context/useConfigContext'

export const Header = () => {
	const {
		colors: { primary, secondary },
	} = useConfigContext()
	return (
		<header
			style={{
				padding: 24,
				backgroundColor: primary,
				color: secondary,
			}}
		>
			Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi possimus
			veniam, obcaecati vel cupiditate nihil iure reprehenderit praesentium
			perspiciatis temporibus, voluptatibus repudiandae quis fugiat quos tempora
			commodi officia cum. Temporibus.
		</header>
	)
}
