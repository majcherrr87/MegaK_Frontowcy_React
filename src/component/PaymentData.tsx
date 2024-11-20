import { useFormContext } from 'react-hook-form'
import { Input } from '../ui/Input'
import { OrderData } from '../schemas/order'
import { RadioGroup } from '../ui/RadioGroup'
import { SectionHeader } from '../ui/SectionHeader'
import { Section } from '../ui/Section'
import { FormElements } from '../ui/FormElements'

export const PaymentData = () => {
	const {
		register,
		watch,
		control,
		formState: { errors },
	} = useFormContext<OrderData>()

	const type = watch('payment.type')
	return (
		<Section>
			<SectionHeader>Payment data</SectionHeader>
			<FormElements>
				<RadioGroup
					name="payment.type"
					control={control}
					options={[
						{ value: 'card', label: 'Card' },
						{ value: 'transfer', label: 'Transfer' },
					]}
				/>

				{type === 'card' ? (
					<>
						<RadioGroup
							name="payment.details.card"
							control={control}
							options={[
								{ value: 'visa', label: 'Visa' },
								{ value: 'amex', label: 'AMEX' },
							]}
						/>

						<Input
							type="text"
							label="Card number"
							{...register('payment.details.cardNumber')}
							error={errors.payment?.details?.cardNumber}
						/>
					</>
				) : null}
				{type === 'transfer' ? (
					<Input
						type="text"
						label="IBAN"
						{...register('payment.details.iban')}
						error={errors.payment?.details?.iban}
					/>
				) : null}
			</FormElements>
		</Section>
	)
}
