const API_BASE = 'http://localhost:3000/'

export const useApiTodos = () => {
	const call = async <R, P = object>(
		url: string,
		method: 'GET' | 'DELETE' | 'POST',
		body?: P,
	) => {
		const commonData = {
			method,
			headers: { 'Content-Type': 'application/json' },
		}
		const reqData = body
			? { ...commonData, body: JSON.stringify(body) }
			: commonData

		try {
			const respons = await fetch(`${API_BASE}${url}`, reqData)
			if (respons.ok) {
				const data: R = await respons.json()
				return data
			} else {
				const apiError = await respons.text()
				throw new Error(apiError)
			}
		} catch (e) {
			throw new Error('Wystąpił bład')
		}
	}
	const apiGet = async <R>(url: string) => {
		return await call<R>(url, 'GET')
	}
	const apiDelete = async <R>(url: string) => {
		return await call<R>(url, 'DELETE')
	}
	const apiPost = async <R, P>(url: string, data: P) => {
		return await call<R, P>(url, 'POST', data)
	}

	return { apiGet, apiDelete, apiPost }
}
