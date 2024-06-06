import { useState } from 'react'
import { FormChangeEvent } from '../homeWork/types'

type UseFormRetrun<T> = [T, (e: FormChangeEvent) => void]

const isCheckboxElement = (
	target: FormChangeEvent['target'],
): target is HTMLInputElement => {
	return target.type === 'checkbox' && target instanceof HTMLInputElement
}

export const useForm = <T>(initialValue: T): UseFormRetrun<T> => {
	const [formState, setFormState] = useState<T>(initialValue)

	const getValue = (target: FormChangeEvent['target']) => {
		if (isCheckboxElement(target)) return target.checked

		if (target.type === 'number') return Number(target.value)

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
