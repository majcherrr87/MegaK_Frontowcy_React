import { useState } from 'react'

type UseCustomLoggerReturn = [number, (what: string) => void]

export const useCostomLogger = (prefix: string): UseCustomLoggerReturn => {
	const [logCounter, setLogCounter] = useState<number>(0)

	const log = (what: string) => {
		console.log(` ${prefix} - ${what}`)
		setLogCounter((prev) => prev + 1)
	}
	return [logCounter, log]
}
