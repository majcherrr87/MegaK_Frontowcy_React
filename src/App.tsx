import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import { Hello } from './Routing/Hello'
import { Home } from './Routing/Home'
import { AboutUs } from './Routing/AboutUs'
import { AboutCompany } from './Routing/AboutCompany'
import { About } from './Routing/About'
import { MainLayout } from './Routing/MainLayout'
import { Product } from './Routing/Product'
import { ProductDetails } from './Routing/ProductDetails'
import { DataComponent } from './Routing/DataComponent'
import { ErrorElement } from './Routing/ErrorElement'
import { MyIp } from './Routing/MyIp'
import { GlobalErrorBoundary } from './Routing/GlobalErrorBoundary'

const router = createBrowserRouter([
	{
		element: <MainLayout />,
		errorElement: <GlobalErrorBoundary />,
		children: [
			{
				path: '/',
				element: <Home />,
			},
			{
				path: '/hello',
				element: <Hello />,
			},
			{
				path: '/about',
				element: <About />,
				children: [
					{
						index: true,
						element: <AboutUs />,
					},
					{
						path: 'company',
						element: <AboutCompany />,
					},
					{
						path: '*',
						element: <Navigate to="." />,
					},
				],
			},
			{
				path: '/product',
				element: <Product />,
			},
			{
				path: '/product/details',
				element: <ProductDetails />,
			},
			{
				path: '/path-with-loader/:id?',
				element: <DataComponent />,
				errorElement: <ErrorElement />,
				loader: async ({ params, request }) => {
					console.log('params', params)
					console.log('request', request)
					return new Promise<string>((resolve) => {
						setTimeout(() => {
							resolve(`lorem ipsum ${params.id}`)
						}, 1000)
					})
				},
			},
			{
				path: '/ip-address/',
				element: <MyIp />,
				errorElement: <ErrorElement />,
				loader: async () => {
					return fetch('https://api.ipify.org?format=json')
				},
			},
			{
				path: '*',
				element: <Navigate to="/hello" />,
			},
		],
	},
])

export const App = () => {
	// return (
	// 	<BrowserRouter>
	// 		<Routes>
	// 			<Route element={<MainLayout />}>
	// 				<Route path="/" element={<Home />} />
	// 				<Route path="/hello" element={<Hello />} />

	// 				<Route element={<ProtectedRoute />}>
	// 					<Route path="/dashboard" element={<Dashboard />} />
	// 				</Route>

	// 				<Route path="/about" element={<About />}>
	// 					<Route index element={<AboutUs />} />
	// 					<Route path="company" element={<AboutCompany />} />
	// 					<Route path="*" element={<Navigate to="." />} />
	// 				</Route>

	// 				<Route path="/product" element={<Product />} />
	// 				<Route path="/product/details" element={<ProductDetails />} />
	// 				<Route
	// 					path="/product/:productId/:addtionnalParam?"
	// 					element={<DynamicProduct />}
	// 				/>
	// 				<Route path="/foo/bar?" element={<FooBar />} />
	// 				<Route path="/:lang?/content" element={<Content />} />

	// 				<Route path="payment" element={<Payment />} />
	// 			</Route>
	// 			<Route path="*" element={<Navigate to="/hello" />} />
	// 		</Routes>
	// 	</BrowserRouter>
	// )
	return <RouterProvider router={router} />
}
