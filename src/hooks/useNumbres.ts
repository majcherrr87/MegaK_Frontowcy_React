import { useState } from 'react'

type ReturnType = {
	numbers: number[]
	addNumber: () => void
	deleteNumber: (index: number) => void
}

export const useNumbres = (): ReturnType => {
	const [numbers, setNumbers] = useState<number[]>([])

	const addNumber = () => {
		setNumbers((prev) => [...prev, Math.round(Math.random() * 9)])
	}
	const deleteNumber = (index: number) => {
		setNumbers((prev) => prev.filter((_num, i) => i !== index))
	}

	return { numbers, addNumber, deleteNumber }
}
