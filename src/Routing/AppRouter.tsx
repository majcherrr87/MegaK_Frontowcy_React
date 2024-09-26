// import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
// import { MainLayout } from './MainLayout'
// import { Account } from './Account'
// import { About } from './About'

import {
	createBrowserRouter,
	createRoutesFromElements,
	Navigate,
	Route,
	RouterProvider,
} from 'react-router-dom'
import { MainLayout } from './MainLayout'
import { Account } from './Account'

import { aboutLoader } from './loaders/about'
// import { About } from './About'

// export const AppRouter = () => {
// 	return (
// 		<BrowserRouter>
// 			<Routes>
// 				<Route element={<MainLayout />}>
// 					<Route
// 						path="account"
// 						element={<Account />}
// 						loader={() => {
// 							console.log('render')
// 							return 'lorem iplum'
// 						}}
// 					/>
// 					<Route path="about" element={<About />} />
// 					<Route path="*" element={<Navigate to="account" />} />
// 				</Route>
// 			</Routes>
// 		</BrowserRouter>
// 	)
// }

// const router = createBrowserRouter([
// 	{
// 		element: <MainLayout />,
// 		children: [
// 			{
// 				path: 'account',
// 				element: <Account />,
// 				loader: () => {
// 					console.log('render')
// 					return 'lorem ipsum'
// 				},
// 			},
// 			{
// 				path: 'about',
// 				element: <About />,
// 			},
// 			{
// 				path: '*',
// 				element: <Navigate to="account" />,
// 			},
// 		],
// 	},
// ])

// export const AppRouter = () => {
// 	return <RouterProvider router={router} />
// }

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route element={<MainLayout />}>
			<Route
				path="account"
				element={<Account />}
				loader={() => {
					console.log('render Account')
					return 'lorem iplum'
				}}
			/>
			<Route
				path="about"
				loader={aboutLoader}
				lazy={() => import('./routes/About')}
			/>
			<Route path="*" element={<Navigate to="account" />} />
		</Route>,
	),
)

export const AppRouter = () => {
	return <RouterProvider router={router} />
}
