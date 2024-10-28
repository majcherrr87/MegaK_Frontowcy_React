import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type ProductsState = {
	list: string[]
	count: number
}
const initialState: ProductsState = {
	list: [],
	count: 0,
}

export const productsSlice = createSlice({
	name: 'products',
	initialState,
	reducers: {
		addProduct: (state, action: PayloadAction<string>) => {
			state.list.push(action.payload)
			state.count++
		},
	},
})
export const { addProduct } = productsSlice.actions
export const productsReducer = productsSlice.reducer
