export const Bar = () => {
	'use memo'
	const data = new Date()
	return <div>I am just a simple Component {data.getTime()}</div>
}
