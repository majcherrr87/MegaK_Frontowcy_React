import { useForm } from 'react-hook-form'
import { HomeWork } from './component/HomeWork'

type FormData = {
	login: string
	password: string
	agreement: boolean
	interested: 'yes' | 'no'
	marketting: 'no' | 'email' | 'phone'
	bio: string
	age: number
}

export const App = () => {
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm<FormData>({
		defaultValues: {
			age: 18,
			interested: 'no',
			marketting: 'email',
			agreement: true,
		},
	})

	const onSubmit = (data: FormData) => {
		console.log(data)
	}

	const afreementValue = watch('agreement')

	return (
		<>
			<form onSubmit={handleSubmit(onSubmit)}>
				<input {...register('login', { required: true, minLength: 3 })} />
				{errors.login && errors.login.type === 'required' ? (
					<p>This field is required</p>
				) : null}
				{errors.login && errors.login.type === 'minLength' ? (
					<p>Min. 3 characters required</p>
				) : null}
				<input type="password" {...register('password')} />
				<input type="number" {...register('age', { valueAsNumber: true })} />
				<textarea {...register('bio')} />
				<select {...register('interested')}>
					<option value="yes">Yes</option>
					<option value="no">No</option>
				</select>
				<div>
					<label>
						<input type="radio" value="no" {...register('marketting')} />
						No
					</label>
					<label>
						<input type="radio" value="emial" {...register('marketting')} />
						Emial
					</label>
					<label>
						<input type="radio" value="Phone" {...register('marketting')} />
						Phone
					</label>
				</div>
				<input type="checkbox" {...register('agreement')} />

				<button type="submit">Log in</button>
				{!afreementValue ? (
					<p>You need to read this file first: www.example.com/terms</p>
				) : null}
			</form>
			<HomeWork />
		</>
	)
}
