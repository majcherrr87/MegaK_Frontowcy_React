import { ChangeEvent, FormEvent, useState } from 'react'

type FormData = {
	login: { value: string }
}

export const Form1 = () => {
	const [login, setLogin] = useState('')
	const [age, setAge] = useState('')
	const [bio, setBio] = useState('')
	const [gender, setGender] = useState('f')
	const [agreement, setAgreement] = useState(false)
	const [contact, setcontact] = useState('')

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		const { login: _login } = e.target as typeof e.target & FormData
		console.log(_login.value)

		console.log(`Login: ${login}`)
		console.log(`Age: ${age}`)
		console.log(`Bio: ${bio}`)
		console.log(`Gender: ${gender}`)
		console.log(`Agreement: ${agreement}`)
		console.log(`Contact: ${contact}`)
	}

	const handleLoginChange = (e: ChangeEvent<HTMLInputElement>) => {
		setLogin(e.target.value)
	}
	const handleAgeChange = (e: ChangeEvent<HTMLInputElement>) => {
		setAge(e.target.value)
	}
	const handleBioChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
		setBio(e.target.value)
	}
	const handleGenderChange = (e: ChangeEvent<HTMLSelectElement>) => {
		setGender(e.target.value)
	}
	const handleAgeementChange = (e: ChangeEvent<HTMLInputElement>) => {
		setAgreement(e.target.checked)
	}
	const handleContactChange = (e: ChangeEvent<HTMLInputElement>) => {
		setcontact(e.target.value)
	}
	return (
		<form onSubmit={handleSubmit}>
			<div>
				<input
					type="text"
					name="login"
					onChange={handleLoginChange}
					value={login}
				/>
				{!login && <p>Nie podałeś jeszcze loginu</p>}
				{login.length < 3 && <p>Login musi posiadać przynajmniej 3 znaki</p>}
			</div>
			<div>
				<input
					type="number"
					name="age"
					onChange={handleAgeChange}
					value={age}
				/>
			</div>
			<div>
				<textarea name="bio" value={bio} onChange={handleBioChange} />
			</div>
			<div>
				<select value={gender} onChange={handleGenderChange}>
					<option value="f">Kobieta</option>
					<option value="m">Mężczyzna</option>
					<option value="o">Inna</option>
				</select>
			</div>
			<div>
				<input
					type="checkbox"
					checked={agreement}
					onChange={handleAgeementChange}
				/>
				Agreement
			</div>
			<div>
				<div>
					<input
						type="radio"
						name="contact"
						value="email"
						checked={contact === 'email'}
						onChange={handleContactChange}
					/>
					Contact by e-mail
				</div>
				<div>
					<input
						type="radio"
						name="contact"
						value="sms"
						checked={contact === 'sms'}
						onChange={handleContactChange}
					/>
					Contact by SMS
				</div>
				<div>
					<input
						type="radio"
						name="contact"
						value="none"
						checked={contact === 'none'}
						onChange={handleContactChange}
					/>
					No contact
				</div>
			</div>
			<button type="submit">Save</button>
		</form>
	)
}
