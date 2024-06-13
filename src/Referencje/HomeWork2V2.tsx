import { FormEvent, MutableRefObject } from 'react'

type Props = {
	formRef: MutableRefObject<HTMLFormElement | null>
}

export const HomeWork2V2 = ({ formRef }: Props) => {
	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		console.log(`form is baing sent`)
	}

	return (
		<form onSubmit={handleSubmit} ref={formRef}>
			<input type="text" name="login" />
			<input type="password" name="password" />
		</form>
	)
}
