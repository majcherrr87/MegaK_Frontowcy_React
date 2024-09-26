import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { MainLayout } from './components/MainLayout'
import { Infos } from './components/Infos'
import { infosLoader } from './loaders/infos'
import { AddInfo } from './components/AddInfo'
import { addInfoAction } from './actions/addInfo'
import { ErrorPage } from './components/ErrorPage'
import { infoAction } from './actions/infoAction'
import { EditInfo } from './components/EditInfo'
import { infoLoader } from './loaders/info'
import { ProtectedRoot } from './components/ProtectedRoot'
import { AccessDenied } from './components/AccessDenied'

const router = createBrowserRouter([
	{
		element: <MainLayout />,
		action: addInfoAction,
		children: [
			{
				path: '/',
				element: <Infos />,
				loader: infosLoader,
				action: infoAction,
			},
			{
				path: 'denied',
				element: <AccessDenied />,
			},
			{
				element: <ProtectedRoot redirect="/denied" />,
				children: [
					{
						path: ':id',
						element: <EditInfo />,
						loader: infoLoader,
					},
					{
						path: 'add',
						element: <AddInfo />,
						action: addInfoAction,
					},
				],
			},
		],
		errorElement: <ErrorPage />,
	},
])

export const AppHomeWork = () => {
	return <RouterProvider router={router} />
}
