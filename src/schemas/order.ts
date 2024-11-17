import { number, object, string, InferType, setLocale } from 'yup'

setLocale({
	mixed: {
		required: 'This field is required',
	},
	number: {
		min: ({ min }) => `This value needs to bo min. ${min}`,
	},
	string: {
		min: ({ min }) => `Minimum length is ${min} characters`,
	},
})

const requiredString = (msg?: string) => string().required(msg)

export const orderSchema = object({
	basic: object({
		name: requiredString('Name is required').min(3),
		lastname: requiredString().min(3),
		age: number()
			.required()
			.transform((val) => val || 0)
			.min(18),
	}),
	payment: object({
		type: requiredString().oneOf(['card', 'transfer']),
		details: object({
			card: string(),
			cardNumber: string(),
			iban: string(),
		}).when('type', {
			is: 'card',
			then: (schema) =>
				schema.shape({
					card: requiredString().oneOf(['visa', 'amex']),
					cardNumber: requiredString().when('card', {
						is: 'visa',
						then: (schema) => schema.matches(/^4/).length(16),
						otherwise: (schema) => schema.matches(/^5/).length(15),
					}),
				}),
			otherwise: (schema) =>
				schema.shape({
					iban: requiredString().matches(/^PL/).length(34),
				}),
		}),
	}),
})

export type OrderData = InferType<typeof orderSchema>
