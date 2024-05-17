type HelloSomebodyProps = {
	name?: string
}

export const HelloSomebody = ({ name }: HelloSomebodyProps) => {
	return <h1>Hello {name || 'Nieznajomy'}</h1>
}
