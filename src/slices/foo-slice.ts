export type FooSlice = {
	a: number
	setA: (newNumber: number) => void
}

export const fooSlice = (
	set: (param: FooSlice | Partial<FooSlice>) => void,
) => ({
	a: 0,
	setA: (newValue: number) =>
		set({
			a: newValue,
		}),
})
