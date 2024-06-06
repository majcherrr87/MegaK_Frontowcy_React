import { ChangeEvent, useState } from 'react'

type FormChangeEvent = ChangeEvent<
	HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
>

type UseFormRetrun<T> = [T, (e: FormChangeEvent) => void]

const isCheckboxElement = (
	target: FormChangeEvent['target'],
): target is HTMLInputElement => {
	return target.type === 'checkbox' && target instanceof HTMLInputElement
}

export const useForm = <T>(initialValue: T): UseFormRetrun<T> => {
	const [formState, setFormState] = useState<T>(initialValue)

	const getValue = (target: FormChangeEvent['target']) => {
		if (isCheckboxElement(target)) {
			return target.checked
		}
		return target.value
	}

	const handleChange = (e: FormChangeEvent) => {
		setFormState((prevState) => ({
			...prevState,
			[e.target.name]: getValue(e.target),
		}))
	}
	return [formState, handleChange]
}
