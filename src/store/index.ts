import { configureStore } from '@reduxjs/toolkit'
import { todosApiSlice } from '../slices/todosApiSlice'

export const store = configureStore({
	reducer: {
		[todosApiSlice.reducerPath]: todosApiSlice.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(todosApiSlice.middleware),
})
export type AppDispatch = typeof store.dispatch
