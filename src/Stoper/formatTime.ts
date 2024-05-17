export const formatTime = (time: number) => {
	const timeSecond = Math.floor(time / 1000)
	const second = timeSecond < 10 ? `0${timeSecond}` : timeSecond

	const timeMiliSecond = time - timeSecond * 1000
	const miliSecond = timeMiliSecond < 100 ? '000' : timeMiliSecond

	return { second, miliSecond }
}
