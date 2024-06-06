import { FormEvent, useState } from 'react'
import { useForm } from '../Hooks/useForm'
import { Field } from './Field'
import { Checkbox } from './Checkbox'

type FormValues = {
	login: string
	password: string
	accepted: boolean
}
type FormErrors = {
	[key in keyof FormValues]: string[]
}

export const Zadanie1 = () => {
	const [form, handleChange] = useForm<FormValues>({
		login: '',
		password: '',
		accepted: false,
	})
	const [errors, setErrors] = useState<FormErrors>({
		login: [],
		password: [],
		accepted: [],
	})
	const [success, setSuccess] = useState(false)

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault()
		let isSuccess = true

		const newErrors: FormErrors = {
			login: [],
			password: [],
			accepted: [],
		}
		if (!login) {
			newErrors.login.push('Login jest wymagany')
			isSuccess = false
		}
		if (login.length < 3) {
			newErrors.login.push('Login jest wymagany')
			isSuccess = false
		}

		if (!password) {
			newErrors.password.push('Hasło jest wymagane')
			isSuccess = false
		}
		if (password.length < 3) {
			newErrors.password.push('Hasło musi zawierać minimum 3 znaki')
			isSuccess = false
		}

		const regex = new RegExp(/(?=.*[a-z])(?=.*[A-Z])(?=.*\W)/g)
		if (!regex.test(password)) {
			newErrors.password.push(
				'Hasło musi zawierać małą literę, wielką literę oraz znak spacjalny',
			)
			isSuccess = false
		}

		if (!accepted) {
			newErrors.accepted.push('Akceptacja regulaminu jest wymagana')
			isSuccess = false
		}

		setErrors(newErrors)
		setSuccess(isSuccess)
	}

	const { login, password, accepted } = form
	return (
		<>
			{success && <p>dziękujemy zostałeś zarejestowany poprawnie </p>}
			<form onSubmit={handleSubmit}>
				<Field
					name="login"
					label="Login"
					value={login}
					onChange={handleChange}
					errors={errors.login}
					type="text"
				/>
				<Field
					name="password"
					label="Password"
					value={password}
					onChange={handleChange}
					errors={errors.password}
					type="password"
				/>
				<Checkbox
					name="accepted"
					label="I accept the rules"
					checked={accepted}
					onChange={handleChange}
					errors={errors.accepted}
				/>

				<button type="submit">Submit</button>
			</form>
		</>
	)
}
