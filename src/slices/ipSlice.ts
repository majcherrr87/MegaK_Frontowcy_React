import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export type IpState = {
	value: string
	loading: boolean
	error: string
}

const initialState: IpState = {
	value: '',
	loading: false,
	error: '',
}

export const fetchIpAdress = createAsyncThunk<
	{ ip: string },
	void,
	{ rejectValue: string }
>('ip/fetchIpAdress', async (_, { rejectWithValue }) => {
	try {
		const response = await fetch('https://api.ipify.org?format=json')
		return await response.json()
	} catch (e) {
		// throw e
		return rejectWithValue('Wystąpił specjalny błąd')
	}
})

export const ipSlice = createSlice({
	name: 'ip',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(fetchIpAdress.pending, (state) => {
			state.loading = true
			state.error = ''
			state.value = ''
		})
		builder.addCase(fetchIpAdress.fulfilled, (state, action) => {
			state.loading = false
			state.value = action.payload.ip
		})
		builder.addCase(fetchIpAdress.rejected, (state, action) => {
			state.loading = false
			if (action.payload) {
				state.error = action.payload
			} else {
				state.error = 'Wystąpił ogólny błąd'
			}
		})
	},
})
export const IpReducer = ipSlice.reducer
