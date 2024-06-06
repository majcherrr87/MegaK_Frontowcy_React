import { useEffect, useState } from 'react'
import { useForm } from './Hooks/useForm'

type FormValue = {
	wheels: number
	cabrio: boolean
	twinExhaust: boolean
	electricWindows: boolean
	paint: 'mat' | 'metallic' | 'pearl' | ''
}

const getCost = ({
	wheels,
	cabrio,
	electricWindows,
	twinExhaust,
	paint,
}: FormValue) => {
	let amount = 0

	amount += wheels * 150
	amount += cabrio ? 1500 : 0
	amount += twinExhaust ? 3000 : 0
	amount += electricWindows ? 0 : 5000

	switch (paint) {
		case 'metallic': {
			amount += 100
			break
		}
		case 'pearl': {
			amount += 10000
			break
		}
		case 'mat': {
			amount += 1000
			break
		}
		default:
			break
	}
	return amount
}

export const Exercise2 = () => {
	const [cost, setCost] = useState(0)
	const [form, handleChange] = useForm<FormValue>({
		wheels: 4,
		cabrio: false,
		twinExhaust: false,
		electricWindows: true,
		paint: '',
	})

	useEffect(() => {
		setCost(getCost(form))
	}, [form])

	return (
		<>
			<p>Sumaryczny koszt: {cost}</p>
			<form>
				<div>
					<label htmlFor="wheels">Ilość kół </label>
					<input
						type="number"
						id="wheels"
						name="wheels"
						value={form.wheels}
						onChange={handleChange}
					/>
				</div>
				<div>
					<label htmlFor="cabrio">Otwarty dach </label>
					<input
						type="checkbox"
						id="cabrio"
						name="cabrio"
						checked={form.cabrio}
						onChange={handleChange}
					/>
				</div>
				<div>
					<label htmlFor="twinExhaust">Podwjny wydech</label>
					<input
						type="checkbox"
						id="twinExhaust"
						name="twinExhaust"
						checked={form.twinExhaust}
						onChange={handleChange}
					/>
				</div>
				<div>
					<label htmlFor="electricWindows">Elektyczne szyby</label>
					<input
						type="checkbox"
						id="electricWindows"
						name="electricWindows"
						checked={form.electricWindows}
						onChange={handleChange}
					/>
				</div>
				<div>
					<label htmlFor="paint">Rodziaj lakieru</label>
					<select
						id="paint"
						name="paint"
						value={form.paint}
						onChange={handleChange}
					>
						{!form.paint && <option value="">Wybierz lakier</option>}
						<option value="pearl">Perłowy</option>
						<option value="metallic">Metalik</option>
						<option value="mat">Matowy</option>
					</select>
				</div>
			</form>
		</>
	)
}
