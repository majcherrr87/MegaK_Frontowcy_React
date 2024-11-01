import { create } from 'zustand'

type FooStore = {
	value: number
	otherValue: number
	result: number
	setValue: (newValue: number) => void
	increaseOtherValue: () => void
	calculateResult: (param: number) => void
}

export const useFooStore = create<FooStore>((set, get) => ({
	value: 0,
	otherValue: 0,
	result: 0,
	setValue: (newValue: number) =>
		set({
			value: newValue,
		}),
	increaseOtherValue: () =>
		set((state) => ({
			otherValue: state.otherValue + 1,
		})),
	calculateResult: (param) => {
		const { value, otherValue } = get()
		const result =
			param > 50
				? (value * param * otherValue) / Math.sqrt(param)
				: (value / param) * 25
		set({
			result,
		})
	},
}))
