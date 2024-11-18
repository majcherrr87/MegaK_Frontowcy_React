import { FormProvider, useForm } from 'react-hook-form'
import { OrderData, orderSchema } from './schemas/order'
import { yupResolver } from '@hookform/resolvers/yup'
import { BasicData } from './component/BasicData'
import { PaymentData } from './component/PaymentData'
import { Button } from './ui/Button'
import { PageHeader } from './ui/PageHeader'
import { Container } from './ui/Container'
import { Wrapper } from './ui/Wrapper'

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
		<Container>
			<PageHeader>Place your order</PageHeader>
			<FormProvider {...methods}>
				<form onSubmit={handleSubmit(onSubmit)}>
					<Wrapper>
						<BasicData />
						<PaymentData />
						<Button type="submit">Place order</Button>
					</Wrapper>
				</form>
			</FormProvider>
		</Container>
	)
}
