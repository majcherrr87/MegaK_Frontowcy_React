import { useFormContext } from 'react-hook-form'
import { Input } from '../ui/Input'
import { OrderData } from '../schemas/order'
import { SectionHeader } from '../ui/SectionHeader'
import { Section } from '../ui/Section'

export const BasicData = () => {
	const {
		register,
		formState: { errors },
	} = useFormContext<OrderData>()
	return (
		<Section>
			<SectionHeader>Basic data</SectionHeader>
			<Input
				type="text"
				label="Name"
				{...register('basic.name')}
				error={errors.basic?.name}
			/>
			<Input
				type="text"
				label="LastName"
				{...register('basic.lastname')}
				error={errors.basic?.lastname}
			/>
			<Input
				type="number"
				label="Age"
				{...register('basic.age')}
				error={errors.basic?.age}
			/>
		</Section>
	)
}
