import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { Hello } from './Routing/Hello'
import { Home } from './Routing/Home'
import { AboutUs } from './Routing/AboutUs'
import { AboutCompany } from './Routing/AboutCompany'
import { About } from './Routing/About'
import { MainLayout } from './Routing/MainLayout'
import { Product } from './Routing/Product'
import { ProductDetails } from './Routing/ProductDetails'

// const router = createBrowserRouter([
// 	{
// 		element: <MainLayout />,
// 		children: [
// 			{
// 				path: '/',
// 				element: <Home />,
// 			},
// 			{
// 				path: '/hello',
// 				element: <Hello />,
// 			},
// 			{
// 				path: '/about',
// 				element: <About />,
// 				children: [
// 					{
// 						index: true,
// 						element: <AboutUs />,
// 					},
// 					{
// 						path: 'company',
// 						element: <AboutCompany />,
// 					},
// 					{
// 						path: '*',
// 						element: <Navigate to="." />,
// 					},
// 				],
// 			},
// 			{
// 				path: '/product',
// 				element: <Product />,
// 			},
// 			{
// 				path: '/product/details',
// 				element: <ProductDetails />,
// 			},
// 			{
// 				path: '*',
// 				element: <Navigate to="/hello" />,
// 			},
// 		],
// 	},
// ])

export const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<MainLayout />}>
					<Route path="/" element={<Home />} />
					<Route path="/hello" element={<Hello />} />

					<Route path="/about" element={<About />}>
						<Route index element={<AboutUs />} />
						<Route path="company" element={<AboutCompany />} />
						<Route path="*" element={<Navigate to="." />} />
					</Route>

					<Route path="/product" element={<Product />} />
					<Route path="/product/details" element={<ProductDetails />} />
					<Route path="*" element={<Navigate to="/hello" />} />
				</Route>
			</Routes>
		</BrowserRouter>
	)
	// return <RouterProvider router={router} />
}
