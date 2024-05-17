type UserProps = {
	user?: {
		name?: string
		lastname?: string
		age?: number
	}
}

export const Exercise2 = ({ user }: UserProps) => {
	const getContent = ({ user }: UserProps) => {
		if (!user) return 'Witaj nieznajomy'
		const { name, lastname, age } = user
		if (!name || !lastname) return 'Chyba się znamy a może nie do końca'
		if (!age)
			return `Witaj ${name} ${lastname}, nie wiem czy mogę Cię tutaj wpuścić`
		return `Witaj ${name} ${lastname}, Zapraszam do ${
			age >= 18 ? 'pełnej' : 'ograniczonej'
		} wersji serwisu.`
	}
	return <h1>{getContent({ user })}</h1>
}
