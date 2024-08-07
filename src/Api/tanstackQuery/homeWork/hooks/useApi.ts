// const API_URL = import.meta.env.VITE_API_URL
const API_URL = 'http://localhost:3000/'

export const useApi = () => {
	const call = async <R, P = object>(
		url: string,
		method: 'GET' | 'DELETE' | 'POST' | 'PUT',
		payload?: P,
	): Promise<R> => {
		const fetchConfig = {
			method,
			Headers: {
				'Content-Type': 'application/json',
			},
			body: payload ? JSON.stringify(payload) : undefined,
		}

		try {
			const response = await fetch(`${API_URL}${url}`, fetchConfig)
			if (response.ok) {
				const data: R = await response.json()
				return data
			} else {
				const apiError: string = await response.text()
				throw new Error(apiError)
			}
		} catch (e) {
			throw new Error('Wystąpił bład')
		}
	}
	const apiGet = async <R>(url: string) => {
		return await call<R>(url, 'GET')
	}
	const apiPost = async <R, P>(url: string, payload: P) => {
		return await call<R, P>(url, 'POST', payload)
	}
	const apiPut = async <R, P>(url: string, payload: P) => {
		return await call<R, P>(url, 'PUT', payload)
	}
	const apiDelete = async <R>(url: string) => {
		return await call<R>(url, 'DELETE')
	}

	return { apiGet, apiPost, apiPut, apiDelete }
}
