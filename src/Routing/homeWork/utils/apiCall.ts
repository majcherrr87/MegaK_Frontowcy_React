type ApiConfig<P> = {
	method?: 'GET' | 'POST' | 'DELETE' | 'PUT'
	body?: P
}

export const apiCall = async <R, P>(url: string, options?: ApiConfig<P>) => {
	const baseUrl = 'http://localhost:3000'

	const response = await fetch(`${baseUrl}/${url}`, {
		method: options?.method || 'GET',
		body: options?.body ? JSON.stringify(options.body) : undefined,
	})

	return response.json() as Promise<R>
}
