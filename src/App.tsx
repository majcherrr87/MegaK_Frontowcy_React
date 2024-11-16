import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { InferType, object, string } from 'yup'

const loginSchema = object({
	login: string().required().min(3),
	password: string().required().min(3),
})

type LoginData = InferType<typeof loginSchema>

export const App = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<LoginData>({
		resolver: yupResolver(loginSchema),
	})

	const onSubmit = (data: LoginData) => {
		console.log(data)
	}

	console.log(errors)

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<input type="text" {...register('login')} />
			<input type="password" {...register('password')} />
			<button type="submit">Log in</button>
		</form>
	)
}
