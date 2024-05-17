import { useState } from 'react'

type InitialAdress = {
	country: string
	city: string
	street: string
}

export const Adress = () => {
	const initialAdress: InitialAdress = {
		country: 'Polska',
		city: 'Warszawa',
		street: 'Kłobucka',
	}
	const citys: string[] = [
		'Kraków',
		'Hrubieszów',
		'Gdańsk',
		'Sopot',
		'Zakopane',
	]
	const [adress, setAdress] = useState<InitialAdress>(initialAdress)

	const changeCity = () => {
		const randomIndexCity = Math.round(Math.random() * (citys.length - 1))
		setAdress((prevAdress) => ({
			...prevAdress,
			city: citys[randomIndexCity],
		}))
	}
	const { country, city, street } = adress

	return (
		<>
			<button onClick={changeCity}>Zmień miasto</button>
			<h1>
				{country}, {city}, {street}
			</h1>
		</>
	)
}
