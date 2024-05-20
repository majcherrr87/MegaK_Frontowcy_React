import { useEffect } from 'react'

export const useConsoleLog = () => {
	useEffect(() => {
		console.log('Hello World')
	}, [])
}
