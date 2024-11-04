export type BarSlice = {
	b: number
	setB: (newNumber: number) => void
}

export const barSlice = (
	set: (param: BarSlice | Partial<BarSlice>) => void,
) => ({
	b: 0,
	setB: (newValue: number) =>
		set({
			b: newValue,
		}),
})
