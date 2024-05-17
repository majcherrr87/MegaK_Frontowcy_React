type SingleElement = {
	id: string
	title: string
}

export const Exercise3 = () => {
	const elements: SingleElement[] = [
		{ id: '11111', title: 'Lorem Ipsum 1' },
		{ id: '22222', title: 'Lorem Ipsum 2' },
		{ id: '33333', title: 'Lorem Ipsum 3' },
		{ id: '44444', title: 'Lorem Ipsum 4' },
		{ id: '55555', title: 'Lorem Ipsum 5' },
	]
	const handleClick = (id: string) => {
		console.log(`Kliknięto przycisk o id ${id}`)
	}

	return (
		<ul>
			{elements.map(({ id, title }) => (
				<li key={id}>
					{title}
					<button onClick={() => handleClick(id)}> Click</button>
				</li>
			))}
		</ul>
	)
}
