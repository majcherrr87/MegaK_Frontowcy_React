const arr = [1, 2, 3, 5]

export const Foo2 = () => {
	arr.push(6)
	return (
		<div>
			<ul>
				{arr.map((el) => (
					<li key={el}>{el}</li>
				))}
			</ul>
		</div>
	)
}
