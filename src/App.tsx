import { FormProvider, useForm } from 'react-hook-form'
import { OrderData, orderSchema } from './schemas/order'
import { yupResolver } from '@hookform/resolvers/yup'
import { BasicData } from './component/BasicData'
import { PaymentData } from './component/PaymentData'

export const App = () => {
	const methods = useForm<OrderData>({
		resolver: yupResolver(orderSchema),
	})

	const {
		handleSubmit,
		formState: { errors },
	} = methods

	console.log(errors)

	const onSubmit = (data: OrderData) => {
		console.log('data', data)
	}

	return (
		<>
			<h1>Place your order</h1>
			<FormProvider {...methods}>
				<form onSubmit={handleSubmit(onSubmit)}>
					<BasicData />
					<PaymentData />
					<button type="submit">Place order</button>
				</form>
			</FormProvider>
		</>
	)
}
