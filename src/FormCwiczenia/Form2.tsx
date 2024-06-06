import { FormEvent } from 'react'
import { useForm } from '../hooks/useForm'

type FormValues = {
	login: string
	password: string
	age: string
	bio: string
	gender: string
	agreement: boolean
	contact: string
}

export const Form2 = () => {
	const [formState, handleChange] = useForm<FormValues>({
		login: '',
		password: '',
		age: '',
		bio: '',
		gender: 'f',
		agreement: false,
		contact: '',
	})

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		const { login, age, bio, gender, agreement, contact, password } = formState
		console.log(`Login: ${login}`)
		console.log(`password: ${password}`)
		console.log(`Age: ${age}`)
		console.log(`Bio: ${bio}`)
		console.log(`Gender: ${gender}`)
		console.log(`Agreement: ${agreement}`)
		console.log(`Contact: ${contact}`)
		console.table(formState)
	}

	return (
		<form onSubmit={handleSubmit}>
			<div>
				<input
					type="text"
					name="login"
					onChange={handleChange}
					value={formState.login}
				/>
				{!formState.login && <p>Nie podałeś jeszcze loginu</p>}
				{formState.login.length < 3 && (
					<p>Login musi posiadać przynajmniej 3 znaki</p>
				)}
			</div>
			<div>
				<input
					type="password"
					name="password"
					onChange={handleChange}
					value={formState.password}
				/>
			</div>
			<div>
				<input
					type="number"
					name="age"
					onChange={handleChange}
					value={formState.age}
				/>
			</div>
			<div>
				<textarea name="bio" value={formState.bio} onChange={handleChange} />
			</div>
			<div>
				<select name="gender" value={formState.gender} onChange={handleChange}>
					<option value="f">Kobieta</option>
					<option value="m">Mężczyzna</option>
					<option value="o">Inna</option>
				</select>
			</div>
			<div>
				<input
					type="checkbox"
					name="agreement"
					checked={formState.agreement}
					onChange={handleChange}
				/>
				Agreement
			</div>
			<div>
				<div>
					<input
						type="radio"
						name="contact"
						value="email"
						checked={formState.contact === 'email'}
						onChange={handleChange}
					/>
					Contact by e-mail
				</div>
				<div>
					<input
						type="radio"
						name="contact"
						value="sms"
						checked={formState.contact === 'sms'}
						onChange={handleChange}
					/>
					Contact by SMS
				</div>
				<div>
					<input
						type="radio"
						name="contact"
						value="none"
						checked={formState.contact === 'none'}
						onChange={handleChange}
					/>
					No contact
				</div>
			</div>
			<button type="submit">Save</button>
		</form>
	)
}
