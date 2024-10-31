import { configureStore } from '@reduxjs/toolkit'
import { ipApiSlice } from '../slices/ipSlice'

export const store = configureStore({
	reducer: {
		[ipApiSlice.reducerPath]: ipApiSlice.reducer,
	},
	middleware: (getDefaultMiddleware) => {
		return getDefaultMiddleware().concat(ipApiSlice.middleware)
	},
})
export type AppDispatch = typeof store.dispatch
