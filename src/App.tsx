import { Bouncy } from './Stylowanie/HomeWork/Bouncy'

export const App = () => {
	//HomeWork
	return (
		<>
			<Bouncy />
		</>
	)

	//Exercise 1
	// const [isLight, setIsLight] = useState(true)
	// const light = {
	// 	colors: {
	// 		primary: '#333EE',
	// 		background: '#fff',
	// 		textPrimary: '#eee',
	// 		textBackground: '#333',
	// 	},
	// }
	// const dark = {
	// 	colors: {
	// 		primary: '#9ca5df',
	// 		background: '#222',
	// 		textPrimary: '#333',
	// 		textBackground: '#eee',
	// 	},
	// }

	// const toggleTheme = () => {
	// 	setIsLight((prev) => !prev)
	// }

	// return (
	// 	<ThemeProvider theme={isLight ? light : dark}>
	// 		<GlobalStyle />

	// 		<Button label="Lorem ipsum" onClick={toggleTheme} />
	// 		<Text>dolor sit amet</Text>
	// 	</ThemeProvider>
	// )

	//Exercise 2
	// return (
	// 	<>
	// 		<Foo />
	// 		<Bar />
	// 	</>
	// )
}
